/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
$(window).load(function () {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "../../images/heart.jpg");
      $('[rel="shortcut icon"]').attr('href', "../../images/heart.jpg");
      document.title = '(●—●)喔哟，崩溃啦！';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "../../images/heart.jpg");
      $('[rel="shortcut icon"]').attr('href', "../../images/heart.jpg");
      document.title = '(/≧▽≦/)咦！页面又好了！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
    }
  });
};
