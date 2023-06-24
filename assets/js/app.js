const cl=console.log
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=3'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const moviecard=document.getElementById("moviecard")
function chngcolor(avg){
    if(avg>=8){
    return "badge-green"
    }else if(avg<5){
        return "badge-yellow"
    }else{
        return "badge-orange"
    }
}
let result="";
movieArr.forEach(obj=>{
    result +=`
    <div class=" col-md-4">
    <div class="card mt-4 myCard">
        <div class="card-body">
            <figure>
                <img src="https://image.tmdb.org/t/p/w1280${obj.poster_path}"
                    class="cardImg" alt="pic">
                <figcaption>
                    <div class="row">
                        <div class="col-sm-9">
                            <p class="details title">${obj.title}</p>
                        </div>
                        <div class="col-sm-3">
                            <p class="details rating badge ${chngcolor(obj.vote_average)}">
                            ${obj.vote_average}
                            </p>
                        </div>
                    </div>
                    
                </figcaption>
                <div class="overview">
                    <h4 class="text-center">Overview</h4>
                    <p>${obj.overview}</p>
                </div>
            </figure>
        </div>
</div>  </div>  
             `
})

moviecard.innerHTML=result;
