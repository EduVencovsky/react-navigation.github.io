"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5255],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),i=n(79443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,i=e.block,p=e.defaultValue,u=e.values,c=e.groupId,d=e.className,m=a.Children.toArray(e.children),h=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=p?p:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,k=r(),g=k.tabGroupChoices,f=k.setTabGroupChoices,v=(0,a.useState)(b),N=v[0],y=v[1],w=[];if(null!=c){var C=g[c];null!=C&&C!==N&&h.some((function(e){return e.value===C}))&&y(C)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),a=h[n].value;y(a),null!=c&&(f(c,a),setTimeout((function(){var e,n,a,i,r,o,l,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,p=o.innerWidth,n>=0&&r<=p&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case"ArrowLeft":var i=w.indexOf(e.target)-1;n=w[i]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},d)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},79281:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(55064),l=n(58215),s=["components"],p={id:"material-top-tab-navigator",title:"Material Top Tabs Navigator",sidebar_label:"Material Top Tabs"},u=void 0,c={unversionedId:"material-top-tab-navigator",id:"version-5.x/material-top-tab-navigator",isDocsHomePage:!1,title:"Material Top Tabs Navigator",description:"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately.",source:"@site/versioned_docs/version-5.x/material-top-tab-navigator.md",sourceDirName:".",slug:"/material-top-tab-navigator",permalink:"/docs/5.x/material-top-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/material-top-tab-navigator.md",tags:[],version:"5.x",frontMatter:{id:"material-top-tab-navigator",title:"Material Top Tabs Navigator",sidebar_label:"Material Top Tabs"},sidebar:"version-5.x/docs",previous:{title:"Material Bottom Tabs",permalink:"/docs/5.x/material-bottom-tab-navigator"},next:{title:"useNavigation",permalink:"/docs/5.x/use-navigation"}},d=[{value:"API Definition",id:"api-definition",children:[{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]},{value:"Events",id:"events",children:[]},{value:"Helpers",id:"helpers",children:[]}]},{value:"Example",id:"example",children:[]}],m={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately."),(0,r.kt)("p",null,"This wraps ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-tab-view"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-tab-view")),"."),(0,r.kt)("div",{style:{display:"flex",margin:"16px 0"}},(0,r.kt)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,r.kt)("source",{src:"/assets/navigators/tabs/material-top-tabs.mov"}))),(0,r.kt)("p",null,"To use this navigator, ensure that you have ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.x/getting-started"},(0,r.kt)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/material-top-tabs"},(0,r.kt)("inlineCode",{parentName:"a"},"@react-navigation/material-top-tabs")),":"),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/material-top-tabs@^5.x react-native-tab-view@^2.x\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/material-top-tabs@^5.x react-native-tab-view@^2.x\n")))),(0,r.kt)("h2",{id:"api-definition"},"API Definition"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 If you encounter any bugs while using ",(0,r.kt)("inlineCode",{parentName:"p"},"createMaterialBottomTabNavigator"),", please open issues on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-paper"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-paper"))," rather than the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-navigation")," repository!")),(0,r.kt)("p",null,"To use this tab navigator, import it from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/material-top-tabs"),":"),(0,r.kt)("samp",{id:"material-top-tab-based-navigation-minimal"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { createMaterialTopTabNavigator } from \'@react-navigation/material-top-tabs\';\n\nconst Tab = createMaterialTopTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.x/tab-based-navigation"},"Tab Navigation"))),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),(0,r.kt)("h4",{id:"initialroutename"},(0,r.kt)("inlineCode",{parentName:"h4"},"initialRouteName")),(0,r.kt)("p",null,"The name of the route to render on first load of the navigator."),(0,r.kt)("h4",{id:"screenoptions"},(0,r.kt)("inlineCode",{parentName:"h4"},"screenOptions")),(0,r.kt)("p",null,"Default options to use for the screens in the navigator."),(0,r.kt)("h4",{id:"backbehavior"},(0,r.kt)("inlineCode",{parentName:"h4"},"backBehavior")),(0,r.kt)("p",null,"Behavior of back button handling."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"order")," to return to previous tab (in the order they are shown in the tab bar)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"history")," to return to last visited tab"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")," to not handle back button")),(0,r.kt)("h4",{id:"tabbarposition"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarPosition")),(0,r.kt)("p",null,"Position of the tab bar in the tab view. Possible values are ",(0,r.kt)("inlineCode",{parentName:"p"},"'top'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"'bottom'"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'top'"),"."),(0,r.kt)("h4",{id:"lazy"},(0,r.kt)("inlineCode",{parentName:"h4"},"lazy")),(0,r.kt)("p",null,"Boolean indicating whether to lazily render the scenes. When this is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", screens will be rendered as they come into the viewport. By default all scenes are rendered to provide a smoother swipe experience. But you might want to defer the rendering of screens out of the viewport until the user sees them. To enable lazy rendering, set ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"When you enable ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy"),", the lazy loaded screens will usually take some time to render when they come into the viewport. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"lazyPlaceholder")," prop to customize what the user sees during this short period."),(0,r.kt)("h4",{id:"lazypreloaddistance"},(0,r.kt)("inlineCode",{parentName:"h4"},"lazyPreloadDistance")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," is enabled, you can specify how many adjacent routes should be preloaded in advance with this prop. This value defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," which means lazy pages are loaded as they come into the viewport."),(0,r.kt)("h4",{id:"lazyplaceholder"},(0,r.kt)("inlineCode",{parentName:"h4"},"lazyPlaceholder")),(0,r.kt)("p",null,"Function that returns a React element to render for routes that haven't been rendered yet. Receives an object containing the route as the argument. The ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," prop also needs to be enabled."),(0,r.kt)("p",null,"This view is usually only shown for a split second. Keep it lightweight."),(0,r.kt)("p",null,"By default, this renders ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h4",{id:"removeclippedsubviews"},(0,r.kt)("inlineCode",{parentName:"h4"},"removeClippedSubviews")),(0,r.kt)("p",null,"Boolean indicating whether to remove invisible views (such as unfocused screens) from the native view hierarchy to improve memory usage. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Don't enable this on iOS where this is buggy and views don't re-appear.")),(0,r.kt)("h4",{id:"keyboarddismissmode"},(0,r.kt)("inlineCode",{parentName:"h4"},"keyboardDismissMode")),(0,r.kt)("p",null,"String indicating whether the keyboard gets dismissed in response to a drag gesture. Possible values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'auto'")," (default): the keyboard is dismissed when the index changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on-drag'"),": the keyboard is dismissed when a drag begins."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'none'"),": drags do not dismiss the keyboard.")),(0,r.kt)("h4",{id:"swipeenabled"},(0,r.kt)("inlineCode",{parentName:"h4"},"swipeEnabled")),(0,r.kt)("p",null,"Boolean indicating whether to enable swipe gestures. Swipe gestures are enabled by default. Passing ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," will disable swipe gestures, but the user can still switch tabs by pressing the tab bar."),(0,r.kt)("h4",{id:"swipevelocityimpact"},(0,r.kt)("inlineCode",{parentName:"h4"},"swipeVelocityImpact")),(0,r.kt)("p",null,"Determines how relevant is a velocity while calculating next position while swiping. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.2"),"."),(0,r.kt)("h4",{id:"timingconfig"},(0,r.kt)("inlineCode",{parentName:"h4"},"timingConfig")),(0,r.kt)("p",null,"Configuration object for the timing animation which occurs when tapping on tabs. Supported properties are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"duration")," (",(0,r.kt)("inlineCode",{parentName:"li"},"number"),")")),(0,r.kt)("h4",{id:"springconfig"},(0,r.kt)("inlineCode",{parentName:"h4"},"springConfig")),(0,r.kt)("p",null,"Configuration object for the spring animation which occurs after swiping. Supported properties are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"damping")," (",(0,r.kt)("inlineCode",{parentName:"li"},"number"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mass")," (",(0,r.kt)("inlineCode",{parentName:"li"},"number"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stiffness")," (",(0,r.kt)("inlineCode",{parentName:"li"},"number"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," (",(0,r.kt)("inlineCode",{parentName:"li"},"number"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," (",(0,r.kt)("inlineCode",{parentName:"li"},"number"),")")),(0,r.kt)("h4",{id:"springvelocityscale"},(0,r.kt)("inlineCode",{parentName:"h4"},"springVelocityScale")),(0,r.kt)("p",null,"Number for determining how meaningful is gesture velocity for calculating initial velocity of spring animation. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h4",{id:"initiallayout"},(0,r.kt)("inlineCode",{parentName:"h4"},"initialLayout")),(0,r.kt)("p",null,"Object containing the initial height and width of the screens. Passing this will improve the initial rendering performance. For most apps, this is a good default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{ width: Dimensions.get('window').width }}\n")),(0,r.kt)("h4",{id:"position"},(0,r.kt)("inlineCode",{parentName:"h4"},"position")),(0,r.kt)("p",null,"Animated (from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated"),") value to listen to the position updates. The passed position value will be kept in sync with the current position of the tabs. It's useful for accessing the animated value outside the tab view."),(0,r.kt)("h4",{id:"scenecontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"sceneContainerStyle")),(0,r.kt)("p",null,"Style to apply to the view wrapping each screen. You can pass this to override some default styles such as overflow clipping."),(0,r.kt)("h4",{id:"style"},(0,r.kt)("inlineCode",{parentName:"h4"},"style")),(0,r.kt)("p",null,"Style to apply to the tab view container."),(0,r.kt)("h4",{id:"gesturehandlerprops"},(0,r.kt)("inlineCode",{parentName:"h4"},"gestureHandlerProps")),(0,r.kt)("p",null,"An object with props to be passed to underlying ",(0,r.kt)("a",{parentName:"p",href:"https://software-mansion.github.io/react-native-gesture-handler/docs/handler-pan.html#properties"},(0,r.kt)("inlineCode",{parentName:"a"},"PanGestureHandler")),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"gestureHandlerProps={{\n  maxPointers: 1,\n  waitFor: [someRef]\n}}\n")),(0,r.kt)("h4",{id:"pager"},(0,r.kt)("inlineCode",{parentName:"h4"},"pager")),(0,r.kt)("p",null,"Function that returns a React element to use as the pager. The pager handles swipe gestures and page switching. By default we use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-gesture-handler"))," for handling gestures. You can switch out the pager for a different implementation to customize the experience."),(0,r.kt)("p",null,"For example, to use pager backed by the native ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewPager"),", you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-tab-view-viewpager-adapter"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-tab-view-viewpager-adapter")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';\n\n// ...\n\n<Tab.Navigator pager={props => <ViewPagerAdapter {...props} />}>\n  {...}\n</Tab.Navigator>\n")),(0,r.kt)("h4",{id:"tabbar"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBar")),(0,r.kt)("p",null,"Function that returns a React element to display as the tab bar."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("samp",{id:"material-top-tab-custom-tab-bar"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { View, TouchableOpacity } from 'react-native';\nimport Animated from 'react-native-reanimated';\n\nfunction MyTabBar({ state, descriptors, navigation, position }) {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      {state.routes.map((route, index) => {\n        const { options } = descriptors[route.key];\n        const label =\n          options.tabBarLabel !== undefined\n            ? options.tabBarLabel\n            : options.title !== undefined\n            ? options.title\n            : route.name;\n\n        const isFocused = state.index === index;\n\n        const onPress = () => {\n          const event = navigation.emit({\n            type: 'tabPress',\n            target: route.key,\n            canPreventDefault: true,\n          });\n\n          if (!isFocused && !event.defaultPrevented) {\n            navigation.navigate(route.name);\n          }\n        };\n\n        const onLongPress = () => {\n          navigation.emit({\n            type: 'tabLongPress',\n            target: route.key,\n          });\n        };\n\n        const inputRange = state.routes.map((_, i) => i);\n        const opacity = Animated.interpolate(position, {\n          inputRange,\n          outputRange: inputRange.map(i => (i === index ? 1 : 0)),\n        });\n\n        return (\n          <TouchableOpacity\n            accessibilityRole=\"button\"\n            accessibilityState={isFocused ? { selected: true } : {}}\n            accessibilityLabel={options.tabBarAccessibilityLabel}\n            testID={options.tabBarTestID}\n            onPress={onPress}\n            onLongPress={onLongPress}\n            style={{ flex: 1 }}\n          >\n            <Animated.Text style={{ opacity }}>\n              {label}\n            </Animated.Text>\n          </TouchableOpacity>\n        );\n      })}\n    </View>\n  );\n}\n\n// ...\n\n<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>\n  {...}\n</Tab.Navigator>\n")),(0,r.kt)("p",null,"This example will render a basic tab bar with labels."),(0,r.kt)("p",null,"Note that you ",(0,r.kt)("strong",{parentName:"p"},"cannot")," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," hook inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBar")," since ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," is only available inside screens. You get a ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop for your ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBar")," which you can use instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function MyTabBar({ navigation }) {\n  return (\n    <Button\n      title=\"Go somewhere\"\n      onPress={() => {\n        // Navigate using the `navigation` prop that you received\n        navigation.navigate('SomeScreen');\n      }}\n    />\n  );\n}\n")),(0,r.kt)("h4",{id:"tabbaroptions"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarOptions")),(0,r.kt)("p",null,"An object containing the props for the tab bar component. It can contain the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"showIcon")," - Whether to show icon for tab, default is false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pressColor")," - Color for material ripple (Android >= 5.0 only)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pressOpacity")," - Opacity for pressed tab (iOS and Android < 5.0 only)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scrollEnabled")," - Whether to enable scrollable tabs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"indicatorStyle")," - Style object for the tab indicator (line at the bottom of the tab)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label. Specifying a color here will override the color specified in ",(0,r.kt)("inlineCode",{parentName:"li"},"activeTintColor")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"inactiveTintColor")," for the label."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"iconStyle")," - Style object for the tab icon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"renderIndicator")," - Function which takes an object with the current route and returns a custom React Element to be used as a tab indicator.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("samp",{id:"material-top-tab-options"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<Tab.Navigator\n  tabBarOptions={{\n    labelStyle: { fontSize: 12 },\n    tabStyle: { width: 100 },\n    style: { backgroundColor: 'powderblue' },\n  }}\n>\n  {/* ... */}\n</Tab.Navigator>\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"The following ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.x/screen-options"},"options")," can be used to configure the screens in the navigator:"),(0,r.kt)("h4",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")),(0,r.kt)("p",null,"Generic title that can be used as a fallback for ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),(0,r.kt)("h4",{id:"tabbaricon"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIcon")),(0,r.kt)("p",null,"Function that given ",(0,r.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in the tab bar."),(0,r.kt)("h4",{id:"tabbarlabel"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarLabel")),(0,r.kt)("p",null,"Title string of a tab displayed in the tab bar or a function that given ",(0,r.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),(0,r.kt)("h4",{id:"tabbaraccessibilitylabel"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),(0,r.kt)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),(0,r.kt)("h4",{id:"tabbartestid"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarTestID")),(0,r.kt)("p",null,"ID to locate this tab button in tests."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"The navigator can ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-events"},"emit events")," on certain actions. Supported events are:"),(0,r.kt)("h4",{id:"tabpress"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabPress")),(0,r.kt)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),(0,r.kt)("li",{parentName:"ul"},"If the tab is already focused:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, you can use ",(0,r.kt)("a",{parentName:"li",href:"/docs/5.x/use-scroll-to-top"},(0,r.kt)("inlineCode",{parentName:"a"},"useScrollToTop"))," to scroll it to top"),(0,r.kt)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",(0,r.kt)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),(0,r.kt)("p",null,"To prevent the default behavior, you can call ",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),(0,r.kt)("samp",{id:"material-top-tab-prevent-default"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', e => {\n    // Prevent default behavior\n    e.preventDefault();\n\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,r.kt)("h4",{id:"tablongpress"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabLongPress")),(0,r.kt)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar for an extended period."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabLongPress', e => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,r.kt)("h3",{id:"helpers"},"Helpers"),(0,r.kt)("p",null,"The tab navigator adds the following methods to the navigation prop:"),(0,r.kt)("h4",{id:"jumpto"},(0,r.kt)("inlineCode",{parentName:"h4"},"jumpTo")),(0,r.kt)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,r.kt)("em",{parentName:"li"},"string")," - Name of the route to jump to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,r.kt)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",(0,r.kt)("inlineCode",{parentName:"li"},"route.params"),").")),(0,r.kt)("samp",{id:"material-top-tab-jump-to"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.jumpTo('Profile', { name: 'Micha\u015b' });\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("samp",{id:"material-top-tab-example"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';\n\nconst Tab = createMaterialTopTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName=\"Feed\"\n      tabBarOptions={{\n        activeTintColor: '#e91e63',\n        labelStyle: { fontSize: 12 },\n        style: { backgroundColor: 'powderblue' },\n      }}\n    >\n      <Tab.Screen\n        name=\"Feed\"\n        component={Feed}\n        options={{ tabBarLabel: 'Home' }}\n      />\n      <Tab.Screen\n        name=\"Notifications\"\n        component={Notifications}\n        options={{ tabBarLabel: 'Updates' }}\n      />\n      <Tab.Screen\n        name=\"Profile\"\n        component={Profile}\n        options={{ tabBarLabel: 'Profile' }}\n      />\n    </Tab.Navigator>\n  );\n}\n")))}h.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);