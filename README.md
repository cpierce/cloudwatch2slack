# cloudwatch2slack
Cloudwatch to Slack Lambda Script

## Installation
Create a lambda script with the index.js node file.  After that you'll want to create an SNS topic and link it to the Lambda Script.  From there it's simply a matter of configuring the webhook.  When loading sample data to test with be sure to note that cloudwatch data is a little unique and you should use the sample below.

## Sample Data for Testing
```
{
    "Records": [
        {
            "EventSource": "aws:sns",
            "EventVersion": "1.0",
            "EventSubscriptionArn": "arn:aws:sns:us-east-1:734791344013:cloudwatch_slack:d37bf8eb46c-f03b-42dd-afde-1c837bf8eb46",
            "Sns": {
                "Type": "Notification",
                "MessageId": "0cd7b8e61a-00e2-5d78-8e7a96de0d4248",
                "TopicArn": "arn:aws:sns:us-east-1:734791344013:cloudwatch_slack",
                "Subject": "ALARM: \"Server CPU\" in US - N. Virginia",
                "Message": "{\"AlarmName\":\"Orilla CPU\",\"AlarmDescription\":\"Created from EC2 Console\",\"AWSAccountId\":\"379734135501\",\"NewStateValue\":\"ALARM\",\"NewStateReason\":\"Threshold Crossed: 1 datapoint (96.11857142857142856) was greater than or equal to the threshold (95.0).\",\"StateChangeTime\":\"2015-10-20T03:32:20.276+0000\",\"Region\":\"US - N. Virginia\",\"OldStateValue\":\"OK\",\"Trigger\":{\"MetricName\":\"CPUUtilization\",\"Namespace\":\"AWS/EC2\",\"Statistic\":\"AVERAGE\",\"Unit\":null,\"Dimensions\":[{\"name\":\"InstanceId\",\"value\":\"i-f5f9220d\"}],\"Period\":900,\"EvaluationPeriods\":1,\"ComparisonOperator\":\"GreaterThanOrEqualToThreshold\",\"Threshold\":95.0}}",
                "Timestamp": "2015-10-20T03:32:20.376Z",
                "SignatureVersion": "1",
                "Signature": "jKK2D0SevcPxHbWr0n/7Fb5JZxgRz/scrdA2Q1LJ3fSJX6zRZ/hwjsNrTeMT7TB8wkfueoVqG6pjTe8XhZVXcuC+p3wBl9uuwCFDuY5iot5xCsraJ6oCSiz5Y80ITrHepwhTSx/Dy669J7+8bmelWxHpn8T0tudsKQtW+kFFFGugGcNuNwoLjZT0m5MRCINLElrr/kWWY+r4SutaFUL/pkCRiJ6x5pjd7qPCdlswnh84eoYIVLkbYvQrvN+GYsfZ4gV+afV2dFSS4MCfO5BYHgn8nSk6xxneoYNw+ZdHdvX3dJrM2PQS/KVVVgwMAd4K73RO4Dmse0YQPn2uy0UUOA==",
                "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-bb7590147a56243480dd426d95ee93ee.pem",
                "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:734791344013:cloudwatch_slack:d37bf8eb46c-f03b-42dd-afde-1c837bf8eb46",
                "MessageAttributes": {}
            }
        }
    ]
}
```
