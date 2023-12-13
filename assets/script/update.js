let id = new URLSearchParams(window.location.search).get("id");
let form = document.querySelector(".form");
let image = document.querySelector("#image");
let name = document.querySelector("#name");
let desc = document.querySelector("#desc");
let form_image = document.querySelector(".form-image");
let file = document.querySelector("input[type='file']");

fetch(`http://localhost:3000/security/${id}`)
.then(res =>  res.json())
.then(data => {
    form_image.src = data.image;
    name.value = data.name;
    desc.value = data.description;
})

file.addEventListener("input", (e)=>{
    let file = e.target.files[0];
    if(file){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(){
            form_image.src = reader.result;
        }
    }
})

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    axios.patch(`http://localhost:3000/security/${id}`, {
        image : form_image.src,
        name : name.value,
        description : desc.value
    })
    .then(res => {
        window.location = "./index.html"
    })
})