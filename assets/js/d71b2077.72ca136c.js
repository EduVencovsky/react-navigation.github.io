"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[4944],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),v=c(n),g=i,d=v["".concat(l,".").concat(g)]||v[g]||u[g]||r;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},54422:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return v}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"custom-navigator-overview",title:"Overview",sidebar_label:"Overview"},l=void 0,c={unversionedId:"custom-navigator-overview",id:"version-1.x/custom-navigator-overview",isDocsHomePage:!1,title:"Overview",description:"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure.",source:"@site/versioned_docs/version-1.x/custom-navigator-overview.md",sourceDirName:".",slug:"/custom-navigator-overview",permalink:"/docs/1.x/custom-navigator-overview",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/custom-navigator-overview.md",tags:[],version:"1.x",frontMatter:{id:"custom-navigator-overview",title:"Overview",sidebar_label:"Overview"},sidebar:"version-1.x/docs",previous:{title:"Redux integration",permalink:"/docs/1.x/redux-integration"},next:{title:"Routers",permalink:"/docs/1.x/routers"}},p=[{value:"Built-in Navigators",id:"built-in-navigators",children:[]},{value:"Rendering screens with Navigators",id:"rendering-screens-with-navigators",children:[{value:"Calling Navigate on Top Level Component",id:"calling-navigate-on-top-level-component",children:[]}]},{value:"Navigation Containers",id:"navigation-containers",children:[{value:"<code>onNavigationStateChange(prevState, newState, action)</code>",id:"onnavigationstatechangeprevstate-newstate-action",children:[]},{value:"<code>uriPrefix</code>",id:"uriprefix",children:[]}]}],u={toc:p};function v(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure."),(0,r.kt)("p",null,"Under the hood, navigators are plain React components."),(0,r.kt)("h2",{id:"built-in-navigators"},"Built-in Navigators"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation")," includes the following functions to help you create navigators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.x/stack-navigator"},"StackNavigator")," - Renders one screen at a time and provides transitions between screens. When a new screen is opened it is placed on top of the stack."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.x/tab-navigator"},"TabNavigator")," - Renders a tab bar that lets the user switch between several screens"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.x/drawer-navigator"},"DrawerNavigator")," - Provides a drawer that slides in from the left of the screen")),(0,r.kt)("h2",{id:"rendering-screens-with-navigators"},"Rendering screens with Navigators"),(0,r.kt)("p",null,"The navigators render application screens which are just React components."),(0,r.kt)("p",null,"To learn how to create screens, read about:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.x/navigation-prop"},"Screen ",(0,r.kt)("inlineCode",{parentName:"a"},"navigation")," prop")," to allow the screen to dispatch navigation actions, such as opening another screen"),(0,r.kt)("li",{parentName:"ul"},"Screen ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")," to customize how the screen gets presented by the navigator (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.x/stack-navigator#navigationoptions-used-by-stacknavigator"},"header title"),", tab label)")),(0,r.kt)("h3",{id:"calling-navigate-on-top-level-component"},"Calling Navigate on Top Level Component"),(0,r.kt)("p",null,"In case you want to use Navigator from the same level you declare it you can use react's ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute"},(0,r.kt)("inlineCode",{parentName:"a"},"ref"))," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NavigationActions } from 'react-navigation';\n\nconst AppNavigator = StackNavigator(SomeAppRouteConfigs);\n\nclass App extends React.Component {\n  someEvent() {\n    // call navigate for AppNavigator here:\n    this.navigator && this.navigator.dispatch(\n      NavigationActions.navigate({ routeName: someRouteName })\n    );\n  }\n  render() {\n    return (\n      <AppNavigator ref={nav => { this.navigator = nav; }} />\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Please notice that this solution should only be used on the top level navigator."),(0,r.kt)("h2",{id:"navigation-containers"},"Navigation Containers"),(0,r.kt)("p",null,"The built in navigators can automatically behave like top-level navigators when the navigation prop is missing. This functionality provides a transparent navigation container, which is where the top-level navigation prop comes from."),(0,r.kt)("p",null,"When rendering one of the included navigators, the navigation prop is optional. When it is missing, the container steps in and manages its own navigation state. It also handles URLs, external linking, and Android back button integration."),(0,r.kt)("p",null,"For the purpose of convenience, the built-in navigators have this ability because behind the scenes they use ",(0,r.kt)("inlineCode",{parentName:"p"},"createNavigationContainer"),". Usually, navigators require a navigation prop in order to function."),(0,r.kt)("p",null,"Top-level navigators accept the following props:"),(0,r.kt)("h3",{id:"onnavigationstatechangeprevstate-newstate-action"},(0,r.kt)("inlineCode",{parentName:"h3"},"onNavigationStateChange(prevState, newState, action)")),(0,r.kt)("p",null,"Function that gets called every time navigation state managed by the navigator changes. It receives the previous state, the new state of the navigation and the action that issued state change. By default it prints state changes to the console."),(0,r.kt)("h3",{id:"uriprefix"},(0,r.kt)("inlineCode",{parentName:"h3"},"uriPrefix")),(0,r.kt)("p",null,"The prefix of the URIs that the app might handle. This will be used when handling a ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.x/deep-linking"},"deep link")," to extract the path passed to the router."))}v.isMDXComponent=!0}}]);