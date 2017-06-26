# CRF-React

## Prerequisite ##

* Install Yarn
  * Mac: https://yarnpkg.com/lang/en/docs/install/#mac-tab
  * Linux: https://yarnpkg.com/lang/en/docs/install/#linux-tab

* Install The React Native CLI
  * yarn global add react-native-cli

* Java Development Kit(JDK)
  * React Native requires a recent version of the Java SE Development Kit (JDK). Download and install JDK 8 or newer.

### Prerequisite for Android Development ###

* Android development environment
  * Install Android Studio
    * Download from: https://developer.android.com/studio/index.html
    * For more details: https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment

  * Install the Android SDK
    * Follow: https://facebook.github.io/react-native/docs/getting-started.html#2-install-the-android-sdk

  * Configure the ANDROID_HOME environment variable
    * Follow: https://facebook.github.io/react-native/docs/getting-started.html#3-configure-the-android-home-environment-variable

* Preparing the Android device : https://facebook.github.io/react-native/docs/running-on-device.html#running-your-app-on-android-devices
  ##### You will need an Android device to run your React Native Android app. This can be either a physical Android device, or more commonly, you can use an Android Virtual Device which allows you to emulate an Android device on your computer. Either way, you will need to prepare the device to run Android apps for development.#####

  * Using a physical device
    * Need to enable the "Developer options" menu by going to Settings → About phone and then tapping the Build number row at the bottom seven times. You can then go back to Settings → Developer options to enable "USB debugging".

    * install Android Debug Bridge(ADB)
      * Linux: sudo apt-get install android-tools-adb android-tools-fastboot
      * Mac: Need to find out.

  * Using a virtual device
    * You can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio.
    * If you have just installed Android Studio.
      * Follow:
        https://facebook.github.io/react-native/docs/getting-started.html#using-a-virtual-device  and https://developer.android.com/studio/run/managing-avds.html#createavd

* To run application follow steps:
  * adb start-server
  * adb reverse tcp:8081 tcp:8081
  * adb devices
  * For Android Build: react-native run-android
  * Install APK on physical device only: adb install android/app/build/outputs/apk/app-debug.apk
  * Start the server: react-native start

### Prerequisite for iOS Development ###
  ### I DID NOT TEST FOLLOWING STEPS ###
  * Install Xcode: https://facebook.github.io/react-native/docs/getting-started.html#xcode
  * To run application follow steps:
    * For IOS Build: react-native run-ios
    * Start the server: react-native start

### Connect Mobile APP with API.
  * Start the API server with bind IP Address.
  * Change the baseURL: 'IP_ADDRESS_OF_API_SERVER:PORT_NUMBER' at file 'Application folder then src/axios.js'
  * Restart the Mobile APP server
