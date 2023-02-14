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

const button = $(".footer__info-scroll")

button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: `smooth`
  })
})

const btnRights = $$('.button__navigation-right');
const btnLefts = $$('.button__navigation-left');

const slideItem = $$('.section__4-item ');

let counter = 1;

btnRights.forEach((btnRight,index)=>{
  btnRight.onclick = () => {
    if(counter<3){
      $(".section__4-list").style.transform = `translateX(calc(-170px* ${counter}))`;
      counter++;
    }else{
      $(".section__4-list").style.transform = `translateX(calc(0))`;
      counter=0;
    }
  };
});

btnLefts.forEach((btnLeft,index)=>{
  btnLeft.onclick = () => {
    if(counter>1){
      $(".section__4-list").style.transform = `translateX(calc(170px* ${counter-2}))`;
      counter--;
    }
  };
});
