<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  <br><br>
  <input type="button" value="Login" onclick="checkCredentials()">
</form>

<script>
function checkCredentials() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username === "test" && password === "test") {
    alert("Login successful!");
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
</script>