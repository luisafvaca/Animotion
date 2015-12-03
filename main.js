var timelineOne = new TimelineMax();
var timelineTwo = new TimelineMax();
var domo = document.querySelector('.body');
var footLeft = document.querySelector('.foot-left');
var footRight = document.querySelector('.foot-right');

  timelineOne
    .to (domo, 6, {scale: 2});

  timelineTwo
    .to (footLeft, 0.3, {top: '104px', repeat:15, yoyo:true})
    //.to (footLeft, 0.3, {top: '114px'})
    .to (footRight, 0.3, {top: '104px', repeat:15, yoyo:true}, '0.3')
