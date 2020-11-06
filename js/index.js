charset = 'UTF-8';
$(function () {
  function tab(head, item, classname) {
    $(head).each(function (i) {
      $(this).mouseenter(function () {
        $(this).addClass(classname).siblings().removeClass(classname);
        $($(item)[i]).addClass(classname).siblings().removeClass(classname);
      });
    });
  }
  tab('.tab-head li', '.lesson-tab .tab-body', 'on');
});