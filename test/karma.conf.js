module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            "public_html/js/libs/angular.min.js",
            "public_html/js/libs/angular-mocks.js",
            "public_html/js/libs/angular-route.min.js",
            "public_html/js/libs/angular-resource.min.js",  
            "public_html/js/libs/angular-cookies.min.js", 
            "public_html/js/*.js",
            "test/**/*Spec.js"
        ],
        exclude: [
        ],
        autoWatch: true,
        frameworks: [
            "jasmine"
        ],
        browsers: [
            "Chrome",
            "Firefox"
        ],
        plugins: [
            "karma-junit-reporter",
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine"
        ]
    });
};