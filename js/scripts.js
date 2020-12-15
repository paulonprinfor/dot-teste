var scrollBtn = document.querySelector('.section-btn')

scrollBtn.addEventListener('click', scrollToIdOnClick)

function scrollToIdOnClick(event){
  event.preventDefault();
  const element = event.target.parentNode;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;
 window.scroll({
   top: to-38,
   behavior: "smooth",
 });
}
