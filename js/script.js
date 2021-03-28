fetchData('https://randomuser.me/api/?results=12&nat=us')
    .then(data => {
        generateUsers(data)
        generateModal(data)
    })

// fetch function
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
};

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

/** 
 * Creates and displays modal
 */

function generateModal(data) {
    let modal = `
            <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">email</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>
            </div>
    `;
    gallery.insertAdjacentHTML('afterend', modal)
}