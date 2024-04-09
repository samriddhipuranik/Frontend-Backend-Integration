document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        console.log(name);
        console.log(email);

        // Check if name and email are not empty
        if (!name || !email) {
            alert('Please fill in all fields');
            return;
        }

        // const formData = new FormData();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        
        fetch('http://localhost:3000/submit', {
            method: 'POST',
            body: JSON.stringify({ name, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Form submitted successfully');
                alert('Form submitted successfully');
            } else {
                console.error('Error:', response.statusText);
                alert('Error submitting form');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting form');
        });
    });
});
