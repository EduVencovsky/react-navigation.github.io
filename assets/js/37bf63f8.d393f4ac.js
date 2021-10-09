"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[7310],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},32756:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],s={id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},l=void 0,c={unversionedId:"auth-flow",id:"version-6.x/auth-flow",isDocsHomePage:!1,title:"Authentication flows",description:"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:",source:"@site/versioned_docs/version-6.x/auth-flow.md",sourceDirName:".",slug:"/auth-flow",permalink:"/docs/auth-flow",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/auth-flow.md",tags:[],version:"6.x",frontMatter:{id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},sidebar:"version-6.x/docs",previous:{title:"Drawer navigation",permalink:"/docs/drawer-based-navigation"},next:{title:"Supporting safe areas",permalink:"/docs/handling-safe-area"}},p=[{value:"What we need",id:"what-we-need",children:[]},{value:"How it will work",id:"how-it-will-work",children:[]},{value:"Don&#39;t manually navigate when conditionally rendering screens",id:"dont-manually-navigate-when-conditionally-rendering-screens",children:[]},{value:"Define our screens",id:"define-our-screens",children:[]},{value:"Implement the logic for restoring the token",id:"implement-the-logic-for-restoring-the-token",children:[]},{value:"Fill in other components",id:"fill-in-other-components",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user opens the app."),(0,o.kt)("li",{parentName:"ul"},"The app loads some authentication state from encrypted persistent storage (for example, ",(0,o.kt)("a",{parentName:"li",href:"https://docs.expo.io/versions/latest/sdk/securestore/"},(0,o.kt)("inlineCode",{parentName:"a"},"SecureStore")),")."),(0,o.kt)("li",{parentName:"ul"},"When the state has loaded, the user is presented with either authentication screens or the main app, depending on whether valid authentication state was loaded."),(0,o.kt)("li",{parentName:"ul"},"When the user signs out, we clear the authentication state and send them back to authentication screens.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Note: We say "authentication screens" because usually there is more than one. You may have a main screen with a username and password field, another for "forgot password", and another set for sign up.')),(0,o.kt)("h2",{id:"what-we-need"},"What we need"),(0,o.kt)("p",null,"This is the behavior that we want from the authentication flow: when users sign in, we want to throw away the state of the authentication flow and unmount all of the screens related to authentication, and when we press the hardware back button we expect to not be able to go back to the authentication flow."),(0,o.kt)("h2",{id:"how-it-will-work"},"How it will work"),(0,o.kt)("p",null,"We can define different screens based on some condition. For example, if the user is signed in, we can define ",(0,o.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," etc. If the user is not signed in, we can define ",(0,o.kt)("inlineCode",{parentName:"p"},"SignIn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SignUp")," screens."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'isSignedIn ? (\n  <>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Profile" component={ProfileScreen} />\n    <Stack.Screen name="Settings" component={SettingsScreen} />\n  </>\n) : (\n  <>\n    <Stack.Screen name="SignIn" component={SignInScreen} />\n    <Stack.Screen name="SignUp" component={SignUpScreen} />\n  </>\n)\n')),(0,o.kt)("p",null,"When we define screens like this, when ",(0,o.kt)("inlineCode",{parentName:"p"},"isSignedIn")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", React Navigation will only see the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," screens, and when it's ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", React Navigation will see the ",(0,o.kt)("inlineCode",{parentName:"p"},"SignIn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SignUp")," screens. This makes it impossible to navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Profile")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," screens when the user is not signed in, and to ",(0,o.kt)("inlineCode",{parentName:"p"},"SignIn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SignUp")," screens when the user is signed in."),(0,o.kt)("p",null,'This pattern has been in use by other routing libraries such as React Router for a long time, and is commonly known as "Protected routes". Here, our screens which need the user to be signed in are "protected" and cannot be navigated to by other means if the user is not signed in.'),(0,o.kt)("p",null,"The magic happens when the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"isSignedIn")," variable changes. Let's say, initially ",(0,o.kt)("inlineCode",{parentName:"p"},"isSignedIn")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". This means, either ",(0,o.kt)("inlineCode",{parentName:"p"},"SignIn")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"SignUp")," screens are shown. After the user signs in, the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"isSignedIn")," will change to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". React Navigation will see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"SignIn")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SignUp")," screens are no longer defined and so it will remove them. Then it'll show the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," screen automatically because that's the first screen defined when ",(0,o.kt)("inlineCode",{parentName:"p"},"isSignedIn")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"The example shows stack navigator, but you can use the same approach with any navigator."),(0,o.kt)("p",null,"By conditionally defining different screens based on a variable, we can implement auth flow in a simple way that doesn't require additional logic to make sure that the correct screen is shown."),(0,o.kt)("h2",{id:"dont-manually-navigate-when-conditionally-rendering-screens"},"Don't manually navigate when conditionally rendering screens"),(0,o.kt)("p",null,"It's important to note that when using such a setup, you ",(0,o.kt)("strong",{parentName:"p"},"don't manually navigate")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," screen by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.navigate('Home')")," or any other method. ",(0,o.kt)("strong",{parentName:"p"},"React Navigation will automatically navigate to the correct screen")," when ",(0,o.kt)("inlineCode",{parentName:"p"},"isSigned")," in changes - ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," screen when ",(0,o.kt)("inlineCode",{parentName:"p"},"isSignedIn")," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", and to ",(0,o.kt)("inlineCode",{parentName:"p"},"SignIn")," screen when ",(0,o.kt)("inlineCode",{parentName:"p"},"isSignedIn")," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". You'll get an error if you attempt to navigate manually."),(0,o.kt)("h2",{id:"define-our-screens"},"Define our screens"),(0,o.kt)("p",null,"In our navigator, we can conditionally define appropriate screens. For our case, let's say we have 3 screens:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SplashScreen")," - This will show a splash or loading screen when we're restoring the token."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SignInScreen")," - This is the screen we show if the user isn't signed in already (we couldn't find a token)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HomeScreen")," - This is the screen we show if the user is already signed in.")),(0,o.kt)("p",null,"So our navigator will look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"if (state.isLoading) {\n  // We haven't finished checking for the token yet\n  return <SplashScreen />;\n}\n\nreturn (\n  <Stack.Navigator>\n    {state.userToken == null ? (\n      // No token found, user isn't signed in\n      <Stack.Screen\n        name=\"SignIn\"\n        component={SignInScreen}\n        options={{\n          title: 'Sign in',\n          // When logging out, a pop animation feels intuitive\n          // You can remove this if you want the default 'push' animation\n          animationTypeForReplace: state.isSignout ? 'pop' : 'push',\n        }}\n      />\n    ) : (\n      // User is signed in\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n    )}\n  </Stack.Navigator>\n);\n")),(0,o.kt)("p",null,"In the above snippet, ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading")," means that we're still checking if we have a token. This can usually be done by checking if we have a token in ",(0,o.kt)("inlineCode",{parentName:"p"},"SecureStore")," and validating the token. After we get the token and if it's valid, we need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"userToken"),". We also have another state called ",(0,o.kt)("inlineCode",{parentName:"p"},"isSignout")," to have a different animation on sign out."),(0,o.kt)("p",null,"The main thing to notice is that we're conditionally defining screens based on these state variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SignIn")," screen is only defined if ",(0,o.kt)("inlineCode",{parentName:"li"},"userToken")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," (user is not signed in)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Home")," screen is only defined if ",(0,o.kt)("inlineCode",{parentName:"li"},"userToken")," is non-null (user is signed in)")),(0,o.kt)("p",null,"Here, we're conditionally defining one screen for each case. But you could also define multiple screens. For example, you probably want to define password reset, signup, etc screens as well when the user isn't signed in. Similarly for the screens accessible after sign in, you probably have more than one screen. We can use ",(0,o.kt)("inlineCode",{parentName:"p"},"React.Fragment")," to define multiple screens:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'state.userToken == null ? (\n  <>\n    <Stack.Screen name="SignIn" component={SignInScreen} />\n    <Stack.Screen name="SignUp" component={SignUpScreen} />\n    <Stack.Screen name="ResetPassword" component={ResetPassword} />\n  </>\n) : (\n  <>\n    <Stack.Screen name="Home" component={HomeScreen} />\n    <Stack.Screen name="Profile" component={ProfileScreen} />\n  </>\n);\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you have both your login-related screens and rest of the screens in Stack navigators, we recommend to use a single Stack navigator and place the conditional inside instead of using 2 different navigators. This makes it possible to have a proper transition animation during login/logout.")),(0,o.kt)("h2",{id:"implement-the-logic-for-restoring-the-token"},"Implement the logic for restoring the token"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The following is just an example of how you might implement the logic for authentication in your app. You don't need to follow it as is.")),(0,o.kt)("p",null,"From the previous snippet, we can see that we need 3 state variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isLoading")," - We set this to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when we're trying to check if we already have a token saved in ",(0,o.kt)("inlineCode",{parentName:"li"},"SecureStore")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isSignout")," - We set this to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," when user is signing out, otherwise set it to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"userToken")," - The token for the user. If it's non-null, we assume the user is logged in, otherwise not.")),(0,o.kt)("p",null,"So we need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add some logic for restoring token, sign in and sign out"),(0,o.kt)("li",{parentName:"ul"},"Expose methods for sign in and sign out to other components")),(0,o.kt)("p",null,"We'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useReducer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useContext")," in this guide. But if you're using a state management library such as Redux or Mobx, you can use them for this functionality instead. In fact, in bigger apps, a global state management library is more suitable for storing authentication tokens. You can adapt the same approach to your state management library."),(0,o.kt)("p",null,"First we'll need to create a context for auth where we can expose necessary methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\n\nconst AuthContext = React.createContext();\n")),(0,o.kt)("p",null,"So our component will look like this:"),(0,o.kt)("samp",{id:"auth-flow"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport * as SecureStore from 'expo-secure-store';\n\nexport default function App({ navigation }) {\n  const [state, dispatch] = React.useReducer(\n    (prevState, action) => {\n      switch (action.type) {\n        case 'RESTORE_TOKEN':\n          return {\n            ...prevState,\n            userToken: action.token,\n            isLoading: false,\n          };\n        case 'SIGN_IN':\n          return {\n            ...prevState,\n            isSignout: false,\n            userToken: action.token,\n          };\n        case 'SIGN_OUT':\n          return {\n            ...prevState,\n            isSignout: true,\n            userToken: null,\n          };\n      }\n    },\n    {\n      isLoading: true,\n      isSignout: false,\n      userToken: null,\n    }\n  );\n\n  React.useEffect(() => {\n    // Fetch the token from storage then navigate to our appropriate place\n    const bootstrapAsync = async () => {\n      let userToken;\n\n      try {\n        userToken = await SecureStore.getItemAsync('userToken');\n      } catch (e) {\n        // Restoring token failed\n      }\n\n      // After restoring token, we may need to validate it in production apps\n\n      // This will switch to the App screen or Auth screen and this loading\n      // screen will be unmounted and thrown away.\n      dispatch({ type: 'RESTORE_TOKEN', token: userToken });\n    };\n\n    bootstrapAsync();\n  }, []);\n\n  const authContext = React.useMemo(\n    () => ({\n      signIn: async data => {\n        // In a production app, we need to send some data (usually username, password) to server and get a token\n        // We will also need to handle errors if sign in failed\n        // After getting token, we need to persist the token using `SecureStore`\n        // In the example, we'll use a dummy token\n\n        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });\n      },\n      signOut: () => dispatch({ type: 'SIGN_OUT' }),\n      signUp: async data => {\n        // In a production app, we need to send user data to server and get a token\n        // We will also need to handle errors if sign up failed\n        // After getting token, we need to persist the token using `SecureStore`\n        // In the example, we'll use a dummy token\n\n        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });\n      },\n    }),\n    []\n  );\n\n  return (\n    <AuthContext.Provider value={authContext}>\n      <Stack.Navigator>\n        {state.userToken == null ? (\n          <Stack.Screen name=\"SignIn\" component={SignInScreen} />\n        ) : (\n          <Stack.Screen name=\"Home\" component={HomeScreen} />\n        )}\n      </Stack.Navigator>\n    </AuthContext.Provider>\n  );\n}\n")),(0,o.kt)("h2",{id:"fill-in-other-components"},"Fill in other components"),(0,o.kt)("p",null,"We won't talk about how to implement the text inputs and buttons for the authentication screen, that is outside of the scope of navigation. We'll just fill in some placeholder content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'function SignInScreen() {\n  const [username, setUsername] = React.useState(\'\');\n  const [password, setPassword] = React.useState(\'\');\n\n  const { signIn } = React.useContext(AuthContext);\n\n  return (\n    <View>\n      <TextInput\n        placeholder="Username"\n        value={username}\n        onChangeText={setUsername}\n      />\n      <TextInput\n        placeholder="Password"\n        value={password}\n        onChangeText={setPassword}\n        secureTextEntry\n      />\n      <Button title="Sign in" onPress={() => signIn({ username, password })} />\n    </View>\n  );\n}\n')))}d.isMDXComponent=!0}}]);