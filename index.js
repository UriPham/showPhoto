var imgs = document.querySelectorAll('.image img')
var prev = document.querySelector('.gallery__prev')
var next = document.querySelector('.gallery__next')
var close = document.querySelector('.gallery__close')
var gallery = document.querySelector('.gallery')
var galleryInner = document.querySelector('.gallery__inner img')

function showGallery () {

    if (currentIndex == 0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }

    if (currentIndex == imgs.length -1) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')
    }

    gallery.classList.add('show')
    galleryInner.src = imgs[currentIndex].src
}

imgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index
        showGallery()
    })
})

gallery.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
        gallery.classList.remove('show')
    }
})

close.addEventListener('click', () => {
    gallery.classList.remove('show')
})

document.addEventListener('keydown', e => {
    if (e.keycode === 27) {
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--
        showGallery()
    }
})

next.addEventListener('click', () => {
    if (currentIndex < imgs.length -1) {
        currentIndex++
        showGallery()
    }
})