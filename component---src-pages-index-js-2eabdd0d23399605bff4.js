(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return y});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(4),u=n.n(c),s=n(147),l=n(164),d=n.n(l),p=n(162),m=n.n(p),h=(n(158),n(150)),f=n(146),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=d()(this,"props.data.site.siteMetadata.title"),t=d()(this,"props.data.site.siteMetadata.description"),n=d()(this,"props.data.allContentfulPost.edges");return console.log(this.props),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{width:"100%",height:"5px",backgroundColor:"#1ca086",opacity:"0.7"}}),i.a.createElement(h.a,{location:this.props.location},i.a.createElement(m.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),n.map(function(e,t){var n=e.node,a=d()(n,"title"),r=d()(n,"excerpt.excerpt");return i.a.createElement("div",{key:t},i.a.createElement("h3",{style:{marginBottom:Object(f.a)(.25)}},i.a.createElement(s.Link,{style:{boxShadow:"none"},to:"/posts/"+n.slug},a)),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:r}}))})))},t}(i.a.Component);g.propTypes={data:u.a.object.isRequired},t.default=g;var y="1778308090"},146:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return s});var a=n(160),r=n.n(a),o=n(161),i=n.n(o);i.a.googleFonts=[{name:"Martel",styles:["600","700","900"]},{name:"Quattrocento Sans",styles:["400","400i","700"]}],i.a.headerFontFamily=["Martel"],i.a.headerWeight="900";var c=new r.a(i.a);var u=c.rhythm,s=c.scale},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(145),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(148),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},149:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(51),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},150:function(e,t,n){"use strict";n(32);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(147),u=n(146),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.children;return e="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1.5),marginTop:0})},i.a.createElement(c.Link,{style:{backgroundImage:"none",boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Love Builds Here")):i.a.createElement("h3",{style:{backgroundImage:"none",marginTop:0,marginBottom:Object(u.a)(-.05)}},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Love Builds Here")),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},e,a)},t}(i.a.Component);t.a=s},158:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=(n(168),n(169),n(159)),u=n.n(c),s=n(146),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},i.a.createElement("img",{src:u.a,alt:"Adam Murray",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2)}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,"Adam Murray"),", a dad of 5, husband of 1, pastor, and software engineer."," ",i.a.createElement("a",{href:"https://twitter.com/admah"},"You should follow him on Twitter")))},t}(i.a.Component);t.a=l},159:function(e,t,n){e.exports=n.p+"static/adam-profile-pic-7eb1e59184afc1a1e92e6b095cf321b1.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-2eabdd0d23399605bff4.js.map