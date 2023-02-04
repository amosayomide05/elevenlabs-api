const axios = require('axios');
const fs = require('fs');

const textToSpeech = async (text, apiKey, fileName, id) => {
  if (!text) {
    throw new Error('Text is required');
  }

  if (!apiKey) {
    throw new Error('API key is required');
  }

  if (!fileName) {
    throw new Error('File name is required');
  }

  if (!id) {
    throw new Error('Id is required');
  }

  try {
    const response = await axios({
      method: 'post',
      url: `https://api.elevenlabs.io/v1/text-to-speech/${id}/stream`,
      data: { text },
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      responseType: 'stream'
    });
  
    response.data.pipe(fs.createWriteStream(`${fileName}.mp3`));
  } catch (error) {
    console.error(error);
  }
};

module.exports = textToSpeech;
