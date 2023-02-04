const axios = require('axios');
const fs = require('fs');

const textToSpeech = async (textt, apiKey, id, fileName) => {
  

  try {
    const response = await axios({
      method: 'post',
      url: `https://api.elevenlabs.io/v1/text-to-speech/${id}/stream`,
      data: { text: textt},
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      responseType: 'stream'
    });
  
    response.data.pipe(fs.createWriteStream(`${fileName}`));
  } catch (error) {
    console.error(error);
  }
};

module.exports = textToSpeech;
