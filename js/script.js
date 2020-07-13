const jumbo = document.querySelector('.figure-img');
const container = document.querySelector('figcaption');

container.addEventListener('click', function (e) {
    if (e.target.className === 'thumb') {
        jumbo.src = e.target.src;
    }
});