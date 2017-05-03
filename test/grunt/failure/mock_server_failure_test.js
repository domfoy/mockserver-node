(function () {

    'use strict';

    var testCase = require('nodeunit').testCase;
    var path = require('path');
    var exec = require('child_process').exec;
    var execOptions = {
        cwd: path.join(__dirname, '../..')
    };

    exports.mock_server_failure = {
        'mock server fails to start': testCase({
            'should fail start if configuration missing': function (test) {
                test.expect(1);
                exec('grunt start_mockserver:missing_ports', execOptions, function (error, stdout, stderr) {
                    test.equal(
                        stderr,
                        '\n' +
                        'mockserver-grunt - you must specify at least serverPort or proxyPort, for example:\n' +
                        'start_mockserver: {\n' +
                        '    options: {\n' +
                        '        serverPort: 1080,\n' +
                        '        proxyPort: 1090\n' +
                        '    }\n' +
                        '}\n\n'
                    );
                    test.done();
                });
            },
            'should fail stop if configuration missing': function (test) {
                test.expect(1);
                exec('grunt stop_mockserver:missing_ports', execOptions, function (error, stdout, stderr) {
                    test.equal(
                        stderr,
                        '\n' +
                        'mockserver-grunt - you must specify at least serverPort or proxyPort, for example:\n' +
                        'stop_mockserver: {\n' +
                        '    options: {\n' +
                        '        serverPort: 1080,\n' +
                        '        proxyPort: 1090\n' +
                        '    }\n' +
                        '}\n\n'
                    );
                    test.done();
                });
            }
        })
    };

})();