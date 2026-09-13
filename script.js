function openMenu(){
    document.getElementById("sidebar").style.width = "250px";
}
function closeMenu(){
    document.getElementById("sidebar").style.width = "0";
}

const prayersForm = document.getElementById('prayersForm');
if (prayersForm) {
    const successMessage = document.getElementById('successMessage');
const nameInput = document.getElementById('name');
const requestInput = document.getElementById('request');
const nameError = document.getElementById('nameError');
const requestError = document.getElementById('requestError');
prayersForm.addEventListener('submit',function(event){
    event.preventDefault();
    let hasError = false;
    if(nameInput.value === ''){
        nameError.textContent = 'Please enter your name.';
        hasError = true;
    }
    if(requestInput.value === ''){
        requestError.textContent = 'Please enter your prayer request.';
        hasError = true;
    }
    if(hasError){
        return;
    }
    successMessage.textContent = 
    "Thank you for sharing your prayer request. We are praying with you. May God bless you and do you great things.";
    prayersForm.reset();
});
}

const topBtn = document.getElementById("topBtn");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 200){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
    topBtn.addEventListener("click",function(){
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    });
};
function scrollPhotos(direction) {
    const photos = document.querySelector('.about-photos');

    photos.scrollBy({
        left: direction * photos.clientWidth,
        behavior: 'smooth'
    });
}
setInterval(function() {
    const photos = document.querySelector('.home-about-slider');

    if (photos) {
        photos.scrollBy({
            left: photos.clientWidth,
            behavior: 'smooth'
        });
    }
}, 3000);
