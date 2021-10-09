"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2497],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98332:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"handling-iphonex",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},l=void 0,p={unversionedId:"handling-iphonex",id:"version-4.x/handling-iphonex",isDocsHomePage:!1,title:"Supporting safe areas",description:"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:",source:"@site/versioned_docs/version-4.x/handling-iphonex.md",sourceDirName:".",slug:"/handling-iphonex",permalink:"/docs/4.x/handling-iphonex",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/handling-iphonex.md",tags:[],version:"4.x",frontMatter:{id:"handling-iphonex",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},sidebar:"version-4.x-docs",previous:{title:"Authentication flows",permalink:"/docs/4.x/auth-flow"},next:{title:"Different status bar configuration based on route",permalink:"/docs/4.x/status-bar"}},c=[{value:"Hidden/Custom Navigation Bar or Tab Bar",id:"hiddencustom-navigation-bar-or-tab-bar",children:[]},{value:"Landscape Mode",id:"landscape-mode",children:[]},{value:"Use the <code>edges</code> prop to customize the safe area",id:"use-the-edges-prop-to-customize-the-safe-area",children:[]},{value:"Use the hook for more control",id:"use-the-hook-for-more-control",children:[]},{value:"Summary",id:"summary",children:[]}],d={toc:c};function u(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Physical notches"),(0,o.kt)("li",{parentName:"ul"},"Status bar overlay"),(0,o.kt)("li",{parentName:"ul"},"Home activity indicator on iOS"),(0,o.kt)("li",{parentName:"ul"},"Navigation bar on Android")),(0,o.kt)("p",null,'The area not overlapped by such items is referred to as "safe area".'),(0,o.kt)("p",null,"We try to apply proper insets on the UI elements of the navigators to avoid being overlapped by such items. The goal is to (a) maximize usage of the screen (b) without hiding content or making it difficult to interact with by having it obscured by a physical display cutout or some operating system UI."),(0,o.kt)("p",null,"While React Navigation handles safe areas for the built-in UI elements by default, your own content also needs to handle it to ensure that content isn't hidden by these items."),(0,o.kt)("p",null,"It's tempting to solve (a) by wrapping your entire app in a container with padding that ensures all content will not be occluded. But in doing so, we waste a bunch of space on the screen, as pictured in the image on the left below. What we ideally want is the image pictured on the right."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Notch on the iPhone X",src:n(93656).Z})),(0,o.kt)("p",null,"While React Native exports a ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," component, it has some inherent issues, i.e. if a screen containing safe area is animating, it causes jumpy behavior. In addition, this component only supports iOS 10+ with no support for older iOS versions or Android. We recommend to use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context"},"react-native-safe-area-context")," library to handle safe areas in a more reliable way."),(0,o.kt)("p",null,"The rest of this guide gives more information on how to support safe areas in React Navigation."),(0,o.kt)("h2",{id:"hiddencustom-navigation-bar-or-tab-bar"},"Hidden/Custom Navigation Bar or Tab Bar"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Default React Navigation Behavior",src:n(87760).Z})),(0,o.kt)("p",null,"React Navigation handles safe area in the default header. However, if you're using a custom header, it's important to ensure your UI is within the safe area."),(0,o.kt)("p",null,"For example, if I render nothing for the ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"tabBarComponent"),", nothing renders"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const Tabs = createBottomTabNavigator({\n  ...\n}, {\n  tabBarComponent: () => null,\n});\n\nexport default createStackNavigator({\n  ...\n}, {\n  headerMode: 'none',\n});\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Text hidden by iPhoneX UI elements",src:n(84588).Z})),(0,o.kt)("p",null,"To fix this issue you can apply safe area insets on your content. This can be achieved easily by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," component from the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-safe-area-context")," library. Recall that ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," should not wrap entire navigators, just the content inside the screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { SafeAreaView } from 'react-native-safe-area-context';\n\nclass MyHomeScreen extends Component {\n  render() {\n    return (\n      <SafeAreaView style={styles.container}>\n        <Text style={styles.paragraph}>This is top text.</Text>\n        <Text style={styles.paragraph}>This is bottom text.</Text>\n      </SafeAreaView>\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Make sure to wrap your app in ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaProvider")," as per the instructions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/th3rdwave/react-native-safe-area-context#usage"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Content spaced correctly with SafeAreaView",src:n(89059).Z})),(0,o.kt)("p",null,"This will detect if the app is running on an iPhoneX and, if so, ensure the content isn't hidden behind any hardware elements."),(0,o.kt)("h2",{id:"landscape-mode"},"Landscape Mode"),(0,o.kt)("p",null,"Even if you're using the default navigation bar and tab bar if your application works in landscape mode it's important to ensure you content isn't hidden behind the sensor cluster."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App in landscape mode with text hidden",src:n(80145).Z})),(0,o.kt)("p",null,"To fix this you can, once again, wrap your content in a ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView"),". This will not conflict with the navigation bar nor the tab bar's default behavior in portrait mode."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App in landscape mode with text visible",src:n(1061).Z})),(0,o.kt)("p",null,"In conclusion, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," component on the screens you register with a React Navigation navigator."),(0,o.kt)("h2",{id:"use-the-edges-prop-to-customize-the-safe-area"},"Use the ",(0,o.kt)("inlineCode",{parentName:"h2"},"edges")," prop to customize the safe area"),(0,o.kt)("p",null,"In some cases you might need more control over which paddings are applied. For example, you can remove bottom padding by passing ",(0,o.kt)("inlineCode",{parentName:"p"},"edges")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"SafeAreaView"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>\n  <Text style={styles.paragraph}>This is top text.</Text>\n  <Text style={styles.paragraph}>This is bottom text.</Text>\n</SafeAreaView>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"edges")," takes an array with the values ",(0,o.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"right")," which controls which sides the safe area are applied to."),(0,o.kt)("h2",{id:"use-the-hook-for-more-control"},"Use the hook for more control"),(0,o.kt)("p",null,"In some cases you might need more control over which paddings are applied. For example, you can only apply the top and the bottom padding by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useSafeAreaInsets } from 'react-native-safe-area-context';\n\nfunction Demo() {\n  const insets = useSafeAreaInsets();\n\n  return (\n    <View\n      style={{\n        paddingTop: insets.top,\n        paddingBottom: insets.bottom,\n\n        flex: 1,\n        justifyContent: 'space-between',\n        alignItems: 'center',\n      }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\n")),(0,o.kt)("p",null,"Similarly, you could apply these paddings in ",(0,o.kt)("inlineCode",{parentName:"p"},"contentContainerStyle")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"FlatList")," to have the content avoid the safe areas, but still show them under the statusbar and navigation bar when scrolling."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"react-native-safe-area-context")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"SafeAreaView")," from ",(0,o.kt)("inlineCode",{parentName:"li"},"react-native")),(0,o.kt)("li",{parentName:"ul"},"Don't wrap your whole app in ",(0,o.kt)("inlineCode",{parentName:"li"},"SafeAreaView"),", instead wrap content inside your screens"),(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"edges")," prop to apply safe area to specific sides"),(0,o.kt)("li",{parentName:"ul"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"useSafeAreaInsets")," hook for more control over where the insets are applied")))}u.isMDXComponent=!0},93656:function(e,t,n){t.Z=n.p+"assets/images/00-intro-4709ed78711b21c7bd54d2a1385262bb.png"},87760:function(e,t,n){t.Z=n.p+"assets/images/01-iphonex-default-2588bf4cb73433282b14319e54ea4815.png"},84588:function(e,t,n){t.Z=n.p+"assets/images/02-iphonex-content-hidden-2a5db62e9fa6340cfb3e8f5a4250b7d4.png"},89059:function(e,t,n){t.Z=n.p+"assets/images/03-iphonex-content-fixed-cb656e6a268a30af3f9aae2b6f3d4c64.png"},80145:function(e,t,n){t.Z=n.p+"assets/images/04-iphonex-landscape-hidden-113cbaf522b57ff8fbfdf4b1b39411d3.png"},1061:function(e,t,n){t.Z=n.p+"assets/images/05-iphonex-landscape-fixed-0d90c3fe5813cdd8664946c5873d7f57.png"}}]);