webpackJsonp([0xd2a57dc1d883],{85:function(n,e,t){"use strict";function o(n,e,t){var o=r.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function a(n,e,t){return r.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=a;var r=[{plugin:t(389),options:{plugins:[],trackingId:"UA-73379983-2"}},{plugin:t(391),options:{plugins:[]}},{plugin:t(388),options:{plugins:[]}}]},218:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(349),"component---src-templates-page-template-jsx":t(355),"component---src-templates-post-template-jsx":t(356),"component---src-templates-tag-template-jsx":t(357),"component---src-templates-category-template-jsx":t(353),"component---src-templates-index-jsx":t(354),"component---src-pages-categories-jsx":t(351),"component---src-pages-tags-jsx":t(352)},e.json={"layout-index.json":t(358),"offline-plugin-app-shell-fallback.json":t(367),"contact.json":t(365),"posts-react-redux-and-immutable.json":t(375),"tags-react.json":t(380),"tags-大前端.json":t(384),"categories-前端技術.json":t(363),"posts-koan-sozan.json":t(371),"tags-哲學.json":t(383),"tags-禪宗.json":t(386),"tags-佛教.json":t(381),"categories-哲學.json":t(364),"posts-macrotask-and-microtask.json":t(372),"tags-java-script.json":t(379),"posts-derived-state.json":t(368),"categories-前端.json":t(362),"posts-react-state-patterns.json":t(376),"posts-five-steps-into-zen.json":t(370),"posts-zhuxi-theory.json":t(377),"tags-儒家.json":t(382),"posts-react-hooks.json":t(374),"posts-digest-of-confucianism.json":t(369),"posts-meister-echkhart-six-stages.json":t(373),"tags-神學.json":t(385),"about.json":t(360),"index.json":t(366),"2.json":t(359),"categories.json":t(361),"tags.json":t(378)},e.layouts={"layout---index":t(350)}},219:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(8),p=o(l),f=t(147),d=o(f),m=t(60),h=o(m),g=t(85),x=t(581),y=o(x),j=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){a(this,e);var o=r(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,y.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},60:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(471),r=o(a),u=(0,r.default)();n.exports=u},220:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(84),r=t(148),u=o(r),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),r=(0,u.default)(o,e);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),s[r])return s[r];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(r,{path:n.path})||(0,a.matchPath)(r,{path:n.matchPath}))return i=n,s[r]=n,!0}else{if((0,a.matchPath)(r,{path:n.path,exact:!0}))return i=n,s[r]=n,!0;if((0,a.matchPath)(r,{path:n.path+"index.html"}))return i=n,s[r]=n,!0}return!1}),i}}},221:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(177),r=o(a),u=t(85),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,r.default)();n.exports=c},359:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8f0ce58d3892,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(399)})})}},360:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(400)})})}},362:function(n,e,t){t(3),n.exports=function(n){return t.e(0x97f1665cf853,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(401)})})}},363:function(n,e,t){t(3),n.exports=function(n){return t.e(0x67acbdebd58a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(402)})})}},364:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe59854885e17,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(403)})})}},361:function(n,e,t){t(3),n.exports=function(n){return t.e(30875753179511,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(404)})})}},365:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(405)})})}},366:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(406)})})}},358:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(112)})})}},367:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(407)})})}},368:function(n,e,t){t(3),n.exports=function(n){return t.e(2590805542364,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(408)})})}},369:function(n,e,t){t(3),n.exports=function(n){return t.e(0xcedcd867cc17,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(409)})})}},370:function(n,e,t){t(3),n.exports=function(n){return t.e(0x6509e36954ba,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(410)})})}},371:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa9ea4c3e8f4e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(411)})})}},372:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9382a1a6709a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(412)})})}},373:function(n,e,t){t(3),n.exports=function(n){return t.e(59108605184087,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(413)})})}},374:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbe2d2c109f6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(414)})})}},375:function(n,e,t){t(3),n.exports=function(n){return t.e(98624306534198,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(415)})})}},376:function(n,e,t){t(3),n.exports=function(n){return t.e(0xed5748c8da4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(416)})})}},377:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe1dbdc0ffcb5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(417)})})}},379:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc1658d68ad40,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(418)})})}},380:function(n,e,t){t(3),n.exports=function(n){return t.e(84586273293571,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(419)})})}},381:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf3af43ae99d7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(420)})})}},382:function(n,e,t){t(3),n.exports=function(n){return t.e(6360865861898,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(421)})})}},383:function(n,e,t){t(3),n.exports=function(n){return t.e(0x612f22421246,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(422)})})}},384:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd6912bd51276,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(423)})})}},385:function(n,e,t){t(3),n.exports=function(n){return t.e(86366341888098,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(424)})})}},386:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe791afcfc63d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(425)})})}},378:function(n,e,t){t(3),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(426)})})}},350:function(n,e,t){t(3),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(222)})})}},147:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=t(1),r=(o(a),t(220)),u=o(r),s=t(60),i=o(s),c=t(148),l=o(c),p=void 0,f={},d={},m={},h={},g={},x=[],y=[],j={},v="",N=[],C={},w=function(n){return n&&n.default||n},k=void 0,R=!0,b=[],_={},P={},E=5;k=t(223)({getNextQueuedResources:function(){return N.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){N=N.filter(function(e){return e!==n}),k.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){k.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){k.onPostLoadPageResources(n)});var O=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},T=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,b.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),b=b.slice(-E),t(n,o)})}},S=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):L(e,function(n,o){if(n)t(n);else{var a=w(o());g[e]=a,t(n,a)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=b.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},F=1,I={empty:function(){y=[],j={},C={},N=[],x=[],v=""},addPagesArray:function(n){x=n,p=(0,u.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return y.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!x.some(function(n){return n.path===e}))return!1;var t=1/F;F+=1,j[e]?j[e]+=1:j[e]=1,I.has(e)||y.unshift(e),y.sort(T);var o=p(e);return o.jsonName&&(C[o.jsonName]?C[o.jsonName]+=1+t:C[o.jsonName]=1+t,N.indexOf(o.jsonName)!==-1||h[o.jsonName]||N.unshift(o.jsonName)),o.componentChunkName&&(C[o.componentChunkName]?C[o.componentChunkName]+=1+t:C[o.componentChunkName]=1+t,N.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||N.unshift(o.componentChunkName)),N.sort(O),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:N,resourcesCount:C}},getPages:function(){return{pathArray:y,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return y.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var a;if(t){if(o>=e.length)break;a=e[o++]}else{if(o=e.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),R=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,s=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){m[e]={component:a,json:r,layout:u,page:o};var n={component:a,json:r,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),a=e,s()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),r=e,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return y.slice(-1)[0]},length:function(){return y.length},indexOf:function(n){return y.length-y.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:I.getResourcesForPathname};e.default=I}).call(e,t(127))},427:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"contact.json",path:"/contact"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-react-redux-and-immutable.json",path:"/posts/react-redux-and-immutable/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-react.json",path:"/tags/react/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-大前端.json",path:"/tags/大前端/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-前端技術.json",path:"/categories/前端技術/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-koan-sozan.json",path:"/posts/koan-sozan/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-哲學.json",path:"/tags/哲學/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-禪宗.json",path:"/tags/禪宗/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-佛教.json",path:"/tags/佛教/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-哲學.json",path:"/categories/哲學/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-macrotask-and-microtask.json",path:"/posts/macrotask-and-microtask/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-java-script.json",path:"/tags/java-script/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-derived-state.json",path:"/posts/derived-state/"},{componentChunkName:"component---src-templates-category-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-前端.json",path:"/categories/前端/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-react-state-patterns.json",path:"/posts/react-state-patterns"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-five-steps-into-zen.json",path:"/posts/five-steps-into-zen/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-zhuxi-theory.json",path:"/posts/zhuxi-theory/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-儒家.json",path:"/tags/儒家/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-react-hooks.json",path:"/posts/react-hooks/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-digest-of-confucianism.json",path:"/posts/digest-of-confucianism/"},{componentChunkName:"component---src-templates-post-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-meister-echkhart-six-stages.json",path:"/posts/meister-echkhart-six-stages/"},{componentChunkName:"component---src-templates-tag-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-神學.json",path:"/tags/神學/"},{componentChunkName:"component---src-templates-page-template-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about"},{componentChunkName:"component---src-templates-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-templates-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"2.json",path:"/2"},{componentChunkName:"component---src-pages-categories-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags.json",path:"/tags/"}]},223:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],a=[],r=function(){var n=e();n&&(a.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r=t(85),u=t(1),s=o(u),i=t(184),c=o(i),l=t(84),p=t(395),f=t(332),d=o(f),m=t(21),h=t(221),g=o(h),x=t(60),y=o(x),j=t(427),v=o(j),N=t(428),C=o(N),w=t(219),k=o(w),R=t(218),b=o(R),_=t(147),P=o(_);t(254),window.___history=g.default,window.___emitter=y.default,P.default.addPagesArray(v.default),P.default.addProdRequires(b.default),window.asyncRequires=b.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var a=n.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(224);var o=function(n,e){function t(n){n.page.path===P.default.getPage(a).path&&(y.default.off("onPostLoadPageResources",t),clearTimeout(i),s(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),a=o.pathname,r=E[a];r&&(a=r.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var s=e?window.___history.replace:window.___history.push,i=setTimeout(function(){y.default.off("onPostLoadPageResources",t),y.default.emit("onDelayedLoadPageResources",{pathname:a}),s(o)},1e3);P.default.getResourcesForPathname(a)?(clearTimeout(i),s(o)):y.default.on("onPostLoadPageResources",t)}};window.___push=function(n){return o(n,!1)},window.___replace=function(n){return o(n,!0)},window.___navigateTo=window.___push,(0,r.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,r.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},x=(0,l.withRouter)(k.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(x,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(k.default,a({page:!0},o)):(0,u.createElement)(k.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0],i=(0,r.apiRunner)("replaceHydrateFunction",void 0,c.default.render)[0];(0,d.default)(function(){return i(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},428:function(n,e){n.exports=[]},224:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(60),r=o(a),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},148:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},332:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,n=function(){for(t.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},333:function(n,e){"use strict";var t=/[|\\{}()[\]^$+*?.]/g;n.exports=function(n){if("string"!=typeof n)throw new TypeError("Expected a string");return n.replace(t,"\\$&")}},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!r&&e&&e[o]?void c(!0):(a(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,r?r[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},387:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.routeThroughBrowserOrApp=e.hashShouldBeFollowed=e.pathIsNotHandledByApp=e.urlsAreOnSameOrigin=e.authorIsForcingNavigation=e.anchorsTargetIsEquivalentToSelf=e.findClosestAnchor=e.navigationWasHandledElsewhere=e.slashedPathname=e.userIsForcingNavigation=void 0,e.default=function(n,e){var t=g(e);return n.addEventListener("click",t),function(){return n.removeEventListener("click",t)}};var a=t(333),r=o(a),u=t(12),s=e.userIsForcingNavigation=function(n){return 0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey},i=e.slashedPathname=function(n){return"/"===n[0]?n:"/"+n},c=e.navigationWasHandledElsewhere=function(n){return n.defaultPrevented},l=e.findClosestAnchor=function(n){for(;n.parentNode;n=n.parentNode)if("a"===n.nodeName.toLowerCase())return n;return null},p=e.anchorsTargetIsEquivalentToSelf=function(n){return n.hasAttribute("target")===!1||null==n.target||["_self",""].indexOf(n.target)!==-1||"_parent"===n.target&&(!n.ownerDocument.defaultView.parent||n.ownerDocument.defaultView.parent===n.ownerDocument.defaultView)||"_top"===n.target&&(!n.ownerDocument.defaultView.top||n.ownerDocument.defaultView.top===n.ownerDocument.defaultView)},f=e.authorIsForcingNavigation=function(n){return n.hasAttribute("download")===!0||p(n)===!1},d=e.urlsAreOnSameOrigin=function(n,e){return n.protocol===e.protocol&&n.host===e.host},m=e.pathIsNotHandledByApp=function(n){var e=new RegExp("^"+(0,r.default)((0,u.withPrefix)("/"))),t=/^.*\.((?!htm)[a-z0-9]{1,5})$/i;return e.test(i(n.pathname))===!1||n.pathname.search(t)!==-1},h=e.hashShouldBeFollowed=function(n,e){return""!==e.hash&&(""===e.pathname||e.pathname===n.pathname)},g=e.routeThroughBrowserOrApp=function(n){return function(e){if(s(e))return!0;if(c(e))return!0;var t=l(e.target);if(null==t)return!0;if(f(t))return!0;var o=document.createElement("a");o.href=t.href;var a=document.createElement("a");return a.href=window.location.href,d(a,o)===!1||(!!m(o)||(!!h(a,o)||(e.preventDefault(),n(""+i(o.pathname)+o.search+o.hash),!1)))}}},388:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(12),r=t(387),u=o(r);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,a.navigateTo)(n)})}},389:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},349:function(n,e,t){t(3),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(390)})})}},391:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},471:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},127:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function r(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var n=a(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,r(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||h||a(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,
f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},581:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},351:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81a450a7cd7a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(238)})})}},352:function(n,e,t){t(3),n.exports=function(n){return t.e(36530248567819,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(239)})})}},353:function(n,e,t){t(3),n.exports=function(n){return t.e(90179704293519,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(240)})})}},354:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb7522136ec57,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(241)})})}},355:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa485d5bf544,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(242)})})}},356:function(n,e,t){t(3),n.exports=function(n){return t.e(0x623bdfc73907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(243)})})}},357:function(n,e,t){t(3),n.exports=function(n){return t.e(2638498282051,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(244)})})}}});
//# sourceMappingURL=app-a0e3576b3d351ee14b7a.js.map