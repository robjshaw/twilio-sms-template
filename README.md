# twilio-sms-template

Simple example of putting templating in front of Twilio's SMS API.

!!! Currently missing an auth layer.

Example cURL command (can copy into postman)

```
curl --location --request POST 'http://localhost:3000/send' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'template=template-1' \
--data-urlencode 'firstname=Rob' \
--data-urlencode 'department=Operations' \
--data-urlencode 'incidentID=INC-002' \
--data-urlencode 'phonenumber=+61422xxxxxx'
```

## Configure .ENV
 
 * ACCOUNT_SID= Your primary Twilio account identifier - find this in the [Console](https://www.twilio.com/console)
 * AUTH_TOKEN= Used to authenticate - just like the above, you'll [find this here](https://www.twilio.com/console)
 
## Run
 
To Run Functions Locally

```
npm install

npm start
```

To Deploy Functions to your account

```
npm run deploy or twilio serverless:deploy
```
