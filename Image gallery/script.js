const gallery = document.getElementById('gallery');

const images = [
    'https://via.placeholder.com/300/0000FF',
    'https://via.placeholder.com/300/FF0000',
    'https://via.placeholder.com/300/00FF00',
    'https://via.placeholder.com/300/FFFF00',
    'https://via.placeholder.com/300/FF00FF',
    'https://via.placeholder.com/300/00FFFF'
];

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
});
