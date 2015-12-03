var timelineOne = new TimelineMax();
var timelineTwo = new TimelineMax();
var domo = document.querySelector('.body');
var footLeft = document.querySelector('.foot-left');
var footRight = document.querySelector('.foot-right');
var handLeft = document.querySelector('.hand-left');

  timelineOne
    .to (domo, 6, {scale: 2});

  timelineTwo
    .to (footLeft, 0.3, {top: '104px', repeat:15, yoyo:true})
    .to (footRight, 0.3, {top: '104px', repeat:15, yoyo:true}, '0.3')
    //.to (handLeft, 0.1, {rotation: 0.5, transformOrigin:" '' 100%",repeat:3, left: '-8px', yoyo:true}, '0.3');
