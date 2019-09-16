const img = document.querySelector('img'); 
const button = document.getElementById('fetch-button');
const inputSearch = document.getElementById('search');
const results = document.getElementById('results'); 
let imgContainer = document.querySelector('.img-container'); 
let searchArray = []; 
button.addEventListener('click', createURL);

function createURL(input){
    input = inputSearch.value
    let url = `https://api.giphy.com/v1/gifs/search?api_key=XNTqITqRxyHlqfmrr0Q02YCVZ6BjvM7s&q=${input}&limit=30&offset=0&rating=G&lang=en`;
    fetch(url, {mode: 'cors'})
        .then(response => response.json())
        .then(object => searchArray.push(...object.data))
        .then(check); 
}

 
/*
inputSearch.addEventListener('change', displayChange);
inputSearch.addEventListener('keyup', displayChange); 
*/ 
/*
const promise =fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then(object => searchArray.push(...object.data));
    .then(renderImages);
*/ 
function displayChange(e) {
    console.log(e); 
} 

function renderImages(){
        for(let i =0; i<searchArray.length; i++) {
            let imageTag = document.createElement('img'); 
            imageTag.src = searchArray[i].images.original.url;
            imgContainer.appendChild(imageTag); 
        }   
}   
let images = document.querySelectorAll('img'); 

function check() {
    while (searchArray.length > 30) {
        console.log('check'); 
    searchArray.splice(0,30); 
    imgContainer.remove(); 
    imgContainer = document.createElement('div');
    imgContainer.className ="img-container";
    let body = document.querySelector('body'); 
    body.appendChild(imgContainer); 
    }
    renderImages(); 
  
}
 
//button.addEventListener('click', fetchGiphy);
//fetchGiphy();  
/*
function fetchGiphy() {
fetch('https://api.giphy.com/v1/gifs/translate?api_key=XNTqITqRxyHlqfmrr0Q02YCVZ6BjvM7s&s=catswithhats', {mode: 'cors'})
    .then(response => response.json())
    .then(data => img.src = data.data.images.original.url)
    .catch(e => console.log(e)); 
} */ 
