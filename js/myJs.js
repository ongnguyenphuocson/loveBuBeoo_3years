const textConfig = {
  text1: "Tèn Tennnnnnnn",
  text2: "Mời em vào tim anh!!!",
  text3: "Bư Béooooo yêu Phước Sơnnnnnn nhiều lắm đúng không nè?",
  text4: "Trả lời thật lòng nghennnn",
  text5: "Không nhiều :(",
  text6: "Yêu lắm nè <3",
  text7: "Anh cũng yêu Em nhiều lắm!",
  text8: "<span>Hành trình 3 năm đúng ra là rất là lâu, nhưng anh mừng vì cả 2 cùng cố gắng để nắm tay nhau đi đến hôm nay." + 
  " Có những lúc anh và em đều gục ngã, dừng lại 1 lúc nhưng anh xem đó là khoảng nghỉ để cả anh và em biết được đối phương quan trọng như nào." + 
  " Đối với Anh Em thực sự rất quan trọng ❤️</span></br>" + 
  "<span>Gần đây anh nhớ nhiều về những lần mình gặp nhau, ôm nhau, nắm tay nhau, cả hun nhau nữa. Anh nhớ nhiều lắm, anh mong đến ngày được gặp em." + 
  " Anh không dám chắc sẽ lo được cho em đầy đủ nhưng chăm sóc em, bảo vệ em là chuyện mà anh chắc chắn làm được. " + 
  "</span></br>" +
  "<span>Cảm ơn em thời gian vừa qua. Anh thực sự hạnh phúc trong khoảng thời gian yêu em. Anh yêu Em nhiều lắm Bư béo!" + 
  "</span></br>",
  text9: "Vì cậu đẹp try vlllll",
  text10: "Tớ biết mà ^^ Yêu cậu 300.000",
  text11:
    "Tối nay tớ qua đón cậu đi chơi nhaa :v Còn giờ thì chờ gì nữa mà ko inbox cho tớ đi nàooo",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  var audio = new Audio("sound/love.mp3");
  audio.play();
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/meme.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/love.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      // text: textConfig.text8,
      html: true,
      html: textConfig.text8,
      width: 900,
      padding: "3em",
      imageUrl: "img/love2.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
