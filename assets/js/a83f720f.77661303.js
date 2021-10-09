"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[23],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(a),d=i,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},38309:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],s={id:"limitations",title:"Limitations",sidebar_label:"Limitations"},c=void 0,l={unversionedId:"limitations",id:"version-2.x/limitations",isDocsHomePage:!1,title:"Limitations",description:"As a potential user of the library, it's important to know what you can and cannot do with it. Armed with this knowledge, you may choose to adopt a different library instead. We discuss the high level design decisions in the pitch & anti-pitch section, and here we will cover some of the use cases that are either not supported or are so difficult to do that they may as well be impossible. If any of the following limitations are dealbreakers for your app, React Navigation might not be for you.",source:"@site/versioned_docs/version-2.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/docs/2.x/limitations",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/limitations.md",tags:[],version:"2.x",frontMatter:{id:"limitations",title:"Limitations",sidebar_label:"Limitations"},sidebar:"version-2.x-docs",previous:{title:"Optimize memory usage and performance",permalink:"/docs/2.x/react-native-screens"},next:{title:"Tab navigation",permalink:"/docs/2.x/tab-based-navigation"}},u=[{value:"Dynamic routes",id:"dynamic-routes",children:[]},{value:"iOS 11 style header with large text",id:"ios-11-style-header-with-large-text",children:[]},{value:"Right-to-left (RTL) layout support",id:"right-to-left-rtl-layout-support",children:[]},{value:"Performance limitations",id:"performance-limitations",children:[]},{value:"Nuanced platform-specific behavior",id:"nuanced-platform-specific-behavior",children:[]}],p={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a potential user of the library, it's important to know what you can and cannot do with it. Armed with this knowledge, you may choose to adopt ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/alternatives"},"a different library instead"),". We discuss the high level design decisions in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/pitch"},"pitch & anti-pitch")," section, and here we will cover some of the use cases that are either not supported or are so difficult to do that they may as well be impossible. If any of the following limitations are dealbreakers for your app, React Navigation might not be for you."),(0,o.kt)("h2",{id:"dynamic-routes"},"Dynamic routes"),(0,o.kt)("p",null,"This one requires a bit of understanding of React Navigation to fully grok."),(0,o.kt)("p",null,"React Navigation requires that you define your routes statically, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const FriendsNavigator = createDrawerNavigator({\n  Feed: FeedScreen,\n  FriendList: FriendListScreen,\n});\n\nconst AuthNavigator = createStackNavigator({\n  SignIn: SignInScreen,\n  ForgotPassword: ForgotPasswordScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  App: FriendsNavigator,\n  Auth: AuthNavigator,\n});\n\nexport default class MyApp extends React.Component {\n  render() {\n    return <AppNavigator />;\n  }\n}\n")),(0,o.kt)("p",null,"Let's say that when a user signs in to the app, you want to get a list of the user's friends and add a route for each friend in the ",(0,o.kt)("inlineCode",{parentName:"p"},"FriendsNavigator"),". This would make it so there is a button with each of their names in the drawer. React Navigation does not currently provide an easy way to do this. React Navigation currently works best in situations where your routes can be defined statically. Keep in mind that this does not mean that you cannot pass arbitrary data to your routes ","\u2014"," you can do this using ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/params"},"params"),"."),(0,o.kt)("p",null,"There are workarounds if you absolutely need dynamic routes but you can expect some additional complexity."),(0,o.kt)("h2",{id:"ios-11-style-header-with-large-text"},"iOS 11 style header with large text"),(0,o.kt)("p",null,"This is on the roadmap to implement, but it's not currently available in the React Navigation. Some folks have ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/issues/2749#issuecomment-367516290"},"gone ahead and built their own version of this"),", but your mileage may vary."),(0,o.kt)("h2",{id:"right-to-left-rtl-layout-support"},"Right-to-left (RTL) layout support"),(0,o.kt)("p",null,"You may encounter issues with RTL layouts when using React Navigation. The team working on React Navigation is fairly small and we do not have the bandwidth or processes at the moment to test all changes against RTL layouts. If you like what React Navigation has to offer but are turned off by this constraint, we encourage you to get involved and take ownership of RTL layout support. Please reach out to us on Twitter: ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/reactnavigation"},"@reactnavigation"),"."),(0,o.kt)("h2",{id:"performance-limitations"},"Performance limitations"),(0,o.kt)("p",null,"We are able to offload animations to another thread using React Native's ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/blog/2017/02/14/using-native-driver-for-animated.html"},"Animated native driver"),", but we currently still need to call back into JavaScript for gestures (although there are plans to remedy this in the near future). React Navigation is entirely made up of React components and the state is managed in JavaScript on the same thread as the rest of your app. This is what makes React Navigation great in many ways but it also means that your app logic contends for CPU time with React Navigation ","\u2014"," there's only so much JavaScript execution time available per frame."),(0,o.kt)("h2",{id:"nuanced-platform-specific-behavior"},"Nuanced platform-specific behavior"),(0,o.kt)("p",null,"Some platform-specific behavior either cannot be implemented or has not yet been implemented in React Navigation."),(0,o.kt)("p",null,"Versions prior to 2.14.0 do not support the ",(0,o.kt)("a",{parentName:"p",href:"https://www.cnet.com/how-to/how-to-use-reachability-on-iphone-6-6-plus/"},'"reachability feature" on iOS'),". When you toggle this feature, the app moves down towards the bottom of the screen so you can easily reach the navigation bar and other functionality near the top of the UI. When you navigate to another screen using the built-in iOS navigation API, the UI will jump back up to the top of the screen. React-navigation 2.14.0 and later supports this feature through integration with ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/react-native-screens"},"react-native-screens"),"."),(0,o.kt)("p",null,"React-navigation does not include support for the peek & pop feature available on devices with 3D touch."))}h.isMDXComponent=!0}}]);