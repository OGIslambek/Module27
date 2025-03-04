const ShowGreeting = () => alert("Приветствуем Вас на странице 'О проекте'");

function Comment() {
    this.author = prompt("Напишите Ваше имя:");
    this.text = prompt("Напишите Ваш отзыв:");
    this.date = new Date().toLocaleString();

}
function GetComment() {
    let comment = new Comment();

    if (comment.author != "" && comment.text != "") {
        let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?');
        if (enableLikes) {
            let review = Object.create(comment);
            review.rate = 0;
            writeReview(review);
        }
        else {
            writeReview(comment);
        }
    }
    else {
        alert('Вы не указали Ваше имя и/или текст комментария\nПОПРОБУЙТЕ СНОВА!!!');
    }

}
function addLike(id) {
    let element = document.getElementById(id);
    let array = element.innerText.split(' ');
    let resultNum = parseInt(array[array.length - 1], 10);
    resultNum += 1;
    array[array.length - 1] = `${resultNum}`;
    element.innerText = array.join(' ');
}

const writeReview = review => {
    let likeCounter = '';
    if (review.hasOwnProperty('rate')) {
        let commentId = Math.random();
        likeCounter += '<button id="' + commentId + '" class="button-rate"" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`;
    }
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}
function showPicturesFlow() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        slides[n].classList.add('active');
        currentSlide = n;
    }
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 37) {
            if (currentSlide == 0) showSlide(currentSlide + 2);
            else showSlide(currentSlide - 1);
        } else if (e.keyCode === 39) {
            if (currentSlide == 2) showSlide(currentSlide - 2);
            else showSlide(currentSlide + 1);
        }
    });
}