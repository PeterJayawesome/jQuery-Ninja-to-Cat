$("document").ready(function(){
  $("img").click(function(){
    var tempo= $(this).attr("src");
    // console.log($(this).attr("src"));
    $(this).attr("src",$(this).attr("alt"));
    // console.log($(this).attr("src"));
    $(this).attr("alt",tempo);
  })
})
