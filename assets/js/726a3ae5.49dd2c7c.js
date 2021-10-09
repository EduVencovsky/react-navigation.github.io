"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[841],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return v}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=i.createContext({}),s=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=s(t.components);return i.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=s(n),v=r,m=d["".concat(p,".").concat(v)]||d[v]||u[v]||a;return n?i.createElement(m,o(o({ref:e},l),{},{components:n})):i.createElement(m,o({ref:e},l))}));function v(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3521:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],c={id:"with-navigation",title:"withNavigation",sidebar_label:"withNavigation"},p=void 0,s={unversionedId:"with-navigation",id:"version-1.x/with-navigation",isDocsHomePage:!1,title:"withNavigation",description:"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.",source:"@site/versioned_docs/version-1.x/with-navigation.md",sourceDirName:".",slug:"/with-navigation",permalink:"/docs/1.x/with-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/with-navigation.md",tags:[],version:"1.x",frontMatter:{id:"with-navigation",title:"withNavigation",sidebar_label:"withNavigation"},sidebar:"api",previous:{title:"DrawerNavigator",permalink:"/docs/1.x/drawer-navigator"},next:{title:"withNavigationFocus",permalink:"/docs/1.x/with-navigation-focus"}},l=[{value:"Example",id:"example",children:[]}],u={toc:l};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"withNavigation")," is a higher order component which passes the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop into a wrapped component. It's useful when you cannot pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop into the component directly, or don't want to pass it in case of a deeply nested child."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"withNavigation(Component)")," returns a Component.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Button } 'react-native';\nimport { withNavigation } from 'react-navigation';\n\nclass MyBackButton extends React.Component {\n  render() {\n    return <Button title=\"Back\" onPress={() => { this.props.navigation.goBack() }} />;\n  }\n}\n\n// withNavigation returns a component that wraps MyBackButton and passes in the\n// navigation prop\nexport default withNavigation(MyBackButton);\n")))}d.isMDXComponent=!0}}]);