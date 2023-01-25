<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login</title>
     <style>
        h1 {
          text-align: center;
          font-size: 40px;
          font-weight: 700;
          color: #fcf6d9;
          font-family: 'Verdana'
        }
        input.login {
          margin-top: 5%;
          position: inline;
          width: 50%
          padding: 2%;
          font-size: 25px;
          background-color: #242424;
          color: #fcf6d9;
          border: none;
          position: inline;
          font-family: 'Verdana';
          text-align:center
        }
        input.loginfocus {
          background-color: #4d4c4b;
          outline: none;
        }
        button {
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-size: 20px;
          position: inline;
          width: 40%;
          margin-left: 30%;
          margin-right: 30%;
          color: #DCDCDC;
          border: #32CD32;
          font-family: 'Verdana'
        }
        div.signup {
          margin-top: 4%;
          position: inline;
          width: 50%;
        }
        #sign {
          font-size: 25px;
          text-align: center;
          margin-bottom: 0%;   
          font-family: 'Verdana'     
        }
    </style>
    
  </head>
  <body>
    <h1 class="header">Sign In</h1>
    <input type="name" class="login" id="name" placeholder="Type a Username">
    <input type="pwd" class="login" id="pwd" placeholder="Type a Password">
    <div>
    <br>
      <button id="enter" type="button" onclick="window.location.href='{{ site.baseurl }}/pong';">Enter</button>
      <button id="enter" type="button" onclick="window.location.href='{{ site.baseurl }}/register';">Register</button>
      <div class="noacc">

<!-- <script>
$('#enter').click(async function() {
    let username = $('#login_username').val();
    let email = $('#login_email').val();
    let pwd = $('#pwd').val();
    let url = '/api/users'; 


    const headers = {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {'Content-Type': 'application/json'},
    };
    try {
        const response = await fetch(url, headers);
        if (!response.ok) {
            throw new Error("Login Failed");
        }
        const data = await response.json();
        const user = data.users.find(user => user.username === username && user.password === password && user.email === email);
        if (user) {
            console.log("Login Successful");
        } 
        else {
            console.log("Login Failed");
        }
    } catch(error) {
        console.log(error);
        document.getElementById("SignInError").style.display = "block";
    }
});

</script> -->
