const cursorAnime =()=>{
  var cursor = document.querySelector(".cursor")
  var main = document.querySelector(".main")
  var menu = document.querySelector(".menu")
  main.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
      x:dets.x,
      y:dets.y,
      duration:0.5,
    })
  })
  menu.addEventListener("mouseenter",(dets)=>{
    gsap.to(cursor,{
    backgroundColor:"rgba(255, 255, 255, 0.677)",
    scale:1.1,
    })
  })
  menu.addEventListener("mouseleave",(dets)=>{
    gsap.to(cursor,{
    backgroundColor:"black",
    scale:1,
    })
  })
}
cursorAnime()
function loadingTimer() {
  var timer = document.querySelector("#timer h1");
  var timerButton = document.querySelector("#timer button");
  var grow = 0;
  var int = setInterval(function () {
    if (grow < 90) {
      grow += Math.floor(Math.random() * 10);
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


  gsap.to(".RED", {
    x: -30,
    duration: 1,
  }, "logo")
  gsap.to(".YELLOW", {
    x: 55,
    duration: 1,
  }, "logo")


  var btn = document.querySelector("#timer button");
  btn.addEventListener("click", function () {

    var tl = gsap.timeline();

    tl.to(
      ".loader",
      {
        y: "-100%",
        duration: 1,

      },
      "lol"
    );
    tl.to(".main", {
      overflow: "initial",
    });
  });
}

loadingTimer();



const page1Animation = ()=>{
  var page1Text = document.querySelector(".pagetext h1").textContent
var hanime = "";
page1Text.split("").forEach(function (elem) {
  hanime  += `<span>${elem}</span>`
})

document.querySelector(".pagetext h1").innerHTML = hanime ;



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
tl.to(".pagetext h1 span", {
  color: "#000",
  stagger: 0.5,
  
})
tl.to(".slide1", {
  x: 384,
  duration: 1,

  opacity: 1,
  scrollTrigger: {
    trigger: ".slide1",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: "5",
  },
},"lol");
tl.to(".slide2", {
  x: 384,
  duration: 1,
  scrollTrigger: {
    trigger: ".slide1",
    scroller: "body",
    // markers: true,
    start: "top 45%",
    end: "top 20%",
    scrub: "3",
  },
},"lol");
tl.to(".page1 img", {
  x: "-30vw",
  
  scrollTrigger: {
    trigger: ".slide1",
    scroller: "body",
    // markers: true,
    start: "top 44%",
    end: "top 20%",
    scrub: "3",
  },
},"lol");

gsap.to(".box3", {
  y: 110,
  scrollTrigger: {
    trigger: ".page1",
    scroller: "body",
    start: "top -150",
    end: "top -400%",
    scrub: 5,
  },
});
gsap.to(".page3", {
  y: "-100%",

  scrollTrigger: {
    scroller: "body",
    trigger: ".page2",
    start: "top -10%",
    end: " -100% ",
    pin: true,
    scrub: 1,



  }
})
var tl3 = gsap.timeline()
tl3.to(".hoverimg1", {
  y: "28vh",
 x:"0vw",  
  scrollTrigger: {
    scroller: "body",
    trigger: ".slide1",
    start: "top -98%",
    end: " -130% ",
    pin: true,
    scrub: 3,



  }
}, "lol")
tl3.to(".hoverimg2", {
  y: "28vh",
 x:"-31vw",  

  scrollTrigger: {
    scroller: "body",
    trigger: ".slide1",
    start: "top -98%",
    end: " -130% ",
    pin: true,
    scrub: 3,



  }
}, "lol")
tl3.to(".hoverimg3", {
  y: "-21.5vh",
  x: "-34vw",
  scrollTrigger: {
    scroller: "body",
    trigger: ".slide1",
    start: "top -70%",
    end: " -110% ",
    pin: true,
    scrub: 3,



  }
}, "lol")
tl3.to(".hoverimg4", {
  y: "-21.5vh",
  x: "-65.5vw",
  scrollTrigger: {
    scroller: "body",
    trigger: ".slide1",
    start: "top -70%",
    end: " -110% ",
    pin: true,
    scrub: 3,



  }
}, "lol")
tl3.to(".page2 h1", {
  y: -100,
  opacity: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: ".slide1",
    start: "top -65%",
    end: " -100% ",

    scrub: 3,



  }
}, "lol")


}
page1Animation()


const menu = () => {
  const menuButton = document.querySelector(".menuButton");
  const menu = document.querySelector(".menu");
  const body = document.body;
  const menuClose = document.querySelector(".menuClose");
  const scroller = document.querySelector(".scroller");

  let menuTimeline; // Declare a variable to store the timeline

  menuButton.addEventListener("click", () => {
    menu.style.display = "flex";
    body.classList.add("no-scroll");
    menuButton.classList.add("hidden");
    scroller.classList.add('hidden');

    menuTimeline = gsap.timeline(); // Initialize the timeline
    menuTimeline.to(".menu", {
      y: "-100vh",
      duration: 1,
    }, "saath");
    menuTimeline.to(".menudiv1", {
      y: "-100vh",
      delay: 0.25,
      duration: 1,
    }, "saath");
    menuTimeline.to(".menudiv2", {
      y: "-200vh",
      delay: 0.25,
      duration: 1,
    }, "saath");
    menuTimeline.to(".menuImg", {
      y: "-350vh",
      delay: 0.25,
      duration: 1,
    }, "saath");

    menuTimeline.to(".menudiv3", {
      y: "-300vh",
      delay: 0.25,
      duration: 1,
    }, "saath");
    menuTimeline.to(".menudiv4", {
      y: "-400vh",
      delay: 0.25,
      duration: 1,
    }, "saath");
    menuTimeline.to(".menuText h1", {
      y: "-100vh",
      stagger: 0.1,
    }, "close");
    menuTimeline.to(".menuClose", {
      x: "-8vh",
    }, "close");


  });

  menuClose.addEventListener("click", () => {
    if (menuTimeline) {
      menuTimeline.reverse(); // Reverse the timeline
    }

    menuTimeline.eventCallback("onReverseComplete", () => {
      menu.style.display = "none";
      body.classList.remove("no-scroll");
      menuButton.classList.remove("hidden");
      scroller.classList.remove('hidden'); // Hide the menu after reverse animation completes
    });


  });
};
menu()

const menuTextHover = () => {
  var hoverTimeline = gsap.timeline({ paused: true });
  const images = document.querySelectorAll(".menuImg img");


  document.querySelector(".menuText").addEventListener("mouseenter", function (event) {
    if (event.target.classList.contains("gogo")) {
      var span = event.target.querySelector("span");
      var index = event.target.getAttribute("data-index");

      // Animate the span
      hoverTimeline.clear(); // Clear the timeline for each new hover event
      hoverTimeline.to(span, {
        left: "100%",
        color: "#f036e0"
      }).to(span, {
        left: "-100%",
        duration: 0.0001,
      });
      hoverTimeline.play();

      // Show the corresponding image
      gsap.to(images, {
        y: "56vh",

        onComplete: function () {
          images.forEach((img, i) => {
            if (i == index) {
              gsap.to(img, { y: "-56vh" });
            }
          });
        }
      });
      // Change the color of the h1 element
      gsap.to(event.target, {
        color: colors[index],
        duration: 0.5
      });
    }
  }, true);

  document.querySelector(".menuText").addEventListener("mouseleave", function (event) {
    if (event.target.classList.contains("gogo")) {
      var span = event.target.querySelector("span");

      // Animate the span
      hoverTimeline.clear(); // Clear the timeline for each new leave event
      hoverTimeline.to(span, {
        left: "0"
      });
      hoverTimeline.play();

    }
  }, true);
};

menuTextHover();

const page3Animation = () => {
  gsap.to(".Page3Image img", {
    y: "-130vh",
    duration:5,
    scrollTrigger: {
      scroller: "body",
      trigger: ".page3Image img",
      start: "250% top",
      end: "200% -100%",
      pin: true,
      scrub: 5,
    }
  })
}

page3Animation()

const page4Animation =()=>{

 
gsap.to(".part1",{
  x:"-100%",
 scrollTrigger:{
  scroller:"body",
  trigger:".page4",
  start:"top 0%",
  end:" -90% ",
  scrub:1,
  pin:true,
}
},"lol")
}
page4Animation()


