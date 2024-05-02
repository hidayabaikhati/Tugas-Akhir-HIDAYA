document.addEventListener("DOMContentLoaded", function() {
    
    addPhotosToGallery();
  });
  
  function addPhotosToGallery() {
    var photoGallery = document.getElementById('photoGallery');
  
    
    var photoData = [
      { src: 'WhatsApp Image 2023-12-22 at 17.44.58_def9e8fa.jpg', alt: 'Foto Hidaya' },
      { src: 'WhatsApp Image 2023-12-23 at 07.30.44_2a5bfc75.jpg', alt: 'Foto Menarik 2' },
      { src: 'WhatsApp Image 2023-12-23 at 08.10.33_49193168.jpg', alt: 'Foto Menarik 3' },
      
    ];
  
  
    photoData.forEach(function(data) {
      var imgElement = document.createElement('img');
      imgElement.src = data.src;
      imgElement.alt = data.alt;
  
      photoGallery.appendChild(imgElement);
    });
  }
  