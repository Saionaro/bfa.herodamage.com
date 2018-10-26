(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{467:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return y});n(103),n(79);var a=n(0),i=n.n(a),r=n(1),s=n.n(r),l=n(21),o=n(71),c=n.n(o),u=n(14),d=n(80),f=n(152),m=n(490),g=n.n(m),x=n(213),p=n.n(x),w=function(e){var t=e.classes,n=e.data,a=e.i18nPlugin,r=n.site.siteMetadata,s=a.tLink;return i.a.createElement("div",null,i.a.createElement("section",{className:t.introduction},i.a.createElement("figure",null,i.a.createElement("img",{src:p.a,alt:r.title+" Logo"})),i.a.createElement("div",null,i.a.createElement("h1",{className:"site-name"},r.title.split(" ").map(function(e,t){return i.a.createElement("span",{key:t},t>0&&" ",e)})),i.a.createElement("p",null,i.a.createElement(f.Trans,{id:"Welcome to Hero Damage, the website where you can see the latest World of Warcraft simulations results for every class.<0/>Please select your class below.",components:[i.a.createElement("br",null)]})))),i.a.createElement(g.a,{container:!0,spacing:32,className:t.wowClasses},r.wowClasses.map(function(e,t){return i.a.createElement(g.a,{item:!0,key:t,component:l.Link,to:s("/"+e+"/"),xs:12,sm:6,md:4,lg:3},i.a.createElement("img",{src:Object(d.h)(e),alt:c()(e)}))})))};w.propTypes={classes:s.a.object,data:s.a.object.isRequired,i18nPlugin:s.a.object.isRequired},t.default=Object(u.withStyles)(function(e){return{introduction:{alignItems:"center",display:"flex",justifyContent:"center","& figure":{margin:0,"& img":{height:"10rem",width:"10rem"}},marginBottom:8*e.spacing.unit},wowClasses:{margin:"auto",maxWidth:"80%",textAlign:"center","& a":{"&:hover":{"& img":{transform:"scale(1.2)"}},"& img":{transition:e.custom.css.transitionNormal,maxWidth:"50%"}}}}})(w);var y="2474190004"},490:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=a(n(507))},507:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var i=a(n(17)),r=a(n(16)),s=a(n(10)),l=a(n(0)),o=(a(n(1)),a(n(151))),c=a(n(101)),u=n(246),d=(a(n(508)),[0,8,16,24,32,40]),f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var m=function(e){return(0,s.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return d.forEach(function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})}),n}(0,"xs"),u.keys.reduce(function(t,n){return function(e,t,n){var a={};f.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e7)/1e5,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?(0,s.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))};function g(e){var t,n=e.alignContent,a=e.alignItems,c=e.classes,u=e.className,d=e.component,f=e.container,m=e.direction,x=e.item,p=e.justify,w=e.lg,y=e.md,v=e.sm,h=e.spacing,b=e.wrap,j=e.xl,C=e.xs,W=e.zeroMinWidth,E=(0,r.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),S=(0,o.default)((t={},(0,i.default)(t,c.container,f),(0,i.default)(t,c.item,x),(0,i.default)(t,c.zeroMinWidth,W),(0,i.default)(t,c["spacing-xs-".concat(String(h))],f&&0!==h),(0,i.default)(t,c["direction-xs-".concat(String(m))],m!==g.defaultProps.direction),(0,i.default)(t,c["wrap-xs-".concat(String(b))],b!==g.defaultProps.wrap),(0,i.default)(t,c["align-items-xs-".concat(String(a))],a!==g.defaultProps.alignItems),(0,i.default)(t,c["align-content-xs-".concat(String(n))],n!==g.defaultProps.alignContent),(0,i.default)(t,c["justify-xs-".concat(String(p))],p!==g.defaultProps.justify),(0,i.default)(t,c["grid-xs-".concat(String(C))],!1!==C),(0,i.default)(t,c["grid-sm-".concat(String(v))],!1!==v),(0,i.default)(t,c["grid-md-".concat(String(y))],!1!==y),(0,i.default)(t,c["grid-lg-".concat(String(w))],!1!==w),(0,i.default)(t,c["grid-xl-".concat(String(j))],!1!==j),t),u);return l.default.createElement(d,(0,s.default)({className:S},E))}t.styles=m,g.propTypes={},g.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var x=(0,c.default)(m,{name:"MuiGrid"})(g);t.default=x},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return function(){return null}};t.default=a}}]);