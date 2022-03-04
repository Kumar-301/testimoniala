let fname=document.getElementById("fname");
let mail=document.getElementById("mail");
let mobile1 = document.getElementById("mobile");
let erro1=document.getElementById("error1");
let erro5=document.getElementById("error5");
let erro3=document.getElementById("error3");

const swiper = new Swiper('.swiper', {
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    }, 
    navigation: {
      nextEl: '.fa-angle-left',
      prevEl: '.fa-angle-right',
    },
  
  });




function validate1(){
    erro1.textContent="";
    let regName=new RegExp("/^[a-zA-z]$/")
    let fnamevalue=fname.value;
    if ( fnamevalue===""){
        erro1.textContent="Required"
        return false
    }else if(!regName.test(fnamevalue)==true){
        erro1.textContent="name should have alphabets"
        return false
    }else{
        erro1.textContent=""
        return true
    }
}

function validate3(){
    erro3.textContent=""
    let mailvalue=mail.value
    let sub=mailvalue.substring(mailvalue.indexOf('@')+1)
    if (mailvalue==""){
        erro3.textContent="required"
        return false;
    }else if(!mailvalue.includes('@')||sub==""){
        erro3.textContent="Enter valid Email"
        return false;
    }else{
        erro3.textContent=""
        return true
    }
}
function validate5(){
    erro5.textContent="";
    let mobileCheck=new RegExp('^[0-9]*$');
    let mobileValue = mobile1.value;
    
    if(mobileValue==""){
        erro5.textContent="required";
        return false;
    }else if(mobileCheck.test(mobileValue)==false){
        erro5.textContent="Use only digits";
        return false;
    }else if(mobileValue.length<10||mobileValue.length>10){
        erro5.textContent="enter 10 digit mobile number";
        return false;
    }
    
    else{
        erro5.textContent="";
        return true;
    }
}

function validation(){
    let v1=validate1()
   
    let v3=validate3()
    
    let v5=validate5()
    return v1 && v3 && v5
}
