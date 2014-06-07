module.exports = function(config) {
  config.set({
    port: 8080,
    runnerPort: 9100,
    colors: yes,
    logLevel: config.LOG_INFO,
    autoWatch: no,
    singleRun: yes,
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    plugins: [
      'karma-mocha',
      'karma-phantomjs-launcher'
    ]
  });
}
