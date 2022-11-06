const scrollIndicator = document.querySelector('.component__scroll-indicator');
const content = document.querySelector('.component__content');

const observer = new IntersectionObserver(callback)
observer.observe(content)

function callback(entries) {
  const { isIntersecting } = entries[0]

  // console.log(entries, isIntersecting);

  if (isIntersecting) {
    window.addEventListener('scroll', indicatorAnimation)
  } else if (!isIntersecting){
    window.removeEventListener('scroll', indicatorAnimation)
  }
}

function indicatorAnimation() {
  if (window.scrollY > content.offsetTop) {
    const percentage = ((window.scrollY - content.offsetTop) / content.scrollHeight * 100).toFixed(2);
    scrollIndicator.style.transform = `scaleX(${(percentage)/100})`
  } else {
    scrollIndicator.style.transform = `scaleX(0)`
  }
}