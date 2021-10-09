"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6417],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=o,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},63222:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return b}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],l={id:"bottom-tab-navigator",title:"createBottomTabNavigator",sidebar_label:"createBottomTabNavigator"},s=void 0,p={unversionedId:"bottom-tab-navigator",id:"version-2.x/bottom-tab-navigator",isDocsHomePage:!1,title:"createBottomTabNavigator",description:"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-2.x/bottom-tab-navigator.md",sourceDirName:".",slug:"/bottom-tab-navigator",permalink:"/docs/2.x/bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/bottom-tab-navigator.md",tags:[],version:"2.x",frontMatter:{id:"bottom-tab-navigator",title:"createBottomTabNavigator",sidebar_label:"createBottomTabNavigator"},sidebar:"version-2.x-api",previous:{title:"createTabNavigator",permalink:"/docs/2.x/tab-navigator"},next:{title:"createMaterialBottomTabNavigator",permalink:"/docs/2.x/material-bottom-tab-navigator"}},c=[{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"BottomTabNavigatorConfig",id:"bottomtabnavigatorconfig",children:[]},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",children:[]}],u={toc:c};function b(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);\n")),(0,i.kt)("h2",{id:"routeconfigs"},"RouteConfigs"),(0,i.kt)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.x/stack-navigator#routeconfigs"},"example")," from stack navigator."),(0,i.kt)("h2",{id:"bottomtabnavigatorconfig"},"BottomTabNavigatorConfig"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"order")," - Array of routeNames which defines the order of the tabs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"backBehavior")," - Should the back button cause a tab switch to the initial tab? If yes, set to ",(0,i.kt)("inlineCode",{parentName:"li"},"initialRoute"),", otherwise ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),". Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"initialRoute")," behavior."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabBarComponent")," - Optional, override component to use as the tab bar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabBarOptions")," - An object with the following properties:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeBackgroundColor")," - Background color of the active tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inactiveBackgroundColor")," - Background color of the inactive tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"showIcon")," - Whether to show icon for tab, default is true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"adaptive")," - Should the tab icons and labels alignment change based on screen size? Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," for iOS 11. If ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", tab icons and labels align vertically all the time. When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", tab icons and labels align horizontally on tablet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"safeAreaInset")," - Override the ",(0,i.kt)("inlineCode",{parentName:"li"},"forceInset")," prop for ",(0,i.kt)("inlineCode",{parentName:"li"},"<SafeAreaView>"),". Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"{ bottom: 'always', top: 'never' }"),". Available keys are ",(0,i.kt)("inlineCode",{parentName:"li"},"top | bottom | left | right")," provided with the values ",(0,i.kt)("inlineCode",{parentName:"li"},"'always' | 'never'"),".")))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"tabBarOptions: {\n  activeTintColor: '#e91e63',\n  labelStyle: {\n    fontSize: 12,\n  },\n  style: {\n    backgroundColor: 'blue',\n  },\n}\n")),(0,i.kt)("p",null,"If you want to customize the ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarComponent"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';\n\nconst TabBarComponent = (props) => (<BottomTabBar {...props} />);\n\nconst TabScreens = createBottomTabNavigator(\n  {\n    tabBarComponent: props =>\n      <TabBarComponent\n        {...props}\n        style={{ borderTopColor: '#605F60' }}\n      />,\n  },\n);\n")),(0,i.kt)("h2",{id:"navigationoptions-for-screens-inside-of-the-navigator"},(0,i.kt)("inlineCode",{parentName:"h2"},"navigationOptions")," for screens inside of the navigator"),(0,i.kt)("h4",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")),(0,i.kt)("p",null,"Generic title that can be used as a fallback for ",(0,i.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),(0,i.kt)("h4",{id:"tabbarvisible"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarVisible")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to show or hide the tab bar, if not set then defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h4",{id:"tabbaricon"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarIcon")),(0,i.kt)("p",null,"React Element or a function that given ",(0,i.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, horizontal: boolean, tintColor: string }")," returns a React.Node, to display in the tab bar. ",(0,i.kt)("inlineCode",{parentName:"p"},"horizontal")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," when the device is in landscape and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," when portrait. The icon is re-rendered whenever the device orientation changes."),(0,i.kt)("h4",{id:"tabbarlabel"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarLabel")),(0,i.kt)("p",null,"Title string of a tab displayed in the tab bar or React Element or a function that given ",(0,i.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),(0,i.kt)("h4",{id:"tabbarbuttoncomponent"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarButtonComponent")),(0,i.kt)("p",null,"React Component that wraps the icon and label and implements ",(0,i.kt)("inlineCode",{parentName:"p"},"onPress"),". The default is a wrapper around ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback")," that makes it behave the same as other touchables. ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarButtonComponent: TouchableOpacity")," would use ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," instead."),(0,i.kt)("h4",{id:"tabbaraccessibilitylabel"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),(0,i.kt)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),(0,i.kt)("h4",{id:"tabbartestid"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarTestID")),(0,i.kt)("p",null,"ID to locate this tab button in tests."),(0,i.kt)("h4",{id:"tabbaronpress"},(0,i.kt)("inlineCode",{parentName:"h4"},"tabBarOnPress")),(0,i.kt)("p",null,"Callback to handle press events; the argument is an object containing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")),(0,i.kt)("p",null,"Useful for adding a custom logic before the transition to the next scene (the tapped one) starts."),(0,i.kt)("p",null,"Define this callback without ever invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultHandler")," to prevent any navigation from occurring."))}b.isMDXComponent=!0}}]);