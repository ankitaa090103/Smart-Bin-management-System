document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send data to the back-end
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message) {
                alert(data.message); // Display the response message
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
