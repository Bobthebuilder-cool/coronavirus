(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t){},133:function(e,t){},134:function(e,t){},176:function(e,t){},177:function(e,t){},178:function(e,t){},179:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),r=n(88),s=n.n(r),o=n(14);var i=e=>{const t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)(()=>{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then(t=>{e.current.srcObject=t,e.current.onloadedmetadata=(()=>{r(!0)})})},[e]),c},u=n(89);var f=e=>{const t=Object(a.useState)(),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)(()=>{u.a.load(e).then(e=>{r(e)})},[e]),c},d=n(11),l=n.n(d),h=n(17);const m=(e,t)=>{const n=t.current.getContext("2d");n.clearRect(0,0,n.canvas.width,n.canvas.height);n.font="16px sans-serif",n.textBaseline="top",e.forEach(e=>{var t;e.bbox[0],e.bbox[1];if(n.fillStyle="#000000",clearTimeout(t),"Touch-Face"===e.class){let e=document.getElementById("js-body");e.classList.contains("error")||(e.classList.add("error"),v(),t=setTimeout(function(){e.classList.remove("error")},1500))}})},v=()=>{const e=window.speechSynthesis;e.pitch=8;const t=new SpeechSynthesisUtterance("Don't touch your face");t.lang="en-EN",t.pitch=1,e.speak(t)},b=function(){var e=Object(h.a)(l.a.mark(function e(t,n,a){var c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.detect(n.current);case 2:c=e.sent,m(c,a),requestAnimationFrame(()=>{b(t,n,a)});case 5:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}();var p=(e,t,n,c)=>{Object(a.useEffect)(()=>{e&&c&&b(e,t,n)},[n,e,c,t])},w=n(47),g=n.n(w);const x=()=>{const e=Object(a.useRef)(),t=Object(a.useRef)(),n=i(e),r=f("/model_web");return p(r,e,t,n),c.a.createElement("div",null,c.a.createElement("h2",{style:{textAlign:"center",fontSize:"3em"}},"VICTOR 's PROJECT"),c.a.createElement("video",{className:g.a.fixed,autoPlay:!0,playsInline:!0,muted:!0,ref:e,width:"700",height:"500"}),c.a.createElement("canvas",{className:g.a.fixed,ref:t,width:"700",height:"500"}))},E=document.getElementById("root");s.a.render(c.a.createElement(x,null),E)},47:function(e,t,n){e.exports={fixed:"styles_fixed__v-bnh"}},90:function(e,t,n){e.exports=n(179)},99:function(e,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.1dac442a.chunk.js.map