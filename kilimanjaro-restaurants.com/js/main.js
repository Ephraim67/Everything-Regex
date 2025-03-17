// if ($(window).width() > 992) {
$(window).scroll(function () {});
// };

// Script for Zoho live chat implementation
// var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq ||
// {widgetcode:"c3155e4eadce57ed269504aea515660ad959bfccbe310bb294634a329ed62c021a2010ab7b6727677d37b27582c0e9c4", values:{},ready:function(){}};
// var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;
// s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");

(function (w, d, u) {
  var s = d.createElement("script");
  s.async = true;
  s.setAttribute('chat', 'true');
  s.src = u + "?" + ((Date.now() / 60000) | 0);
  var h = d.getElementsByTagName("script")[0];
  h.parentNode.insertBefore(s, h);
})(
  window,
  document,
  // "https://cdn.bitrix24.com/b20779011/crm/site_button/loader_1_qg9559.js"
  '//fw-cdn.com/11222341/3936743.js'
);

// https://cdn.jsdelivr.net/npm/bitrix24@0.0.0/bitrix24.min.js
