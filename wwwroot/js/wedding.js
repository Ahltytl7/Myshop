
input_us = document.getElementById("us");
genderSelect = document.getElementById("gender");
span_inf = document.getElementById("inf"); // Đã thêm dòng này để lấy phần tử có id "inf"
errorMessage = document.getElementById("error-message");
select_cmnd = document.getElementById("type_cmnd");
input_nbcmnd = document.getElementById("number_cmnd");
errorMessage1 = document.getElementById("error-message1");
errorMessagetype = document.getElementById("error-messagetype");
lan_kh = document.getElementById("lan_kh");
errorMessage2 = document.getElementById("error-message2");
date = document.getElementById("date");
place_cmnd = document.getElementById("place_cmnd");
date_cmnd = document.getElementById("date_cmnd");
national = document.getElementById("national");
nation = document.getElementById("nation");
national_city = document.getElementById("national_city");
province = document.getElementById("province");
national_pro = document.getElementById("national_pro");
province_local = document.getElementById("province_local");
number_street = document.getElementById("number_street");
qhhn = document.getElementById("qhhn");
time_wed1987 = document.getElementById("time_wed1987");
tlkh = document.getElementById("tlkh");
number_tl = document.getElementById("number_tl");
errorMessage3 = document.getElementById("error-message3");
nationerror = document.getElementById("nation-error");
email = document.getElementById("email");
phone = document.getElementById("phone")
function showForm() {
    span_inf.innerHTML = "";
    input_us.value = "";
    // select_cmnd.value = "";
    if (genderSelect.value == "male") {
        span_inf.innerHTML = "Thông tin người Chồng";
        input_us.style.borderColor = "";
        errorMessage.textContent = "";
        select_cmnd.value = "";
        input_nbcmnd.value = "";
        input_nbcmnd.style.borderColor = "";
        errorMessage1.textContent = "";
        select_cmnd.style.borderColor = "";
        errorMessagetype.textContent = "";
        date.value = "";
        place_cmnd.value = "";
        date_cmnd.value = "";
        lan_kh.value = "";
        national.value = "";
        nation.value = "";
        national_city.value = "";
        province.value = "";
        national_pro.value = "";
        province_local.value = "";
        number_street.value = "";
        qhhn.value = "";
        time_wed1987.value = "";
        tlkh.value = "";
        number_tl.value = "";
        errorMessage3.value = "";
        errorMessage2.value = "";
        errorMessage2.textContent= "";
        lan_kh.style.borderColor = "";
        email.value = "";
        phone.value = "";
    }
    
    else if (genderSelect.value == "female") {
        span_inf.innerHTML = "Thông tin người Vợ";
        input_us.style.borderColor = "";
        errorMessage.textContent = "";
        select_cmnd.value = "";
        input_nbcmnd.style.borderColor = "";
        errorMessage1.textContent = "";
        select_cmnd.style.borderColor = "";
        errorMessagetype.textContent = "";
        date.value = "";
        input_nbcmnd.value = "";
        place_cmnd.value = "";
        date_cmnd.value = "";
        lan_kh.value = "";
        national.value = "";
        nation.value = "";
        national_city.value = "";
        province.value = "";
        national_pro.value = "";
        province_local.value = "";
        number_street.value = "";
        qhhn.value = "";
        time_wed1987.value = "";
        tlkh.value = "";
        number_tl.value = "";
        errorMessage3.value = "";
        errorMessage2.value = "";
        errorMessage2.textContent= "";
        lan_kh.style.borderColor = "";
        email.value = "";
        phone.value = "";
    }
    else{
        input_us.style.borderColor = "";
        span_inf.innerHTML = "";
        input_us.value = "";
        errorMessage.textContent = "";
        input_nbcmnd.style.borderColor = "";
        errorMessage1.textContent = "";
        select_cmnd.style.borderColor = "";
        errorMessagetype.textContent = "";
        date.value = "";
        input_nbcmnd.value = "";
        place_cmnd.value = "";
        date_cmnd.value = "";
        lan_kh.value = "";
        national.value = "";
        nation.value = "";
        national_city.value = "";
        province.value = "";
        national_pro.value = "";
        province_local.value = "";
        number_street.value = "";
        qhhn.value = "";
        time_wed1987.value = "";
        tlkh.value = "";
        number_tl.value = "";
        errorMessage3.value = "";
        errorMessage2.value = "";
        errorMessage2.textContent= "";
        lan_kh.style.borderColor = "";
        email.value = "";
        phone.value = "";
        // select_cmnd.value = "none";
    }
}
number_tl.addEventListener("focusout",function(){
        number_tl.style.borderColor = "";
        errorMessage3.textContent = "";
})
number_tl.addEventListener("input",function(){
    var value = number_tl.value;
    var regex = /^[0-9]*$/;
    if(value!==""&&!regex.test(number_tl.value)){
        number_tl.value = value.replace(/\D/g, "");
    } else {
        number_tl.style.borderColor = "#0004ff";
        errorMessage3.textContent = "";
    }
})
document.getElementById("national_pro").addEventListener("change", function () {
    var selectedNationality = this.value;
    var nationOptions = document.getElementById("province_local").options;
    for (var i = 0; i < nationOptions.length; i++) {
        var option = nationOptions[i];
        if (option.classList.contains(selectedNationality)) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    }
});
document.getElementById("province").addEventListener("change", function () {
    var selectedNationality = this.value;
    var nationOptions = document.getElementById("national_pro").options;
    for (var i = 0; i < nationOptions.length; i++) {
        var option = nationOptions[i];
        if (option.classList.contains(selectedNationality)) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    }
});
document.getElementById("national_city").addEventListener("change", function () {
    var selectedNationality = this.value;
    var nationOptions = document.getElementById("province").options;
    for (var i = 0; i < nationOptions.length; i++) {
        var option = nationOptions[i];
        if (option.classList.contains(selectedNationality)) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    }
});
// document.getElementById("nation").addEventListener("click", function () {
//     if(national.value==""){
       
//       nation.style.borderColor="red";  
//       nationerror.innerHTML="Vui lòng chọn quốc tịch";
//       option.disabled ="none";
//     }
// })
 // Lắng nghe sự kiện onchange trên ô select "Quốc tịch"
 document.getElementById("national").addEventListener("change", function () {
    // Lấy giá trị đã chọn trong ô select "Quốc tịch"
    var selectedNationality = this.value;
    
    // Lặp qua tất cả các tùy chọn trong ô select "Dân tộc"
    var nationOptions = document.getElementById("nation").options;
    for (var i = 0; i < nationOptions.length; i++) {
        var option = nationOptions[i];
        
        // Kiểm tra xem tùy chọn có class tương ứng với quốc tịch đã chọn hay không
        if (option.classList.contains(selectedNationality)) {
            // Hiển thị tùy chọn nếu tùy chọn đó thuộc về quốc tịch đã chọn
            option.style.display = "block";
        } else {
            // Ẩn tùy chọn nếu tùy chọn đó không thuộc về quốc tịch đã chọn
            option.style.display = "none";
        }
    }
});
lan_kh.addEventListener("input",function(){
    var value = lan_kh.value;
    var regex = /^[0-9]*$/;
    if(value!==""&&!regex.test(lan_kh.value)){
        lan_kh.value = value.replace(/\D/g, "");
    } else {
        lan_kh.style.borderColor = "#0004ff";
        errorMessage2.textContent = "";
    }
})
lan_kh.addEventListener("focusout",function(){
    if(lan_kh.value==""){
        lan_kh.style.borderColor = "red";
        errorMessage2.textContent = "Bạn phải nhập số lần kết hôn";
    }else{
        lan_kh.style.borderColor = "";
        errorMessage2.textContent = "";
    }
})
input_nbcmnd.addEventListener("input",function(){
    var value = input_nbcmnd.value;
    var regex = /^[0-9]*$/;
    if(value!==""&&!regex.test(input_nbcmnd.value)){
        input_nbcmnd.value = value.replace(/\D/g, "");
    } else {
        input_nbcmnd.style.borderColor = "#0004ff";
        errorMessage1.textContent = "";
    }
    if (select_cmnd.value == "cmnd") {
        input_nbcmnd.maxLength = "9";
    }
    if(select_cmnd.value == "cccd"){
        input_nbcmnd.maxLength = "12";
    }
})
input_nbcmnd.addEventListener("focusout",function(){
    if(input_nbcmnd.value==""){
        input_nbcmnd.style.borderColor = "red";
        errorMessage1.textContent = "Bạn phải nhập số giấy tờ";
    }else{
        input_nbcmnd.style.borderColor = "";
        errorMessage1.textContent = "";
    }
})
select_cmnd.addEventListener("input", function(){
    var value = select_cmnd.value;
    if(value!=""){
        select_cmnd.style.borderColor = "#0004ff";
        errorMessagetype.textContent = "";
    }
})
select_cmnd.addEventListener("focusout", function(){
     if(select_cmnd.value == ""){
        select_cmnd.style.borderColor = "red";
        errorMessagetype.textContent = "Bạn phải chọn loại giấy tờ";
     }else{
        select_cmnd.style.borderColor = "";
        errorMessagetype.textContent = "";
     }
})
input_us.addEventListener("input", function() {
    // Sử dụng biểu thức chính quy để kiểm tra nhập liệu
    var value = input_us.value;
    var regex =    /^[a-zA-Z\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệđìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ\u00C0-\u024F]+$/;
    if (value!== ""&&!regex.test(input_us.value)) {
        input_us.value = value.replace(/[0-9]/g, ""); // Loại bỏ các ký tự không phải chữ cái và khoảng trắng
        input_us.style.borderColor = "red";
        // errorMessage.style.marginLeft = "-50px"
        errorMessage.textContent = "Vui lòng nhập đúng định dạng (không chứa số và ký tự đặc biệt)";
       
    } else {
        input_us.style.borderColor = "#0004ff";
        errorMessage.textContent = "";
    }
});
input_us.addEventListener("focusout", function() {
    if (input_us.value == "") {
        input_us.style.borderColor = "red";
        // errorMessage.style.marginLeft = "-350px";
        errorMessage.textContent = "Bạn phải nhập họ tên";
    } else {
        input_us.style.borderColor = "";
        errorMessage.textContent = "";
    }
});
// Tại generateDoc.js
document.getElementById("generateButton").addEventListener("click", function () {
    const { Document, Packer, Paragraph, TextRun } = require("docxtemplater");

    // Lấy các giá trị từ biểu mẫu HTML
    const tenChong = document.getElementById("tenChong").value;
    const tenCoDau = document.getElementById("tenCoDau").value;
    const ngayCuoi = document.getElementById("ngayCuoi").value;

    // Đọc mẫu DOCX
    const fs = require("fs");
    const content = fs.readFileSync("path_to_your_template.docx", "binary");

    const doc = new Document();

    // Chèn thông tin từ biểu mẫu HTML vào mẫu DOCX
    doc.addSection({
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun(`Tên chú rể: ${tenChong}`),
            new TextRun(`Tên cô dâu: ${tenCoDau}`),
            new TextRun(`Ngày cưới: ${ngayCuoi}`),
          ],
        }),
      ],
    });

    // Tạo tệp tin DOCX
    const buffer = docx.Packer.toBuffer(doc);

    // Tạo một Blob để tạo URL cho tệp DOCX
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    const url = window.URL.createObjectURL(blob);

    // Tạo một thẻ a để tải tệp DOCX
    const a = document.createElement("a");
    a.href = url;
    a.download = "output.docx";
    document.body.appendChild(a);
    a.click();

    // Xóa URL sau khi tải về
    window.URL.revokeObjectURL(url);
});
