const inp = document.querySelector(".text");
const btn = document.querySelector(".btn");
const showContainer = document.querySelector(".show-container");
let movieTitle;
const type = document.querySelector("#type");




btn.addEventListener("click", (e) => {
    movieTitle = inp.value;
    userType = type.value;
    const url = `https://www.omdbapi.com/?i=tt3896198&type=${userType}&t=${movieTitle}&apikey=270c6982`;
    e.preventDefault();
    fetch(url)
    .then((data) => data.json())
    .then((response) => {
        console.log(response);
        
        
        showContainer.insertAdjacentHTML("beforeend", `
            <div class="card-movie">
                <h3>Название: ${response.Title} </h3> 
                <h3>Описание: ${response.Plot} </h3> 
                <h3>Дата выхода: ${response.Released} </h3>
                <h3>В главных ролях: ${response.Actors} </h3>
                <img src="${response.Poster}" class="size"></img>
            </div>
        `);
    })
})