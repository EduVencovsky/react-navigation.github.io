"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1848],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35252:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"MST-integration",title:"Integrating with MobX State Tree",sidebar_label:"MobX State Tree integration"},p=void 0,l={unversionedId:"MST-integration",id:"version-5.x/MST-integration",isDocsHomePage:!1,title:"Integrating with MobX State Tree",description:"TODO: This guide is incomplete. Please help improve this by sending pull requests.",source:"@site/versioned_docs/version-5.x/MST-integration.md",sourceDirName:".",slug:"/MST-integration",permalink:"/docs/5.x/MST-integration",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/MST-integration.md",tags:[],version:"5.x",frontMatter:{id:"MST-integration",title:"Integrating with MobX State Tree",sidebar_label:"MobX State Tree integration"},sidebar:"version-5.x/docs",previous:{title:"Redux integration",permalink:"/docs/5.x/redux-integration"},next:{title:"Optimize memory usage and performance",permalink:"/docs/5.x/react-native-screens"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Guide",id:"guide",children:[{value:"Navigation params",id:"navigation-params",children:[]}]},{value:"Summary",id:"summary",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TODO: This guide is incomplete. Please help improve this by sending pull requests.")),(0,o.kt)("p",null,"This guide explores possible way to use React Navigation in a React Native project that uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx-state-tree"},"MobX State Tree"),"(MST) for state management. The guide is accompanied by a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-mst-demo"},"sample app"),". Parts of the guide may be relevant also for users of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx"},"MobX")," but please be aware of the fact that MobX does not come with a built-in solution for (de)serializing its state."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Please note that in this guide, Mobx State Tree is not used to manage the navigation state itself - just the navigation params!")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Our goal with this guide is to use MST with React Navigation and achieve optimal developer experience. In the scope of this guide, this means allowing us to do a full JS reload and be brought back to the state before the reload happened."),(0,o.kt)("p",null,"We will do this by persisting the ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"navigation state")," using the React Navigation's ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/state-persistence"},"built-in mechanism"),". We also need to persist the app state and navigation params - that way, when you're working on a screen in your app and do a full JS reload, you will be brought back to the same screen, with the same data in it."),(0,o.kt)("h2",{id:"guide"},"Guide"),(0,o.kt)("p",null,"First, start by creating initial navigation structure and React components. When you're done with that, continue with modelling your state in MST. If you want to learn more about this, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://egghead.io/lessons/react-describe-your-application-domain-using-mobx-state-tree-mst-models"},"egghead.io course"),"."),(0,o.kt)("p",null,"At this point, you're probably wondering how to connect your MST objects with the components. The answer is in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx-react"},"mobx-react package")," that contains React bindings for MobX (they also work for MST). You will likely be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," component and the ",(0,o.kt)("inlineCode",{parentName:"p"},"inject")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"observer")," functions."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," to wrap what you return from your root component's render method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Provider myObject={this.myObject}>\n  <NavigationContainer>{/* Screen configuration */}</NavigationContainer>\n</Provider>\n")),(0,o.kt)("p",null,"this will allow you to access ",(0,o.kt)("inlineCode",{parentName:"p"},"myObject")," from any React component in the application through the ",(0,o.kt)("inlineCode",{parentName:"p"},"inject")," function which can be quite useful."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"observer")," function to wrap all components that render observable data. This will make sure the components re-render once the data they render changes."),(0,o.kt)("h3",{id:"navigation-params"},"Navigation params"),(0,o.kt)("p",null,"Screens in your application often depend on params. React Navigation allows you to ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/params"},"send params")," from one screen to another. These params are stored in the navigation state. However, in order to persist the navigation state, it needs to be serializable. This requirement does not play well with MST, because the MST objects are complex objects and React Navigation doesn't know how to (de)serialize them. In this guide, we will work around this by storing the navigation params ourselves."),(0,o.kt)("p",null,"This means that rather than sending the params from one screen to another (eg. with ",(0,o.kt)("inlineCode",{parentName:"p"},"props.navigation.navigate('MyScreen', { complexMSTObject })"),") we will store the params to a navigation store, then navigate without sending any params, and on the target screen, we'll pick the params up from the navigation store."),(0,o.kt)("p",null,"To give an example, the navigation store may look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { types, onSnapshot, getRoot } from 'mobx-state-tree';\nimport { Product } from '../models/Product';\nimport { User } from '../models/User';\n\nexport const NavigationStore = types\n  .model('NavigationStore', {\n    productDetailScreenParams: types.map(\n      types.model('ProductDetailScreenParams', {\n        product: types.optional(types.safeReference(Product)),\n      })\n    ),\n    userProfileScreenParams: types.model('UserProfileScreenParams', {\n      user: types.maybe(types.safeReference(User)),\n    }),\n  })\n  .actions(self => ({\n    ...\n  }));\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"userProfileScreenParams")," is a simple model with a ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," entry, while ",(0,o.kt)("inlineCode",{parentName:"p"},"productDetailScreenParams")," is a map of ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductDetailScreenParams")," model. The reason we chose this shape of data is that we only have a single user profile screen in our app which reads its params from ",(0,o.kt)("inlineCode",{parentName:"p"},"userProfileScreenParams"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"productDetailScreenParams")," is a map because the app can have several product screens on a stack. Each screen points to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," instance saved in the map. The keys into the map are the React Navigation ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"keys"),": think of the ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," as of an identifier of the route."),(0,o.kt)("p",null,"Your navigation store may also be just one map where for each screen (regardless if it is a product or user profile screen), we store its navigation params. This is the approach taken in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vonovak/react-navigation-mst-demo"},"sample app"),"."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you can use React Navigation with MobX State Tree in a React Native app"),(0,o.kt)("li",{parentName:"ul"},"use the ",(0,o.kt)("inlineCode",{parentName:"li"},"Provider")," component and the ",(0,o.kt)("inlineCode",{parentName:"li"},"inject")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"observer")," functions to wire up MobX or MST with React"),(0,o.kt)("li",{parentName:"ul"},"it's possible to persist the entire application state and restore it upon JS reload")))}m.isMDXComponent=!0}}]);