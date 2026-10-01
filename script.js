document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Pigilan muna ang pag-refresh ng page

    const form = event.target;
    const formData = new FormData(form);

    // I-send ang data papunta sa Formspree gamit ang fetch
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'json'
        }
    }).then(response => {
        if (response.ok) {
            // Itago ang form at ipakita ang success message kapag naging successful
            form.style.display = 'none';
            document.getElementById('successMessage').classList.remove('hidden');
        } else {
            alert('Oops! There was a problem submitting your form.');
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form.');
    });
});