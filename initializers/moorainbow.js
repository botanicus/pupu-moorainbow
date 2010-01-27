// http://moorainbow.woolly-sheep.net/#doc
window.addEvent("domready", function() {
  // simple
  $$(".rainbow").each(function(element) {
    new MooRainbow("demo1", {id: "myDemo1"});
  });

  // advanced
  //new MooRainbow("demo2", {
  //  id: "myDemo2",
  //  wheel: true,
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
