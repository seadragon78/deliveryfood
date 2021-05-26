const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
/*cartButton.addEventListener ('click', function (event) {
  modal.classList.add('opened');
});*/
/*close.addEventListener ('click', function (event) {
  modal.classList.remove('opened');
});*/
cartButton.addEventListener ('click', togglemodal);
close.addEventListener ('click', togglemodal);
function togglemodal() {
  modal.classList.toggle("opened");
}
new WOW().init();

const buttonIcon = document.querySelector('.button-icon');