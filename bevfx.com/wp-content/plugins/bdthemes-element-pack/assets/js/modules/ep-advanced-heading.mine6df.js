!function(n,t){"use strict";var e=function(n,t){var e=n.find(".bdt-ep-advanced-heading"),i=e.find(".bdt-ep-advanced-heading-main-title-inner");if(e.length){var d=e.data("settings");if(void 0!==d.titleMultiColor){if("yes"!=d.titleMultiColor)return;var o,a=t(i).text().split(" ");for(t(i).html(""),o=0;o<a.length;++o)t(i).append("<span>"+a[o]+"&nbsp;</span>");t(i).find("span").each((function(){var n=Math.floor(16777215*Math.random()).toString(16);t(this).css({color:"#"+n})}))}}};jQuery(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/bdt-advanced-heading.default",e)}))}(jQuery,window.elementorFrontend);