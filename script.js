
/* Change text content of job-text on mouseouver and mouseout */
let h_jobs = document.getElementById("h-jobs");
h_jobs.addEventListener('mouseover', ()=>{
h_jobs.textContent = "Freelancer";
});

h_jobs.addEventListener('mouseout', ()=>{
    h_jobs.textContent = "Full-stack Developer";
    });


/* Change text content of logo-text on mouseouver and mouseout */
    let _header = document.querySelector("header");
    let h_Acher = document.getElementById("h-Acher");
    let h_Mouk = document.getElementById("h-Mouk");
     -
    _header.addEventListener('mouseover', ()=>{
        h_Acher.textContent = "ACHERMO";
        h_Mouk.textContent = "UK";

    });
    _header.addEventListener('mouseout', ()=>{
        h_Acher.textContent = "A";
        h_Mouk.textContent = "K";

    });

   

    
/* skills circle bar */
   

    let html_value = document.getElementById("html-value");
    let css_value = document.getElementById("css-value");
    let js_value = document.getElementById("js-value");
    let php_value = document.getElementById("php-value");
    let under_circle1 = document.getElementById("under-circle1");
    let under_circle2 = document.getElementById("under-circle2");
    let under_circle3 = document.getElementById("under-circle3");
    let under_circle4 = document.getElementById("under-circle4");

    pourcentage_value(under_circle1, html_value , 80);
    pourcentage_value(under_circle2, css_value , 80);
    pourcentage_value(under_circle3, js_value , 85);
    pourcentage_value(under_circle4, php_value , 76);


  /* create function to load circle bar*/

    function pourcentage_value(under_circle, skill_value , _value) {
        let value_container = skill_value;
        let begin_value = 0;
        let speed = 20;
        let progress = setInterval(() =>{
            begin_value++;
            value_container.textContent = ""+begin_value+"%";
            under_circle.style.background = "conic-gradient(rgb(84, 151, 177) "+begin_value*3.6+"deg, white "+begin_value*3.6+"deg)";
            if(begin_value == _value){
                clearInterval(progress);
            }
    
        },speed);
    }


    /* show and hide ul */
    

    let toggle_menu_container = document.getElementById("toggle_menu_container");
    let menu_div = document.getElementById("list_menu");
    let toggle_clicked = document.querySelector(".toggle.clicked");


    


    function myFunction(x) {
        if (x.matches) { // If media query matches
          menu_div.style.visibility = "hidden";
        } else {
          menu_div.style.visibility = "visible";
          menu_div.style.transform="none";
          if(toggle_menu_container.classList.contains("clicked")){
            toggle_menu_container.classList.remove("clicked");
          }
          _header.style.height = "80px";
          _header.style.alignItems="center";

          


        }
      }
      
      var x = window.matchMedia("(max-width: 800px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction);


       /* Hamburger menu click */
      toggle_menu_container.addEventListener('click', ()=>{
        if(!toggle_menu_container.classList.contains("clicked")){
         toggle_menu_container.classList.add("clicked");
         menu_div.style.visibility = "visible";
         menu_div.style.width = "100%";
         menu_div.style.transform= "translateY(60px) translateX(-50%)";
         _header.style.height = "130px";
          _header.style.alignItems="flex-start";
        }else{
         toggle_menu_container.classList.remove("clicked");
         menu_div.style.visibility = "hidden";
         _header.style.height = "80px";
          _header.style.alignItems="center";
        }
     
        });

        
    
    
