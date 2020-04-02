setInterval(() => {
   let h2 = document.querySelectorAll('.content section div h2');
   for (let i = 0; i<h2.length;i++) {
     h2[i].innerHTML = new Date().toLocaleString();
   }
   
}, 1000);
