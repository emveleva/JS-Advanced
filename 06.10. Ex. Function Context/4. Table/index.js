function solve() {
   const tr = document.getElementsByTagName('tr');
   let lastClicked;
  
   [...tr].forEach((row) => {
     row.addEventListener('click', (event) => {
       const element = event.target.parentNode.style;
  
       if (!element.backgroundColor) {
  
         element.backgroundColor = '#413f5e';
  
         if (lastClicked) {
           lastClicked.backgroundColor = '';
         }
  
       } else {
         element.backgroundColor = '';
       }
  
       lastClicked = element;
     });
   });
 }
