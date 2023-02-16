const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navElemnt = $(".search__menu");
const navigationElement = $(".navigation");

navElemnt.onclick = function(){
    navigationElement.classList.toggle("display--flex")
}

const footerTittles = $$(".footer__item-title");
const footerItems = $$(".footer__item-list");



footerTittles.forEach((tab, index) => {
  const footerItem = footerItems[index];

  tab.onclick = function () {
    $(".footer__item-list.footer__item-list--active").classList.remove("footer__item-list--active");
    $(".footer__item-title.footer__item--active").classList.remove("footer__item--active");
    tab.classList.add("footer__item--active");
    footerItem.classList.add("footer__item-list--active");


  };
});

const tabs = $$(".category-2__item");
const panes = $$(".category-2__product-list");


tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    console.log(tab)
    $(".category-2__item.category-2__item--active").classList.remove("category-2__item--active");
    $(".category-2__product-list.category-2__product-list--active").classList.remove("category-2__product-list--active");
    
    this.classList.add("category-2__item--active");
    pane.classList.add("category-2__product-list--active");
  };
});

const button = $(".footer__info-scroll")

button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: `smooth`
  })
})

const btnRights = $$('.category__button-right');
const btnLefts = $$('.category__button-left');



let counter = 1; 

btnRights.forEach((btnRight,index)=>{
  btnRight.onclick = () => {
    if(counter<3){
      $(".category__body-list").style.transform = `translateX(calc(-170px* ${counter}))`;
      counter++;
    }else{
      $(".category__body-list").style.transform = `translateX(calc(0))`;
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
