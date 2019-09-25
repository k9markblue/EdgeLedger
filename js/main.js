//Map
var map;
      function initMap() {
        map = new google.maps.Map(document.querySelector('.map'), {
          center: {lat: 52.628101, lng: 1.299350},
          zoom: 8
        });
};

//Nav Opacity
window.addEventListener("scroll", function() {
    if (this.window.scrollY > 150){
        document.querySelector("#nav-bar").style.opacity = 0.9;
    } else{
        document.querySelector("#nav-bar").style.opacity = 1;
    }
});

//Smooth Scrolling
$("#nav-bar a, .btn").on("click",  function(event) {
    if (this.hash !== ""){
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top -100
            },
            800
        );
    }
});

