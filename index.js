console.log('Loading function');

const https = require('https');
const url = require('url');

const slack = url.parse('https://hooks.slack.com/...');
      slack.method = 'POST';
      slack.headers = {'Content-Type': 'application/json'};


exports.handler = function(event, context) {
    var messageText = event.Records[0].Sns.Message;
        
    if (messageText) {
        var message = JSON.parse(messageText);
        var slack_output = '*' + message.AlarmName + ' ('
            + message.Region + ')*: ' + message.NewStateReason;

        var req = https.request(slack, function (res) {
            if (res.statusCode === 200) {
                context.succeed('Slack Connection Successful');
            } else {
                context.fail('Status Code: ' + res.statusCode);
            }
        });
        
        req.on('error', function(e) {
            console.log('Problem with request: ' + e.message);
            context.fail(e.message);
        });
        
        req.write(JSON.stringify({text: slack_output}));
        
        req.end();  
    }
};
