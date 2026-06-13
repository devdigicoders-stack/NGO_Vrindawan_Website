const fs = require('fs');
const html = fs.readFileSync('C:/Users/vivekvkraj/.gemini/antigravity/brain/e17e6561-4e1d-43a1-893c-a22058a65088/.system_generated/steps/89/content.md', 'utf8');
let match = html.match(/"browseId":"(UC[a-zA-Z0-9_-]+)"/);
if(match) console.log('CHANNEL_ID=' + match[1]);
else {
    match = html.match(/(UC[a-zA-Z0-9_-]{22})/);
    if(match) console.log('CHANNEL_ID=' + match[1]);
    else console.log('NOT FOUND');
}
