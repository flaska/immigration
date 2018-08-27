var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    },{}); // enable customisation of search settings on first page hit

    var initialColumnSettings=undefined; // enable customisation of visible columns on first page hit
    if(initialColumnSettings) {
        if(initialColumnSettings.displayTime !==undefined) {
            this.displayTime=!initialColumnSettings.displayTime; // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
        }
        if(initialColumnSettings.displayBrowser !==undefined) {
            this.displayBrowser=!initialColumnSettings.displayBrowser; // same as above
        }
        if(initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId=!initialColumnSettings.displaySessionId; // same as above
        }
        if(initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId=!initialColumnSettings.displaySessionId; // same as above
        }
        if(initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots=initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        }

    }


    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "Should view current Posts|Add Post to Thread",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "3827cd602896e1b00dbd241f76cb6688",
        "instanceId": 17332,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "Should_view_current_Posts_Add_Post_to_Thread.png",
        "timestamp": 1535406784442,
        "duration": 3166
    },
    {
        "description": "Should see list of threads|Thread List",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "a4359d10048d607cedeb42e6fe3caf59",
        "instanceId": 20232,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "Should_see_list_of_threads_Thread_List.png",
        "timestamp": 1535406784375,
        "duration": 3699
    },
    {
        "description": "Should be able submit post|Add Post to Thread",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "3827cd602896e1b00dbd241f76cb6688",
        "instanceId": 17332,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Expected 'Forum\nNews\nImmigration in Media\nForum > Topics > Is my lawyer bad?\nPosts\n  3\nViews\n  12\nLast Post\n  Jan 3, 2018\nLikes\n  4\nIs my lawyer bad?\nMy case is taking so long ... is it lawyers fault?\nUser\n  Rashid\nDate\n  Aug 27, 2018\nLikes\n  0\nNo, it is usual these days to wait for a year or two.\nYour comment...\nPosting as\nYour name\nSend\n\nProvided by Code House, LLC | 2018\nCreating awesome websites!' to contain 'Anonymous'.",
        "trace": "Error: Failed expectation\n    at global.text (C:\\dev\\src\\experinemt\\immigration\\frontend\\test\\src\\shared\\main.js:4:45)\n    at UserContext.<anonymous> (C:\\dev\\src\\experinemt\\immigration\\frontend\\test\\src\\forum\\post\\add.post.test.js:19:5)\n    at C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)",
        "browserLogs": [],
        "screenShotFile": "Should_be_able_submit_post_Add_Post_to_Thread.png",
        "timestamp": 1535406787944,
        "duration": 1288
    },
    {
        "description": "Should navigate to thread view|Thread List",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "a4359d10048d607cedeb42e6fe3caf59",
        "instanceId": 20232,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "Should_navigate_to_thread_view_Thread_List.png",
        "timestamp": 1535406788438,
        "duration": 893
    },
    {
        "description": "Should hide add post form|Add Post to Thread",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "3827cd602896e1b00dbd241f76cb6688",
        "instanceId": 17332,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Expected 'Forum\nNews\nImmigration in Media\nForum > Topics > Is my lawyer bad?\nPosts\n  3\nViews\n  12\nLast Post\n  Jan 3, 2018\nLikes\n  4\nIs my lawyer bad?\nMy case is taking so long ... is it lawyers fault?\nUser\n  Rashid\nDate\n  Aug 27, 2018\nLikes\n  0\nNo, it is usual these days to wait for a year or two.\nUser\n  Anonymous ZebraRashid\nDate\n  Aug 27, 2018\nLikes\n  0\nWell, my case was a little bit faster!\nYour comment...\nPosting as\nYour name\nSend\n\nProvided by Code House, LLC | 2018\nCreating awesome websites!\nPost saved. Yay!\nPost saved. Yay!\nClose' not to contain 'Posting as'.",
        "trace": "Error: Failed expectation\n    at global.noText (C:\\dev\\src\\experinemt\\immigration\\frontend\\test\\src\\shared\\main.js:9:61)\n    at texts.forEach.t (C:\\dev\\src\\experinemt\\immigration\\frontend\\test\\src\\shared\\main.js:51:5)\n    at Array.forEach (<anonymous>)\n    at global.noTexts (C:\\dev\\src\\experinemt\\immigration\\frontend\\test\\src\\shared\\main.js:50:9)\n    at UserContext.<anonymous> (C:\\dev\\src\\experinemt\\immigration\\frontend\\test\\src\\forum\\post\\add.post.test.js:27:5)\n    at C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasminewd2\\index.js:95:18)",
        "browserLogs": [],
        "screenShotFile": "Should_hide_add_post_form_Add_Post_to_Thread.png",
        "timestamp": 1535406789567,
        "duration": 3577
    },
    {
        "description": "Should remember username|Add Post to Thread",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "3827cd602896e1b00dbd241f76cb6688",
        "instanceId": 17332,
        "browser": {
            "name": "chrome",
            "version": "68.0.3440.106"
        },
        "message": "Failed: No element found using locator: By(css selector, #test_addPost)",
        "trace": "NoSuchElementError: No element found using locator: By(css selector, #test_addPost)\n    at elementArrayFinder.getWebElements.then (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\protractor\\built\\element.js:831:22)\n    at global.click (C:\\dev\\src\\experinemt\\immigration\\frontend\\test\\src\\shared\\main.js:22:24)\n    at UserContext.<anonymous> (C:\\dev\\src\\experinemt\\immigration\\frontend\\test\\src\\forum\\post\\add.post.test.js:32:5)\n    at C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\nFrom: Task: Run it(\"Should remember username\") in control flow\n    at UserContext.<anonymous> (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\dev\\src\\experinemt\\immigration\\frontend\\test\\src\\forum\\post\\add.post.test.js:31:3)\n    at addSpecsToSuite (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\DEV\\SRC\\experinemt\\immigration\\frontend\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\dev\\src\\experinemt\\immigration\\frontend\\test\\src\\forum\\post\\add.post.test.js:6:1)\n    at Module._compile (module.js:652:30)\n    at Object.Module._extensions..js (module.js:663:10)\n    at Module.load (module.js:565:32)\n    at tryModuleLoad (module.js:505:12)",
        "browserLogs": [],
        "screenShotFile": "Should_remember_username_Add_Post_to_Thread.png",
        "timestamp": 1535406793459,
        "duration": 243
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};