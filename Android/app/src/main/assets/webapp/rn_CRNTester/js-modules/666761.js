__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),s=r(d[3]),u=r(d[4]),l=r(d[5]),p=r(d[6]),c=r(d[7]),h=c.Animated,v=c.PanResponder,R=c.StyleSheet,f=(function(c){function R(t){var o;return n(this,R),(o=s(this,u(R).call(this,t))).state={panX:new h.Value(0),opacity:new h.Value(1),burns:new h.Value(1.15)},o.state.tiltPanResponder=v.create({onStartShouldSetPanResponder:function(){return!0},onPanResponderGrant:function(){h.timing(o.state.opacity,{toValue:o.state.panX.interpolate({inputRange:[-300,0,300],outputRange:[0,1,0]}),duration:0}).start()},onPanResponderMove:h.event([null,{dx:o.state.panX}]),onPanResponderRelease:function(t,n){var s=0;n.dx>100?s=500:n.dx<-100&&(s=-500),h.spring(o.state.panX,{toValue:s,velocity:n.vx,tension:10,friction:3}).start(),o.state.panX.removeAllListeners();var u=o.state.panX.addListener(function(t){var n=t.value;Math.abs(n)>400&&(o.state.panX.removeListener(u),h.timing(o.state.opacity,{toValue:1}).start(),o.state.panX.setValue(0),0!==s&&o._startBurnsZoom())})}}),o}return l(R,c),o(R,[{key:"_startBurnsZoom",value:function(){this.state.burns.setValue(1),h.decay(this.state.burns,{velocity:1,deceleration:.9999}).start()}},{key:"UNSAFE_componentWillMount",value:function(){this._startBurnsZoom()}},{key:"render",value:function(){return p.createElement(h.View,t({},this.state.tiltPanResponder.panHandlers,{style:[y.tilt,{opacity:this.state.opacity,transform:[{rotate:this.state.panX.interpolate({inputRange:[-320,320],outputRange:['-15deg','15deg']})},{translateX:this.state.panX}]}]}),p.createElement(h.Image,{pointerEvents:"none",style:{flex:1,transform:[{translateX:this.state.panX.interpolate({inputRange:[-3,3],outputRange:[2,-2]})},{scale:this.state.burns.interpolate({inputRange:[1,3e3],outputRange:[1,1.25]})}]},source:r(d[8])}))}}]),R})(p.Component),y=R.create({tilt:{overflow:'hidden',height:200,marginBottom:4,backgroundColor:'rgb(130, 130, 255)',borderColor:'rgba(0, 0, 0, 0.2)',borderWidth:1,borderRadius:20}});m.exports=f},666761,[14,3,4,5,8,9,11,15,666762]);