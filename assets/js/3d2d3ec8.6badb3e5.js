"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=l(n),d=a,v=g["".concat(s,".").concat(d)]||g[d]||p[d]||i;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49283:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return g}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={id:"screen-tracking",title:"Screen tracking",sidebar_label:"Screen tracking"},s=void 0,l={unversionedId:"screen-tracking",id:"version-2.x/screen-tracking",isDocsHomePage:!1,title:"Screen tracking",description:"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK.",source:"@site/versioned_docs/version-2.x/screen-tracking.md",sourceDirName:".",slug:"/screen-tracking",permalink:"/docs/2.x/screen-tracking",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/screen-tracking.md",tags:[],version:"2.x",frontMatter:{id:"screen-tracking",title:"Screen tracking",sidebar_label:"Screen tracking"},sidebar:"version-2.x-docs",previous:{title:"Deep linking",permalink:"/docs/2.x/deep-linking"},next:{title:"State persistence",permalink:"/docs/2.x/state-persistence"}},u=[{value:"Listening to State Changes",id:"listening-to-state-changes",children:[]},{value:"Screen tracking with Redux",id:"screen-tracking-with-redux",children:[{value:"Create Redux store and apply the above middleware",id:"create-redux-store-and-apply-the-above-middleware",children:[]}]}],p={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK."),(0,i.kt)("h2",{id:"listening-to-state-changes"},"Listening to State Changes"),(0,i.kt)("p",null,"Most users can use ",(0,i.kt)("inlineCode",{parentName:"p"},"onNavigationStateChange")," to track the screen. If you manually control the top-level navigator (if you have integrated redux), this will not work for you."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';\n\nconst tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);\n\n// gets the current screen from navigation state\nfunction getActiveRouteName(navigationState) {\n  if (!navigationState) {\n    return null;\n  }\n  const route = navigationState.routes[navigationState.index];\n  // dive into nested navigators\n  if (route.routes) {\n    return getActiveRouteName(route);\n  }\n  return route.routeName;\n}\n\nconst AppNavigator = createStackNavigator(AppRouteConfigs);\n\nexport default () => (\n  <AppNavigator\n    onNavigationStateChange={(prevState, currentState) => {\n      const currentScreen = getActiveRouteName(currentState);\n      const prevScreen = getActiveRouteName(prevState);\n\n      if (prevScreen !== currentScreen) {\n        // the line below uses the Google Analytics tracker\n        // change the tracker here to use other Mobile analytics SDK.\n        tracker.trackScreenView(currentScreen);\n      }\n    }}\n  />\n);\n")),(0,i.kt)("h2",{id:"screen-tracking-with-redux"},"Screen tracking with Redux"),(0,i.kt)("p",null,"When using Redux, we can write a Redux middleware to track the screen. For this purpose,\nwe will reuse ",(0,i.kt)("inlineCode",{parentName:"p"},"getActiveRouteName")," from the previous section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { NavigationActions } from 'react-navigation';\nimport { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';\n\nconst tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);\n\nconst screenTracking = ({ getState }) => next => (action) => {\n  if (\n    action.type !== NavigationActions.NAVIGATE\n    && action.type !== NavigationActions.BACK\n  ) {\n    return next(action);\n  }\n\n  const currentScreen = getActiveRouteName(getState().navigation);\n  const result = next(action);\n  const nextScreen = getActiveRouteName(getState().navigation);\n  if (nextScreen !== currentScreen) {\n    // the line below uses the Google Analytics tracker\n    // change the tracker here to use other Mobile analytics SDK.\n    tracker.trackScreenView(nextScreen);\n  }\n  return result;\n};\n\nexport default screenTracking;\n")),(0,i.kt)("h3",{id:"create-redux-store-and-apply-the-above-middleware"},"Create Redux store and apply the above middleware"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"screenTracking")," middleware can be applied to the store during its creation. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/redux-integration"},"Redux Integration")," for details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const store = createStore(\n  combineReducers({\n    navigation: navigationReducer,\n    ...\n  }),\n  applyMiddleware(\n    screenTracking,\n    ...\n    ),\n);\n")))}g.isMDXComponent=!0}}]);