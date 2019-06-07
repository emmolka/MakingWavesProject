// Responsive navigation
const navigation = $(".navigation");
const menu = $(".menu");

menu.click(function() {
  if (navigation.hasClass("hidden")) {
    navigation.removeClass("hidden");
    navigation.addClass("visible");
  } else {
    navigation.removeClass("visible");
    navigation.addClass("hidden");
  }
});

// Navigation scrolls

$(".main-page-scroll").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".main-page").offset().top - 90
    },
    "slow"
  );
});
$(".smoothies-scroll").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".our-smoothies").offset().top - 90
    },
    "slow"
  );
});
$(".healthy-and-delicious-scroll").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".healthy-and-delicious").offset().top - 90
    },
    "slow"
  );
});
$(".about-us-scroll").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".about-us").offset().top - 90
    },
    "slow"
  );
});
$(".stay-alert-scroll").click(function() {
  $("html,body").animate(
    {
      scrollTop: $("footer").offset().top - 100
    },
    "slow"
  );
});
