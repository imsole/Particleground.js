+function(t,e){"use strict";function r(t,e){s.createCanvas(t,this)&&(this.set=s.extend({},r.configDefault,e),this.dots=[],this.createDot(),this.draw(),this.resize())}var s=e.util,i=Math.random,o=Math.sin,a=2*Math.PI;r.configDefault={opacity:1,color:["rgba(0, 190, 112, .9)","rgba(0, 190, 112, .6)","rgba(0, 190, 112, .3)"],num:3,lineWidth:[1],offsetTop:.75,crest:[16,12,8],rippleNum:[2,2,2],offsetLeft:[.1,1,2],speed:[.07,.07,.07],resize:!0},r.prototype={version:"1.0.0",createDot:function(){var t=this.set,e=this.cw,r=this.ch,s=t.num,i=[];this.rippleLength=[];for(var o=0;s>o;o++){var h=e/t.rippleNum[o],n=a/h;this.rippleLength.push(h);var c=[],f=t.offsetTop;f>0&&1>=f&&(f*=r);for(var p=0;e>p;p++)c.push({x:p,y:p*n,h:f});i.push(c)}this.dots=i},getAttr:function(t,e){var r=this.set,o=r[t][e];if(!o){switch(t){case"color":o=s.randomColor();break;case"lineWidth":o=1;break;case"offsetLeft":o=i()*this.rippleLength[e];break;case"speed":o=s.limitRandom(.4,.2)}r[t].push(o)}return o},draw:function(){var t=this,e=this.set,r=(e.speed,this.cxt),s=this.cw,i=this.ch;r.clearRect(0,0,s,i),r.globalAlpha=e.opacity,this.dots.forEach(function(s,a){r.save(),r.beginPath();var h=e.crest;h>0&&1>=h&&(h*=i),s.forEach(function(e,s){s?r.lineTo(e.x,t.getAttr("crest",a)*o(e.y+t.getAttr("offsetLeft",a))+e.h):r.moveTo(e.x,t.getAttr("crest",a)*o(e.y+t.getAttr("offsetLeft",a))+e.h),e.y-=t.getAttr("speed",a)}),r.strokeStyle=t.getAttr("color",a),r.lineWidth=t.getAttr("lineWidth",a),r.stroke(),r.restore()}),this.requestAnimationFrame()}},e.extend(r.prototype),e.wave=r.prototype.constructor=r}(window,Particleground);
//# sourceMappingURL=../map/pjs/wave.js.map
