//폰트크기, 글자위치, 배경사이즈, 홈섹션크기 등을 세팅하는 함수
function settingHomeLayout(){
  $("#section1 h1").css("font-size", 10 + $(window).width()/80 + "pt");
  sectionHeight = $(window).height();
  ContentHeight = $('#section1 .section-content h1').height();
  document.getElementById("section1").style.height = sectionHeight+"px";
  document.getElementById("section1").style.backgroundSize = $(window).width()+"px "+sectionHeight+"px";
  $("#section1 .section-content").css('margin-top',(sectionHeight/2 - 50 - ContentHeight/2)+"px");
}
//처음 로딩 후 Home화면의 폰트크기, 글자위치 조절.
$(document).ready(function(){
  settingHomeLayout();
});

//윈도우 크기가 변할 때 폰트크기, 글자위치, 배경
$(window).resize(function(){
  settingHomeLayout();
});
