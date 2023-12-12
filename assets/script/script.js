let nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>100){
        nav.style.backgroundColor = "rgba(0,0,0,0.8)";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.transition = "all .5s ease";
    }
    else{
        nav.style.backgroundColor = "";
        nav.style.transition = "all .5s ease";
    }
})

let security = document.querySelector(".basic");
let add = document.querySelector("#add");

fetch("http://localhost:3000/security")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        security.innerHTML += `
        <div class="brake">
        <div class="photo">
        <img src="${element.image}" alt="">
    </div>
    <div class="lorem">
        <h3>${element.name}</h3>
        <p>${element.description}</p>
    </div>
    <button onclick="goTo(${element.id})">View Details</button>
    <button onclick="deleteDiv(${element.id})">Delete</button>
    <button id="update">Update</button>
        </div>
        `
    })
})

function goTo(id){
    window.location = `./details.html?id=${id}`;
}

function deleteDiv(id){
    axios.delete(`http://localhost:3000/security/${id}`);
    window.location.reload()
}

add.addEventListener("click", ()=>{
    window.location = "./add.html"
})