
function sound(){
  //if( $('#sound-file').get(0).ended;
   //   $('#sound-file').get(0).pause();
   //   $('#sound-file').get(0).currentTime = 0;
   // }else{
   $('#sound-file').get(0).play() ;
   //alert(’God bless you!’);
   // }
}

function sound3(){
    $('#sound-file').get(0).pause();
  }

function rsp(playerSelect) {
    var result1;
    var random = Math.floor(Math.random() * 3); 

    //console.log(playerSelect); 
    //console.log(random); 

    if (random == 0) {
      $("#icon_k").css('opacity','1');
      $("#icon_k").fadeIn(100);
      $("#icon_k").fadeOut(7000);
    } else if (random == 1) {
      $("#icon_e").css('opacity','1');
      $("#icon_e").fadeIn(100);
      $("#icon_e").fadeOut(7000);
    } else {
      $("#icon_p").css('opacity','1');
      $("#icon_p").fadeIn(100);
      $("#icon_p").fadeOut(7000);
    }
    if (playerSelect == 0) {
        $("#sf_know1").get(0).play() ;
      } else if (playerSelect == 1) {
        $("#sf_pistol1").get(0).play() ;
      } else {
        $("#sf_pressure1").get(0).play() ;
      }

  if (playerSelect == random) {
      result1 = 1;
  } else {
      if (playerSelect == 0) {
          if (random== 1) {
              result1 = 2;
          } else {
              result1 = 0;
          }
      } else if (playerSelect == 1) {
          if (random == 0) {
              result1 = 0;
          } else {
              result1 = 2;
          }
      } else {
          if (random == 0) {
              result1 = 2;
          } else {
              result1 = 0;
          }
      }
  }
  console.log(result1);
  localStorage.setItem('key1' , result1);

//結果
  if (result1 == 0) {
      setTimeout(function () {
      alert('あなたの負けです。'),
      $("#icon_gameover").css('opacity','1');
      $("#result_video").attr('src','images/loose.m4v');
      $("#result_video").css('opacity','1')}, 2000);
  } else if (result1 == 2) {
      setTimeout(function () {
      alert('あなたの勝ちです。');
      $("#icon_cong").css('opacity','1');
      $("#result_video").attr('src','images/win.m4v');
      $("#result_video").css('opacity','1')}, 2000);
  } else {
      setTimeout(function () {
      alert('引き分けです。');
      $("#icon_keep").css('opacity','1');
      $("#result_video").attr('src','images/aiko.m4v');
      $("#result_video").css('opacity','1')}, 2000);
  }
}

 $("#reset").on("click", function () {
        $("#icon_k,#icon_e,#icon_p,#icon_keep , #icon_gameover , #icon_cong , #result_video").css('opacity','0');
    });


    function rsp2(playerSelect) {
        var result2;
        var random = Math.floor(Math.random() * 3); 
      
        if (random == 0) {
          $("#icon_k2").removeClass('behind');
          $("#icon_k2").fadeIn(100);
          $("#icon_k2").fadeOut(7000);
        } else if (random == 1) {
          $("#icon_e2").removeClass('behind');
          $("#icon_e2").fadeIn(100);
          $("#icon_e2").fadeOut(7000);
        } else {
          $("#icon_p2").removeClass('behind');
          $("#icon_p2").fadeIn(100);
          $("#icon_p2").fadeOut(7000);
        }
        if (playerSelect == 0) {
            $("#sf_know2").get(0).play() ;
          } else if (playerSelect == 1) {
            $("#sf_pistol2").get(0).play() ;
          } else {
            $("#sf_pressure2").get(0).play() ;
          }
      
  if (playerSelect == random) {
      result2 = 1;
  } else {
      if (playerSelect == 0) {
          if (random== 1) {
              result2 = 2;
          } else {
              result2 = 0;
          }
      } else if (playerSelect == 1) {
          if (random == 0) {
              result2 = 0;
          } else {
              result2 = 2;
          }
      } else {
          if (random == 0) {
              result2 = 2;
          } else {
              result2 = 0;
          }
      }
  }
      console.log(result2);
      localStorage.setItem('key2' , result2);
      
      //結果
      if (result2 == 0) {
        setTimeout(function () {
          alert('あなたの負けです。');
          $("#icon_gameover2").removeClass('behind');
          $("#icon_gameover2").fadeIn(10000);
          $("#icon_loose2").removeClass('behind')}, 2000);
      } else if (result2 == 2) {
        setTimeout(function () {
          alert('あなたの勝ちです。');
          $("#icon_cong2").removeClass('behind');
          $("#icon_cong2").fadeIn(10000);
          $("#icon_vic2").removeClass('behind')}, 2000);
      } else {
        setTimeout(function () {
          alert('引き分けです。');
          $("#icon_keep2").removeClass('behind');
          $("#icon_keep2").fadeIn(10000);
          $("#icon_aiko2").removeClass('behind')}, 2000);
      }
      }
      $("#reset2").on("click", function () {
        $("#icon_k2,#icon_e2,#icon_p2,#icon_keep2 , #icon_gameover2 , #icon_cong2 , #icon_vic2 , #icon_loose2 , #icon_aiko2").addClass('behind');
      });
      

    function rsp3(playerSelect) {
    var result3
    var random = Math.floor(Math.random() * 3); 

    if (random == 0) {
        $("#icon_k3").removeClass('behind');
        $("#icon_k3").fadeIn(100);
        $("#icon_k3").fadeOut(7000);
    } else if (random == 1) {
        $("#icon_e3").removeClass('behind');
        $("#icon_e3").fadeIn(100);
        $("#icon_e3").fadeOut(7000);
    } else {
        $("#icon_p3").removeClass('behind');
        $("#icon_p3").fadeIn(100);
        $("#icon_p3").fadeOut(7000);
        }
    if (playerSelect == 0) {
        $("#sf_know3").get(0).play() ;
          } else if (playerSelect == 1) {
        $("#sf_pistol3").get(0).play() ;
          } else {
        $("#sf_pressure3").get(0).play() ;
        }

      if (playerSelect == random) {
          result3 = 1;
      } else {
          if (playerSelect == 0) {
              if (random== 1) {
                  result3 = 2;
              } else {
                  result3 = 0;
              }
          } else if (playerSelect == 1) {
              if (random == 0) {
                  result3 = 0;
              } else {
                  result3 = 2;
              }
          } else {
              if (random == 0) {
                  result3 = 2;
              } else {
                  result3 = 0;
              }
          }
      }
      console.log(result3);
      localStorage.setItem('key3' , result3);
      
      //結果
      if (result3 == 0) {
        setTimeout(function () {
          alert('あなたの負けです。');
          $("#icon_gameover3").removeClass('behind');
          $("#icon_gameover3").fadeIn(10000);
          $("#icon_loose3").removeClass('behind')}, 2000);
      } else if (result3 == 2) {
        setTimeout(function () {
          alert('あなたの勝ちです。');
          $("#icon_cong3").removeClass('behind');
          $("#icon_cong3").fadeIn(10000);
          $("#icon_vic3").removeClass('behind')}, 2000);
      } else {
          alert('引き分けです。');
          setTimeout(function () {
          $("#icon_keep3").removeClass('behind');
          $("#icon_keep3").fadeIn(10000);
          $("#icon_aiko3").removeClass('behind')}, 2000);
      }
      }
      $("#reset3").on("click", function () {
        $("#icon_k3,#icon_e3,#icon_p3,#icon_keep3 , #icon_gameover3 , #icon_cong3 , #icon_vic3 , #icon_loose3 , #icon_aiko3").addClass('behind');
      });
      

    $("#game_clear").on('click', function () {
     localStorage.clear();
     alert('ゲームをリセットする。');
     //game1のbehind
     $("#icon_k,#icon_e,#icon_p,#icon_keep , #icon_gameover , #icon_cong , #result_video").css('opacity','0');
     //game2のbehind
     $("#icon_k2").addClass('behind');
     $("#icon_e2").addClass('behind');
     $("#icon_p2").addClass('behind');
     $("#icon_gameover2").addClass('behind');
     $("#icon_cong2").addClass('behind');
     $("#icon_keep2").addClass('behind');
     $("#icon_vic2").addClass('behind');
     $("#icon_loose2").addClass('behind');
     $("#icon_aiko2").addClass('behind');
     //game3のbehind
     $("#icon_k3").addClass('behind');
     $("#icon_e3").addClass('behind');
     $("#icon_p3").addClass('behind');
     $("#icon_gameover3").addClass('behind');
     $("#icon_cong3").addClass('behind');
     $("#icon_keep3").addClass('behind');
     $("#icon_vic3").addClass('behind');
     $("#icon_loose3").addClass('behind');
     $("#icon_aiko3").addClass('behind');
     //結果のbehind
     $("#icon_type_a").addClass('behind');
     $("#icon_type_b").addClass('behind');
     $("#icon_type_c").addClass('behind');
     $("#type_a").addClass('behind');
     $("#type_b").addClass('behind');
     $("#type_c").addClass('behind');
     $("#type_a_text").addClass('behind');
     $("#type_b_text").addClass('behind');
     $("#type_c_text").addClass('behind');
    });
  
    $("#game_result").on('click', function () {
        var item1 = localStorage.getItem("key1");
        var item2 = localStorage.getItem("key2");
        var item3 = localStorage.getItem("key3");

        //var photos = ["A.jpg","B.jpg","C.jpg"]

        console.log(item1);
        console.log(item2);
        console.log(item3);

        if (item1 == 2 && item2 == 2  && item3 == 2 ) {
            alert('ヴィトー・コルネオーリ：タイプです。');
            //after(`<img src=images/${photos[0]}>`);
            $("#type_a").removeClass('behind');
            $("#icon_type_a").removeClass('behind');
            $("#type_a_text").removeClass('behind');
            } else if (item1 == 2  || item2 == 2  || item3 == 2 ) {
            alert('マイケル・コルネオーリ：タイプです。');
            $("#type_b").removeClass('behind');
            $("#icon_type_b").removeClass('behind');
            $("#type_b_text").removeClass('behind');
        } else {
            alert('ヴィンセント：タイプです。');
            $("#type_c").removeClass('behind');
            $("#icon_type_c").removeClass('behind');
            $("#type_c_text").removeClass('behind');
        /*$("#list").append(html);*/
     }
    });

    function sound2(){
    $('#sound-file').get(0).ended;
    $('#sound-file').get(0).pause();}
