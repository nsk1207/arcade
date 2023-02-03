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
          font-family: 'Verdana'
           }
        button {
          outline: none;
          font-size: 20px;
          margin-top: 4%; 
          margin-bottom: 4%;
          position: inline;
          width: 40%;
          margin-left: 30%;
          margin-right: 30%;
          padding: 2%;
          background-color: #A9A9A9;
          color: #DCDCDD;
          font-family: 'Verdana'
        }
        input.login {
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
          position: inline;
          font-family: 'Verdana'
        }
        input.signup {
          background-color: #4d4c4b;
          outline: none;
        }
        div.signup {
          margin-top: 4%;
          margin-left: 25%;
          margin-right: 25%;
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
    <h1 class="header"> Sign Up Here! </h1>
    <input type="username" class="login" id="username" placeholder="Type a Username">
    <input type="password" class="login" id="password" placeholder="Type a Password">
    <div>
    <br>
      <button id="enter" type="button" onclick="window.location.href='{{ site.baseurl }}/searchgames';">Create Account</button>
      <div class="sign">
      
  <script>
      var input = document.getElementById("password");
      input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("enter").click();
        }
      });
    </script>