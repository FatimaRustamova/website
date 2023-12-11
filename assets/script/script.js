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

let security = document.querySelector(".brake");

// fetch("http://localhost:3000/security")
// .then(res => res.json())
// .then(data => {
//     data.forEach(element => {
//         security.innerHTML += `
//         <div class="photo">
//             <img src="${element.image}" alt="">
//         </div>
//         <div class="lorem">
//             <h3>${element.name}</h3>
//             <p>${element.description}</p>
//         </div>
//         `
//     })
// })