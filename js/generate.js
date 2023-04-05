function getImages(callback) {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://picsum.photos/v2/list', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      var randomData = [];
      for (var i = 0; i < 30; i++) {
        var index = Math.floor(Math.random() * data.length);
        randomData.push(data[index]);
      }
      callback(randomData);
    } else {
      console.error('Error fetching images from API');
    }
  };
  request.onerror = function() {
    console.error('Error fetching images from API');
  };
  request.send();
}

function displayImages(data) {
  var gallery = document.getElementById('gallery');
  data.forEach(function(image) {
    var img = document.createElement('img');
    img.src = image.download_url;
    img.alt = image.author;
    img.classList.add('image');
    
    var likeButton = document.createElement('button');
    likeButton.innerText = 'Like';
    likeButton.addEventListener('click', function() {
      toggleLike(img);
    });
    
    var imageContainer = document.createElement('div');
    imageContainer.appendChild(img);
    imageContainer.appendChild(likeButton);
    gallery.appendChild(imageContainer);
  });
}

function toggleLike(img) {
  if (img.classList.contains('liked')) {
    img.classList.remove('liked');
  } else {
    img.classList.add('liked');
  }
}

getImages(displayImages);


function createShareButtons(img) {
  var shareBtns = document.createElement('div');
  shareBtns.classList.add('share-btns');
  
  // Facebook share button
  var fbBtn = document.createElement('button');
  fbBtn.classList.add('share-btn');
  fbBtn.innerHTML = '<i class="fa fa-facebook"></i> Share on Facebook';
  fbBtn.addEventListener('click', function() {
    var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(img.src);
    window.open(shareUrl, '_blank');
  });
  
  // Twitter share button
  var twBtn = document.createElement('button');
  twBtn.classList.add('share-btn');
  twBtn.innerHTML = '<i class="fa fa-twitter"></i> Share on Twitter';
  twBtn.addEventListener('click', function() {
    var shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(img.src);
    window.open(shareUrl, '_blank');
  });
  
  // Instagram share button
  var igBtn = document.createElement('button');
  igBtn.classList.add('share-btn');
  igBtn.innerHTML = '<i class="fa fa-instagram"></i> Share on Instagram';
  igBtn.addEventListener('click', function() {
    var shareUrl = 'https://www.instagram.com/?url=' + encodeURIComponent(img.src);
    window.open(shareUrl, '_blank');
  });
  
  shareBtns.appendChild(fbBtn);
  shareBtns.appendChild(twBtn);
  shareBtns.appendChild(igBtn);
  
  return shareBtns;
}

function displayImages(data) {
  var gallery = document.getElementById('gallery');
  data.forEach(function(image) {
    var img = document.createElement('img');
    img.src = image.download_url;
    img.alt = image.author;
    img.classList.add('image');
    
    var likeButton = document.createElement('button');
    likeButton.innerText = 'Like';
    likeButton.addEventListener('click', function() {
      toggleLike(img);
    });
    
    var shareBtns = createShareButtons(img);
    
    var imageContainer = document.createElement('div');
    imageContainer.appendChild(img);
    imageContainer.appendChild(likeButton);
    imageContainer.appendChild(shareBtns);
    gallery.appendChild(imageContainer);
  });
}

getImages(displayImages);

