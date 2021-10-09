"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1170],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(n),m=r,d=f["".concat(a,".").concat(m)]||f[m]||u[m]||l;return n?o.createElement(d,c(c({ref:t},p),{},{components:n})):o.createElement(d,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<l;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},30587:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var o=n(87462),r=n(63366),l=(n(67294),n(3905)),c=["components"],i={id:"use-scroll-to-top",title:"useScrollToTop",sidebar_label:"useScrollToTop"},a=void 0,s={unversionedId:"use-scroll-to-top",id:"version-5.x/use-scroll-to-top",isDocsHomePage:!1,title:"useScrollToTop",description:"The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.",source:"@site/versioned_docs/version-5.x/use-scroll-to-top.md",sourceDirName:".",slug:"/use-scroll-to-top",permalink:"/docs/5.x/use-scroll-to-top",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/use-scroll-to-top.md",tags:[],version:"5.x",frontMatter:{id:"use-scroll-to-top",title:"useScrollToTop",sidebar_label:"useScrollToTop"},sidebar:"version-5.x/docs",previous:{title:"useLinking",permalink:"/docs/5.x/use-linking"},next:{title:"useTheme",permalink:"/docs/5.x/use-theme"}},p=[{value:"Using with class component",id:"using-with-class-component",children:[]},{value:"Providing scroll offset",id:"providing-scroll-offset",children:[]}],u={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars."),(0,l.kt)("p",null,"In order to achieve it we export ",(0,l.kt)("inlineCode",{parentName:"p"},"useScrollToTop")," which accept ref to scrollable component (e,g. ",(0,l.kt)("inlineCode",{parentName:"p"},"ScrollView")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"FlatList"),")."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("samp",{id:"use-scroll-to-top"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { useScrollToTop } from '@react-navigation/native';\n\nfunction Albums() {\n  const ref = React.useRef(null);\n\n  useScrollToTop(ref);\n\n  return <ScrollView ref={ref}>{/* content */}</ScrollView>;\n}\n")),(0,l.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,l.kt)("p",null,"You can wrap your class component in a function component to use the hook:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Albums extends React.Component {\n  render() {\n    return <ScrollView ref={this.props.scrollRef}>{/* content */}</ScrollView>;\n  }\n}\n\n// Wrap and export\nexport default function(props) {\n  const ref = React.useRef(null);\n\n  useScrollToTop(ref);\n\n  return <Albums {...props} scrollRef={ref} />;\n}\n")),(0,l.kt)("h2",{id:"providing-scroll-offset"},"Providing scroll offset"),(0,l.kt)("p",null,"If you require offset to scroll position you can wrap and decorate passed reference:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { useScrollToTop } from '@react-navigation/native';\n\nfunction Albums() {\n  const ref = React.useRef(null);\n\n  useScrollToTop(React.useRef({\n    scrollToTop: () => ref.current?.scrollToOffset({ offset: -100 }),\n  }));\n\n  return <ScrollView ref={ref}>{/* content */}</ScrollView>;\n}\n\n")))}f.isMDXComponent=!0}}]);