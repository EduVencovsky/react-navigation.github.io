"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8263],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37490:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"use-link-builder",title:"useLinkBuilder",sidebar_label:"useLinkBuilder"},u=void 0,l={unversionedId:"use-link-builder",id:"version-6.x/use-link-builder",isDocsHomePage:!1,title:"useLinkBuilder",description:"The useLinkBuilder hook let's us build a path to use for links for a screen in the current navigator's state. It returns a function that takes name and params for the screen to focus and returns path based on the linking options.",source:"@site/versioned_docs/version-6.x/use-link-builder.md",sourceDirName:".",slug:"/use-link-builder",permalink:"/docs/use-link-builder",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/use-link-builder.md",tags:[],version:"6.x",frontMatter:{id:"use-link-builder",title:"useLinkBuilder",sidebar_label:"useLinkBuilder"},sidebar:"version-6.x/docs",previous:{title:"useLinkProps",permalink:"/docs/use-link-props"},next:{title:"useScrollToTop",permalink:"/docs/use-scroll-to-top"}},c=[],p={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useLinkBuilder")," hook let's us build a path to use for links for a screen in the current navigator's state. It returns a function that takes ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," for the screen to focus and returns path based on the ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-container#linking"},(0,o.kt)("inlineCode",{parentName:"a"},"linking")," options"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Link, CommonActions, useLinkBuilder } from '@react-navigation/native';\n\n// ...\n\nfunction DrawerContent({ state, descriptors }) {\n  const buildLink = useLinkBuilder();\n\n  return state.routes((route) => (\n    <Link\n      to={buildLink(route.name, route.params)}\n      action={CommonActions.navigate(route.name)}\n    >\n      {descriptors[route.key].options.title}\n    </Link>\n  ));\n}\n")),(0,o.kt)("p",null,"This hook is intended to be used in navigators to show links to various pages in it, such as drawer and tab navigators. If you're building a custom navigator, custom drawer content, custom tab bar etc. then you might want to use this hook."),(0,o.kt)("p",null,"There are couple of important things to note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The destination screen must be present in the current navigator. It cannot be in a parent navigator or a navigator nested in a child."),(0,o.kt)("li",{parentName:"ul"},"It's intended to be only used in custom navigators to keep them reusable in multiple apps. For your regular app code, use paths directly instead of building paths for screens, or use ",(0,o.kt)("a",{parentName:"li",href:"/docs/link"},(0,o.kt)("inlineCode",{parentName:"a"},"Link"))," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/use-link-props"},(0,o.kt)("inlineCode",{parentName:"a"},"useLinkProps"))," which transparently handle paths.")))}d.isMDXComponent=!0}}]);