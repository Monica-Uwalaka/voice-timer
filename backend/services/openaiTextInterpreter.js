const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');

dotenv.config()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//Leverage openai to generate completion for text to time in format "hh:mm:ss"
async function openaiResult(promptText){
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:`Convert text to time duration:\n\nExample: set timer for one hour and 10 minutes\nOutput: 01:10:00\n\nExample: Set timer to 5 hours and 20 minutes and 10 seconds\nOutput: 05:20:10\n\nExample: Pause timer\nOutput: pause\n\nExample: Start timer\nOutput: start\n\nExample: resume timer\nOutput: resume\n\nExample: cancel timer\nOutput: cancel\n\n${promptText}\nOutput:`,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0,
      });
      return completion.data.choices[0].text
}
module.exports = openaiResult;