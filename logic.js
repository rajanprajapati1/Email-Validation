const submitbtn = document.getElementById("submit");
const form = document.querySelector("form");
const password = document.getElementById("password");
const email = document.getElementById("email");
const pdshw = document.getElementById("show");


pdshw.addEventListener("click",()=>{
    if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
    }
})

form.addEventListener("submit",(e)=>{
    
    e.preventDefault();
    
    if(email.value === ""){
        Swal.fire({
            html:"Email is required",
        });
    }else if(password.value === ""){
        Swal.fire({
            html:"Password is required",
        });
    }else if(!emailvalidate(email.value)){
        Swal.fire({
            html:"Wrong Email Validation",
        });
    }else{
Swal.fire({
    html: "Sucess 💛"
  });
  
        form.reset();
    }
})

function emailvalidate(email){
  const wrongpatter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return wrongpatter.test(email)
}