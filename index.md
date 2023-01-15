<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
<!-- </head>
<body>
  <center>
  <h3>Login Here</h3>
  <form action="" method="post">
      <table>
        <tr>
          <td>Username:</td>
          <td><input type="text" name="user" placeholder="Enter name Here"></td>
        </tr>
        <tr>
          <td>Password:</td>
          <td><input type="password" name="user_pass" placeholder="Enter Password Here"></td>
        </tr>
        <tr>
           <td><input type="submit" name="submit" value="Login"></td>
           <td><p>Not yet a Member? <a href="register.">Register</a></p></td>
        </tr>
      </table>
  </form>
  </center>
</body>
</html> -->
<style>
.container {
  text-align: center;
  clear: both;
}
.body {
  color: yellow;
}


</style>

<section class = "loginform">

<body>
<center><h1>Login</h1></center>
<br>
<form>
<div class = "container">

<label for="user"> <center> Username: </center> </label> 
<input type="text" id="usr_login" name = "user" value="" placeholder="Enter Username Here"><br>
<br>
<label for="password"> <center> Password: </center> </label>
<input type="text" id = "pwd" name = "password" value="" placeholder="Enter Password Here"><br>
<br>
<button id="loginSubmit" type = "button">Submit</button><br>
<br>
<input type="checkbox" checked="checked"> Remember Me
</div>
</form>
</body>
</section>
