function Carousel (el, options) {
  this.wrapper = typeof el !== 'object' ? document.querySelector(el) : el
  this.carouselList = this.wrapper.querySelector('.carousel-list')
  this.carouselItems = this.carouselList.children
  this.wrapperWidth = this.wrapper.offsetWidth
  this.index = 1
  this.init()
}

Carousel.prototype.init = function () {
  let carouselList = this.carouselList
  let children = carouselList.children
  if (children) {
    let firstChild = children[0]
    let firstChildClone = firstChild.cloneNode(true)
    let lastChild = children[children.length - 1]
    let lastChildClone = lastChild.cloneNode(true)
    carouselList.insertBefore(lastChildClone, firstChild)
    carouselList.appendChild(firstChildClone)
    carouselList.style.transform = `translateX(${-this.index * this.wrapperWidth}px)`
  }

  let step = () => {
    setTimeout(step, 1000)
    this.translate()
  }
  setTimeout(step, 1000)
}

Carousel.prototype.translate = function () {
  let carouselList = this.carouselList
  this.index ++
  if (this.index === 0) {
    this.index = this.carouselItems.length
  } else if (this.index === this.carouselItems.length - 1) {
    this.index = 1
  }
  carouselList.style.transition = `transform .4s ease`
  carouselList.style.transform = `translateX(${-this.index * this.wrapperWidth}px)`
}

export default Carousel