// Get the form element
var formElement = document.getElementById('textForm');

// Add event listener for form submission
formElement.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the input value
    var inputValue = document.getElementById('textInput').value;

    // Send input value to backend
    fetch('http://127.0.0.1:5000/submit_text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputValue })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
