const gallery = document.getElementById('gallery');

async function getImages() {
  const response = await fetch('https://picsum.photos/v2/list');
  const data = await response.json();
  return data;
}

async function displayImages() {
  const images = await getImages();
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image.download_url;
    img.alt = image.author;
    img.classList.add('image');
    gallery.appendChild(img);
  });
}

displayImages();
