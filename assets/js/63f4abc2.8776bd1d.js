"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2905],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"handling-iphonex",title:"iPhone X support",sidebar_label:"iPhone X support"},p=void 0,l={unversionedId:"handling-iphonex",id:"version-2.x/handling-iphonex",isDocsHomePage:!1,title:"iPhone X support",description:'By default, React Navigation aids in ensuring your application displays correctly on the iPhoneX. It does so by using SafeAreaView inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.',source:"@site/versioned_docs/version-2.x/handling-iphonex.md",sourceDirName:".",slug:"/handling-iphonex",permalink:"/docs/2.x/handling-iphonex",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/handling-iphonex.md",tags:[],version:"2.x",frontMatter:{id:"handling-iphonex",title:"iPhone X support",sidebar_label:"iPhone X support"},sidebar:"version-2.x-docs",previous:{title:"Authentication flows",permalink:"/docs/2.x/auth-flow"},next:{title:"Different status bar configuration based on route",permalink:"/docs/2.x/status-bar"}},c=[{value:"Hidden/Custom Navigation Bar or Tab Bar",id:"hiddencustom-navigation-bar-or-tab-bar",children:[]},{value:"Landscape Mode",id:"landscape-mode",children:[]},{value:"Use <code>forceInset</code> to get more control",id:"use-forceinset-to-get-more-control",children:[]}],d={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"By default, React Navigation aids in ensuring your application displays correctly on the iPhoneX. It does so by using ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaView"),' inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.'),(0,i.kt)("h2",{id:"hiddencustom-navigation-bar-or-tab-bar"},"Hidden/Custom Navigation Bar or Tab Bar"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Default React Navigation Behavior",src:n(87760).Z})),(0,i.kt)("p",null,"However, if you're overriding the default navigation bar, it's important to ensure your UI doesn't interfere with either of those hardware elements."),(0,i.kt)("p",null,"For example, if I render nothing for the ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarComponent"),", nothing renders"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Tabs = createBottomTabNavigator({\n  ...\n}, {\n  tabBarComponent: () => null,\n});\n\nexport default createStackNavigator({\n  ...\n}, {\n  headerMode: 'none',\n});\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Text hidden by iPhoneX UI elements",src:n(84588).Z})),(0,i.kt)("p",null,"To fix this issue you can wrap your content in a ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaView"),", which can be imported from ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation"),". Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," should not wrap entire navigators, just the screen components or any content in them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { SafeAreaView } from 'react-navigation';\n\nclass MyHomeScreen extends Component {\n  render() {\n    return (\n      <SafeAreaView style={styles.container}>\n        <Text style={styles.paragraph}>\n          This is top text.\n        </Text>\n        <Text style={styles.paragraph}>\n          This is bottom text.\n        </Text>\n      </SafeAreaView>\n    );\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Content spaced correctly with SafeAreaView",src:n(89059).Z})),(0,i.kt)("p",null,"This will detect if the app is running on an iPhoneX and, if so, ensure the content isn't hidden behind any hardware elements."),(0,i.kt)("h2",{id:"landscape-mode"},"Landscape Mode"),(0,i.kt)("p",null,"Even if you're using the default navigation bar and tab bar if your application works in landscape mode it's important to ensure you content isn't hidden behind the sensor cluster."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App in landscape mode with text hidden",src:n(80145).Z})),(0,i.kt)("p",null,"To fix this you can, once again, wrap your content in a ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaView"),". This will not conflict with the navigation bar or tab bar's default behavior in portrait mode."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App in landscape mode with text visible",src:n(1061).Z})),(0,i.kt)("p",null,"In conclusion, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaView")," component on the screens you register with a React Navigation navigator."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://snack.expo.io/BJ6-M8pEG"},"Snack")," is available with the code used in this overview."),(0,i.kt)("h2",{id:"use-forceinset-to-get-more-control"},"Use ",(0,i.kt)("inlineCode",{parentName:"h2"},"forceInset")," to get more control"),(0,i.kt)("p",null,"In some cases you might need more control over which paddings are applied. For example, you can remove bottom padding by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"forceInset")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaView"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"<SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>\n  <Text style={styles.paragraph}>\n    This is top text.\n  </Text>\n  <Text style={styles.paragraph}>\n    This is bottom text.\n  </Text>\n</SafeAreaView>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"forceInset")," takes an object with the keys ",(0,i.kt)("inlineCode",{parentName:"p"},"top | bottom | left | right | vertical | horizontal")," and the values ",(0,i.kt)("inlineCode",{parentName:"p"},"'always' | 'never'"),". Or you can override the padding altogether by passing an integer."),(0,i.kt)("p",null,"There is also a ",(0,i.kt)("a",{parentName:"p",href:"https://snack.expo.io/@jozan/react-navigation-docs:-safeareaview-demo"},"Snack")," available to demonstrate how ",(0,i.kt)("inlineCode",{parentName:"p"},"forceInset")," behaves."))}u.isMDXComponent=!0},87760:function(e,t,n){t.Z=n.p+"assets/images/01-iphonex-default-2588bf4cb73433282b14319e54ea4815.png"},84588:function(e,t,n){t.Z=n.p+"assets/images/02-iphonex-content-hidden-2a5db62e9fa6340cfb3e8f5a4250b7d4.png"},89059:function(e,t,n){t.Z=n.p+"assets/images/03-iphonex-content-fixed-cb656e6a268a30af3f9aae2b6f3d4c64.png"},80145:function(e,t,n){t.Z=n.p+"assets/images/04-iphonex-landscape-hidden-113cbaf522b57ff8fbfdf4b1b39411d3.png"},1061:function(e,t,n){t.Z=n.p+"assets/images/05-iphonex-landscape-fixed-0d90c3fe5813cdd8664946c5873d7f57.png"}}]);