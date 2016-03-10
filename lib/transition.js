"use strict"

class transition {

    static fade(link) {
        var opts = {
            "duration": 250, // in milliseconds (ms), default 400
            "iosdelay": 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
            "androiddelay": 50,
            'href': link
        };
        cordova.exec(function () { }, function () { }, "NativePageTransitions", "fade", [opts]);
    };

    static left(link) {
        var opts = {
            "direction": "right", // 'left|right|up|down', default 'left' (which is like 'next')
            "duration": 400, // in milliseconds (ms), default 400
            "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
            "androiddelay": 50, // same as above but for Android, default 70
            "fixedPixelsTop": 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
            "fixedPixelsBottom": 0,  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
            'href': link
        };
        cordova.exec(function () { }, function () { }, "NativePageTransitions", "slide", [opts]);
    }
    
    static right(link) {
        var opts = {
            "direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
            "duration": 400, // in milliseconds (ms), default 400
            "slowdownfactor": 3, // overlap views (higher number is more) or no overlap (1), default 4
            "androiddelay": 50, // same as above but for Android, default 70
            "fixedPixelsTop": 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
            "fixedPixelsBottom": 0,  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
            'href': link
        };
        cordova.exec(function () { }, function () { }, "NativePageTransitions", "slide", [opts]);
    }
}