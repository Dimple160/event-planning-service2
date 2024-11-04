document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const eventType = document.getElementById('event-type').value;
    const guests = document.getElementById('guests').value;

    let costPerGuest;
    switch (eventType) {
        case 'wedding':
            costPerGuest = 150; // Cost per guest for wedding
            break;
        case 'corporate':
            costPerGuest = 100; // Cost per guest for corporate event
            break;
        case 'birthday':
            costPerGuest = 50; // Cost per guest for birthday party
            break;
    }

    const totalCost = costPerGuest * guests;
    document.getElementById('result').innerText = `Estimated Budget: $${totalCost}`;
});

// Contact form submission (mock implementation)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
});