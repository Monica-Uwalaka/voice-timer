const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//Leverage openai to generate completion for text to time in format "hh:mm:ss"
async function openaiResult(promptText){
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Convert text to time duration:\n\nExample: set timer for one hour and 10 minutes\nOutput: 01:10:00\n\n${promptText}\nOutput:`,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0,
      });
      return completion.data.choices[0].text
}

const inputPrompt = require("prompt-sync")({ sigint: true });
//  get input for hours, minutes and seconds  from user
const inputHours = parseInt(inputPrompt("Hour: "))
const inputMinutes = parseInt(inputPrompt("Minute: "))
const inputSeconds = parseInt(inputPrompt("Second: "))

// convert time to seconds 
const timeInSeconds = (inputHours*3600) + (inputMinutes*60) + inputSeconds

let hours = 0
let minutes = 0
let seconds = 0
let count = 0
let intervalID;

// funtion that runs timer
const runTimer = () => {
    if(!intervalID){
        intervalID = setInterval(timer, 1000)
    }
}

// timer function
const timer = () => {
    if (count < timeInSeconds){
    count += 1
    hours = Math.floor(count/3600)
    minutes = (Math.floor(count/60))%60
    seconds = count%60
    console.log(`${hours}:${minutes}:${seconds}`)
    }else{
        clearInterval(intervalID)
    }
}

let promptText = "Set timer to 6 hours and 7 minutes and 0 seconds"
openaiResult(promptText)
.then((response)=>{
    console.log(response)
})
.catch((error)=>
console.log(error))
runTimer()
