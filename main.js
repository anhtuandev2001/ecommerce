const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navElemnt = $(".nav__menu");
const navigationElement = $(".navigation__list");

navElemnt.onclick = function(){
    navigationElement.classList.toggle("display--flex")
}

const footerTittles = $$(".footer__item-tittle");
const footerItems = $$(".footer__item-list");



footerTittles.forEach((tab, index) => {
  const footerItem = footerItems[index];

  tab.onclick = function () {
    $(".footer__item-list.footer__item-list--active").classList.remove("footer__item-list--active");
    $(".footer__item-tittle.footer__item--active").classList.remove("footer__item--active");
    tab.classList.add("footer__item--active");
    footerItem.classList.add("footer__item-list--active");


  };
});

const tabs = $$(".section__6-ingredient");
const panes = $$(".section__6-list");


tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    console.log(tab)
    $(".section__6-ingredient.section__6-ingredient--active").classList.remove("section__6-ingredient--active");
    $(".section__6-list.section__6-list--active").classList.remove("section__6-list--active");
    
    this.classList.add("section__6-ingredient--active");
    pane.classList.add("section__6-list--active");
  };
});