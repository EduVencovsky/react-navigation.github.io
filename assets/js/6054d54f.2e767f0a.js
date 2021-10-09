"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[9176],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return g}});var o=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var p=o.createContext({}),s=function(n){var e=o.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},u=function(n){var e=s(n.components);return o.createElement(p.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,p=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),m=s(t),g=a,v=m["".concat(p,".").concat(g)]||m[g]||l[g]||i;return t?o.createElement(v,r(r({ref:e},u),{},{components:t})):o.createElement(v,r({ref:e},u))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c.mdxType="string"==typeof n?n:a,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32455:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var o=t(87462),a=t(63366),i=(t(67294),t(3905)),r=["components"],c={id:"connecting-navigation-prop",title:"Access the navigation prop from any component",sidebar_label:"Access the navigation prop from any component"},p=void 0,s={unversionedId:"connecting-navigation-prop",id:"version-6.x/connecting-navigation-prop",isDocsHomePage:!1,title:"Access the navigation prop from any component",description:"useNavigation is a hook which gives access to the navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.",source:"@site/versioned_docs/version-6.x/connecting-navigation-prop.md",sourceDirName:".",slug:"/connecting-navigation-prop",permalink:"/docs/connecting-navigation-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/connecting-navigation-prop.md",tags:[],version:"6.x",frontMatter:{id:"connecting-navigation-prop",title:"Access the navigation prop from any component",sidebar_label:"Access the navigation prop from any component"},sidebar:"version-6.x/docs",previous:{title:"Call a function when focused screen changes",permalink:"/docs/function-after-focusing-screen"},next:{title:"Navigating without the navigation prop",permalink:"/docs/navigating-without-navigation-prop"}},u=[],l={toc:u};function m(n){var e=n.components,t=(0,a.Z)(n,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/use-navigation"},(0,i.kt)("inlineCode",{parentName:"a"},"useNavigation"))," is a hook which gives access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," object. It's useful when you cannot pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop into the component directly, or don't want to pass it in case of a deeply nested child."),(0,i.kt)("p",null,"An ordinary component that is not a screen component will not receive the navigation prop automatically. For example in this ",(0,i.kt)("inlineCode",{parentName:"p"},"GoToButton")," component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button } from 'react-native';\n\nfunction GoToButton({ navigation, screenName }) {\n  return (\n    <Button\n      title={`Go to ${screenName}`}\n      onPress={() => navigation.navigate(screenName)}\n    />\n  );\n}\n")),(0,i.kt)("p",null,"To resolve this exception, you could pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop in to ",(0,i.kt)("inlineCode",{parentName:"p"},"GoToButton")," when you render it from a screen, like so: ",(0,i.kt)("inlineCode",{parentName:"p"},"<GoToButton navigation={props.navigation} />"),"."),(0,i.kt)("p",null,"Alternatively, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useNavigation")," to provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop automatically (through React context, if you're curious)."),(0,i.kt)("samp",{id:"navigation-in-component"},"useNavigation in component"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button } from 'react-native';\nimport { useNavigation } from '@react-navigation/native';\n\nfunction GoToButton({ screenName }) {\n  const navigation = useNavigation();\n\n  return (\n    <Button\n      title={`Go to ${screenName}`}\n      onPress={() => navigation.navigate(screenName)}\n    />\n  );\n}\n")),(0,i.kt)("p",null,"Using this approach, you can render ",(0,i.kt)("inlineCode",{parentName:"p"},"GoToButton")," anywhere in your app without passing in a ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation")," prop explicitly and it will work as expected."))}m.isMDXComponent=!0}}]);