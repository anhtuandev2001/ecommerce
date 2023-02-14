const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navElemnt = $(".nav__menu");
const navigationElement = $(".navigation__list");

navElemnt.onclick = function(){
    navigationElement.classList.toggle("display--flex")
}

const tabs = $$(".footer__item-tittle");
const panes = $$(".footer__item-list");



tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".footer__item-list.footer__item-list--active").classList.remove("footer__item-list--active");
    $(".footer__item-tittle.footer__item--active").classList.remove("footer__item--active");
    tab.classList.add("footer__item--active");
    pane.classList.add("footer__item-list--active");


  };
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}