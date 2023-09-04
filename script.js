const mainSection = document.querySelector('.section_one')
const thankyouSection = document.querySelector('.thankyou-container')

const ratingCard = document.querySelector('.rating-btns')
const ratingValues = document.querySelectorAll('.rating-num')

const submitBtn = document.querySelector('.submit-btn')
const pickedRating = document.querySelector('.display-rating')
let rating;


let parseRating = (e) => {
    ratingValues.forEach(item => item.classList.remove('active-rate'))
    e.target.classList.add('active-rate')
    rating = e.target.innerText
}

// thank you page display
let getRating = (e) => {
    e.preventDefault
    mainSection.style.display = "none"
    thankyouSection.style.display = "flex"
    pickedRating.innerText = `${rating}`
}


ratingCard.addEventListener('click', parseRating);

submitBtn.addEventListener('click', getRating)
