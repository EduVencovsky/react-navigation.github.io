"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5536],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),v=r,m=d["".concat(p,".").concat(v)]||d[v]||c[v]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",p="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,u=e.values,c=e.groupId,d=e.className,v=a.Children.toArray(e.children),m=null!=u?u:v.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=s?s:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),k=g.tabGroupChoices,b=g.setTabGroupChoices,h=(0,a.useState)(f),N=h[0],y=h[1],x=[];if(null!=c){var w=k[c];null!=w&&w!==N&&m.some((function(e){return e.value===w}))&&y(w)}var T=function(e){var t=e.currentTarget,n=x.indexOf(t),a=m[n].value;y(a),null!=c&&(b(c,a),setTimeout((function(){var e,n,a,r,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.target)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.target)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},75718:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(55064),l=n(58215),p=["components"],s={id:"devtools",title:"Developer tools",sidebar_label:"Developer tools"},u=void 0,c={unversionedId:"devtools",id:"version-6.x/devtools",isDocsHomePage:!1,title:"Developer tools",description:"Developer tools to make debugging easier when using React Navigation.",source:"@site/versioned_docs/version-6.x/devtools.md",sourceDirName:".",slug:"/devtools",permalink:"/docs/devtools",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/devtools.md",tags:[],version:"6.x",frontMatter:{id:"devtools",title:"Developer tools",sidebar_label:"Developer tools"},sidebar:"version-6.x/docs",previous:{title:"Link",permalink:"/docs/link"},next:{title:"Elements Library",permalink:"/docs/elements"}},d=[{value:"API Definition",id:"api-definition",children:[{value:"<code>useFlipper</code>",id:"useflipper",children:[]},{value:"<code>useReduxDevToolsExtension</code>",id:"usereduxdevtoolsextension",children:[]}]}],v={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Developer tools to make debugging easier when using React Navigation."),(0,o.kt)("p",null,"To use the developer tools, install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/master/packages/devtools"},(0,o.kt)("inlineCode",{parentName:"a"},"@react-navigation/devtools")),":"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/devtools\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/devtools\n")))),(0,o.kt)("p",null,"Hooks from this package only work during development and are disabled in production. You don't need to do anything special to remove them from the production build."),(0,o.kt)("h2",{id:"api-definition"},"API Definition"),(0,o.kt)("p",null,"The package exposes the following APIs:"),(0,o.kt)("h3",{id:"useflipper"},(0,o.kt)("inlineCode",{parentName:"h3"},"useFlipper")),(0,o.kt)("p",null,"This hook provides integration with ",(0,o.kt)("a",{parentName:"p",href:"https://fbflipper.com/"},"Flipper")," for React Native apps."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This doesn't work in Expo managed apps since they don't support Flipper.")),(0,o.kt)("p",null,"To be able to use this hook, you need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://fbflipper.com/docs/features/react-native/"},"Configure Flipper in your React Native app")," if it's not configured already")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-flipper")," package in your app:"),(0,o.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev react-native-flipper\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --save-dev react-native-flipper\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-navigation")," plugin in the Flipper app"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Install Flipper",src:n(86786).Z})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:")),(0,o.kt)("p",null,"To use the hook, import it and pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," as its argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';\nimport { useFlipper } from '@react-navigation/devtools';\n\nexport default function App() {\n  const navigationRef = useNavigationContainerRef();\n\n  useFlipper(navigationRef);\n\n  return (\n    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n  );\n}\n")),(0,o.kt)("p",null,"Now, you'll be able to use the React Navigation devtools in Flipper whenever your device is connected to Flipper."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React Navigation Logs",src:n(18863).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"React Navigation Linking",src:n(39774).Z})),(0,o.kt)("h3",{id:"usereduxdevtoolsextension"},(0,o.kt)("inlineCode",{parentName:"h3"},"useReduxDevToolsExtension")),(0,o.kt)("p",null,"This hook provides integration with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"Redux DevTools Extension"),". It also works with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jhen0409/react-native-debugger"},(0,o.kt)("inlineCode",{parentName:"a"},"React Native Debugger app"))," which includes this extension."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage:")),(0,o.kt)("p",null,"To use the hook, import it and pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," as its argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';\nimport { useReduxDevToolsExtension } from '@react-navigation/devtools';\n\nexport default function App() {\n  const navigationRef = useNavigationContainerRef();\n\n  useReduxDevToolsExtension(navigationRef);\n\n  return (\n    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n  );\n}\n")),(0,o.kt)("p",null,"Now, you'll be able to see logs from React Navigation in Redux DevTools Extension, e.g. when you're debugging your app with React Native Debugger app."))}m.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},86786:function(e,t,n){t.Z=n.p+"assets/images/flipper-plugin-install-18408c3f0e7f56fae46e87d55019d007.png"},39774:function(e,t,n){t.Z=n.p+"assets/images/flipper-plugin-linking-5f9ec9cba7913ada028e6314f1bef395.png"},18863:function(e,t,n){t.Z=n.p+"assets/images/flipper-plugin-logs-220cf869c9f44eceb1e62f9eefbf0c7c.png"}}]);