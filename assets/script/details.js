let id = new URLSearchParams (window.location.search).get("id");
let details = document.querySelector(".details");

fetch(`http://localhost:3000/security/${id}`)
.then(res =>  res.json())
.then(data => {
    details.innerHTML += `
    <div class="brake">
        <div class="photo">
            <img src="${data.image}" alt="">
        </div>
        <div class="lorem">
            <h3>${data.name}</h3>
            <p>${data.description}</p>
        </div>
    </div>    
    `
})