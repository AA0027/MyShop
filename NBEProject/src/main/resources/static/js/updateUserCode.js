let i = 0;
let dataArr = [];
let deletedArr = [];
var popup = null;
$(document).ready(function (){
    $('[id*="addressUpdate"]').each(function (index, element){
        $(element).click(activate);
    });
});
$(function (){
    // [추가] 버튼 누르면 첨부 파일 추가 가능
    $("#addAddress").click(function (){

        if(i < 3)
        {
            if(popup === null || popup.closed)
                popup = window.open("createAddress", "주소 추가", "width=700, height=800, left=100, top=50");

        }
        else
        {
            alert("3개까지 넣을 수 있습니다.");
        }
    });

    $("#submitUpdate").click(function (){
        let $nickName = $("#nickname");
        let $phoneNum = $("#phoneNum");
        let $imageFile = $("#file");

        let phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        let regex = /^[가-힣a-zA-Z]+$/;

        if($nickName.val().trim() === "")
        {
            alert("닉네임을 입력해주십시오.");
            return;
        }

        if(!regex.test($nickName.val().trim()))
        {
            alert("올바르지 않은 형식의 닉네임입니다.");
            return;
        }

        if($phoneNum.val().trim() === "")
        {
            alert("휴대폰 번호를 입력해주십시오.");
            return;
        }
        if(!phoneRegex.test($phoneNum.val().trim()))
        {
            alert("올바르지 않은 형식의 휴대폰 번호입니다.");
            return;
        }
        let isDefault = false;
        for (let dataArrElement of dataArr) {
            if(dataArrElement === undefined)
            {
                console.log("Hello world");
                continue;
            }
            if(dataArrElement["isDefault"] === true)
            {
                console.log(dataArrElement["name"]);
                isDefault = dataArrElement["isDefault"] = true;
            }
            else
                dataArrElement["isDefault"] = false;
        }
        
        if(isDefault === false)
        {
            alert("반드시 배송지 하나는 기본으로 설정하셔야 합니다.");
            return;
        }

        let formData = new FormData();

        formData.append("addresses", JSON.stringify(dataArr));
        formData.append("delAddresses", JSON.stringify(deletedArr));
        formData.append("nickname", $nickName.val().trim());
        formData.append("phone", $phoneNum.val().trim());
        formData.append("file", $imageFile[0].files[0]);

        $.ajax({
            type: 'POST',
            url: '/mypage/update',
            contentType: false,
            processData: false,
            data: formData,
            success: function(response) {
                alert('정상적으로 저장이 되었습니다.');
            },
            error: function(xhr, status, error) {
                alert('에러가 발생했습니다.');
            }
        });
    });
});

function activate(){
    let elementIndex = $(this).attr("id").match(/\d+/);
    var data = dataArr.at(elementIndex);
    var dataToSend = {
        "id": data["id"],
        "name":data["name"],
        "detailAdd": data["detail_addr"],
        "streetAdd": data["street_addr"],
        "isDefault": data["isDefault"]
    };
    if(popup === null || popup.closed)
    {
        popup = window.open("updateAddress", "주소 수정", "width=700, height=800, left=100, top=50");
        popup.onload = function() {
            popup.ReceiveDataFromParent(dataToSend);
        };
    }
}

function updateData(data) {
    try
    {
        if(data["isDefault"] === true)
        {
            for(let z = 0; z < dataArr.length; ++z)
            {
                if(dataArr[z] === undefined)
                    continue;
                dataArr[z]["isDefault"] = false;
            }
        }

        for (const item of dataArr) {
            if(item === undefined)
                continue;
            if(item["id"] === data["id"])
            {
                item["name"] = data["name"];
                item["detail_addr"] = data["detail_addr"];
                item["street_addr"] = data["street_addr"];
                item["isDefault"] = data["isDefault"];
                break;
            }
        }

        if(dataArr.length === 1)
        {
            data["isDefault"] = true;
        }

        let group = $("#addressGroup");

        while (group[0].firstChild){
            group[0].removeChild(group[0].firstChild);
        }

        for (let z = 0; z < dataArr.length; ++z)
        {
            if(dataArr[z] === undefined)
                continue;
            if(dataArr[z]['isDefault'] === true)
            {
                group.append(`
        <tr th:id="address_num${z}">
            <td>
            <div class="col-12 col-sm-12 col-lg-12 p-2 addressTable">
            <b th:id="'basic_add${z}'">${dataArr[z]['name']}</b>
            <b style="color: blue" th:id="'isDefault${z}'">(기본배송지)</b>
            <p style="color: gray; font-size: 10px;" th:id="'street_add${z}'">${dataArr[z]['street_addr']}</p>
            <p style="color: gray; font-size: 10px;" th:id="'detailed_add${z}'">${dataArr[z]['detail_addr']}</p>
            <button type="button" class="input-file-button" id="addressUpdate${z}" style="float: right; width: 100px;"><a id="btnColor">수정</a></button>
            <button type="button" class="btn btn-danger" id="addressDelete${z}" style="width: 50px;" onclick="deleteAddress(this)"><a id="btnColor">X</a></button>
            </div>
            </td>
        </tr>
        `);
            }
            else
            {
                group.append(`
        <tr th:id="address_num${z}">
            <td>
            <div class="col-12 col-sm-12 col-lg-12 p-2 addressTable">
            <b th:id="'basic_add${z}'">${dataArr[z]['name']}</b>
            <p style="color: gray; font-size: 10px;" th:id="'street_add${z}'">${dataArr[z]['street_addr']}</p>
            <p style="color: gray; font-size: 10px;" th:id="'detailed_add${z}'">${dataArr[z]['detail_addr']}</p>
            <button type="button" class="input-file-button" id="addressUpdate${z}" style="float: right; width: 100px;"><a id="btnColor">수정</a></button>
            <button type="button" class="btn btn-danger" id="addressDelete${z}" style="width: 50px;" onclick="deleteAddress(this)"><a id="btnColor">X</a></button>
            </div>
            </td>
        </tr>
        `);
            }
        }
        $('[id*="addressUpdate"]').each(function (index, element){
            $(element).on("click", activate);
        });
    }catch (e)
    {
        alert(e);
    }

}

function receiveData(data) {

    if(data["isDefault"] === true)
    {
        for(let z = 0; z < dataArr.length; ++z)
        {
            dataArr[z]["isDefault"] = false;
        }
    }

    dataArr.push(data);

    if(dataArr.length === 1)
    {
        data["isDefault"] = true;
    }

    let group = $("#addressGroup");

    while (group[0].firstChild){
        group[0].removeChild(group[0].firstChild);
    }

    for (let z = 0; z < dataArr.length; ++z)
    {
        if(dataArr[z]['isDefault'] === true)
        {
            group.append(`
        <tr th:id="address_num${z}">
            <td>
            <div class="col-12 col-sm-12 col-lg-12 p-2 addressTable">
            <b th:id="'basic_add${z}'">${dataArr[z]['name']}</b>
            <b style="color: blue" th:id="'isDefault${z}'">(기본배송지)</b>
            <p style="color: gray; font-size: 10px;" th:id="'street_add${z}'">${dataArr[z]['street_addr']}</p>
            <p style="color: gray; font-size: 10px;" th:id="'detailed_add${z}'">${dataArr[z]['detail_addr']}</p>
            <button type="button" class="input-file-button" id="addressUpdate${z}" style="float: right; width: 100px;"><a id="btnColor">수정</a></button>
            <button type="button" class="btn btn-danger" id="addressDelete${z}" style="width: 50px;" onclick="deleteAddress(this)"><a id="btnColor">X</a></button>
            </div>
            </td>
        </tr>
        `);
        }
        else
        {
            group.append(`
        <tr th:id="address_num${z}">
            <td>
            <div class="col-12 col-sm-12 col-lg-12 p-2 addressTable">
            <b th:id="'basic_add${z}'">${dataArr[z]['name']}</b>
            <p style="color: gray; font-size: 10px;" th:id="'street_add${z}'">${dataArr[z]['street_addr']}</p>
            <p style="color: gray; font-size: 10px;" th:id="'detailed_add${z}'">${dataArr[z]['detail_addr']}</p>
            <button type="button" class="input-file-button" id="addressUpdate${z}" style="float: right; width: 100px;"><a id="btnColor">수정</a></button>
            <button type="button" class="btn btn-danger" id="addressDelete${z}" style="width: 50px;" onclick="deleteAddress(this)"><a id="btnColor">X</a></button>
            </div>
            </td>
        </tr>
        `);
        }

    }
    $('[id*="addressUpdate"]').each(function (index, element){
        $(element).on("click", activate);
    });
    i++;
}

function initialize(data)
{
    let group = $("#addressGroup");

    while (group[0].firstChild){
        group[0].removeChild(group[0].firstChild);
    }
    dataArr.push(data);

    for (let z = 0; z < dataArr.length; ++z)
    {
        if(dataArr[z]['isDefault'] === true)
        {
            group.append(`
        <tr th:id="address_num${z}">
            <td>
            <div class="col-12 col-sm-12 col-lg-12 p-2 addressTable">
            <b th:id="'basic_add${z}'">${dataArr[z]['name']}</b>
            <b style="color: blue" th:id="'isDefault${z}'">(기본배송지)</b>
            <p style="color: gray; font-size: 10px;" th:id="'street_add${z}'">${dataArr[z]['street_addr']}</p>
            <p style="color: gray; font-size: 10px;" th:id="'detailed_add${z}'">${dataArr[z]['detail_addr']}</p>
            <button type="button" class="input-file-button" id="addressUpdate${z}" style="float: right; width: 100px;"><a id="btnColor">수정</a></button>
            <button type="button" class="btn btn-danger" id="addressDelete${z}" style="width: 50px;" onclick="deleteAddress(this)"><a id="btnColor">X</a></button>
            </div>
            </td>
        </tr>
        `);
        }
        else
        {
            group.append(`
        <tr th:id="address_num${z}">
            <td>
            <div class="col-12 col-sm-12 col-lg-12 p-2 addressTable">
            <b th:id="'basic_add${z}'">${dataArr[z]['name']}</b>
            <p style="color: gray; font-size: 10px;" th:id="'street_add${z}'">${dataArr[z]['street_addr']}</p>
            <p style="color: gray; font-size: 10px;" th:id="'detailed_add${z}'">${dataArr[z]['detail_addr']}</p>
            <button type="button" class="input-file-button" id="addressUpdate${z}" style="float: right; width: 100px;"><a id="btnColor">수정</a></button>
            <button type="button" class="btn btn-danger" id="addressDelete${z}" style="width: 50px;" onclick="deleteAddress(this)"><a id="btnColor">X</a></button>
            </div>
            </td>
        </tr>
        `);
        }
    }
    $('[id*="addressUpdate"]').each(function (index, element){
        $(element).on("click", activate);
    });
}

function deleteAddress(curr)
{
    let index = $(curr).attr("id").match(/\d+/);
    var item = dataArr[index];
    if(item != null)
    {
        deletedArr.push(item);
        delete dataArr[index];
        $(curr).parent().remove();
    }
}

function loadImage(input){
    let file = input.files[0];

    var img = URL.createObjectURL(file);
    if(img === null)
    {
        console.log("Error!");
        return;
    }
    else
    {
        var $dummy = $('#dummyProfile');
        $dummy.remove();

        var $newProfile = $('<img>');

        $newProfile.addClass('ms-4');
        $newProfile.addClass('mt-3');

        $newProfile.addClass('col-lg-4');
        $newProfile.addClass('col-sm-6');
        $newProfile.addClass('col-12');
        $newProfile.attr('id', "dummyProfile");

        $newProfile.attr('src', img);

        $newProfile.css('width', '120px');
        $newProfile.css('height', '120px');
        $newProfile.css('visibility', 'visible');
        $newProfile.css('float','left');
        $newProfile.css('margin-right', '10%');

        var $container = $("#profile");
        $container.append($newProfile);
    }

}