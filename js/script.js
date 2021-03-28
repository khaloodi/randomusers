fetchData('https://randomuser.me/api/?results=12&nat=us')
    .then(data => {
        employeeList = data.results;
        generateUsers(employeeList)
            // generateModal(employeeList)
    })

// fetch function
function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
};

// DOM elements
const gallery = document.querySelector("#gallery");
const body = document.querySelector("body");

// helper functions

/** 
 * Creates user cards
 * @return {array} returns an array of user cards to be displayed
 */

function generateUsers(data) {
    //Loop through fetched data and populate employee card fields:
    data.forEach(item => {
        let divCard = document.createElement("div");
        divCard.className = "card";
        let html =
            `<div class="card-img-container">
                        <img class="card-img" src="${item.picture.large}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
                        <p class="card-text">${item.email}</p>
                        <p class="card-text cap">${item.location.city}, ${item.location.state}</p>
                </div>`;
        divCard.innerHTML = html;
        gallery.append(divCard);

        // Event listener to trigger modal for each employee card:
        divCard.addEventListener("click", () => {
            generateModal(item, data);
        });
    });
}

/** 
 * Creates and displays modal
 */

function generateModal(item, data) {
    console.log(item)
    let modalContainer = document.createElement("div");
    modalContainer.className = "modal-container";
    let html = `
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

    modalContainer.innerHTML = html;
    body.append(modalContainer);

    // Click 'X' to close modal window
    const button = document.querySelector("button");
    const modal = document.querySelector("div.modal-container");
    button.addEventListener("click", () => {
        modal.remove();
    });
}