"use strict";(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[50],{1707:function(t,a,e){e.r(a);var n=e(339);a.default=function(t){var a=t.widget,e=t.e;if(a&&!a.isDragging){var r;a.isDragging=!0,a.mag.isWidgetDragging=!0;var i=null===(r=a.$el)||void 0===r?void 0:r[0];i&&i.classList.toggle("dragging"),a.currentScale=a.mag.getScale(a.mag.currentPage.pageViewport)||1;var l=0;if(a.hasAnimation()&&i){for(var o=i,s={x:1,y:1};null!==(c=o)&&void 0!==c&&null!==(g=c.parentElement)&&void 0!==g&&g.classList.contains("animation-container");){var c,g,m=n.Z.getElementScale(o.parentElement),p=n.Z.getElementRotationAngle(o.parentElement);p&&(l+=p),m&&!p&&(s.x*=m.x,s.y*=m.y),o=o.parentElement}1===s.x&&1===s.y||(a.animationScale=s),l&&(a.animationAngle=l)}a.mouseStart={x:a.is_above?e.clientX:e.pageX,y:a.is_above?e.clientY:e.pageY};var f=n.Z.getElementTranslateByString(i);if(i.style.transform){var u=i.style.transform;/translate\(.+?\)/.test(u)?u=u.replace(/translate\(.+?\)/,"translate(".concat(f.x,"px, ").concat(f.y,"px)")):u+=" translate(".concat(f.x,"px, ").concat(f.y,"px) "),i.style.transform=u}else i.style.transform="translate(".concat(f.x,"px, ").concat(f.y,"px)");a.startPosition={x:f.x,y:f.y},document.onselectstart=function(){return!1};var v=a.softBringToTopZ();a.z=v}}}}]);