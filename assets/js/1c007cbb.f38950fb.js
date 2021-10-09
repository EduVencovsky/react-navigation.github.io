"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[3126],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=i,m=c["".concat(p,".").concat(u)]||c[u]||b[u]||o;return a?n.createElement(m,r(r({ref:t},s),{},{components:a})):n.createElement(m,r({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},42607:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],l={id:"tab-navigator",title:"createTabNavigator",sidebar_label:"createTabNavigator"},p=void 0,d={unversionedId:"tab-navigator",id:"version-2.x/tab-navigator",isDocsHomePage:!1,title:"createTabNavigator",description:"Note: createTabNavigator is deprecated. Please use createBottomTabNavigator and/or createMaterialTopTabNavigator instead.",source:"@site/versioned_docs/version-2.x/tab-navigator.md",sourceDirName:".",slug:"/tab-navigator",permalink:"/docs/2.x/tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/tab-navigator.md",tags:[],version:"2.x",frontMatter:{id:"tab-navigator",title:"createTabNavigator",sidebar_label:"createTabNavigator"},sidebar:"version-2.x-api",previous:{title:"createDrawerNavigator",permalink:"/docs/2.x/drawer-navigator"},next:{title:"createBottomTabNavigator",permalink:"/docs/2.x/bottom-tab-navigator"}},s=[{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"TabNavigatorConfig",id:"tabnavigatorconfig",children:[{value:"<code>tabBarOptions</code> for <code>TabBarBottom</code> (default tab bar on iOS)",id:"tabbaroptions-for-tabbarbottom-default-tab-bar-on-ios",children:[]},{value:"<code>tabBarOptions</code> for <code>TabBarTop</code> (default tab bar on Android)",id:"tabbaroptions-for-tabbartop-default-tab-bar-on-android",children:[]}]},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",children:[]}],b={toc:s};function c(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"createTabNavigator")," is deprecated. Please use ",(0,o.kt)("inlineCode",{parentName:"p"},"createBottomTabNavigator")," and/or ",(0,o.kt)("inlineCode",{parentName:"p"},"createMaterialTopTabNavigator")," instead.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"createTabNavigator(RouteConfigs, TabNavigatorConfig);\n")),(0,o.kt)("h2",{id:"routeconfigs"},"RouteConfigs"),(0,o.kt)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.x/stack-navigator#routeconfigs"},"example")," from stack navigator."),(0,o.kt)("h2",{id:"tabnavigatorconfig"},"TabNavigatorConfig"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tabBarComponent")," - Component to use as the tab bar, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"TabBarBottom")," (this is the default on iOS), ",(0,o.kt)("inlineCode",{parentName:"li"},"TabBarTop")," (this is the default on Android)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tabBarPosition")," - Position of the tab bar, can be ",(0,o.kt)("inlineCode",{parentName:"li"},"'top'")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"'bottom'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"swipeEnabled")," - Whether to allow swiping between tabs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"animationEnabled")," - Whether to animate when changing tabs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lazy")," - Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),". If ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", all tabs are rendered immediately. When ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", tabs are rendered only when they are made active."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"removeClippedSubviews")," - Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),". An optimization to reduce memory usage by freeing resources used by inactive tabs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initialLayout")," - Optional object containing the initial ",(0,o.kt)("inlineCode",{parentName:"li"},"height")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"width"),", can be passed to prevent the one frame delay in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-community/react-native-tab-view#avoid-one-frame-delay"},"react-native-tab-view")," rendering."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tabBarOptions")," - Configure the tab bar, see below.")),(0,o.kt)("p",null,"Several options get passed to the underlying router to modify navigation logic:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"order")," - Array of routeNames which defines the order of the tabs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"backBehavior")," - Should the back button cause a tab switch to the initial tab? If yes, set to ",(0,o.kt)("inlineCode",{parentName:"li"},"initialRoute"),", otherwise ",(0,o.kt)("inlineCode",{parentName:"li"},"none"),". Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"initialRoute")," behavior.")),(0,o.kt)("h3",{id:"tabbaroptions-for-tabbarbottom-default-tab-bar-on-ios"},(0,o.kt)("inlineCode",{parentName:"h3"},"tabBarOptions")," for ",(0,o.kt)("inlineCode",{parentName:"h3"},"TabBarBottom")," (default tab bar on iOS)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"activeBackgroundColor")," - Background color of the active tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"inactiveBackgroundColor")," - Background color of the inactive tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"safeAreaInset")," - Override the ",(0,o.kt)("inlineCode",{parentName:"li"},"forceInset")," prop for ",(0,o.kt)("inlineCode",{parentName:"li"},"<SafeAreaView>"),". Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"{ bottom: 'always', top: 'never' }"),". Available keys are ",(0,o.kt)("inlineCode",{parentName:"li"},"top | bottom | left | right")," provided with the values ",(0,o.kt)("inlineCode",{parentName:"li"},"'always' | 'never'"),".")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tabBarOptions: {\n  activeTintColor: '#e91e63',\n  labelStyle: {\n    fontSize: 12,\n  },\n  style: {\n    backgroundColor: 'blue',\n  },\n}\n")),(0,o.kt)("h3",{id:"tabbaroptions-for-tabbartop-default-tab-bar-on-android"},(0,o.kt)("inlineCode",{parentName:"h3"},"tabBarOptions")," for ",(0,o.kt)("inlineCode",{parentName:"h3"},"TabBarTop")," (default tab bar on Android)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"showIcon")," - Whether to show icon for tab, default is false."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upperCaseLabel")," - Whether to make label uppercase, default is true."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pressColor")," - Color for material ripple (Android >= 5.0 only)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pressOpacity")," - Opacity for pressed tab (iOS and Android < 5.0 only)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scrollEnabled")," - Whether to enable scrollable tabs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"indicatorStyle")," - Style object for the tab indicator (line at the bottom of the tab)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"iconStyle")," - Style object for the tab icon."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true.")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"tabBarOptions: {\n  labelStyle: {\n    fontSize: 12,\n  },\n  tabStyle: {\n    width: 100,\n  },\n  style: {\n    backgroundColor: 'blue',\n  },\n}\n")),(0,o.kt)("h2",{id:"navigationoptions-for-screens-inside-of-the-navigator"},(0,o.kt)("inlineCode",{parentName:"h2"},"navigationOptions")," for screens inside of the navigator"),(0,o.kt)("h4",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h4"},"title")),(0,o.kt)("p",null,"Generic title that can be used as a fallback for ",(0,o.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),(0,o.kt)("h4",{id:"tabbarvisible"},(0,o.kt)("inlineCode",{parentName:"h4"},"tabBarVisible")),(0,o.kt)("p",null,"True or false to show or hide the tab bar, if not set then defaults to true."),(0,o.kt)("h4",{id:"swipeenabled"},(0,o.kt)("inlineCode",{parentName:"h4"},"swipeEnabled")),(0,o.kt)("p",null,"True or false to enable or disable swiping between tabs, if not set then defaults to TabNavigatorConfig option swipeEnabled."),(0,o.kt)("h4",{id:"tabbaricon"},(0,o.kt)("inlineCode",{parentName:"h4"},"tabBarIcon")),(0,o.kt)("p",null,"React Element or a function that given ",(0,o.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, horizontal: boolean, tintColor: string }")," returns a React.Node, to display in the tab bar. ",(0,o.kt)("inlineCode",{parentName:"p"},"horizontal")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," when the device is in landscape and ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," when portrait. The icon is re-rendered whenever the device orientation changes."),(0,o.kt)("h4",{id:"tabbarlabel"},(0,o.kt)("inlineCode",{parentName:"h4"},"tabBarLabel")),(0,o.kt)("p",null,"Title string of a tab displayed in the tab bar or React Element or a function that given ",(0,o.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",(0,o.kt)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),(0,o.kt)("h4",{id:"tabbaronpress"},(0,o.kt)("inlineCode",{parentName:"h4"},"tabBarOnPress")),(0,o.kt)("p",null,"Callback to handle tap events; the argument is an object containing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"previousScene: { route, index }")," which is the scene we are leaving"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"scene: { route, index }")," that was tapped"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"jumpToIndex")," method that can perform the navigation for you")),(0,o.kt)("p",null,"Useful for adding a custom logic before the transition to the next scene (the tapped one) starts."))}c.isMDXComponent=!0}}]);