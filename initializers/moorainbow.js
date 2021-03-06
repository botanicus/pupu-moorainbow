// http://moorainbow.woolly-sheep.net/#doc
window.addEvent("domready", function() {
  // simple
  // NOTE: imgPath has to end with slash!
  $$(".rainbow").each(function(element) {
    new MooRainbow(element, {imgPath: "/pupu/moorainbow/images/"});
  });

  // advanced
  //new MooRainbow("demo2", {
  //  id: "myDemo2",
  //  wheel: true,
  //  imgPath: "/pupu/moorainbow/images",
  //  onChange: function(color) {
  //    $("outer").setStyle("background-color", color.hex);
  //    $("demoInput2").value = color.hex;
  //  },
  //  onComplete: function(color) {
  //    $("outer").setStyle("background-color", "#121212");
  //    $("demoInput2").value = color.hex;
  //  }
  //});
});
