function loadingTimer() {
    var timer = document.querySelector("#timer h1");
    var timerButton = document.querySelector("#timer button");
    var grow = 0;
    var int = setInterval(function () {
      if (grow < 90) {
        grow += Math.floor(Math.random() * 20);
        timer.innerHTML = grow + "%";
      } else {
        grow = 100;
        timer.innerHTML = grow + "%";
        timer.style.transform = "translateY(-100%)";
        timerButton.style.transform = "translateY(-100%)";
        timerButton.style.opacity = "1";
  
        clearInterval(int);
      }
    }, Math.floor(Math.random() * 300));
  

    gsap.to(".RED",{
      x:-30,
      duration:1,
    },"logo")
    gsap.to(".YELLOW",{
        x:30,
      duration:1,
    },"logo")

    
    var btn = document.querySelector("#timer button");
    btn.addEventListener("click", function () {
      var tl = gsap.timeline();

      tl.to(
        ".loader",
        {
          y: "-100%",
          duration:1,
        },
        "lol"
      );
      tl.to(".main", {
        overflow: "initial",
      });
    });
  }
  
  loadingTimer();

  
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page1",
      scroller: "body",
      start: "top 0",
      end: "top -50%",
      pin: true,
      scrub: 1,
    },
  });
  tl.to(".slide1", {
    x: 350,
  duration:1,

    opacity: 0,
    scrollTrigger: {
      trigger: ".slide1",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top 20%",
      scrub: "5",
    },
  });
  tl.to(".slide2", {
    x: 390,
  duration:1,
    scrollTrigger: {
      trigger: ".slide1",
      scroller: "body",
      // markers: true,
      start: "top 45%",
      end: "top 20%",
      scrub: "3",
    },
  });
 
  gsap.to(".box3", {
    y: 62,
    scrollTrigger: {
      trigger: ".page1",
      scroller: "body",
      start: "top -150",
      end: "top -240%",
      scrub: 5,
    },
   });


      