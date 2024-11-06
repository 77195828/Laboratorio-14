document.addEventListener('DOMContentLoaded',function(){
   const button = document.getElementById('changeTextButton');
   button.addEventListener('click', function(){
    const IntroSection=document.getElementById('intro');
  IntroSection.innerHTML= '<p>El texto ha cambiado despues de hacer click en el boton! </p>';
  });
 });