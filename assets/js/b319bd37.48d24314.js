"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2358],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),h=a,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||o;return t?i.createElement(m,r(r({ref:n},d),{},{components:t})):i.createElement(m,r({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31822:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var i=t(87462),a=t(63366),o=(t(67294),t(3905)),r=["components"],l={id:"deep-linking",title:"Deep linking",sidebar_label:"Deep linking"},p=void 0,s={unversionedId:"deep-linking",id:"version-5.x/deep-linking",isDocsHomePage:!1,title:"Deep linking",description:"In this guide, we will configure our app to handle deep links on various platforms. To handle incoming links, we need to handle 2 scenarios:",source:"@site/versioned_docs/version-5.x/deep-linking.md",sourceDirName:".",slug:"/deep-linking",permalink:"/docs/5.x/deep-linking",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/deep-linking.md",tags:[],version:"5.x",frontMatter:{id:"deep-linking",title:"Deep linking",sidebar_label:"Deep linking"},sidebar:"version-5.x/docs",previous:{title:"Navigating without the navigation prop",permalink:"/docs/5.x/navigating-without-navigation-prop"},next:{title:"Configuring links",permalink:"/docs/5.x/configuring-links"}},d=[{value:"Set up with Expo projects",id:"set-up-with-expo-projects",children:[{value:"URI Prefix",id:"uri-prefix",children:[]},{value:"Universal Links",id:"universal-links",children:[]},{value:"Multiple subdomains",id:"multiple-subdomains",children:[]},{value:"Test deep linking on iOS",id:"test-deep-linking-on-ios",children:[]},{value:"Test deep linking on Android",id:"test-deep-linking-on-android",children:[]}]},{value:"Set up with bare React Native projects",id:"set-up-with-bare-react-native-projects",children:[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Hybrid React Native and native iOS Applications (skip for React-Native-only projects)",id:"hybrid-react-native-and-native-ios-applications-skip-for-react-native-only-projects",children:[]},{value:"Third-party integrations",id:"third-party-integrations",children:[]}],c={toc:d};function u(e){var n=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide, we will configure our app to handle deep links on various platforms. To handle incoming links, we need to handle 2 scenarios:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the app wasn't previously open, we need to set the initial state based on the link"),(0,o.kt)("li",{parentName:"ol"},"If the app was already open, we need to update the state to reflect the incoming link")),(0,o.kt)("p",null,"React Native provides a ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/linking"},(0,o.kt)("inlineCode",{parentName:"a"},"Linking"))," to get notified of incoming links. React Navigation can integrate with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking")," module to automatically handle deep links. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/configuring-links"},"configuring links")," to see more details on how to configure links in React Navigation."),(0,o.kt)("p",null,"Below, we'll go through required configurations for each platform so that the deep link integration works."),(0,o.kt)("h2",{id:"set-up-with-expo-projects"},"Set up with Expo projects"),(0,o.kt)("p",null,"First, you will want to specify a URL scheme for your app. This corresponds to the string before ",(0,o.kt)("inlineCode",{parentName:"p"},"://")," in a URL, so if your scheme is ",(0,o.kt)("inlineCode",{parentName:"p"},"mychat")," then a link to your app would be ",(0,o.kt)("inlineCode",{parentName:"p"},"mychat://"),". The scheme only applies to standalone apps and you need to re-build the standalone app for the change to take effect. In the Expo client app you can deep link using ",(0,o.kt)("inlineCode",{parentName:"p"},"exp://ADDRESS:PORT")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"ADDRESS")," is often ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PORT")," is often ",(0,o.kt)("inlineCode",{parentName:"p"},"19000")," - the URL is printed when you run ",(0,o.kt)("inlineCode",{parentName:"p"},"expo start"),". If you want to test with your custom scheme you will need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"expo build:ios -t simulator")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"expo build:android")," and install the resulting binaries in your emulators. You can register for a scheme in your ",(0,o.kt)("inlineCode",{parentName:"p"},"app.json")," by adding a string under the scheme key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "scheme": "mychat"\n  }\n}\n')),(0,o.kt)("h3",{id:"uri-prefix"},"URI Prefix"),(0,o.kt)("p",null,"Next, let's configure our navigation container to extract the path from the app's incoming URI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Install this package with `expo install expo-linking`\nimport * as Linking from 'expo-linking';\n\n// Linking.createURL is available as of expo@40.0.1 and expo-linking@2.0.1. If\n// you are using older versions, you can upgrade or use Linking.makeUrl instead,\n// but note that your deep links in standalone apps will be in the format\n// scheme:/// rather than scheme:// if you use makeUrl.\nconst prefix = Linking.createURL('/');\n\nfunction App() {\n  const linking = {\n    prefixes: [prefix],\n  };\n\n  return (\n    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n")),(0,o.kt)("p",null,"The reason that is necessary to use ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking.createURL")," is that the scheme will differ depending on whether you're in the client app or in a standalone app."),(0,o.kt)("h3",{id:"universal-links"},"Universal Links"),(0,o.kt)("p",null,"If you are using universal links, you need to add your domain to the prefixes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function App() {\n  const linking = {\n    prefixes: ['https://app.example.com'],\n  };\n\n  return (\n    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>\n      {/* content */}\n    </NavigationContainer>\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If you are using Expo SDK version 37 or lower, you need to add your domain with both the ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"exps")," scheme, to work around ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expo/expo/issues/6609"},"this bug in Expo"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"   const linking = {\n-    prefixes: ['https://app.example.com'],\n+    prefixes: ['https://app.example.com', 'exps://app.example.com'],\n   };\n")),(0,o.kt)("h3",{id:"multiple-subdomains"},"Multiple subdomains"),(0,o.kt)("p",null,"To match all subdomains of an associated domain, you can specify a wildcard by prefixing ",(0,o.kt)("inlineCode",{parentName:"p"},"*.")," before the beginning of a specific domain. Note that an entry for ",(0,o.kt)("inlineCode",{parentName:"p"},"*.example.com")," does not match ",(0,o.kt)("inlineCode",{parentName:"p"},"example.com")," because of the period after the asterisk. To enable matching for both ",(0,o.kt)("inlineCode",{parentName:"p"},"*.example.com")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"example.com"),", you need to provide a separate prefix entry for each."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const linking = {\n  prefixes: ['https://*.example.com', 'https://example.com'],\n};\n")),(0,o.kt)("h3",{id:"test-deep-linking-on-ios"},"Test deep linking on iOS"),(0,o.kt)("p",null,"To test the URI on the simulator in the Expo client app, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx uri-scheme open [ put your uri prefix in here] --ios\n\n# for example\n\nnpx uri-scheme open exp://127.0.0.1:19000/--/chat/jan --ios\n")),(0,o.kt)("p",null,"or use ",(0,o.kt)("inlineCode",{parentName:"p"},"xcrun")," directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"xcrun simctl openurl booted [ put your URI prefix in here ]\n\n# for example\n\nxcrun simctl openurl booted exp://127.0.0.1:19000/--/chat/jane\n")),(0,o.kt)("h3",{id:"test-deep-linking-on-android"},"Test deep linking on Android"),(0,o.kt)("p",null,"To test the intent handling in the Expo client app on Android, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'npx uri-scheme open "[ put your URI prefix in here ]" --/chat/jan --android\n\n# for example\n\nnpx uri-scheme open exp://127.0.0.1:19000/--/chat/jan --android\n')),(0,o.kt)("p",null,"or use ",(0,o.kt)("inlineCode",{parentName:"p"},"adb")," directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'adb shell am start -W -a android.intent.action.VIEW -d "[ put your URI prefix in here ]" host.exp.exponent\n\n# for example\n\nadb shell am start -W -a android.intent.action.VIEW -d "exp://127.0.0.1:19000/--/chat/jane" host.exp.exponent\n')),(0,o.kt)("p",null,"Change ",(0,o.kt)("inlineCode",{parentName:"p"},"host.exp.exponent")," to your app package name if you are testing on a standalone app."),(0,o.kt)("p",null,"Read the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/guides/linking.html"},"Expo linking guide")," for more information about how to configure linking in projects built with Expo."),(0,o.kt)("h2",{id:"set-up-with-bare-react-native-projects"},"Set up with bare React Native projects"),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("p",null,"Let's configure the native iOS app to open based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"mychat://")," URI scheme."),(0,o.kt)("p",null,"You'll need to link ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTLinking")," to your project by following the steps described here. To be able to listen to incoming app links, you'll need to add the following lines to ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleApp/ios/SimpleApp/AppDelegate.m"),"."),(0,o.kt)("p",null,"If you're targeting iOS 9.x or newer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"// Add the header at the top of the file:\n#import <React/RCTLinkingManager.h>\n\n// Add this above `@end`:\n- (BOOL)application:(UIApplication *)application\n   openURL:(NSURL *)url\n   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options\n{\n  return [RCTLinkingManager application:application openURL:url options:options];\n}\n")),(0,o.kt)("p",null,"If you're targeting iOS 8.x or older, you can use the following code instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"// Add the header at the top of the file:\n#import <React/RCTLinkingManager.h>\n\n// Add this above `@end`:\n- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url\n  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation\n{\n  return [RCTLinkingManager application:application openURL:url\n                      sourceApplication:sourceApplication annotation:annotation];\n}\n")),(0,o.kt)("p",null,"If your app is using Universal Links, you'll need to add the following code as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"// Add this above `@end`:\n- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity\n restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler\n{\n return [RCTLinkingManager application:application\n                  continueUserActivity:userActivity\n                    restorationHandler:restorationHandler];\n}\n")),(0,o.kt)("p",null,"Now you need to add the scheme to your project configuration."),(0,o.kt)("p",null,"The easiest way to do this is with the ",(0,o.kt)("inlineCode",{parentName:"p"},"uri-scheme")," package: ",(0,o.kt)("inlineCode",{parentName:"p"},"npx uri-scheme add mychat --ios"),"."),(0,o.kt)("p",null,"If you want to do it manually, open the project at ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleApp/ios/SimpleApp.xcodeproj"),' in Xcode. Select the project in sidebar and navigate to the info tab. Scroll down to "URL Types" and add one. In the new URL type, set the identifier and the URL scheme to your desired URL scheme.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Xcode project info URL types with mychat added",src:t(87835).Z})),(0,o.kt)("p",null,"Now you can press play in Xcode, or re-build on the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native run-ios\n")),(0,o.kt)("p",null,"To test the URI on the simulator, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx uri-scheme open mychat://chat/jane --ios\n")),(0,o.kt)("p",null,"or use ",(0,o.kt)("inlineCode",{parentName:"p"},"xcrun")," directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"xcrun simctl openurl booted mychat://chat/jane\n")),(0,o.kt)("p",null,"To test the URI on a real device, open Safari and type ",(0,o.kt)("inlineCode",{parentName:"p"},"mychat://chat/jane"),"."),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("p",null,"To configure the external linking in Android, you can create a new intent in the manifest."),(0,o.kt)("p",null,"The easiest way to do this is with the ",(0,o.kt)("inlineCode",{parentName:"p"},"uri-scheme")," package: ",(0,o.kt)("inlineCode",{parentName:"p"},"npx uri-scheme add mychat --android"),"."),(0,o.kt)("p",null,"If you want to add it manually, open up ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleApp/android/app/src/main/AndroidManifest.xml"),", and make the following adjustments:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"launchMode")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"MainActivity")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"singleTask")," in order to receive intent on existing ",(0,o.kt)("inlineCode",{parentName:"li"},"MainActivity")," (this is the default on all new projects, so you may not need to actually change anything!). It is useful if you want to perform navigation using deep link you have been registered - ",(0,o.kt)("a",{parentName:"li",href:"http://developer.android.com/training/app-indexing/deep-linking.html#adding-filters"},"details")),(0,o.kt)("li",{parentName:"ol"},"Add the new ",(0,o.kt)("inlineCode",{parentName:"li"},"intent-filter")," inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"MainActivity")," entry with a ",(0,o.kt)("inlineCode",{parentName:"li"},"VIEW")," type action:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<activity\n    android:name=".MainActivity"\n    android:launchMode="singleTask">\n    <intent-filter>\n        <action android:name="android.intent.action.MAIN" />\n        <category android:name="android.intent.category.LAUNCHER" />\n    </intent-filter>\n    <intent-filter>\n        <action android:name="android.intent.action.VIEW" />\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n        <data android:scheme="mychat" />\n    </intent-filter>\n</activity>\n')),(0,o.kt)("p",null,"Now, re-install the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"react-native run-android\n")),(0,o.kt)("p",null,"To test the intent handling in Android, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx uri-scheme open mychat://chat/jane --android\n")),(0,o.kt)("p",null,"or use ",(0,o.kt)("inlineCode",{parentName:"p"},"adb")," directly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'adb shell am start -W -a android.intent.action.VIEW -d "mychat://chat/jane" com.simpleapp\n')),(0,o.kt)("h2",{id:"hybrid-react-native-and-native-ios-applications-skip-for-react-native-only-projects"},"Hybrid React Native and native iOS Applications (skip for React-Native-only projects)"),(0,o.kt)("p",null,"If you're using React Navigation within a hybrid app - an iOS app that has both Swift/ObjC and React Native parts - you may be missing the ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTLinkingIOS")," subspec in your Podfile, which is installed by default in new RN projects. To add this, ensure your Podfile looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pod"}," pod 'React', :path => '../node_modules/react-native', :subspecs => [\n    . . . // other subspecs\n    'RCTLinkingIOS',\n    . . .\n  ]\n")),(0,o.kt)("h2",{id:"third-party-integrations"},"Third-party integrations"),(0,o.kt)("p",null,"React Native's ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking")," isn't the only way to handle deep linking. You might also want to integrate other services such as ",(0,o.kt)("a",{parentName:"p",href:"https://help.branch.io/developers-hub/docs/react-native"},"Branch")," which provide their own API for getting notified of incoming links, or you also might want to handle links from push notifications using ",(0,o.kt)("a",{parentName:"p",href:"https://rnfirebase.io/messaging/notifications"},"Firebase")," etc."),(0,o.kt)("p",null,"To achieve this, you'd need to override how React Navigation subscribes to incoming links. To do so, you can provide your own ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-container#linkinggetinitialurl"},(0,o.kt)("inlineCode",{parentName:"a"},"getInitialURL"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-container#linkingsubscribe"},(0,o.kt)("inlineCode",{parentName:"a"},"subscribe"))," functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const linking = {\n  prefixes: ['myapp://', 'https://myapp.com'],\n\n  // Custom function to get the URL which was used to open the app\n  async getInitialURL() {\n    // First, you may want to do the default deep link handling\n    // Check if app was opened from a deep link\n    const url = await Linking.getInitialURL();\n\n    if (url != null) {\n      return url;\n    }\n\n    // Next, you would need to get the initial URL from your third-party integration\n    // It depends on the third-party SDK you use\n    // For example, to get to get the initial URL for branch.io:\n    const params = branch.getFirstReferringParams();\n\n    return params?.$canonical_url;\n  },\n\n  // Custom function to subscribe to incoming links\n  subscribe(listener) {\n    // First, you may want to do the default deep link handling\n    const onReceiveURL = ({ url }: { url: string }) => listener(url);\n\n    // Listen to incoming links from deep linking\n    Linking.addEventListener('url', onReceiveURL);\n\n    // Next, you would need to subscribe to incoming links from your third-party integration\n    // For example, to get to subscribe to incoming links from branch.io:\n    branch.subscribe(({ error, params, uri }) => {\n      if (error) {\n        console.error('Error from Branch: ' + error);\n        return;\n      }\n\n      if (params['+non_branch_link']) {\n        const nonBranchUrl = params['+non_branch_link'];\n        // Route non-Branch URL if appropriate.\n        return;\n      }\n\n      if (!params['+clicked_branch_link']) {\n        // Indicates initialization success and some other conditions.\n        // No link was opened.\n        return;\n      }\n\n      // A Branch link was opened\n      const url = params.$canonical_url;\n\n      listener(url);\n    });\n    );\n\n    return () => {\n      // Clean up the event listeners\n      Linking.removeEventListener('url', onReceiveURL);\n      branch.unsubscribe();\n    };\n  },\n\n  config: {\n    // Deep link configuration\n  }\n};\n")),(0,o.kt)("p",null,"Similar to the above example, you can integrate any API that provides a way to get the initial URL and to subscribe to new incoming URLs using the ",(0,o.kt)("inlineCode",{parentName:"p"},"getInitialURL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," options."))}u.isMDXComponent=!0},87835:function(e,n,t){n.Z=t.p+"assets/images/xcode-linking-9a32c91fae982fab28dc33e7f951e8b3.png"}}]);