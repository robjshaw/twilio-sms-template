exports.handler = function(context, event, callback) {
    
    Mustache = require('Mustache');
    const twilioClient = context.getTwilioClient();

    console.log(event);
    
    switch(event.template) {
        
        case 'template-1':

            var messageString = 'Hi {{firstname}}, there is a current incident open {{incidentID}}, please contact the {{department}} team.';
            
            messageString = Mustache.render(messageString, event);

        break;

        default:
        
        var messageString = 'no message sent';

    }

    if (messageString != 'no message sent'){
        twilioClient.messages.create(
            {
                from: process.env.FROM,
                to: event.phonenumber,
                body: messageString
            },
            function(err) {
            if (err) {
                console.error(err);
                return;
            }

                callback(null, { success: true, message: messageString });

            }
        );
    }else{
        callback(null, { success: false, message: messageString});
    }

}