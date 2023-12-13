let id = new URLSearchParams (window.location.search).get("id");
let favorites =  document.querySelector(".favorites");

fetch("http://localhost:3000/favorites")
.then(res =>  res.json())
.then(data => {
    data.forEach(element => {
        favorites.innerHTML += `
        <div class="brake">
            <div class="photo">
                <img src="${element.image}" alt="">
            </div>
            <div class="lorem">
                <h3>${element.name}</h3>
                <p>${element.description}</p>
            </div>
        </div>    
        `
    });
})