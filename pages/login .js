let login = document.getElementById('login').addEventListener ('submit' ,function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let passWord=document.getElementById('passWord').value;

    console.log(name,email,passWord);

if (name && email && passWord) {
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("passWord",passWord)

    window.location.href="./signin.html"
    
}
else{
    alert("Please Complete Form")
}

});