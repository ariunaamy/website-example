function initilaize(){
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log((data.name))
    })
}

const pkForm = document.getElementById("pk-form");
const pkName = document.getElementById("pk-name");

pkForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkName.value}`)
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log((data.name))
    })
})