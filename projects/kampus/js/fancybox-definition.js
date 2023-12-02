/* Vypravna galerie */
document.addEventListener('DOMContentLoaded', function () {
    var galleryItems = document.querySelectorAll('.gallery-item');
  
    // Process gallery items
    processGalleryItems();
  
    function processGalleryItems() {
      galleryItems.forEach(function (item, index) {
        var h4 = item.querySelector('.gallery-item-title');
        var p = item.querySelector('.gallery-item-description');
  
        // If elements are found, insert values
        if (h4 && p) {
          // Set data-caption attribute on the anchor element
          var parentElement = item.querySelector('.gallery-lightbox-wrapper');
          if (parentElement && parentElement.tagName === 'A') {
            var title = h4.textContent.trim();
            var description = p.textContent.trim();
  
            parentElement.setAttribute('data-caption', `<h3>${title}</h3><p>${description}</p>`);
          } else {
            console.error('Parent of the image is not an anchor element for', item);
          }
        }
        
        // Additional logic for copying src attribute to the direct parent's href
        var img = item.querySelector('img');
        if (img) {
          var parentElement = item.querySelector('.gallery-lightbox-wrapper');
          if (parentElement && parentElement.tagName === 'A') {
            var imgSrc = img.src;
            parentElement.href = imgSrc;
          } else {
            console.error('Parent of the image is not an anchor element for', item);
          }
        }
      });
      Fancybox.bind('[data-fancybox]', {
          contentClick: false,
          Images: {
              Panzoom: {
                  maxScale: 0,
              },
              
          },
          Toolbar: {
              display: {
                  left: '',
                  middle: '',
                  right: ["close"],
              },
          },
      })
    }
});
/* Vypravna galerie */