"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5201],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),g=r,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||a;return t?o.createElement(d,i(i({ref:n},l),{},{components:t})):o.createElement(d,i({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6753:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"common-mistakes",title:"Common mistakes",sidebar_label:"Common mistakes"},c=void 0,p={unversionedId:"common-mistakes",id:"version-4.x/common-mistakes",isDocsHomePage:!1,title:"Common mistakes",description:"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation and serves as a reference in some cases for error messages.",source:"@site/versioned_docs/version-4.x/common-mistakes.md",sourceDirName:".",slug:"/common-mistakes",permalink:"/docs/4.x/common-mistakes",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/common-mistakes.md",tags:[],version:"4.x",frontMatter:{id:"common-mistakes",title:"Common mistakes",sidebar_label:"Common mistakes"},sidebar:"version-4.x-docs",previous:{title:"Glossary of terms",permalink:"/docs/4.x/glossary-of-terms"},next:{title:"Troubleshooting",permalink:"/docs/4.x/troubleshooting"}},l=[{value:"Explicitly rendering more than one navigator",id:"explicitly-rendering-more-than-one-navigator",children:[]},{value:"Assigning navigationOptions to the wrong component",id:"assigning-navigationoptions-to-the-wrong-component",children:[]},{value:"Wrapping AppContainer in a View without flex: 1",id:"wrapping-appcontainer-in-a-view-without-flex-1",children:[]}],u={toc:l};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation and serves as a reference in some cases for error messages."),(0,a.kt)("h2",{id:"explicitly-rendering-more-than-one-navigator"},"Explicitly rendering more than one navigator"),(0,a.kt)("p",null,"Most apps should only ever render one navigator inside of a React component, and this is usually somewhere near the root component of your app. This is a little bit counter-intuitive at first but it's important for the architecture of React Navigation."),(0,a.kt)("p",null,"Here's what you might write in your code -- note that this example would be incorrect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'export default class App extends React.Component {\n  render() {\n    /* In the root component we are rendering the app navigator */\n    return <AppContainer />;\n  }\n}\n\nconst AuthenticationNavigator = createStackNavigator({\n  SignIn: SignInScreen,\n  ForgotPassword: ForgotPasswordScreen,\n});\n\nconst AuthenticationContainer = createAppContainer(AuthenticationNavigator);\n\nclass AuthenticationScreen extends React.Component {\n  render() {\n    /*\n     * In a screen inside of the navigator we are rendering another navigator\n     * You should avoid this! It will have its own navigation state and be unable\n     * To interact with any parent navigator, eg: it would not know the route "Home" exists\n     */\n    return <AuthenticationContainer />;\n  }\n}\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthenticationScreen, // This screen renders a navigator!\n  Home: HomeScreen,\n});\n\nconst AppContainer = createAppContainer(AppNavigator);\n')),(0,a.kt)("p",null,"The correct way to write this would be the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default class App extends React.Component {\n  render() {\n    return <AppContainer />;\n  }\n}\n\nconst AuthenticationNavigator = createStackNavigator({\n  SignIn: SignInScreen,\n  ForgotPassword: ForgotPasswordScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  /*\n   * Rather than being rendered by a screen component, the\n   * AuthenticationNavigator is a screen component\n   */\n  Auth: AuthenticationNavigator,\n  Home: HomeScreen,\n});\n\nconst AppContainer = createAppContainer(AppNavigator);\n")),(0,a.kt)("p",null,"Alternatively, the following would also work because it exposes the ",(0,a.kt)("inlineCode",{parentName:"p"},"router")," static on ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationScreen")," and threads through the ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation")," prop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export default class App extends React.Component {\n  render() {\n    /* In the root component we are rendering the app navigator */\n    return <AppContainer />;\n  }\n}\n\nconst AuthenticationNavigator = createStackNavigator({\n  SignIn: SignInScreen,\n  ForgotPassword: ForgotPasswordScreen,\n});\n\nclass AuthenticationScreen extends React.Component {\n  static router = AuthenticationNavigator.router;\n\n  render() {\n    return <AuthenticationNavigator navigation={this.props.navigation} />;\n  }\n}\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthenticationScreen, // This screen renders a navigator!\n  Home: HomeScreen,\n});\n\nconst AppContainer = createAppContainer(AppNavigator);\n")),(0,a.kt)("h2",{id:"assigning-navigationoptions-to-the-wrong-component"},"Assigning navigationOptions to the wrong component"),(0,a.kt)("p",null,"In previous version of React Navigation, the library used to dig through your component tree to find ",(0,a.kt)("inlineCode",{parentName:"p"},"navigationOptions"),". This is no longer the case, and only ",(0,a.kt)("inlineCode",{parentName:"p"},"navigationOptions")," on screen components of a particular navigator will apply to that navigator. You can read more about this in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.x/navigation-options-resolution"},"Navigation options resolution")," guide."),(0,a.kt)("h2",{id:"wrapping-appcontainer-in-a-view-without-flex-1"},"Wrapping AppContainer in a View without flex: 1"),(0,a.kt)("p",null,"If you wrap the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppContainer")," in a ",(0,a.kt)("inlineCode",{parentName:"p"},"View"),", make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," is has ",(0,a.kt)("inlineCode",{parentName:"p"},"flex: 1")," in the styles."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { Text, View } from 'react-native';\nimport { createAppContainer } from 'react-navigation';\nimport { createBottomTabNavigator } from 'react-navigation-tabs';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n      </View>\n    );\n  }\n}\n\nconst TabNavigator = createBottomTabNavigator({\n  Home: HomeScreen,\n  Settings: SettingsScreen,\n});\n\nconst AppContainer = createAppContainer(TabNavigator);\n\n// without the style you will see a blank screen\nexport default () => (\n  <View style={{ flex: 1 }}>\n    <AppContainer />\n  </View>\n);\n")))}m.isMDXComponent=!0}}]);