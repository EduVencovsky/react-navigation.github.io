"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[329],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=i.createContext({}),s=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},l=function(t){var e=s(t.components);return i.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(v,r(r({ref:e},l),{},{components:n})):i.createElement(v,r({ref:e},l))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:o,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82893:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],c={id:"with-navigation",title:"withNavigation",sidebar_label:"withNavigation"},p=void 0,s={unversionedId:"with-navigation",id:"version-4.x/with-navigation",isDocsHomePage:!1,title:"withNavigation",description:"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.",source:"@site/versioned_docs/version-4.x/with-navigation.md",sourceDirName:".",slug:"/with-navigation",permalink:"/docs/4.x/with-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/with-navigation.md",tags:[],version:"4.x",frontMatter:{id:"with-navigation",title:"withNavigation",sidebar_label:"withNavigation"},sidebar:"version-4.x-docs",previous:{title:"DrawerActions",permalink:"/docs/4.x/drawer-actions"},next:{title:"withNavigationFocus",permalink:"/docs/4.x/with-navigation-focus"}},l=[{value:"Example",id:"example",children:[]},{value:"Notes",id:"notes",children:[]}],u={toc:l};function d(t){var e=t.components,n=(0,o.Z)(t,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"withNavigation")," is a higher order component which passes the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop into a wrapped component. It's useful when you cannot pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop into the component directly, or don't want to pass it in case of a deeply nested child."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"withNavigation(Component)")," returns a Component.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Button } from 'react-native';\nimport { withNavigation } from 'react-navigation';\n\nclass MyBackButton extends React.Component {\n  render() {\n    return (\n      <Button\n        title=\"Back\"\n        onPress={() => {\n          this.props.navigation.goBack();\n        }}\n      />\n    );\n  }\n}\n\n// withNavigation returns a component that wraps MyBackButton and passes in the\n// navigation prop\nexport default withNavigation(MyBackButton);\n")),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you wish to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"ref")," prop on the wrapped component, you must pass the ",(0,a.kt)("inlineCode",{parentName:"li"},"onRef")," prop instead. For example,")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// MyBackButton.ts\nexport default withNavigation(MyBackButton);\n\n// MyNavBar.ts\n<MyBackButton onRef={elem => (this.backButton = elem)} />;\n")))}d.isMDXComponent=!0}}]);