"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[7187],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),g=a,m=f["".concat(l,".").concat(g)]||f[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40664:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"switch-navigator",title:"SwitchNavigator reference",sidebar_label:"SwitchNavigator"},l=void 0,s={unversionedId:"switch-navigator",id:"version-1.x/switch-navigator",isDocsHomePage:!1,title:"SwitchNavigator reference",description:"`js",source:"@site/versioned_docs/version-1.x/switch-navigator.md",sourceDirName:".",slug:"/switch-navigator",permalink:"/docs/1.x/switch-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/switch-navigator.md",tags:[],version:"1.x",frontMatter:{id:"switch-navigator",title:"SwitchNavigator reference",sidebar_label:"SwitchNavigator"},sidebar:"api",previous:{title:"StackNavigator",permalink:"/docs/1.x/stack-navigator"},next:{title:"TabNavigator",permalink:"/docs/1.x/tab-navigator"}},u=[{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"SwitchNavigatorConfig",id:"switchnavigatorconfig",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"SwitchNavigator(RouteConfigs, SwitchNavigatorConfig)\n")),(0,i.kt)("h2",{id:"routeconfigs"},"RouteConfigs"),(0,i.kt)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.x/stack-navigator#routeconfigs"},"example")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"StackNavigator"),"."),(0,i.kt)("h2",{id:"switchnavigatorconfig"},"SwitchNavigatorConfig"),(0,i.kt)("p",null,"Several options get passed to the underlying router to modify navigation logic:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resetOnBlur")," - Reset the state of any nested navigators when switching away from a screen. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"backBehavior")," - Should the back button cause a tab switch to the initial route? If yes, set to ",(0,i.kt)("inlineCode",{parentName:"li"},"initialRoute"),", otherwise ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),". Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"none")," behavior.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"See an example of this ",(0,i.kt)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/auth-flow"},"on Snack"),"."))}f.isMDXComponent=!0}}]);