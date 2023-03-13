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
      app: process.env.APP,

      desiredCapabilities: {
        platformName: process.env.PLATFORM,
        appPackage: process.env.PLATFORM == 'Android' ? process.env.PACKAGE : "",
        appActivity: process.env.PLATFORM == 'Android' ? process.env.ACTIVITY : "",
        deviceName: process.env.DEVICE,
        platformVersion: process.env.VERSION,
        AUTOMATION_NAME: process.env.PLATFORM  == 'Android' ? process.env.AUTOMATION : ""
      }

    }
  },
  include: {
    I: './steps_file.js'
  },

}