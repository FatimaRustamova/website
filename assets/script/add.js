let form = document.querySelector(".form");
let image = document.querySelector("#image");
let name = document.querySelector("#name");
let desc = document.querySelector("#desc");

// let obj = {};

// image.addEventListener('input',()=>{
//     let src = image.files[0];      
//     const reader = new FileReader();
//     reader.readAsDataURL(src);
//     reader.onload = function(){
//         obj.image = reader.result;
//         console.log(reader.result);
//     }
// })

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();

//     if(image.files[0] && desc.value && name.value){

//         obj.name = name.value;
//         obj.desc = desc.value;

//         axios.post("http://localhost:3000/security", obj)
//             .then(res => {
//                 window.location = "./index.html"
//             })
//     }else{
//         alert('xanalari doldur')
//     }

    


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let obj = {};
    let reader = new FileReader();
    let src = image.files[0];

    reader.onload = (e)=> {
        obj = {
            image : e.target.result,
            name : name.value,
            description : desc.value
        }
        axios.post("http://localhost:3000/security", obj)
        .then(res => {
            window.location = "./index.html"
        })
    }
    reader.readAsDataURL(src);
})