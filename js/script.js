console.log("JS File is Working");

document.addEventListener("DOMContentLoaded", function () {
   
    const icons = document.querySelectorAll("svg");

    icons.forEach((icon) => {
      icon.addEventListener("click", function () {
       
        console.log("You clicked:", this.id); });  });  });

         
    
