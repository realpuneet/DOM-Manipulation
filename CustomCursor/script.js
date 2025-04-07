let main = document.querySelector('#main')
let cursor = document.querySelector('.cursor')


main.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px'
    cursor.style.top = e.pageY + 'px'
    cursor.style.cursor = 'pointer'
    cursor.style.smooth = 'all 0.1s ease'
})