document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var username = document.getElementById('username').value.trim();  // Remove spaces
  var password = document.getElementById('password').value.trim();

  console.log("Username:", username);
  console.log("Password:", password);

  if (username === 'user' && password === 'password') {
      alert('Make Correct');
      // Redirect to desired page or perform additional logic here
  } else {
      alert('Login successful!');
  }
});
