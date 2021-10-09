"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5939],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),v=s(t),d=o,m=v["".concat(c,".").concat(d)]||v[d]||u[d]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=v;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},13718:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return v}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"navigation-events",title:"NavigationEvents reference",sidebar_label:"NavigationEvents"},c=void 0,s={unversionedId:"navigation-events",id:"version-3.x/navigation-events",isDocsHomePage:!1,title:"NavigationEvents reference",description:"NavigationEvents is a React component providing a declarative API to subscribe to navigation events. It will subscribe to navigation events on mount, and unsubscribe on unmount.",source:"@site/versioned_docs/version-3.x/navigation-events.md",sourceDirName:".",slug:"/navigation-events",permalink:"/docs/3.x/navigation-events",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/navigation-events.md",tags:[],version:"3.x",frontMatter:{id:"navigation-events",title:"NavigationEvents reference",sidebar_label:"NavigationEvents"},sidebar:"version-3.x-docs",previous:{title:"NavigationContext",permalink:"/docs/3.x/navigation-context"},next:{title:"createStackNavigator",permalink:"/docs/3.x/stack-navigator"}},p=[{value:"Component props",id:"component-props",children:[]},{value:"Example",id:"example",children:[]}],u={toc:p};function v(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NavigationEvents")," is a React component providing a declarative API to subscribe to navigation events. It will subscribe to navigation events on mount, and unsubscribe on unmount."),(0,i.kt)("h3",{id:"component-props"},"Component props"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"navigation")," - navigation props (optional, defaults to reading from React context)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onWillFocus")," - event listener"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onDidFocus")," - event listener"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onWillBlur")," - event listener"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onDidBlur")," - event listener")),(0,i.kt)("p",null,"The event listener is the same as the imperative ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.x/navigation-prop#addlistener-subscribe-to-updates-to-navigation-lifecycle"},(0,i.kt)("inlineCode",{parentName:"a"},"navigation.addListener(...)"))," API."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},"import React from 'react';\nimport { View } from 'react-native';\nimport { NavigationEvents } from 'react-navigation';\n\nconst MyScreen = () => (\n  <View>\n    <NavigationEvents\n      onWillFocus={payload => console.log('will focus',payload)}\n      onDidFocus={payload => console.log('did focus',payload)}\n      onWillBlur={payload => console.log('will blur',payload)}\n      onDidBlur={payload => console.log('did blur',payload)}\n    />\n    {/*\n      Your view code\n    */}\n  </View>\n);\n\nexport default MyScreen;\n")))}v.isMDXComponent=!0}}]);