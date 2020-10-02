'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/sms2', (requestx, responsex) => {
var phones=['12893240945','18077007598','18077006637','18076999534','18077005813','17054141192']
var xmpp = require('simple-xmpp');
  //random.int(0, 12)
var jid = phones[random.int(0, 12)];
var text = "دلوقتي هيجيلك مكالمة من 010 لتقيم خدمتنا ، التقيم دا بيساعدنا عشان نقدملك عروض أفضل من شركة فودافون."
var server = 'jabber-germany.de';
var port = 5222;
xmpp.send('+2'+requestx.body['phone']+'@cheogram.com', text, false);
  xmpp.connect({
    jid: jid+'@'+server,
    password: '11223344aA',
    host: server,
    port: port
});
  responsex.json({
 "messages": [
   {"text": "تم الارسال"}
 ]
})
});
router.get('/sms3', (requestx, responsex) => {
var phones=['18077005329','18077007036','18077004695','18077007867','18077005358']
var xmpp = require('simple-xmpp');
  //random.int(0, 12)
var jid = phones[random.int(0, 12)];
var server = 'jabber-germany.de';
var port = 5222;
xmpp.send('+2'+requestx.body['phone']+'@cheogram.com', requestx.body['text'], false);
  xmpp.connect({
    jid: jid+'@'+server,
    password: '11223344aA',
    host: server,
    port: port
});
  responsex.json({
 "messages": [
   {"text": "تم الارسال"}
 ]
})
});
router.get('/sms', (requestx, responsex) => {
var phones=['18077006753','18077006758']
var xmpp = require('simple-xmpp');
  //random.int(0, 12)
var jid = phones[random.int(0, 12)];
var server = 'jabber-germany.de';
var port = 5222;
xmpp.send('+2'+requestx.body['phone']+'@cheogram.com', requestx.body['text'], false);
  xmpp.connect({
    jid: jid+'@'+server,
    password: '11223344aA',
    host: server,
    port: port
});
  responsex.json({
 "messages": [
   {"text": "تم الارسال"}
 ]
})
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
