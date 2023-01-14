<html lang="{{ site.lang | default: "en-US" }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sign Up Here</title>
    <style>
        h1 {
          text-align: center;
          font-size: 40px;
          font-weight: 700;
          color: #fcf6d9;
          font-family: 'Verdana', 'Verdana', Verdana, 'Verdana', Verdana;
        }
        input.login {
          font-family: 'Verdana', 'Verdana', Verdana, 'Verdana', Verdana;
          margin-top: 5%;
          position: inline;
          width: 50%;
          margin-left: 25%;
          margin-right: 30%;
          padding: 2%;
          font-size: 25px;
          background-color: #242424;
          color: #fcf6d9;
          border: none;
          border-radius: 5px;
          border-bottom: 4px solid #32CD32;
          transition-duration: 0.3s;
        }
        input.login:focus {
          background-color: #4d4c4b;
          outline: none;
        }
        button {
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-family: 'Verdana', 'Verdana', Verdana, 'Verdana', Verdana;
          font-size: 20px;
          margin-top: 4%; 
          margin-bottom: 4%;
          position: inline;
          width: 40%;
          margin-left: 30%;
          margin-right: 30%;
          padding: 2%;
          border-radius: 8px;
          background-color: #302f2f;
          color: #32CD32;
          border: #32CD32;
          transition-duration: 0.3s;
        }
        button:hover {
          color: #32CD32;
          background-color: #f1cc0c;
          width: 45%;
          margin-left: 27.5%;
          margin-right: 27.5%;
          margin-bottom: 3%;
          padding: 2.5%;
        }
        div.noacc {
          margin-top: 4%;
          margin-left: 25%;
          margin-right: 25%;
          position: inline;
          width: 50%;
        }
        #alracc {
          font-family: 'Verdana', 'Verdana', Verdana, 'Verdana', Verdana;
          font-size: 25px;
          text-align: center;
          margin-bottom: 0%;          
        }
    </style>

  </head>
  <body>
    <h1 class="header">
      Sign Up
    </h1>
    <input type="username" class="login" id="usrnm" placeholder="Username">
    <input type="name" class="login" id="name" placeholder="Full Name">
    <input type="password" class="login" id="pswd" placeholder="Password">
    <div>
    <br>
      <button id="enter" type="button" onclick="window.location.href='{{ site.baseurl }}/pong';">Create Account</button>
      <div class="noacc">
  <script>
      var input = document.getElementById("pswdv");
      input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("enter").click();
        }
      });
    </script>
