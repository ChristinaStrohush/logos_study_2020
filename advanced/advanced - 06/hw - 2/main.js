let movie = document.forms['movie']
let getSel = x => document.querySelector(x)
let obj, more, rat = '<b>Ratings:</b>'

movie.button.addEventListener('click', function(){
    requestSearch()
    createCard()
    requestMore()
})

function requestSearch(){
    const xml = new XMLHttpRequest()
    xml.open('GET', `http://www.omdbapi.com/?s=${movie.title.value}&apikey=a4075c23`, false)
    xml.send()
    obj = JSON.parse(xml.responseText)
    console.log(obj)
}

function createCard(){
    getSel('.cardOfMovie').innerHTML = ''
    for(let i = 0; i<obj.Search.length; i++){
        getSel('.cardOfMovie').innerHTML += `<div class="col mb-4">
        <div class="card">
        <img src="${obj.Search[i].Poster}" class="card-img-top">
        <div class="card-body p-0">
        <h5 class="card-title text-center d-flex justify-content-center align-items-center m-0">${obj.Search[i].Title}</h5>
        <p class="card-text m-0 p-2 text-center">${obj.Search[i].Type}</p>
        <p class="card-text m-0 pb-2 text-center">${obj.Search[i].Year}</p>
        <button type="button" id="${obj.Search[i].imdbID}" class="btn btn-success btn-block" data-toggle="modal" data-target="#exampleModal">More details</button>
        </div></div></div>`
    }
}

function requestMore(){
    const xml = new XMLHttpRequest()
    for(let i = 0; i<obj.Search.length; i++){
        getSel(`#${obj.Search[i].imdbID}`).addEventListener('click', function(){
            xml.open('GET', `http://www.omdbapi.com/?i=${this.id}&apikey=a4075c23`, false)
            xml.send()
            more = JSON.parse(xml.responseText)
            console.log(more)
            ratings()
            createModal()
        })
    }   
}

function createModal(){
    getSel('.poster').innerHTML = `<img src="${more.Poster}" class="card-img" alt="poster">`
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