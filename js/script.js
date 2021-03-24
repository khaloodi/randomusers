fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => generateUsers(data))

// helper functions

/** 
 * Creates user cards
 * @return {array} returns an array of user cards to be displayed
 */

function generateUsers(data) {
    // console.log(data)
    const gallery = document.getElementById('gallery');
    let html = '';
    for (let i = 0; i < data.results.length; i++) {
        html += `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${data.results[i].picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                <p class="card-text">${data.results[i].email}</p>
                <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
            </div>
        </div>
    `;

    }

    gallery.innerHTML = (html);
}