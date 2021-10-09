"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2944],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60466:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"use-theme",title:"useTheme",sidebar_label:"useTheme"},s=void 0,u={unversionedId:"use-theme",id:"version-5.x/use-theme",isDocsHomePage:!1,title:"useTheme",description:"The useTheme hook let's us access the currently active theme. You can use it in your own components to have them respond to changes in the theme.",source:"@site/versioned_docs/version-5.x/use-theme.md",sourceDirName:".",slug:"/use-theme",permalink:"/docs/5.x/use-theme",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/use-theme.md",tags:[],version:"5.x",frontMatter:{id:"use-theme",title:"useTheme",sidebar_label:"useTheme"},sidebar:"version-5.x/docs",previous:{title:"useScrollToTop",permalink:"/docs/5.x/use-scroll-to-top"},next:{title:"CommonActions",permalink:"/docs/5.x/navigation-actions"}},l=[{value:"Using with class component",id:"using-with-class-component",children:[]}],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useTheme")," hook let's us access the currently active theme. You can use it in your own components to have them respond to changes in the theme."),(0,a.kt)("samp",{id:"system-themes"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { useTheme } from '@react-navigation/native';\n\n// Black background and white text in light theme, inverted on dark theme\nfunction MyButton() {\n  const { colors } = useTheme();\n\n  return (\n    <TouchableOpacity style={{ backgroundColor: colors.card }}>\n      <Text style={{ color: colors.text }}>Button!</Text>\n    </TouchableOpacity>\n  );\n}\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.x/themes"},"theming guide")," for more details and usage guide around how to configure themes."),(0,a.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,a.kt)("p",null,"You can wrap your class component in a function component to use the hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class MyButton extends React.Component {\n  render() {\n    // Get it from props\n    const { theme } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function(props) {\n  const theme = useTheme();\n\n  return <MyButton {...props} theme={theme} />;\n}\n")))}m.isMDXComponent=!0}}]);