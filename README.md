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

elevenLabsAPI({
  text: 'This is a test',
  apiKey: 'your api key here',
  id: 'your id here',
  filename: 'audio.mp3'
})
  .then(() => {
    console.log('Text to speech conversion complete');
  })
  .catch(error => {
    console.error(error);
  });
```

## Requirements
1. An API key from Eleven Labs. You can sign up for an API key at https://elevenlabs.io/.
2. An Id from Eleven Labs.
3. A text string to convert to speech.
4. A file name for the output audio file.

## License
This library is released under the MIT License. See LICENSE for more details.

# By amosayomide05 
