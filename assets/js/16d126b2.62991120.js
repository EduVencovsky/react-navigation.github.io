"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1959],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||l[m]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},c=void 0,u={unversionedId:"redux-integration",id:"version-6.x/redux-integration",isDocsHomePage:!1,title:"Redux integration",description:"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation.",source:"@site/versioned_docs/version-6.x/redux-integration.md",sourceDirName:".",slug:"/redux-integration",permalink:"/docs/redux-integration",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/redux-integration.md",tags:[],version:"6.x",frontMatter:{id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},sidebar:"version-6.x/docs",previous:{title:"Type checking with TypeScript",permalink:"/docs/typescript"},next:{title:"MobX State Tree integration",permalink:"/docs/MST-integration"}},p=[{value:"Use a component that is <code>connect</code>ed in <code>options</code>",id:"use-a-component-that-is-connected-in-options",children:[]},{value:"Pass the state you care about as a param to the screen",id:"pass-the-state-you-care-about-as-a-param-to-the-screen",children:[]},{value:"Can I store the navigation state in Redux too?",id:"can-i-store-the-navigation-state-in-redux-too",children:[]}],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Provider } from 'react-redux';\nimport { NavigationContainer } from '@react-navigation/native';\n\n// Render the app container component with the provider around it\nexport default function App() {\n  return (\n    <Provider store={store}>\n      <NavigationContainer>\n        {/* Screen configuration */}\n      </NavigationContainer>\n    </Provider>\n  );\n}\n")),(0,r.kt)("p",null,"Notice that we wrap our components in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," like we'd normally do with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-redux"),". Ta da! Now feel free to use ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," throughout your app."),(0,r.kt)("h3",{id:"use-a-component-that-is-connected-in-options"},"Use a component that is ",(0,r.kt)("inlineCode",{parentName:"h3"},"connect"),"ed in ",(0,r.kt)("inlineCode",{parentName:"h3"},"options")),(0,r.kt)("p",null,"Create a component, ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," it to the store, then use that component in the ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,r.kt)("samp",{id:"redux-integration"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function Counter({ value }) {\n  return <Text>Count: {value}</Text>;\n}\n\nconst CounterContainer = connect(state => ({ value: state.count }))(Counter);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Test"\n  component={TestScreen}\n  options={{ title: () => <CounterContainer /> }}\n/>\n')),(0,r.kt)("h3",{id:"pass-the-state-you-care-about-as-a-param-to-the-screen"},"Pass the state you care about as a param to the screen"),(0,r.kt)("p",null,"If the value isn't expected to change, you can just pass it from a connected component to the other screen as a param."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<Button\n  title=\"Go to static counter screen\"\n  onPress={() =>\n    props.navigation.navigate('StaticCounter', {\n      count,\n    })\n  }\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function StaticCounter({ route }) {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.paragraph}>{route.params.count}</Text>\n    </View>\n  );\n}\n")),(0,r.kt)("samp",{id:"redux-integration-nav-param"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<RootStack.Screen\n  name="StaticCounter"\n  component={StaticCounter}\n  options={({ route }) => ({ title: route.params.count })}\n/>\n')),(0,r.kt)("h2",{id:"can-i-store-the-navigation-state-in-redux-too"},"Can I store the navigation state in Redux too?"),(0,r.kt)("p",null,"This is not possible. We don't support it because it's too easy to shoot yourself in the foot and slow down / break your app."),(0,r.kt)("p",null,"However it's possible to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},(0,r.kt)("inlineCode",{parentName:"a"},"redux-devtools-extension"))," to inspect the ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-state"},"navigation state")," and actions, as well as perform time travel debugging by using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/devtools"},(0,r.kt)("inlineCode",{parentName:"a"},"devtools")," package"),"."))}d.isMDXComponent=!0}}]);