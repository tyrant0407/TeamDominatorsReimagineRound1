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
  
    var btn = document.querySelector("#timer button");
    btn.addEventListener("click", function () {
      var tl = gsap.timeline();
      tl.to(
        ".loader",
        {
          y: "-100%",
        },
        "lol"
      );
      tl.to(".main", {
        overflow: "initial",
      });
    });
  }
  
  loadingTimer();
  // gsap.to(".slite1",{
  //     x:350,
  //     opacity:0,
  //     scrollTrigger:{
  //         trigger:".slite1",
  //         scroller:"body",
  //         markers:true,
  //         start:"top 50%",
  //         end:"top 20%",
  //         scrub:"5",
  
  //     }
  // })
  // gsap.to(".slite2",{
  //     x:350,
  
  //     scrollTrigger:{
  //         trigger:".slite1",
  //         scroller:"body",
  //         markers:true,
  //         start:"top 45%",
  //         end:"top 20%",
  //         scrub:"3",
  
  //     }
  // })
  
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
  tl.to(".slite1", {
    x: 350,
    opacity: 0,
    scrollTrigger: {
      trigger: ".slite1",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top 20%",
      scrub: "5",
    },
  });
  tl.to(".slite2", {
    x: 390,
  
    scrollTrigger: {
      trigger: ".slite1",
      scroller: "body",
      // markers: true,
      start: "top 45%",
      end: "top 20%",
      scrub: "3",
    },
  });
  
  gsap.to(".box3", {
    y: 60,
    scrollTrigger: {
      trigger: ".page1",
      scroller: "body",
      start: "top -150",
      end: "top -240%",
  
      scrub: 5,
    },
  });
      