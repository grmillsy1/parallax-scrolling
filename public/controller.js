// first function is to get the background colour to change at a trigger point.

// $(function() {
//   var controller = new ScrollMagic.Controller();
//
//   var blockTween = new TweenMax.to('#block', 1.5, {
//     backgroundColor: "red"
//   });
//   var containerScene = new ScrollMagic.Scene({
//     triggerElement: '#container'
//   })
//   .setTween(blockTween)
//   .addIndicators()
//   .addTo(controller);
// });

//scond example is to pin an element

$(function() {
    var controller = new ScrollMagic.Controller();
    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#container',
        duration: 500
    })
    .setPin('#block')
    .addIndicators()
    .addTo(controller);
});
