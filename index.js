const axios = require('axios');
const fs = require('fs');

const elevenLabsAPI = async (apiKey, text, voice_id, file_name) => {
  try {
    var voice= "https://api.elevenlabs.io/v1/text-to-speech/"+voice_id +"/stream";
    const response = await axios({
      method: 'post',
      url: voice,
      data: { text },
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      responseType: 'stream'
    });
    response.data.pipe(fs.createWriteStream(file_name));
  } catch (error) {
    console.error(error);
  }
};

module.exports = elevenLabsAPI;
