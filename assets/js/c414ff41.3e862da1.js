"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5978],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",c="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,u=e.values,p=e.groupId,d=e.className,f=r.Children.toArray(e.children),m=null!=u?u:f.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,h=o(),g=h.tabGroupChoices,y=h.setTabGroupChoices,b=(0,r.useState)(v),k=b[0],w=b[1],N=[];if(null!=p){var x=g[p];null!=x&&x!==k&&m.some((function(e){return e.value===x}))&&w(x)}var O=function(e){var t=e.currentTarget,n=N.indexOf(t),r=m[n].value;w(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,a,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},26289:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(55064),l=n(58215),c=["components"],s={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},u=void 0,p={unversionedId:"getting-started",id:"version-2.x/getting-started",isDocsHomePage:!1,title:"Getting started",description:"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.",source:"@site/versioned_docs/version-2.x/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/2.x/getting-started",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/getting-started.md",tags:[],version:"2.x",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"version-2.x-docs",next:{title:"Hello React Navigation",permalink:"/docs/2.x/hello-react-navigation"}},d=[{value:"What to expect",id:"what-to-expect",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Hybrid iOS Applications (Skip for RN only projects)",id:"hybrid-ios-applications-skip-for-rn-only-projects",children:[]}],f={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives."),(0,o.kt)("p",null,"Before you commit to using React Navigation for your project, you might want to read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/pitch"},"anti-pitch")," ","\u2014"," it will help you to understand the tradeoffs that we have chosen along with the areas where we consider the library to be deficient currently."),(0,o.kt)("h2",{id:"what-to-expect"},"What to expect"),(0,o.kt)("p",null,"If you're already familiar with React Native then you'll be able to get moving with React Navigation quickly! If not, you may want to read sections 1 to 4 (inclusive) of ",(0,o.kt)("a",{parentName:"p",href:"http://reactnativeexpress.com/"},"React Native Express")," first, then come back here when you're done."),(0,o.kt)("p",null,"What follows within the ",(0,o.kt)("em",{parentName:"p"},"Fundamentals")," section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-navigation")," package in your React Native project."),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation\n")))),(0,o.kt)("h2",{id:"hybrid-ios-applications-skip-for-rn-only-projects"},"Hybrid iOS Applications (Skip for RN only projects)"),(0,o.kt)("p",null,"If you're using React Navigation within a hybrid app - an iOS app that has both Swift/ObjC and React Native parts - you may be missing the ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTLinkingIOS")," subspec in your Podfile, which is installed by default in new RN projects. To add this, ensure your Podfile looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," pod 'React', :path => '../node_modules/react-native', :subspecs => [\n    . . . // other subspecs\n    'RCTLinkingIOS',\n    . . .\n  ]\n")),(0,o.kt)("p",null,"You're good to go! Continue to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."))}m.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);