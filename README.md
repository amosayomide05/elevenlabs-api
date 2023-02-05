# Eleven Labs API

A library to convert text to speech using the Eleven Labs API (This is an unofficial JS API)

## Installation

You can install this library using npm:

```js 
npm install elevenlabs-api
```


## Usage

Here's an example of how you can use this library:

```javascript
const elevenLabsAPI = require('elevenlabs-api');

var text = 'This is a test';
var apiKey = 'your api key here';
var voice_id = 'your voice id here';
var filename ° 'audio.mp3';

try {
  textToSpeech(apiKey, text, voice_id, filename);
  console.log(`Success, Audio saved as: ${filename}`);
 } catch (error) {
  console.error(`An error occurred while converting text to speech: ${error}`);
}

//If you need stream
const fs = require('fs');

const stream = fs.createReadStream(filename);

stream.pipe(process.stdout);

```

## Requirements
1. An API key from Eleven Labs. You can sign up for an API key at https://elevenlabs.io/.
2. A voice Id (Check Below)
3. A text string to convert to speech.
4. A file name for the output audio file

## VOICE ID LIST
```js
{
  "voices": [
    {
      "voice_id": "21m00Tcm4TlvDq8ikWAM",
      "name": "Rachel (american, mellow)",
      "samples": [],
      "category": "conversational",
      "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/21m00Tcm4TlvDq8ikWAM/dff5d82d-d16d-45b9-ae73-be2ad8850855.mp3",
      "available_for_tiers": [],
      "settings": null
    },
    {
      "voice_id": "AZnzlk1XvdvUeBnXmlld",
      "name": "Domi (american, engaged)",
      "samples": [],
      "category": "dynamic",
      "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/AZnzlk1XvdvUeBnXmlld/53bd2f5f-bb59-4146-9922-245b2a466c80.mp3",
      "available_for_tiers": [],
      "settings": null
    },
    {
      "voice_id": "EXAVITQu4vr4xnSDxMaL",
      "name": "Bella (American, soft)",
      "samples": [],
      "category": "conversational",
      "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/EXAVITQu4vr4xnSDxMaL/53bd2f5f-bb59-4146-8822-245b2a466c80.mp3",
      "available_for_tiers": [],
      "settings": null
    },
    {
      "voice_id": "ErXwobaYiN019PkySvjV",
      "name": "Antoni (American, modulated)",
      "samples": [],
      "category": "conversational",
      "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/ErXwobaYiN019PkySvjV/53bd2f5f-bb59-1111-8822-225b2a466c80.mp3",
      "available_for_tiers": [],
      "settings": null
    },
    {
      "voice_id": "MF3mGyEYCl7XYWbV9V6O",
      "name": "Elli (american, clear)",
      "samples": [],
      "category": "dynamic",
      "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/MF3mGyEYCl7XYWbV9V6O/bea2dc16-9abf-4162-b011-66531458e022.mp3",
      "available_for_tiers": [],
      "settings": null
    },
    {
      "voice_id": "TxGEqnHWrfWFTfGW9XjX",
      "name": "Josh (american, silvery)",
      "samples": [],
      "category": "conversational",
      "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/TxGEqnHWrfWFTfGW9XjX/bdc4303c-a20d-4cec-97eb-dca625044eac.mp3",
      "available_for_tiers": [],
      "settings": null
    },
    {
      "voice_id": "VR6AewLTigWG4xSOukaG",
      "name": "Arnold (american, nasal)",
      "samples": [],
      "category": "conversational",
      "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/VR6AewLTigWG4xSOukaG/2c4395e7-91b1-44cd-8f0f-e4aebd292461.mp3",
      "available_for_tiers": [],
      "settings": null
    },
    {
      "voice_id": "pNInz6obpgDQGcFmaJgB",
      "name": "Adam (American, clear)",
      "samples": [],
      "category": "conversational",
      "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/pNInz6obpgDQGcFmaJgB/53bd2f5f-bb59-1111-8822-245b2a466c80.mp3",
      "available_for_tiers": [],
      "settings": null
    },
    {
      "voice_id": "yoZ06aMxZJJ28mfd3POQ",
      "name": "Sam (american, dynamic)",
      "samples": [],
      "category": "dynamic",
      "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/yoZ06aMxZJJ28mfd3POQ/1c4d417c-ba80-4de8-874a-a1c57987ea63.mp3",
      "available_for_tiers": [],
      "settings": null
    }
  ]
}
```

## Output
After you successfully run the code, a file will be created (the file name you stated)

## License
This library is released under the MIT License. See LICENSE for more details.

# By amosayomide05 
