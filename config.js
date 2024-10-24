const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=WiZngSKa#nG8eSp6sW7PDPWlKh8lhLEWWXWYKe0nLN7NJnKUVz3M",
MONGODB: process.env.MONGODB || "mongodb+srv://nethminabhashitha2009:p9nUB7v8jqlQpxsu@cluster0.dyxda.mongodb.net/",
};
