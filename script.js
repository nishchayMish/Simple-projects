// API_KEY = https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

async function fetchRecipe(){
    const search = searchInput.value.trim();
    const raw = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const data = await raw.json();
    console.log(data)
}

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    fetchRecipe();
})