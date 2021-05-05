var express = require('express');
var path = require('path');
require('dotenv').config({ silent: true });
var app = express();
const IamAuthenticator = require('ibm-watson/auth').IamAuthenticator;
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');

const ibmClient = new TextToSpeechV1({
    authenticator: new IamAuthenticator({ apikey: process.env.TEXT_TO_SPEECH_API_KEY }),
    version: '2020-04-01'
});

app.use(express.static(path.join(__dirname, 'public')));

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.get('/api/voces', async (_, res, next) => {
    try {
      if (ibmClient) {
        const { result } = await ibmClient.listVoices();
        return res.json(result);
      } else {
        // Return Allison for testing and user still gets creds pop-up.
        return res.json(
          { voices: [
            { name: 'es-ES_EnriqueV3Voice',
              description: 'Enrique: American English female voice. Dnn technology.',
            }]
          });
      }
    } catch (err) {
      console.error(err);
      if (!client) {
        err.statusCode = 401;
        err.description = 'no se pueden encontrar credenciales validas para el servicio de IBM.';
        err.title = 'Credenciales Invalidad';
      }
      next(err);
    }
  });

app.get('/api/sintetizar', async (req, res, next) => {
    try {
      const { result } = await ibmClient.synthesize(req.query);
      result.pipe(res);
    } catch (err) {
      console.error(err);
      if (!ibmClient) {
        err.statusCode = 401;
        err.description = 'no se pueden encontrar credenciales validas para el servicio de IBM.';
        err.title = 'Credenciales Invalidad';
      }
      next(err);
    }
});

require('./error-handler')(app);

module.exports = app;