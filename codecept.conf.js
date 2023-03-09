const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const webdriverio = require('webdriverio');

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  
  name: 'nodeMobile',
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      
      
      app: '///Users/robsonfounar/Documents/apps/app-vidacap-qa.apk',
      desiredCapabilities: {
        platformName: 'Android',
        appPackage: "com.ideamaker.vidacap.debug",
        appActivity: "com.whitelabelcap.SplashActivity",
        deviceName: "Pixel 2",
        platformVersion: "9",
        AUTOMATION_NAME: "UiAutomator2"
      }

    }
  },
  include: {
    I: './steps_file.js'
  },
 
}