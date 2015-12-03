//var timelineOne = new TimelineMax();
//var domo = document.querySelector('.domo');

  timelineOne
    .from(domo, 0.5, {rotation:360, scale: transformOrigin:"100px 100px"})
    .to(domo, 0.5, { left:"50px", ease: Sine.easeInOut, y: 0});
