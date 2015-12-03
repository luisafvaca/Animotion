var timelineOne = new TimelineMax();
var timelineTwo = new TimelineMax();
var domo = document.querySelector('.body');

  timelineOne
    .to(domo, 0.5, {rotation: 360, transformOrigin: "45px 57px"});

  timelineTwo
    .to(domo, 0.5, {scale:2});
