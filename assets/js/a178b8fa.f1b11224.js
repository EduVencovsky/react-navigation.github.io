"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5083],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return u}});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(t),u=i,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||r;return t?n.createElement(k,o(o({ref:a},d),{},{components:t})):n.createElement(k,o({ref:a},d))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58215:function(e,a,t){var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:i},a)}},55064:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(67294),i=t(79443);var r=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(86010),l="tabItem_1uMI",p="tabItemActive_2DSg";var m=function(e){var a,t=e.lazy,i=e.block,m=e.defaultValue,d=e.values,s=e.groupId,c=e.className,u=n.Children.toArray(e.children),k=null!=d?d:u.map((function(e){return{value:e.props.value,label:e.props.label}})),N=null!=m?m:null==(a=u.find((function(e){return e.props.default})))?void 0:a.props.value,g=r(),v=g.tabGroupChoices,h=g.setTabGroupChoices,f=(0,n.useState)(N),C=f[0],b=f[1],y=[];if(null!=s){var w=v[s];null!=w&&w!==C&&k.some((function(e){return e.value===w}))&&b(w)}var T=function(e){var a=e.currentTarget,t=y.indexOf(a),n=k[t].value;b(n),null!=s&&(h(s,n),setTimeout((function(){var e,t,n,i,r,o,l,m;(e=a.getBoundingClientRect(),t=e.top,n=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,m=o.innerWidth,t>=0&&r<=m&&i<=l&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(p),setTimeout((function(){return a.classList.remove(p)}),2e3))}),150))},x=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=y.indexOf(e.target)+1;t=y[n]||y[0];break;case"ArrowLeft":var i=y.indexOf(e.target)-1;t=y[i]||y[y.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},c)},k.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":C===a}),key:a,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=t?t:a)}))),t?(0,n.cloneElement)(u.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},u.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==C})}))))}},79443:function(e,a,t){var n=(0,t(67294).createContext)(void 0);a.Z=n},90376:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return k}});var n=t(87462),i=t(63366),r=(t(67294),t(3905)),o=t(55064),l=t(58215),p=["components"],m={id:"upgrading-from-3.x",title:"Upgrading from 3.x",sidebar_label:"Upgrading from 3.x"},d=void 0,s={unversionedId:"upgrading-from-3.x",id:"version-4.x/upgrading-from-3.x",isDocsHomePage:!1,title:"Upgrading from 3.x",description:"In React Navigation 4, we've extracted out the navigators to separate packages to make it easier to maintain and release updates faster. You can follow the guide below to upgrade your projects.",source:"@site/versioned_docs/version-4.x/upgrading-from-3.x.md",sourceDirName:".",slug:"/upgrading-from-3.x",permalink:"/docs/4.x/upgrading-from-3.x",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/upgrading-from-3.x.md",tags:[],version:"4.x",frontMatter:{id:"upgrading-from-3.x",title:"Upgrading from 3.x",sidebar_label:"Upgrading from 3.x"},sidebar:"version-4.x-docs",previous:{title:"Optimize memory usage and performance",permalink:"/docs/4.x/react-native-screens"},next:{title:"Navigation prop",permalink:"/docs/4.x/navigation-prop"}},c=[{value:"Install the new packages",id:"install-the-new-packages",children:[]},{value:"Changing your code",id:"changing-your-code",children:[]},{value:"Upgrading navigators (optional)",id:"upgrading-navigators-optional",children:[{value:"Installing dependencies",id:"installing-dependencies",children:[]},{value:"Upgrading packages",id:"upgrading-packages",children:[]}]},{value:"TypeScript",id:"typescript",children:[]}],u={toc:c};function k(e){var a=e.components,t=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In React Navigation 4, we've extracted out the navigators to separate packages to make it easier to maintain and release updates faster. You can follow the guide below to upgrade your projects."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Before making these changes, we recommend you to commit all local changes to git so you can revert back to a good state if something goes wrong with the upgrade.")),(0,r.kt)("h2",{id:"install-the-new-packages"},"Install the new packages"),(0,r.kt)("p",null,"First, we need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation")," package along with the various navigators. If you don't use some of these navigators, you can omit them."),(0,r.kt)("p",null,"To install them, run:"),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation react-navigation-stack@^1.7.3 react-navigation-tabs@^1.2.0 react-navigation-drawer@^1.4.0\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation react-navigation-stack@^1.7.3 react-navigation-tabs@^1.2.0 react-navigation-drawer@^1.4.0\n")))),(0,r.kt)("p",null,"This will install the versions compatible with your code if you were using ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation@3.x"),", so you wouldn't need any more changes beyond changing the imports."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If you have ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/core")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/native")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", please remove them and change the imports to import from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation")," package instead.")),(0,r.kt)("h2",{id:"changing-your-code"},"Changing your code"),(0,r.kt)("p",null,"Then change any imports for stack, tabs or drawer to import from the above packages instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- import { createAppContainer, createStackNavigator } from 'react-navigation';\n+ import { createAppContainer } from 'react-navigation';\n+ import { createStackNavigator } from 'react-navigation-stack';\n")),(0,r.kt)("p",null,"The following imports need to be changed to import from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation-stack"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createStackNavigator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StackGestureContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Transitioner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StackView")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StackViewCard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StackViewTransitionConfigs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Header")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HeaderTitle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HeaderBackButton")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HeaderStyleInterpolator"))),(0,r.kt)("p",null,"The following imports need to be changed to import from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation-tabs"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createBottomTabNavigator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BottomTabBar")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MaterialTopTabBar"))),(0,r.kt)("p",null,"The following imports need to be changed to import from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation-drawer"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createDrawerNavigator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DrawerGestureContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DrawerRouter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DrawerActions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DrawerView")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DrawerNavigatorItems")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DrawerSidebar"))),(0,r.kt)("h2",{id:"upgrading-navigators-optional"},"Upgrading navigators (optional)"),(0,r.kt)("p",null,"You don't need to upgrade the navigators to their latest version when upgrading to ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation@4.x"),". You can upgrade them separately later as per your convenience."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: We recommend to do each of these changes in a separate commit so you can revert back to a good state if something goes wrong with the upgrade.")),(0,r.kt)("h3",{id:"installing-dependencies"},"Installing dependencies"),(0,r.kt)("p",null,"The latest drawer and tabs depend on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-gesture-handler"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-reanimated")),". If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on for installation instructions for these dependencies."),(0,r.kt)("h4",{id:"installing-dependencies-into-an-expo-managed-project"},"Installing dependencies into an Expo managed project"),(0,r.kt)("p",null,"In your project directory, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"expo install react-native-gesture-handler react-native-reanimated\n")),(0,r.kt)("p",null,"This will install versions of these libraries that are compatible."),(0,r.kt)("h4",{id:"installing-dependencies-into-a-bare-react-native-project"},"Installing dependencies into a bare React Native project"),(0,r.kt)("p",null,"In your project directory, run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install react-native-reanimated react-native-gesture-handler react-native-screens"),"."),(0,r.kt)("p",null,"Next, we need to link these libraries. The steps depends on your React Native version:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"React Native 0.60 and higher")),(0,r.kt)("p",{parentName:"li"},"On newer versions of React Native, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"linking is automatic"),"."),(0,r.kt)("p",{parentName:"li"},"To complete the linking on iOS, make sure you have ",(0,r.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"Cocoapods")," installed. Then run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ios\npod install\ncd ..\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"React Native 0.59 and lower")),(0,r.kt)("p",{parentName:"li"},"If you're on an older React Native version, you need to manually link the dependencies. To do that, run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"react-native link react-native-reanimated\nreact-native link react-native-gesture-handler\n")))),(0,r.kt)("p",null,"To finalize installation of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," for Android, make the following modifications to ",(0,r.kt)("inlineCode",{parentName:"p"},"MainActivity.java"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'package com.reactnavigation.example;\n\nimport com.facebook.react.ReactActivity;\n+ import com.facebook.react.ReactActivityDelegate;\n+ import com.facebook.react.ReactRootView;\n+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;\n\npublic class MainActivity extends ReactActivity {\n\n  @Override\n  protected String getMainComponentName() {\n    return "Example";\n  }\n\n+  @Override\n+  protected ReactActivityDelegate createReactActivityDelegate() {\n+    return new ReactActivityDelegate(this, getMainComponentName()) {\n+      @Override\n+      protected ReactRootView createRootView() {\n+       return new RNGestureHandlerEnabledRootView(MainActivity.this);\n+      }\n+    };\n+  }\n}\n')),(0,r.kt)("h3",{id:"upgrading-packages"},"Upgrading packages"),(0,r.kt)("h4",{id:"react-navigation-tabs"},(0,r.kt)("inlineCode",{parentName:"h4"},"react-navigation-tabs")),(0,r.kt)("p",null,"To upgrade ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation-tabs"),", run:"),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation-tabs\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation-tabs\n")))),(0,r.kt)("p",null,"This version upgrades ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-tab-view"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-tab-view"))," to 2.x. As a result, the animations in ",(0,r.kt)("inlineCode",{parentName:"p"},"createMaterialTopTabNavigator")," now use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-reanimated"))," library."),(0,r.kt)("h5",{id:"breaking-changes"},"Breaking changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you have a custom tab bar in ",(0,r.kt)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator")," which uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"position")," prop, you'll need to update it to use ",(0,r.kt)("inlineCode",{parentName:"li"},"Animated")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native-reanimated")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"activeTintColor")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"inactiveTintColor")," options for the tab bar of ",(0,r.kt)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator")," now controls the opacity of the label and icons as well."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"animationsEnabled")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"optimizationsEnabled")," options have been removed from ",(0,r.kt)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator"),"."),(0,r.kt)("li",{parentName:"ul"},"Support for React < 16.3 has been dropped, which means the minimum supported React Native version is now 0.56.")),(0,r.kt)("h5",{id:"new-features"},"New features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new ",(0,r.kt)("inlineCode",{parentName:"li"},"lazyPlaceholderComponent")," option is added which lets you show a placeholder for lazy loaded tabs.")),(0,r.kt)("h4",{id:"react-navigation-drawer"},(0,r.kt)("inlineCode",{parentName:"h4"},"react-navigation-drawer")),(0,r.kt)("p",null,"To upgrade ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation-drawer"),", run:"),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation-drawer\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation-drawer\n")))),(0,r.kt)("p",null,"This version upgrades now uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-reanimated"))," library for animations. This means, if you're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"drawerProgress")," value, you'll need to migrate your code to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated"),"."),(0,r.kt)("h4",{id:"react-navigation-stack"},(0,r.kt)("inlineCode",{parentName:"h4"},"react-navigation-stack")),(0,r.kt)("p",null,"To upgrade ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation-stack"),", run:"),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation-stack\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation-stack\n")))),(0,r.kt)("p",null,"In this release, we have moved several options into ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," so that you can configure options per screen instead of per navigator. This lets you do things like customize animations for a particular screen, set options based on ",(0,r.kt)("inlineCode",{parentName:"p"},"screenProps")," etc. Usage of built-in components such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HeaderBackButton")," has also been simplified. Other changes are made to improve consistency within the API."),(0,r.kt)("p",null,"From this version, all state changes have an animation, including ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"reset")," which didn't do an animation previously. If you don't want animations, you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"animationEnabled: false")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," for a specific screen, or in ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultNavigationOptions")," for the whole navigator."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The alpha versions for 2.0 used Reanimated for the animations. We've replaced Reanimated with React Native's Animated API in the stable release. If you did any custom animations with the alpha, please migrate your code to the Animated API.")),(0,r.kt)("h5",{id:"new-peer-dependencies"},"New peer dependencies"),(0,r.kt)("p",null,"The new version requires 2 new peer dependencies. To install them in your project, run:"),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-safe-area-context @react-native-community/masked-view\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-safe-area-context @react-native-community/masked-view\n")))),(0,r.kt)("h5",{id:"stack-navigator-config"},"Stack Navigator config"),(0,r.kt)("p",null,"The following configuration options have been removed or moved:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cardShadowEnabled")," - moved to ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cardOverlayEnabled")," - moved to ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cardStyle")," - moved to ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transparentCard")," - removed in favor of ",(0,r.kt)("inlineCode",{parentName:"li"},"cardStyle: { backgroundColor: 'transparent' }")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerBackTitleVisible")," - moved to ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerLayoutPreset")," - moved to ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"headerTitleAlign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onTransitionStart")," - moved to ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onTransitionEnd")," - moved to ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerTransitionPreset")," - removed in favor of ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.x/stack-navigator#animations"},"new APIs for animations")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transitionConfig")," - removed in favor of ",(0,r.kt)("a",{parentName:"li",href:"/docs/4.x/stack-navigator#animations"},"new APIs for animations")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"navigationOptions"))),(0,r.kt)("h5",{id:"navigationoptions"},(0,r.kt)("inlineCode",{parentName:"h5"},"navigationOptions")),(0,r.kt)("p",null,"The following ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," have been removed or changed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerForceInset")," - use ",(0,r.kt)("inlineCode",{parentName:"li"},"safeAreaInsets")," instead to control the safe areas, or use ",(0,r.kt)("inlineCode",{parentName:"li"},"headerStatusBarHeight")," to control the padding for the status bar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gesturesEnabled")," - renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"gestureEnabled")," for consistency."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"header")," - now accepts a function returning react element instead, use ",(0,r.kt)("inlineCode",{parentName:"li"},"headerShown: false")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"header: null")," to hide the header."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerTitle")," - now accepts a function returning a React element or a string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerLeft")," - now accepts a function returning a React element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerRight")," - now accepts a function returning a React element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerBackImage")," - now accepts a function returning a React element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerBackTitle")," - now specifies the back title visible in current screen instead of next, specifying ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," no longer hides back title, use ",(0,r.kt)("inlineCode",{parentName:"li"},"backTitleVisible")," instead, for a screen to change next screen's back title, it can pass params."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerBackground")," - now accepts a function returning a React element.")),(0,r.kt)("p",null,"The following ",(0,r.kt)("inlineCode",{parentName:"p"},"navigationOptions")," have been added:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gestureEnabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"animationEnabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerTitleAlign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cardShadowEnabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cardOverlayEnabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cardStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerBackgroundStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerBackTitleVisible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swipeVelocityImpact")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onTransitionStart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onTransitionEnd"))),(0,r.kt)("p",null,"You can find more details about these options in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/stack-navigator#navigationoptions-for-screens-inside-of-the-navigator"},"documentation"),"."),(0,r.kt)("h5",{id:"library-exports"},"Library exports"),(0,r.kt)("p",null,"The library now exports the following items:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createStackNavigator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StackView")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Header")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HeaderTitle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HeaderBackButton")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HeaderBackground")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CardStyleInterpolators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HeaderStyleInterpolators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TransitionSpecs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TransitionPresets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CardAnimationContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GestureHandlerRefContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HeaderHeightContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useCardAnimation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useHeaderHeight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useGestureHandlerRef"))),(0,r.kt)("p",null,"The following components now receive different set of props, so if you use them, or use your own custom component, you will need to update them:"),(0,r.kt)("h6",{id:"header-header-option"},(0,r.kt)("inlineCode",{parentName:"h6"},"Header")," (",(0,r.kt)("inlineCode",{parentName:"h6"},"header")," option)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"layout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"previous")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"styleInterpolator"))),(0,r.kt)("h6",{id:"headerbackbutton-headerleft-option"},(0,r.kt)("inlineCode",{parentName:"h6"},"HeaderBackButton")," (",(0,r.kt)("inlineCode",{parentName:"h6"},"headerLeft")," option)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onPress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pressColorAndroid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"backImage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tintColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"label")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"truncatedLabel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"labelVisible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"labelStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allowFontScaling")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onLabelLayout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"screenLayout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"titleLayout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"canGoBack"))),(0,r.kt)("h5",{id:"removal-of-transitioner"},"Removal of ",(0,r.kt)("inlineCode",{parentName:"h5"},"Transitioner")),(0,r.kt)("p",null,"The old ",(0,r.kt)("inlineCode",{parentName:"p"},"Transitioner")," component has been removed as a result of rewrite of the animation logic. We're not going to expose the new animation logic since it's internal implementation detail and we want to be able to change it without breaking your code. If you need ",(0,r.kt)("inlineCode",{parentName:"p"},"Transitioner")," in your project for some reason, you can copy the old files into your project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/stack/blob/1.0/src/views/Transitioner.tsx"},"https://github.com/react-navigation/stack/blob/1.0/src/views/Transitioner.tsx")),(0,r.kt)("h2",{id:"typescript"},"TypeScript"),(0,r.kt)("p",null,"If you're using TypeScript, you'll also need to upgrade the navigators to the latest version following the previous section. Since the navigators have been extracted out, navigator specific types have been removed from the main package. You'll need to update the types accordingly:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"NavigationScreenProp")," with:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationSwitchProp")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createSwitchNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationStackProp")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createStackNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationTabProp")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-tabs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationDrawerProp")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createDrawerNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-drawer")))),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"NavigationScreenProps")," with:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationSwitchScreenProps")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createSwitchNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationStackScreenProps")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createStackNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationTabScreenProps")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-tabs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationDrawerScreenProps")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createDrawerNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-drawer")))),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"NavigationScreenOptions")," with:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationStackOptions")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createStackNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationBottomTabOptions")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-tabs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationMaterialTabOptions")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-tabs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationDrawerOptions")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createDrawerNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-drawer")))),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"NavigationScreenComponent")," with:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationSwitchScreenComponent")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createSwitchNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationStackScreenComponent")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createStackNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationBottomTabScreenComponent")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createBottomTabNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-tabs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationMaterialTabScreenComponent")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createMaterialTopTabNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-tabs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NavigationDrawerScreenComponent")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"createDrawerNavigator")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"react-navigation-drawer"))))),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/typescript"},"TypeScript guide")," for more details."),(0,r.kt)("p",null,"TypeScript support is still a work in progress, so please open an issue if you're facing a problem."))}k.isMDXComponent=!0},86010:function(e,a,t){function n(e){var a,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(i&&(i+=" "),i+=t);else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}function i(){for(var e,a,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(i&&(i+=" "),i+=a);return i}t.d(a,{Z:function(){return i}})}}]);