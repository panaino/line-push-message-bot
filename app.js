'use strict';

const line = require('@line/bot-sdk');

const client = new line.Client({
    channelAccessToken: '5sTzC1fqEI49/+fb2+K5Ujon/Wop1BT68I+6XzFfcioiZtw6jXiRbz9oNq+eIaf2ZrJmdWXKUpH9ADKzWNhk0hgsWoiTU1eKJIj/mOZg2cig//5mzNBPN9Srw+pX7R+OOX2RuyPM+4oqFaIqxrzUzAdB04t89/1O/w1cDnyilFU='
});

const messages = [{
    type: 'text',
    text: '勤務開始時刻です。\r\n打刻して下さい！'
}];

const main = async () => {

    client.pushMessage('Ufaab68052fa90f07391493d83a412e67',messages)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })

}

main();
