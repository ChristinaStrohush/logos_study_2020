let movie = document.forms['movie']
let getSel = x => document.querySelector(x)
let obj, more, rat = '<b>Ratings:</b>'
let type = '', year = '', page = ''

movie.button.addEventListener('click', function(){
    requestSearch()
})

async function requestSearch(){
    try{
        moreParametrs()
        const response = await fetch(`http://www.omdbapi.com/?s=${movie.title.value}${type}${year}${page}&apikey=a4075c23`)
        if(response.ok){
            obj = await response.json()
            createCard()
            requestMore()
        }
    }
    catch(err){
        throw new Error('some problem with url')
    }
}

function moreParametrs(){
    type = '', year = '', page = ''
    if(movie.type.value != '') type = `&type=${movie.type.value}`
    if(movie.year.value != '') year = `&y=${movie.year.value}`
    if(movie.page.value !='') page = `&page=${movie.page.value}`
}

function createCard(){
    let a;
    getSel('.cardOfMovie').innerHTML = ''
    for(let i = 0; i<obj.Search.length; i++){
        a = obj.Search[i].Poster
        if(a == 'N/A') a = 'image/noimage.png'
        else a = obj.Search[i].Poster
        getSel('.cardOfMovie').innerHTML += `<div class="col mb-4">
        <div class="card">
        <img src="${a}" class="card-img-top">
        <div class="card-body p-0">
        <h5 class="card-title text-center d-flex justify-content-center align-items-center m-0">${obj.Search[i].Title}</h5>
        <p class="card-text m-0 p-2 text-center">${obj.Search[i].Type}</p>
        <p class="card-text m-0 pb-2 text-center">${obj.Search[i].Year}</p>
        <button type="button" id="${obj.Search[i].imdbID}" class="btn btn-success btn-block" data-toggle="modal" data-target="#exampleModal">More details</button>
        </div></div></div>`
    }
}

async function requestMore(){
    try{
        for(let i = 0; i<obj.Search.length; i++){
            getSel(`#${obj.Search[i].imdbID}`).addEventListener('click', async function(){
                const response = await fetch(`http://www.omdbapi.com/?i=${this.id}&apikey=a4075c23`)
                if(response.ok){
                    more = await response.json()
                    ratings()
                    createModal()
                }
            })
        }   
    }
    catch(err){
        throw new Error('some problem with parametrs of the filter')
    } 
}

function createModal(){
    if(more.Poster == "N/A") getSel('.poster').innerHTML = `<img src="image/noimage.png" class="card-img" alt="poster">`
    else getSel('.poster').innerHTML = `<img src="${more.Poster}" class="card-img" alt="poster">`
    getSel('.titleMovie').innerText = `${more.Title}`
    getSel('.shortInfo').innerText = `${more.Rated} ${more.Year} ${more.Genre}`
    getSel('.plot').innerText = `${more.Plot}`
    getSel('.writer').innerHTML = `<b>Written by:</b> ${more.Writer}`
    getSel('.director').innerHTML = `<b>Directed by:</b> ${more.Director}`
    getSel('.acrors').innerHTML = `<b>Starring:</b> ${more.Actors}`
    getSel('.boxOffice').innerHTML = `<b>BoxOffice:</b> ${more.BoxOffice}`
    getSel('.awards').innerHTML = `<b>Awards:</b> ${more.Awards}`
    getSel('.rat').innerHTML = `${rat}`
}

function ratings(){
    for (let i = 0; i<more.Ratings.length; i++){
        rat += `<br>${Object.values(more.Ratings[i]).join(' ')}`
    }
}
