// jQuery 코드가 HTML이 모두 로드된 뒤에 실행되도록
$('documnet').ready(function () {
  
  // 페이지가 처음 로드되면 알아서 작동
  $('p').css({ display: 'none' });

  // 사용자가 클릭하면 작동
  $('.show-btn').click(function () {
    $('p').css({ display: 'block' });
  });
  $('.hidden-btn').click(function () {
    $('p').css({ display: 'none' });
  });

});
