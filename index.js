const shareBtn = document.querySelector('.share-icon');
const shareOptions = document.querySelector('.container__share-options');
const viewportWidth = window.innerWidth;



if (viewportWidth > 760) {
    shareBtn.addEventListener('click',  () => shareOptions.classList.add('active'));
    shareBtn.addEventListener('blur',  () => shareOptions.classList.remove('active'));
    
} else {
    shareBtn.addEventListener('click',  () => shareOptions.classList.add('active-mobile'));
    shareBtn.addEventListener('blur',  () => shareOptions.classList.remove('active-mobile'));
}