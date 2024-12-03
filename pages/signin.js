let signin = document.getElementById('signin').addEventListener('submit' ,function (event) {
    event.preventDefault();

  let  localStoragelocEmail=localStorage.getItem('email')
   let localStoragelocPassWord=localStorage.getItem('passWord')

    let email = document.getElementById('email').value;
    let passWord=document.getElementById('passWord').value;

    console.log(email,passWord);
    

    if (localStoragelocEmail === email && localStoragelocPassWord === passWord) {
        window.location.href="../index.html"
        
    }else{
        alert('some thing wrong')
    }
    
})