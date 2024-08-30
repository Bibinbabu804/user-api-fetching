
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    const cardsContainer = document.getElementById('cards-container');
    data.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h1>Id:${user.id}</h1>
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p><strong>Company:</strong> ${user.company.name}    , </p>
         
                 <p><strong>CatchPhrase:</strong> ${user.company.catchPhrase}</p>
                 
                 <p><strong>Bs:</strong> ${user.company.bs}</p>
        `;
        cardsContainer.appendChild(card);
    });
})
.catch(error => console.error('Error fetching data:', error));
;
