TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
    //options here
    autoScrolling: true,
    navigation: true,
    ///////////////////all belong to GSAP library///////////////////
    onLeave: (origin, destination, direction) => {
      const section = destination.item;
      console.log(destination);
      const title = section.querySelector("h1");
      const tl = new TimelineMax({ delay: 0.5 });
      ////starting and ending position
      tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
      ///////this say to this animation only on section 1
      if (destination.index === 1) {
        const chairs = document.querySelectorAll(".chair");
        const description = document.querySelector(".description");
        ///////adding chairs on top of eachother look like changing color
        tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-10%" })
          .fromTo(
            description,
            0.5,
            { opacity: 0, y: "50" },
            { y: "0", opacity: 1 }
          )
          ////el , delay , what happen 
          .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
          .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
          .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
        }
    }
});