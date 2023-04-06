# Picsum Gallery
This is a simple web gallery that displays a random selection of images from picsum.photos. The gallery allows users to like and share images on Facebook, Twitter, and Instagram.

# How to Use
To use the gallery, simply open the index.html file in your web browser. The gallery will display a random selection of 30 images from the picsum.photos API.

To like an image, click on the "Like" button below the image. The liked images will have a green border around them.

To share an image on Facebook, Twitter, or Instagram, click on the corresponding share button below the image.

# overview of the whole code
The gallery is built using HTML, CSS, and JavaScript. The HTML file (index.html) contains the basic structure of the gallery, including the header, gallery container, and JavaScript script tag.

The CSS file (generate.css) contains the styles for the gallery, including the font family, image display properties, and like button styles.

The JavaScript file (generate.js) fetches a random selection of images from the picsum.photos API and displays them in the gallery container. It also adds functionality to the like and share buttons.

The getImages() function uses an XMLHttpRequest to fetch a list of images from the API. It then selects a random subset of 30 images from the list and passes them to the displayImages() function.

The displayImages() function creates an image container for each image and adds it to the gallery container. Each image container includes the image itself, a like button, and a share button container.

The toggleLike() function adds or removes the "liked" class from an image when the like button is clicked.

The createShareButtons() function creates the share button container for each image. It includes share buttons for Facebook, Twitter, and Instagram, each of which opens a new window with a share link when clicked.

# License
Picsum Gallery is licensed under the MIT License. See the LICENSE file for more information.


# Conclusion
This is a simple web gallery that demonstrates basic HTML, CSS, and JavaScript skills. It can be easily customized to add new features or change the look and feel of the gallery.it is also my first project i hope i tried my best using the little knowledge i have so far.







