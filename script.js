function validation(){

    const Name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const nameerror = document.querySelector(".nameerror");
    const emailerror = document.querySelector(".emailerror");
    const messageerror = document.querySelector(".messageerror");
    let isValid = true;

    if(Name.trim()===""){
        nameerror.textContent="Enter name";
    }else{
        nameerror.textContent=""
    }

    const Emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    if(!Emailpattern.test(email)){
        emailerror.textContent="Enter email";
    }else{
        emailerror.textContent="";
    }

    if(message.trim()===""){
        messageerror.textContent="Enter message";
    }else{
        messageerror.textContent=""
    }
}
