images = ['https://i.postimg.cc/4yNHfKFF/cropped-1.jpg', 'https://i.postimg.cc/mZXGpzRp/cropped.jpg', 'https://i.postimg.cc/ydWz7syy/playground.jpg']
current = 0

// go to next image
document.getElementById('next').addEventListener('click', () => {
    next = (current + 1) % 3
    document.getElementById('carousel').src = images[next]
    prev = current % (images.length)

    // show active image by color of the dot
    document.getElementById('dot' + prev).style.color = '#333'
    document.getElementById('dot' + next).style.color = '#7F00FF'

    // update the current
    current = next;


})

// go to prev image
document.getElementById('prev').addEventListener('click', () => {
    prev = (current - 1 + 3) % images.length // for negative mod calculation eg. (- 1 + 3 ) mod 3 = 2 which is expected
    document.getElementById('carousel').src = images[prev]
    next = current % (images.length)

    // show active image by color of the dot
    document.getElementById('dot' + prev).style.color = '#7F00FF'
    document.getElementById('dot' + next).style.color = '#333'
    current = prev;
    console.log(prev, current, next)
})