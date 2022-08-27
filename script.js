const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

  function myFunction(){
    alert("Not Available a the Moment, Sorry!!!");
  }
  function submit(){
    alert("Thank You for the Response!");
  }
  function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
  }
  function imgChange(){ //Function to facilitate the image in dark mode which did not work, hence had to use toggle
    var img = document.getElementById("button");
    if (img.src = "https://cdn-icons-png.flaticon.com/512/5558/5558226.png")
      img.src = "https://cdn-icons-png.flaticon.com/512/5558/5558220.png";
    else
      img.src = "https://cdn-icons-png.flaticon.com/512/5558/5558226.png";
  }
  function buttons(){
    darkMode();
    imgChange();
  }
  var clicked = false;
  function toggle1(){
    if (!clicked){
      clicked = true;
      document.getElementById("sub1").innerHTML = "Reuqest Sent!";
    }
    else{
      clicked = false;
      document.getElementById("sub1").innerHTML = "Become Friend";
    }
  }
  function toggle2(){ 
    if (!clicked){
      clicked = true;
      document.getElementById("sub2").innerHTML = "Reuqest Sent!";
    }
    else{
      clicked = false;
      document.getElementById("sub2").innerHTML = "Become Friend";
    }
  }
  function toggle3(){
    if (!clicked){
      clicked = true;
      document.getElementById("sub3").innerHTML = "Reuqest Sent!";
    }
    else{
      clicked = false;
      document.getElementById("sub3").innerHTML = "Become Friend";
    }
  }
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; // Display the default slider value
  slider.oninput = function() {
  output.innerHTML = this.value;
  }
