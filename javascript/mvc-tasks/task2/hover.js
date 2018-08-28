var countStars = 4;

function click(star) {
    countStars = star.getAttribute('aria-valuetext');
    var allStars = star.parentNode.parentNode.getElementsByTagName('i');
    for (let i = 0; i < countStars; i++){
        console.log(allStars[i]);
        allStars[i].setAttribute('class', 'fa fa-star');
    }
    for (let i = countStars; i < allStars.length; i++){
        console.log(allStars[i]);
        allStars[i].setAttribute('class', 'fa fa-star-o');
    }
}

/*var stars = document.getElementsByClassName("fa fa-star")
var starsEmpty = document.getElementsByClassName("fa fa-star-o");*/
var stars = [];
stars = Array.prototype.concat.apply(stars, document.getElementsByClassName("fa fa-star"));
stars = Array.prototype.concat.apply(stars, document.getElementsByClassName("fa fa-star-o"));
console.log(stars);
for (let i = 0; i < stars.length; i++){
    stars[i].addEventListener('click', function () {
        click(this);
        console.log('click event');
    });
    stars[i].addEventListener('mouseover', function () {
        console.log('mouseover event');
    });
}