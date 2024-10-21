const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=umJVFaQR#5OFcERsScmtcJyB4bmiI-lQpw-v2dPL5pDVeqsZ5qow",
MONGODB: process.env.MONGODB || "mongodb+srv://nethminabhashitha2009:p9nUB7v8jqlQpxsu@cluster0.dyxda.mongodb.net/",
};
