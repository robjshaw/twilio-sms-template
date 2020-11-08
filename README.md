# twilio-sms-template

Simple example of putting templating in front of Twilio's SMS API.

!!! Currently missing an auth layer.

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
