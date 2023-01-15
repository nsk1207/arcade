<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  <br>
  <label for="fullname">Full Name:</label>
  <input type="text" id="fullname" name="fullname">
  <br><br>
  <input type="button" value="Register" onclick="register()">
</form>

<script>
function register() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var fullname = document.getElementById("fullname").value;
  
  // validation
  if (username === "" || password === "" || fullname === "") {
    alert("Please fill in all fields");
    return;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  }
  
  // registration logic (e.g. sending data to server, etc.)
  alert("Registration successful! Welcome, " + fullname + "!");
}
</script>