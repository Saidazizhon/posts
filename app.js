const API_URL = "https://jsonplaceholder.typicode.com"
const wrapper = document.querySelector(".wrapper")
const loader = document.querySelector(".loader")

async function fetchUsers(api){
    let reponse = await fetch(`${api}/posts`)

    reponse
        .json()
        .then((res)=> createCard(res))
        .catch((err)=> console.log(err))
        .finally(()=> {
            loader.style.display = "none"
        })
}


fetchUsers(API_URL)


function createCard(data){
    data.forEach((posts)=>{
        let card = document.createElement("div")
        card.classList.add("card",)
        card.innerHTML =`
            <h3>${posts.title}</h3>
            <p>${posts.body}</p>`
        wrapper.appendChild(card)
    })
}