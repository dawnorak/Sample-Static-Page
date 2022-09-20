/*Loads facts using AJAX*/
function loadJoke(){
  var ajax = new XMLHttpRequest();
  ajax.open('GET','https://catfact.ninja/fact',true);
  ajax.send();
  ajax.onreadystatechange = function(){
      if(this.readyState==4){
          if(this.status==200){
              var json = JSON.parse(this.responseText);
              console.log(json)
              var html = '<p>'+json.fact+'</p>';
              document.querySelector('#about').innerHTML = html;
          }
      }
  }
}

/*Loads dog pictures using AJAX*/
function dogPic(){
  var ajax = new XMLHttpRequest();
  ajax.open('GET','https://dog.ceo/api/breeds/image/random',true);
  ajax.send();
  ajax.onreadystatechange = function(){
      if(this.readyState==4){
          if(this.status==200){
              var json = JSON.parse(this.responseText);
              console.log(json)
              var img = json.message;
              var html = '<p><img src = "'+img+'"></p>';
              document.querySelector('#about').innerHTML = html;
          }
      }
  }
}

/*Dark Mode Toggle*/
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

/*Function for the open form*/
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

/*Function for the close action*/
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

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
/*Friend Button*/
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
/*Friend Button*/
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
