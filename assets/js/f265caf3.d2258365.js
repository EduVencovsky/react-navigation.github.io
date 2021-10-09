"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6283],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=o,g=h["".concat(c,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35594:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"navigation-options-resolution",title:"Navigation options resolution",sidebar_label:"Navigation options resolution"},c=void 0,l={unversionedId:"navigation-options-resolution",id:"version-2.x/navigation-options-resolution",isDocsHomePage:!1,title:"Navigation options resolution",description:"Each screen can configure various aspects about how it gets presented in the navigator that renders it. In the Configuring the header bar section of the fundamentals documentation we explain the basics of how this works.",source:"@site/versioned_docs/version-2.x/navigation-options-resolution.md",sourceDirName:".",slug:"/navigation-options-resolution",permalink:"/docs/2.x/navigation-options-resolution",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/navigation-options-resolution.md",tags:[],version:"2.x",frontMatter:{id:"navigation-options-resolution",title:"Navigation options resolution",sidebar_label:"Navigation options resolution"},sidebar:"version-2.x-docs",previous:{title:"Different status bar configuration based on route",permalink:"/docs/2.x/status-bar"},next:{title:"Custom Android back button behavior",permalink:"/docs/2.x/custom-android-back-button-handling"}},p=[{value:"<strong>Caution</strong>: the navigationOptions property vs configuration",id:"caution-the-navigationoptions-property-vs-configuration",children:[]}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each screen can configure various aspects about how it gets presented in the navigator that renders it. In the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/headers"},"Configuring the header bar")," section of the fundamentals documentation we explain the basics of how this works."),(0,i.kt)("p",null,"In this document we'll explain how this works when there are multiple navigators. It's important to understand this so that you put your ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen. Thankfully, the logic for this could not be any easier to understand:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You can only modify navigation options for a navigator from one of its screen components. This applies equally to navigators that are nested as screens.")),(0,i.kt)("p",null,"Let's take for example a tab navigator that contains a stack in each tab. What happens if we set the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on a screen inside of the stack?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class A extends React.Component {\n  static navigationOptions = {\n    tabBarLabel: 'Home!',\n  };\n\n  // etc..\n}\n\nclass B extends React.Component {\n  static navigationOptions = {\n    tabBarLabel: 'Settings!',\n  };\n\n  // etc..\n}\n\nconst HomeStack = createStackNavigator({ A });\nconst SettingsStack = createStackNavigator({ B });\n\nexport default createBottomTabNavigator({\n  HomeStack,\n  SettingsStack,\n});\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@notbrent/nested-navigationoptions-wrong",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"As we mentioned earlier, you can only modify navigation options for a navigator from one of its screen components. ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," above are screen components in ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeStack")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SettingsStack")," respectively, not in the tab navigator. So the result will be that the ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarLabel")," property is not applied to the tab navigator. We can fix this though!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const HomeStack = createStackNavigator({ A });\nconst SettingsStack = createStackNavigator({ B });\n\nHomeStack.navigationOptions = {\n  tabBarLabel: 'Home!',\n};\n\nSettingsStack.navigationOptions = {\n  tabBarLabel: 'Settings!',\n};\n\nexport default createBottomTabNavigator({\n  HomeStack,\n  SettingsStack,\n});\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@notbrent/nested-navigationoptions-correct",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"To understand what is going on here, first recall that in the following example, ",(0,i.kt)("inlineCode",{parentName:"p"},"MyComponent")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MyOtherComponent")," are identical:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class MyComponent extends React.Component {\n  static navigationOptions = {\n    title: 'Hello!',\n  };\n  // etc.\n}\n\nclass MyOtherComponent extends React.Component {\n  // etc.\n}\n\nMyOtherComponent.navigationOptions = {\n  title: 'Hello!',\n};\n")),(0,i.kt)("p",null,"We also know that ",(0,i.kt)("inlineCode",{parentName:"p"},"createStackNavigator")," and related functions return React components. So when we set the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," directly on the ",(0,i.kt)("inlineCode",{parentName:"p"},"HomeStack")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SettingsStack")," component, it allows us to control the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," for its parent navigator when its used as a screen component. In this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on our stack components configure the label in the tab navigator that renders the stacks."),(0,i.kt)("h2",{id:"caution-the-navigationoptions-property-vs-configuration"},(0,i.kt)("strong",{parentName:"h2"},"Caution"),": the navigationOptions property vs configuration"),(0,i.kt)("p",null,"Navigators are initialized with ",(0,i.kt)("inlineCode",{parentName:"p"},"create*Navigator(routeConfig, navigatorConfig)"),". Inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"navigatorConfig")," we can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," property. These ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," are the default options for screens within that navigator (",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/headers#sharing-common-navigationoptions-across-screens"},"read more about sharing common navigationOptions"),"), they do not refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," for that navigator ","\u2014"," as we have seen above, we set the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," property directly on the navigator for that use case."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const HomeStack = createStackNavigator({ A }, {\n  // This is the default for screens in the stack, so `A` will\n  // use this title unless it overrides it\n  navigationOptions: {\n    title: 'Welcome'\n  }\n})\n\n// These are the options that are used by the navigator that renders\n// the HomeStack, in our example above this is a tab navigator.\nHomeStack.navigationOptions = {\n  tabBarLabel: 'Home!',\n};\n")),(0,i.kt)("p",null,"We understand that overloading the naming here is a little bit confusing. Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/rfcs"},"open a RFC")," if you have a suggestion about how we can make this API easier to learn and work with."),(0,i.kt)("h1",{id:"a-stack-contains-a-tab-navigator-and-you-want-to-set-the-title-on-the-stack-header"},"A stack contains a tab navigator and you want to set the title on the stack header"),(0,i.kt)("p",null,"Imagine the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const TabNavigator = createBottomTabNavigator({\n  Feed: FeedScreen,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createStackNavigator({\n  Home: TabNavigator,\n  Settings: SettingsScreen,\n});\n")),(0,i.kt)("p",null,"If we were to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"FeedScreen"),", this would not work. This is because the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppNavigator")," stack will only look at its immediate children for configuration: ",(0,i.kt)("inlineCode",{parentName:"p"},"TabNavigator")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SettingsScreen"),". So we can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"TabNavigator")," instead, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const TabNavigator = createBottomTabNavigator({\n  Feed: FeedScreen,\n  Profile: ProfileScreen,\n});\n\nTabNavigator.navigationOptions = ({ navigation }) => {\n  const { routeName } = navigation.state.routes[navigation.state.index];\n\n  // You can do whatever you like here to pick the title based on the route name\n  const headerTitle = routeName;\n\n  return {\n    headerTitle,\n  };\n};\n")),(0,i.kt)("p",null,"Another option is to re-organize your navigators, such that each tab has its own stack. You can then hide the top-level stack's header when the tab screen is focused."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* other routes here */\n});\n\nconst ProfileStack = createStackNavigator({\n  ProfileHome: ProfileScreen,\n  /* other routes here */\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileStack,\n});\n\nTabNavigator.navigationOptions = {\n  // Hide the header from AppNavigator stack\n  header: null,\n};\n\nconst AppNavigator = createStackNavigator({\n  Home: TabNavigator,\n  Settings: SettingsScreen,\n});\n")),(0,i.kt)("p",null,"Using this configuration, the ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"FeedScreen")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ProfileScreen")," will not determine the title in their headers."),(0,i.kt)("p",null,"Additionally, you can push new screens to the feed and profile stacks without hiding the tab bar by adding more routes to those stacks. If you want to push screens on top of the tab bar, then you can add them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppNavigator")," stack."),(0,i.kt)("h1",{id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens"},"A tab navigator contains a stack and you want to hide the tab bar on specific screens"),(0,i.kt)("p",null,"Similar to the example above where a stack contains a tab navigator, we can solve this in two ways: add ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," to our tab navigator to set the tab bar to hidden depending on which route is active in the child stack, or we can move the tab navigator inside of the stack."),(0,i.kt)("p",null,"Imagine the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: TabNavigator,\n});\n")),(0,i.kt)("p",null,"If we want to hide the tab bar when we navigate from the feed home to a details screen without shuffling navigators, we cannot set the ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarVisible: false")," configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"DetailsScreen"),", because those options will only apply to the ",(0,i.kt)("inlineCode",{parentName:"p"},"FeedStack"),". Instead, we can do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nFeedStack.navigationOptions = ({ navigation }) => {\n  let tabBarVisible = true;\n  if (navigation.state.index > 0) {\n    tabBarVisible = false;\n  }\n\n  return {\n    tabBarVisible,\n  };\n};\n")),(0,i.kt)("p",null,"This will hide the tab bar any time we navigate away from the feed home. We could switch visibility based on route name, but it would be strange to have the tab bar be hidden and then appear again when pushing another route ","\u2014"," it should only be visible when returning to a route where it was previously visible."),(0,i.kt)("p",null,"Another option here would be to add another stack navigator as a parent of the tab navigator, and put the details screen there. This is recommended."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* any other route you want to render under the tab bar */\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst HomeStack = createStackNavigator({\n  Tabs: TabNavigator,\n  Details: DetailsScreen,\n  /* any other route you want to render above the tab bar */\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: HomeStack,\n});\n")),(0,i.kt)("h1",{id:"a-drawer-has-a-stack-inside-of-it-and-you-want-to-lock-the-drawer-on-certain-screens"},"A drawer has a stack inside of it and you want to lock the drawer on certain screens"),(0,i.kt)("p",null,"This is conceptually identical to having a tab with a stack inside of it (read that above if you have not already), where you want to hide the tab bar on certain screens. The only difference is that rather than using ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarVisible")," you will use ",(0,i.kt)("inlineCode",{parentName:"p"},"drawerLockMode"),"."),(0,i.kt)("p",null,"Imagine the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nconst DrawerNavigator = createDrawerNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: DrawerNavigator,\n});\n")),(0,i.kt)("p",null,"In order to hide the drawer when we push the details screen to the feed stack, we need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"FeedStack"),". If we were to set ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"DetailsScreen"),", they would be configuring the feed stack (its direct parent) and not the drawer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nFeedStack.navigationOptions = ({ navigation }) => {\n  let drawerLockMode = 'unlocked';\n  if (navigation.state.index > 0) {\n    drawerLockMode = 'locked-closed';\n  }\n\n  return {\n    drawerLockMode,\n  };\n};\n")),(0,i.kt)("p",null,"Another option here would be to add another stack navigator as a parent of the drawer navigator, and put the details screen there. This is recommended."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* any other route where you want the drawer to remain available */\n  /* keep in mind that it will conflict with the swipe back gesture on ios */\n});\n\nconst DrawerNavigator = createDrawerNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst HomeStack = createStackNavigator({\n  Drawer: DrawerNavigator,\n  Details: DetailsScreen,\n  /* add routes here where you want the drawer to be locked */\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: HomeStack,\n});\n")))}h.isMDXComponent=!0}}]);