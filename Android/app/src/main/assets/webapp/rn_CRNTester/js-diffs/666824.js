__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),o=r(d[1]),n=r(d[2]),l=r(d[3]),c=r(d[4]),s=r(d[5]),h=r(d[6]),u=r(d[7]),b=r(d[8]),w=u.StyleSheet,p=u.Text,E=u.View,_=r(d[9]),T=r(d[10]),v=r(d[11]),y=r(d[12]),f=(function(u){function w(){var t,n;o(this,w);for(var s=arguments.length,h=new Array(s),u=0;u<s;u++)h[u]=arguments[u];return(n=l(this,(t=c(w)).call.apply(t,[this].concat(h)))).state={actionText:'Example app with toolbar component',toolbarSwitch:!1,colorProps:{titleColor:'#3b5998',subtitleColor:'#6a7180'}},n._onActionSelected=function(t){n.setState({actionText:'Selected '+S[t].title})},n}return s(w,u),n(w,[{key:"render",value:function(){var o=this;return h.createElement(T,{title:"<ToolbarAndroid>"},h.createElement(_,{title:"Toolbar with title/subtitle and actions"},h.createElement(y,{actions:S,navIcon:b({android:'ic_menu_black_24dp',width:48,height:48}),onActionSelected:this._onActionSelected,onIconClicked:function(){return o.setState({actionText:'Icon clicked'})},style:I.toolbar,subtitle:this.state.actionText,title:"Toolbar"}),h.createElement(p,null,this.state.actionText)),h.createElement(_,{title:"Toolbar with logo & custom title view (a View with Switch+Text)"},h.createElement(y,{logo:b({android:'launcher_icon',width:132,height:144}),style:I.toolbar},h.createElement(E,{style:I.switchWrapper},h.createElement(v,{value:this.state.toolbarSwitch,onValueChange:function(t){return o.setState({toolbarSwitch:t})}}),h.createElement(p,null,"'Tis but a switch")))),h.createElement(_,{title:"Toolbar with no icon"},h.createElement(y,{actions:S,style:I.toolbar,subtitle:"There be no icon here"})),h.createElement(_,{title:"Toolbar with navIcon & logo, no title"},h.createElement(y,{actions:S,logo:b({android:'launcher_icon',width:132,height:144}),navIcon:b({android:'ic_menu_black_24dp',width:48,height:48}),style:I.toolbar})),h.createElement(_,{title:"Toolbar with custom title colors"},h.createElement(y,t({navIcon:b({android:'ic_menu_black_24dp',width:48,height:48}),onIconClicked:function(){return o.setState({colorProps:{}})},title:"Wow, such toolbar",style:I.toolbar,subtitle:"Much native"},this.state.colorProps)),h.createElement(p,null,"Touch the icon to reset the custom colors to the default (theme-provided) ones.")),h.createElement(_,{title:"Toolbar with remote logo & navIcon"},h.createElement(y,{actions:[{title:'Bunny',icon:r(d[13]),show:'always'}],logo:r(d[14]),navIcon:r(d[13]),title:"Bunny and Hawk",style:I.toolbar})),h.createElement(_,{title:"Toolbar with custom overflowIcon"},h.createElement(y,{actions:S,overflowIcon:r(d[13]),style:I.toolbar})))}}]),w})(h.Component),S=[{title:'Create',icon:b({android:'ic_create_black_48dp',width:96,height:96}),show:'always'},{title:'Filter'},{title:'Settings',icon:b({android:'ic_settings_black_48dp',width:96,height:96}),show:'always'}],I=w.create({toolbar:{backgroundColor:'#e9eaed',height:56},switchWrapper:{height:56,flexDirection:'row',alignItems:'center'}});e.title='<ToolbarAndroid>',e.description='Examples of using the Android toolbar.',e.examples=[{title:'Basic toolbar',render:function(){return h.createElement(f,null)}}]},666824,[14,3,4,5,8,9,11,15,666705,666679,666681,301,379,666710,666758]);