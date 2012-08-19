function Images(){
   this.getAllImages = function(){
      var arrayImages = Array();
      var domArray = document.getElementsByTagName("img");

      for(i in domArray){
         var urlImage = domArray[i].src;
         arrayImages.push(urlImage);
         console.log(urlImage)
      }
      return arrayImages;
   }

   this.showAllImages = function(){
      var arrayUrlImages = this.getAllImages().sort();
      var divImages = this.getDivImages();
      var buttonClose = this.createCloseButton();

      divImages.appendChild(buttonClose);

      for(i in arrayUrlImages){
         var imageUrl = arrayUrlImages[i];
         var brDOM = document.createElement("br");
         
         centerDOM = this.createImageFromUrl(imageUrl)
         divImages.appendChild(centerDOM);
         divImages.appendChild(brDOM);
      }
   }

   this.getDivImages = function(){
      var divImages = document.createElement("div");
      divImages.id = "divImages";
      
      divImages.style.top = "10px";
      divImages.style.zIndex = "1000";
      divImages.style.width = "400px";
      divImages.style.height = "400px";
      divImages.style.overflow = "auto";   
      divImages.style.position = "fixed";
      divImages.style.background = "white";
      
      document.body.appendChild(divImages);
      return divImages;
   }

   this.createImageFromUrl = function(imageUrl){
      var aDOM = document.createElement("a");
      var imgDOM = document.createElement("img");
      var centerDOM = document.createElement("center");
      
      aDOM.href = imageUrl;
      imgDOM.src = imageUrl;
      aDOM.appendChild(imgDOM);
      centerDOM.appendChild(aDOM);

      return centerDOM;
   }

   this.createCloseButton = function(){
      var buttonClose = document.createElement("input");

      buttonClose.id = "buttonClose";
      buttonClose.type = "button";
      buttonClose.value = "X";
      buttonClose.onclick = function(){
         divImages.hidden = true;
      }

      return buttonClose;
   }
}

var img = new Images();
img.showAllImages();
