// first function is to get the background colour to change at a trigger point.

$(function() {
  var controller = new ScrollMagic.Controller();

  var blockTween = TweenMax.to('#block', 1, {
    transform: 'translate3d(0, 100px, 0)'
  })
  var containerScene = new ScrollMagic.Scene({
    triggerElement: '#container'
  })
    .setTween(blockTween)
    .addIndicators()
    .addTo(controller);

  var blockTween2 = new TweenMax.to('#block2', 1, {
    backgroundColor: "red"
  });
  var containerScene2 = new ScrollMagic.Scene({
    triggerElement: '#container2'
  })
  .setTween(blockTween2)
  .addIndicators()
  .addTo(controller);


});

//scond example is to pin an element
//
// $(function() {
//     var controller = new ScrollMagic.Controller();
//     var containerScene = new ScrollMagic.Scene({
//         triggerElement: '#container',
//         duration: 500
//     })
//     .setPin('#block')
//     .addIndicators()
//     .addTo(controller);
// });
