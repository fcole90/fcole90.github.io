(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3VjD":function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEN0lEQVQ4y3WUyW/bRhTGR7tEUaJIUaREarG8xfGS1rFd2DUSu16y1Yu8yI5Vx2ntxIBPPfXQq5FrE6S+FUWBoM0lgNsgCJDeWiDowacihwTI0iA20CDoXyCL5Ly+GUpu0qIDfODjm/d+83E4JAkH2wgb4WALCQdavSz2eVL+gMdYRN1GvQx4jRrKwngfdQdV8Xv0MKuNhDq84ZDLiIQ7SB3WSiRxkMfYOI0NjwPeLLgy/6VG3nge9GWXSX1Ewsc8R87ESC+PQ4HidtBXaDRYrkwn6DUpE4txMZ4PenMQCjQDmrn5DxQdRoUer3tzfDsSOs6KnKAvbwc8Jg35slxeolMPKujDnD+H4BxeizZuly1EukEQuncYQ4z2chYG702L0fdBiHQ6kVC7467cTAlJoiSIi0VQpDYgRGGibA5hgI5oVOi2YmIfiLGTqy4s3u+PxQcex2L9EI2esCPhTgR3IEiHU8MzcO/ez/Dq1QEcHPwJv/7yGyzMbyDU4DBB6AE0YsfjH0BcGtxHiUSShxcT8inApCWKJ2ks1ouwHKytfQ7/N7a3byC0ALEYq+9nMEtWRiGhnN4gcnL0tpwcAynxoSUlhqjf30W7uiahWq3y5sPDGjiOw2VZFlBKeX5qah2hx6isDFM0ZCnqBCjq+F2ipCZfshtZGXEU9TS6a4dr13aOYGwwSANUq1n8urv7ALy+TpCTI1RWP3KS2llAPSWqfqHGbpTUBFXUMeoLdMPujw94k23b78DYlTll49GjJyDJAyApozSpnaGqfh7U9FSVpDIzFgaACUyepV5/D3z/w0+8ybLsdxwysUXY2Nv7HURpAI1M0lT6Y4oc0IzSIdHN+X3NnAdMOLoxTT3+Xri6+eXRI78NY6NaPeTX6ze+BeI7AawHQY6eLYOeXXxB0rnlO5l8BXRzwcIJKuOKktLPHfA9wxfB9q0hNt68+Qta2sdBTIxQ3ZyjCLIyhVXI5Ffuk0yhUjGaLkM6f9HCVahmlqgQH4KWtlF4+HDvP0fm2bM/YGh4AYKRPnRUQtgSZAorltn8GWSaVrcI0sNG06XnZvFTnPjEZgW6OYvQQRBi3VBe2oKvrn8DX+98B+tXvgBV64OgwGAzVM8tY8+qYxYvAzJep/PLCf61IGjZbN7A5JqNBVh4ERvmqKKNU0+gB89bqys8JpI6SrkzF0axp5ZtucLMbHIY0vkHnS5UbprFdZyoWOn8iq3nlgBfFjbPoqbqmsUtmeOPiTUO1tbqPbcYA8H4D8mVG38fjJd22OamucOypZmLqHknZcxRJhZr+PLYXNp1COj01lv9nnpQ9jSSmjG3mjJKeJQW8Vwt4HEqsSNVVwlz8+gc88bsa6zbPIJlyw2Y+9PVsgsk03SJP35CHROT+oWNpH7+blI79xS/pCrqEOMXSf3cfcxvyepEwn3Mqx7s5TB0Tf4Gdc11kGO1NGQAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/a9df5043d9fb529bc01bbe9595436ab9/630fb/logo.png","srcSet":"/static/a9df5043d9fb529bc01bbe9595436ab9/5db04/logo.png 75w,\\n/static/a9df5043d9fb529bc01bbe9595436ab9/6d161/logo.png 150w,\\n/static/a9df5043d9fb529bc01bbe9595436ab9/630fb/logo.png 300w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8+s/":function(e,t,r){"use strict";r("sc67"),r("AqHK"),r("pJf4"),r("pS08"),r("R48M");var n,a=r("q1tI"),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},"8ypT":function(e,t,r){},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),s=n(r("8OQS")),c=n(r("pVnL")),u=n(r("q1tI")),l=n(r("17x9")),d=function(e){var t=(0,c.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=T([].concat(t.fluid))),t.fixed&&(t.fixed=T([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return h(t||r).src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},m=Object.create({}),g=function(e){var t=d(e),r=p(t);return m[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),u.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function T(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function E(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function A(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function O(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var C=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+u+o+s+r+n+t+i+a+c+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=u.default.forwardRef((function(e,t){var r=e.src,n=e.imageVariants,a=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=u.default.createElement(x,(0,c.default)({ref:t,src:r},i,{ariaHidden:o}));return n.length>1?u.default.createElement("picture",null,a(n),s):s})),x=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,l=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},h,{onLoad:o,onError:l,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));x.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&v&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(y||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=u.default.createRef(),r.placeholderRef=t.placeholderRef||u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=p(t),m[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,T=e.loading,O=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,c.default)({opacity:C?1:0,transition:P?"opacity "+b+"ms":"none"},s),R="boolean"==typeof y?"lightgray":y,k={transitionDelay:b+"ms"},q=(0,c.default)((0,c.default)((0,c.default)({opacity:this.state.imgLoaded?0:1},P&&k),s),f),M={title:t,alt:this.state.isVisible?"":r,style:q,className:p,itemProp:w};if(m){var N=m,H=h(m);return u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},u.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),R&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&k)}),H.base64&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:M,imageVariants:N,generateSources:A}),H.tracedSVG&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:M,imageVariants:N,generateSources:E}),this.state.isVisible&&u.default.createElement("picture",null,S(N),u.default.createElement(x,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:T,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)((0,c.default)({alt:r,title:t,loading:T},H),{},{imageVariants:N}))}}))}if(g){var D=g,z=h(g),G=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete G.display,u.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},R&&u.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:R,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},P&&k)}),z.base64&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:M,imageVariants:D,generateSources:A}),z.tracedSVG&&u.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:M,imageVariants:D,generateSources:E}),this.state.isVisible&&u.default.createElement("picture",null,S(D),u.default.createElement(x,{alt:r,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:T,draggable:O})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)((0,c.default)({alt:r,title:t,loading:T},z),{},{imageVariants:D}))}}))}return null},t}(u.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),R=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string,maxWidth:l.default.number,maxHeight:l.default.number});P.propTypes={resolutions:j,sizes:R,fixed:l.default.oneOfType([j,l.default.arrayOf(j)]),fluid:l.default.oneOfType([R,l.default.arrayOf(R)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var k=P;t.default=k},Bl7J:function(e,t,r){"use strict";var n=r("qgqF"),a=r("q1tI"),i=r.n(a),o=r("Wbzz"),s=r("3VjD"),c=r("9eSz"),u=r.n(c),l=function(){var e=s.data;return i.a.createElement(u.a,{fluid:e.placeholderImage.childImageSharp.fluid})},d=function(e){var t=e.siteTitle,r=e.siteAuthor;return i.a.createElement("header",{style:{background:"#00387e",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0.5rem 0.6rem"}},i.a.createElement("h1",{style:{margin:0,fontSize:"1.6em"}},i.a.createElement(o.Link,{to:"/",style:{color:"white",textDecoration:"none",maxHeight:"5rem"}},i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},i.a.createElement("div",{style:{minWidth:"3rem",height:"100",margin:"0.4rem"}},i.a.createElement(l,null)),i.a.createElement("span",{style:{verticalAlign:"middle"}},t," ",i.a.createElement("span",{style:{fontFamily:"monospace"}},r)))))))};d.defaultProps={siteTitle:"",siteAuthor:""};var f=d;r("8ypT"),t.a=function(e){var t=e.children,r=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:r.site.siteMetadata.title,siteAuthor:r.site.siteMetadata.author}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},C9fy:function(e,t,r){var n=Date.prototype,a=n.toString,i=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("IYdN")(n,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Fabio Colella","description":"Fabio Colella\'s personal website.","author":"@fcole90"}}}}')},R48M:function(e,t,r){var n=r("P8UN");n(n.S+n.F*!r("QPJK"),"Object",{defineProperty:r("rjfK").f})},SGlo:function(e,t,r){"use strict";var n=r("rj/q"),a=r("N+BI").getWeak,i=r("1a8y"),o=r("BjK0"),s=r("xa9o"),c=r("yde8"),u=r("Wadk"),l=r("qDzq"),d=r("O1i0"),f=u(5),p=u(6),h=0,m=function(e){return e._l||(e._l=new g)},g=function(){this.a=[]},y=function(e,t){return f(e.a,(function(e){return e[0]===t}))};g.prototype={get:function(e){var t=y(this,e);if(t)return t[1]},has:function(e){return!!y(this,e)},set:function(e,t){var r=y(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,i){var u=e((function(e,n){s(e,u,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=n&&c(n,r,e[i],e)}));return n(u.prototype,{delete:function(e){if(!o(e))return!1;var r=a(e);return!0===r?m(d(this,t)).delete(e):r&&l(r,this._i)&&delete r[this._i]},has:function(e){if(!o(e))return!1;var r=a(e);return!0===r?m(d(this,t)).has(e):r&&l(r,this._i)}}),u},def:function(e,t,r){var n=a(i(t),!0);return!0===n?m(e).set(t,r):n[e._i]=r,e},ufstore:m}},bmMU:function(e,t,r){"use strict";r("pJf4"),r("Ll4R"),r("q8oJ"),r("C9fy"),r("klQ5"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("MIFh");var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var s,c,u,l=n(t),d=n(r);if(l&&d){if((c=t.length)!=r.length)return!1;for(s=c;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(l!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var h=t instanceof RegExp,m=r instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==r.toString();var g=a(t);if((c=g.length)!==a(r).length)return!1;for(s=c;0!=s--;)if(!i.call(r,g[s]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(s=c;0!=s--;)if(!("_owner"===(u=g[s])&&t.$$typeof||e(t[u],r[u])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},eMsz:function(e,t,r){"use strict";var n,a=r("emib"),i=r("Wadk")(0),o=r("IYdN"),s=r("N+BI"),c=r("k5Iv"),u=r("SGlo"),l=r("BjK0"),d=r("O1i0"),f=r("O1i0"),p=!a.ActiveXObject&&"ActiveXObject"in a,h=s.getWeak,m=Object.isExtensible,g=u.ufstore,y=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(l(e)){var t=h(e);return!0===t?g(d(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return u.def(d(this,"WeakMap"),e,t)}},v=e.exports=r("94Pd")("WeakMap",y,b,u,!0,!0);f&&p&&(c((n=u.getConstructor(y,"WeakMap")).prototype,b),s.NEED=!0,i(["delete","has","get","set"],(function(e){var t=v.prototype,r=t[e];o(t,e,(function(t,a){if(l(t)&&!m(t)){this._f||(this._f=new n);var i=this._f[e](t,a);return"set"==e?this:i}return r.call(this,t,a)}))})))},klQ5:function(e,t,r){var n=r("emib"),a=r("TUPI"),i=r("rjfK").f,o=r("chL8").f,s=r("mhTz"),c=r("lb9j"),u=n.RegExp,l=u,d=u.prototype,f=/a/g,p=/a/g,h=new u(f)!==f;if(r("QPJK")&&(!h||r("96qb")((function(){return p[r("sOol")("match")]=!1,u(f)!=f||u(p)==p||"/a/i"!=u(f,"i")})))){u=function(e,t){var r=this instanceof u,n=s(e),i=void 0===t;return!r&&n&&e.constructor===u&&i?e:a(h?new l(n&&!i?e.source:e,t):l((n=e instanceof u)?e.source:e,n&&i?c.call(e):t),r?this:d,u)};for(var m=function(e){e in u||i(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},g=o(l),y=0;g.length>y;)m(g[y++]);d.constructor=u,u.prototype=d,r("IYdN")(n,"RegExp",u)}r("to/b")("RegExp")},qgqF:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Fabio Colella","author":"@fcole90"}}}}')},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return me}));r("wZFJ"),r("HQhv"),r("n7j8"),r("1dPr"),r("JHok"),r("OeI1"),r("MIFh"),r("sC2a"),r("sc67"),r("LagC"),r("pS08"),r("E5k/"),r("R48M"),r("m210"),r("4DPX"),r("U6Bt"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("AqHK");var n,a,i,o,s=r("17x9"),c=r.n(s),u=r("8+s/"),l=r.n(u),d=r("bmMU"),f=r.n(d),p=r("q1tI"),h=r.n(p),m=r("MgzW"),g=r.n(m),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",E="href",A="http-equiv",O="innerHTML",C="itemprop",I="name",L="property",x="rel",P="src",j="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",q="defer",M="encodeSpecialCharacters",N="onChangeClientState",H="titleTemplate",D=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),z=[w.NOSCRIPT,w.SCRIPT,w.STYLE],G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=Z(e,w.TITLE),r=Z(e,H);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Z(e,k);return t||n||void 0},J=function(e){return Z(e,N)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},_=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+G(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||r===x&&"canonical"===e[r].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==O&&s!==T&&s!==C||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=g()({},n[s],a[s]);n[s]=c}return e}),[]).reverse()},Z=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;ce(w.BODY,n),ce(w.HTML,a),se(d,f);var p={baseTag:ue(w.BASE,r),linkTags:ue(w.LINK,i),metaTags:ue(w.META,o),noscriptTags:ue(w.NOSCRIPT,s),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,l)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=p[e].oldTags)})),t&&t(),c(e,h,m)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(w.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var d=i.length-1;d>=0;d--)r.removeAttribute(i[d]);a.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=de(r,n),[h.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=le(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+F(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+F(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return de(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=R[e]||e;if(r===O||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),h.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+F(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,d=void 0===l?"":l,f=e.titleAttributes;return{base:fe(w.BASE,t,n),bodyAttributes:fe(y,r,n),htmlAttributes:fe(b,a,n),link:fe(w.LINK,i,n),meta:fe(w.META,o,n),noscript:fe(w.NOSCRIPT,s,n),script:fe(w.SCRIPT,c,n),style:fe(w.STYLE,u,n),title:fe(w.TITLE,{title:d,titleAttributes:f},n)}},he=l()((function(e){return{baseTag:_([E,j],e),bodyAttributes:K(y,e),defer:Z(e,q),encode:Z(e,M),htmlAttributes:K(b,e),linkTags:X(w.LINK,[x,E],e),metaTags:X(w.META,[I,S,A,L,C],e),noscriptTags:X(w.NOSCRIPT,[O],e),onChangeClientState:J(e),scriptTags:X(w.SCRIPT,[P,O],e),styleTags:X(w.STYLE,[T],e),title:Q(e),titleAttributes:K(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),me=(a=he,o=i=function(e){function t(){return V(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case w.TITLE:return U({},a,((t={})[n.type]=o,t.titleAttributes=U({},i),t));case w.BODY:return U({},a,{bodyAttributes:U({},i)});case w.HTML:return U({},a,{htmlAttributes:U({},i)})}return U({},a,((r={})[n.type]=U({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(B(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=B(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),h.a.createElement(a,n)},W(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);me.renderStatic=me.rewind}).call(this,r("yLpj"))},"t+fG":function(e,t,r){var n=r("P8UN"),a=r("96qb"),i=r("ap2Z"),o=/"/g,s=function(e,t,r,n){var a=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},vrFN:function(e,t,r){"use strict";var n=r("EH9Q"),a=r("q1tI"),i=r.n(a),o=r("qhky");function s(e){var t=e.description,r=e.lang,a=e.meta,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(a)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r},zTTH:function(e,t,r){"use strict";var n=r("P8UN"),a=r("Wadk")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("Dq1/")(i)}}]);
//# sourceMappingURL=commons-dcf7d9e61e5f6609810f.js.map