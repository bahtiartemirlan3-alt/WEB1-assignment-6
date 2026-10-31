$(document).ready(function () {
  console.log("jQuery is ready!");
  var page = $("body").data("page");


  if (page === "index") {
    $("#b-id").click(function () { $("#title1").text("Text changed with .text() via ID"); });
    $("#b-class").click(function () { $(".info").html("<em>HTML changed</em> with <b>.html()</b> via class"); });
    $("#b-tag").click(function () { $("p").css({ color: "#0b6bcb", "font-weight": "bold", "font-size": "1.1rem" }); });
    $("#b-reset").click(function () {
      $("#title1").text("Heading selected by ID");
      $(".info").each(function (i) { $(this).text(["Paragraph one (class).", "Paragraph two (class)."][i]); });
      $("p").removeAttr("style");
    });
  }


  if (page === "effects") {
    $("#hide").click(function () { $("#p2").hide(400); });
    $("#show").click(function () { $("#p2").show(400); });
    $("#toggle").click(function () { $("#p2").toggle(400); });
    $("#fin").click(function () { $("#img3").fadeIn(600); });
    $("#fout").click(function () { $("#img3").fadeOut(600); });
    $("#ftog").click(function () { $("#img3").fadeToggle(600); });
    $("#sup").click(function () { $("#panel").slideUp(500); });
    $("#sdn").click(function () { $("#panel").slideDown(500); });
    $("#slt").click(function () { $("#panel").slideToggle(500); });
  }


  if (page === "dom") {
    var n = 2;
    $("#append").click(function () { $("#list").append("<li>Item " + (++n) + "</li>"); });
    $("#prepend").click(function () { $("#list").prepend("<li>Item " + (++n) + "</li>"); });
    $("#remove").click(function () { $("#list li:last").remove(); });

    var imgs = ["https://picsum.photos/id/1018/400/220", "https://picsum.photos/id/1025/400/220"], k = 0;
    $("#chsrc").click(function () { k = (k + 1) % 2; $("#img6").attr("src", imgs[k]); });
    $("#chhref").click(function () {
      $("#link6").attr("href", "https://api.jquery.com").text("Link: api.jquery.com");
      $("#hrefinfo").text("href is now: " + $("#link6").attr("href"));
    });

    $("#name").on("input", function () { $("#outName").text($(this).val()); });
    $("#email").on("input", function () { $("#outEmail").text($(this).val()); });
  }


  if (page === "animations") {
    var home = { left: 10, top: 10, width: 50, height: 50, opacity: 1 };
 
    $("#a8").click(function () { $("#box8").animate({ width: "120px", height: "120px", left: "300px" }, 800); });
   
    $("#a9").click(function () {
      $("#box9").animate({ left: "350px" }, 600)
        .animate({ top: "150px" }, 600)
        .animate({ width: "25px", height: "25px" }, 600)
        .animate(home, 800);
    });
   
    $("#a10").click(function () {
      $("#box10").animate({ opacity: 0.4, width: "110px", height: "110px", left: "300px", top: "100px" }, 1000);
    });
    $(".reset").click(function () { $($(this).data("t")).stop(true).css(home); });
  }

 
  if (page === "project") {
    $(".head").click(function () {
      var body = $(this).next(".body");
      $(".body").not(body).slideUp(300).prev().removeClass("open");
      body.slideToggle(300);
      $(this).toggleClass("open");
    });
    $("#openAll").click(function () { $(".body").slideDown(300); $(".head").addClass("open"); });
    $("#closeAll").click(function () { $(".body").slideUp(300); $(".head").removeClass("open"); });
  }
});
