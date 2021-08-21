const BASE_URL_RAMEN_RESOURCES = "http://localhost:3000/ramens"

// write your code here
//SCRIPT SRC DEFERS
function fetchingRamenResources(){
    fetch(BASE_URL_RAMEN_RESOURCES)
    .then((resp) => resp.json())
    .then(rawData => rawData.forEach(eachRmn => renderRamenDb(eachRmn)))
    //Raw Data Returns as an Array of Objects
}
//DELIVERABLE 1 & 2
function renderRamenDb(thisRamen){
    const ramenTopBarLocale = document.getElementById('ramen-menu')
    const ramenImg = document.createElement('img')

    ramenImg.src = thisRamen.image
    ramenImg.addEventListener('click', (e) => {
        const ramenCenterImg = document.querySelector("#ramen-detail > img")
        const ramenCenterName = document.querySelector("#ramen-detail > h2")
        const ramenCenterRestaurant = document.querySelector("#ramen-detail > h3")
        const ramenRatingField = document.querySelector("body > p:nth-child(5) > span")
        const ramenCommentField = document.querySelector("body > p:nth-child(7)")

        ramenCenterImg.src = thisRamen.image
        ramenCenterName.textContent = thisRamen.name
        ramenCenterRestaurant.textContent = thisRamen.restaurant
        ramenRatingField.textContent = thisRamen.rating
        ramenCommentField.textContent = thisRamen.comment
    })

    ramenTopBarLocale.appendChild(ramenImg)
}

//DELIVERABLE 3
function ramenImportFormFunctionality(){
    const fullRamenForm = document.getElementById('new-ramen')
    /*
    const ramenNameInputBox = document.querySelector("#new-name")
    const ramenRestaurantInputBox = document.querySelector("#new-restaurant")
    const ramenImgInputBox = document.querySelector("#new-restaurant")
    const ramenRatingInputBox = document.querySelector("#new-rating")
    const ramenCommentInputBox = document.querySelector("#new-comment")
    */
    fullRamenForm.addEventListener('submit', (s) => {
        s.preventDefault();
        let newRamenSubmit = {
            comment: s.target["new-comment"].value,
            image: s.target.image.value,
            name: s.target.name.value,
            rating: s.target.rating.value,
            restaurant: s.target.restaurant.value
        }
        renderRamenDb(newRamenSubmit)
        fullRamenForm.reset();
    })
}




//CALLED FUNCTIONS
fetchingRamenResources();
ramenImportFormFunctionality();



/*
EXAMPLE RAMEN OBJ:

0:
comment: "Delish. Can't go wrong with a classic!"
id: 1
image: "./assets/ramen/shoyu.jpg"
name: "Shoyu Ramen"
rating: 7
restaurant: "Nonono"

*/