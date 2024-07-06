package com.lec.spring.service;

import com.lec.spring.domain.shop.Address;
import com.lec.spring.domain.shop.Profile;
import com.lec.spring.domain.User;
import com.lec.spring.repository.AddressRepo;
import com.lec.spring.repository.UserRepo;
import com.lec.spring.util.U;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service
public class MyServiceImpl implements MyService {
    @Value("${app.upload.path}")
    private String uploadDir;
    private UserRepo userRepository;
    private AddressRepo addressRepository;


    @Autowired
    public MyServiceImpl(SqlSession sqlSession) {
        userRepository = sqlSession.getMapper(UserRepo.class);
        addressRepository = sqlSession.getMapper(AddressRepo.class);
        System.out.println("MyService() 생성");
    }

    @Override
    public void showMyPage(Model model) {
        User user = U.getLoggedUser();
        user = userRepository.selectById(user.getId());
        model.addAttribute("nickName", user.getName());
        model.addAttribute("currentPic", user.getProfileimage());
    }

    @Override
    public void updateMyPage(Model model) {
        User user = U.getLoggedUser();
        user = userRepository.selectById(user.getId());

        Address address = null;

        List<Address> addresses = addressRepository.selectAll(user.getId());
        List<Address> addressList = new ArrayList<>();
        try
        {
            for (int i = 0; i < addresses.size(); i++) {
                if(addresses.get(i) == null)
                    continue;
                if(addresses.get(i).getIsDefault())
                {
                    address = addresses.get(i);
                    break;
                }
            }
            if(address != null)
            {
                addressList.add(address);
                for (int i = 0; i < addresses.size(); i++) {
                    if(addresses.get(i) == null)
                        continue;
                    else if(addresses.get(i).getId() == address.getId())
                        continue;
                    else
                        addressList.add(addresses.get(i));
                }
            }
        }
        catch (Exception e)
        {
            System.out.println(e.toString());
        }


        model.addAttribute("nickName", user.getName());
        model.addAttribute("phone", user.getPhone());
        model.addAttribute("currentPic", user.getProfileimage());
        model.addAttribute("addresses", (address != null) ? addressList : addresses);
    }
    @Transactional
    @Override
    public int updateProfile(Profile profile, Address[] delAddresses) {
        User user = U.getLoggedUser();
        user = userRepository.selectById(user.getId());
        if(user == null)
            return -1;

        var id = user.getId();

        if(delAddresses != null && delAddresses.length > 0)
        {
            var myAddr = addressRepository.selectAll(id);

            for (var addr : myAddr)
            {
                for(var d_addr : delAddresses)
                {
                    if(addr.getStreet_addr().equals(d_addr.getStreet_addr())
                    && addr.getDetail_addr().equals(d_addr.getDetail_addr())
                    && addr.getName().equals(d_addr.getName())
                    && addr.getIsDefault().equals(d_addr.getIsDefault()))
                    {
                        addressRepository.delete(addr.getId());
                    }
                    else
                        continue;
                }
            }
        }

        for (Address address : profile.getAddresses()) {
            Address exist = addressRepository.selectById(address.getId());
            if(exist != null)
            {
                addressRepository.update(address);
                continue;
            }

            if(address.getIsDefault())
            {
                for(var item : addressRepository.selectAll(id))
                {
                    if(item.getIsDefault())
                    {
                        item.setIsDefault(false);
                        addressRepository.update(item);
                    }
                }
            }

            Address newAddress = Address.builder()
                    .name(address.getName())
                    .street_addr(address.getStreet_addr())
                    .detail_addr(address.getDetail_addr())
                    .user_id(id)
                    .isDefault(address.getIsDefault())
                    .build();
            addressRepository.insert(newAddress);
        }

        var arr = Arrays.stream(profile.getAddresses()).filter(Address::getIsDefault).toArray();
        if(profile.getAddresses().length > 0 && arr.length == 0)
        {
            var first = profile.getAddresses()[0];
            first.setIsDefault(true);
            addressRepository.update(first);
        }

        user.setName(profile.getNickName());
        user.setPhone(profile.getPhone());

        if(profile.getProfileImage() != null)
        {
            String fileName = imageInput(profile.getProfileImage(), id);
            user.setProfileimage((fileName == null || fileName.isEmpty()) ?
                    user.getProfileimage() : fileName);
        }
        else
            user.setProfileimage((user.getProfileimage() != null) ? user.getProfileimage() : null);
        return userRepository.update(user);
    }

    private String imageInput(MultipartFile file, Integer id){
        User user = userRepository.selectById(id);
        if(user == null || file == null)
            return null;
        String fileName = upload(file);
        if(fileName != null && !fileName.isEmpty()){
            return fileName;
        }
        return null;
    }

    private String upload(MultipartFile multipartFile){
        String originalFileName = multipartFile.getOriginalFilename();
        if(originalFileName == null || originalFileName.isEmpty()) return null;
        String sourceName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        String fileName = sourceName;
        File file = new File(uploadDir, fileName);
        int pos = 0;
        if(file.exists()){
            pos = fileName.lastIndexOf(".");
            if(pos > -1){
                String name = fileName.substring(0, pos);
                String ext = fileName.substring(pos + 1);
                fileName = name + "_profile_" + System.currentTimeMillis() + "." + ext;
            }
            else
            {
                fileName = "_" + System.currentTimeMillis();
            }
        }
        else
        {
            pos = fileName.lastIndexOf(".");
            if(pos > -1){
                String name = fileName.substring(0, pos);
                String ext = fileName.substring(pos + 1);
                fileName = name + "_profile_" + "." + ext;
            }
        }
        Path copyOfLocation = Paths.get(new File(uploadDir, fileName).getAbsolutePath());
        System.out.println(copyOfLocation);
        try{
            Files.copy(multipartFile.getInputStream(),
                    copyOfLocation,
                    StandardCopyOption.REPLACE_EXISTING);
        }
        catch (IOException e){
            throw new RuntimeException(e);
        }
        return fileName;
    }
}
