window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
  
    if (verticalScrollPx < 100) {
      document.getElementById("navbar").classList.remove("scrolled");
    } else if (verticalScrollPx > 100) {
        document.getElementById("navbar").classList.add("scrolled");
    } 
});
function toggleHamburger(){
    document.getElementById("navbarButtonsDiv").classList.toggle("hamburgerOpened");
    document.getElementById("navbar").classList.toggle("hamburgerBackground");
}

window.onload = function () {
    var elements = document.getElementsByClassName("trainerImgDiv");
    //console.log(elements);
    for (let i = 0; i<elements.length;i++){
        elements[i].addEventListener('mouseover', function() {
            elements[i].lastElementChild.firstElementChild.classList.add("trainerWindowActive");
        });
        elements[i].addEventListener('mouseout', function() {
            elements[i].lastElementChild.firstElementChild.classList.remove("trainerWindowActive");
        });
    }
    var buttons = document.getElementsByClassName("clTabButton");
    for (let i = 0; i<buttons.length;i++){
        buttons[i].addEventListener('click', function(){
            Array.from(document.querySelectorAll('.clTabButton')).forEach(
                (el) => el.classList.remove('tabActive')
              );
            buttons[i].classList.add("tabActive");
            Array.from(document.querySelectorAll('.clTab')).forEach(
                (el) => el.classList.remove('activeDiv')
              );
            //console.log(buttons[i].id);
            document.getElementById(buttons[i].id.slice(0, -6)).classList.add('activeDiv');
            //activeDiv
        });
    }
};

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 75);
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      calculateBMI();
    }
  });
function calculateBMI() {
    var heightInput = document.getElementById('height').value;
    var weightInput = document.getElementById('weight').value;
  
    if (heightInput && weightInput) {
      var height = parseFloat(heightInput) / 100; 
      var weight = parseFloat(weightInput);
      var bmi = weight/ (height * height);
        console.log(bmi);
      //    updateArrow(bmi);
        
    var arrow = document.getElementById('bmiArrow');
    var temp = 100*((bmi-20)/(35-20))*1+26;
    temp = bmi*2;
    if(temp<26){
        temp = 26;
    }else if(temp>73){
        temp = 73;
    }
    console.log(temp);
    arrow.style.left=temp+"%";
    //13 86
    }
  }
  
