let nav = document.querySelector("nav");
let load = document.querySelector("#load");
let page = 1;

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

function getData() {
    fetch(`http://localhost:3000/security?_page=${page}&_limit=3`)
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            security.innerHTML += `
            <div class="brake">
                <i class="bi bi-heart" onclick="favorite(${element.id})"></i>
                <div class="photo">
                    <img src="${element.image}" alt="">
                </div>
                <div class="lorem">
                    <h3>${element.name}</h3>
                    <p>${element.description}</p>
                </div>
                <button onclick="goTo(${element.id})">View Details</button>
                <button onclick="deleteDiv(${element.id})">Delete</button>
                <button onclick="updateDiv(${element.id})">Update</button>
                </div>
            `
        })
    })
}
 

load.addEventListener("click", ()=>{
    if(event.target.innerText == "Load More"){
        page++;
        getData();
        event.target.innerText = "Less More";
    }
    else{
        event.target.innerText = "Load More";
        security.innerHTML = "";
        page--;
        getData()
    }
})

function goTo(id){
    window.location = `./details.html?id=${id}`;
}

function deleteDiv(id){
    axios.delete(`http://localhost:3000/security/${id}`);
    window.location.reload();
}

function updateDiv(id) {
    window.location = `./update.html?id=${id}`;
}

add.addEventListener("click", ()=>{
    window.location = "./add.html";
})

let list = document.querySelector("#list");
let modal = document.querySelector(".list-modal");
let lg = document.querySelector("#lg");

list.addEventListener("click", ()=>{
    list.style.display = "none";
    modal.style.display = "flex";
})

modal.addEventListener("click", (e)=>{
    if(e.target == modal){
        modal.style.display = "";
        list.style.display = "";
    }
})

lg.addEventListener("click", ()=>{
    modal.style.display = "";
    list.style.display = "";
})

let dropdown = document.querySelector(".drop");
let more = document.querySelector(".more")

// setTimeout(
//     more.addEventListener("mouseover", ()=>{
//         dropdown.style.display = "block";
//     }), 3000);

function favorite(id){
    axios.get("http://localhost:3000/security/"+id)
    .then(res => {
        console.log(res.data);
        axios.post("http://localhost:3000/favorites", res.data);
    })
}

let favorites = document.querySelector("#favorites");

favorites.addEventListener("click", ()=>{
    window.location = `./favorites.html?id=${id}`
})