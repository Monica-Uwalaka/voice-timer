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
        prompt: `Convert text to time duration:\n\nExample: set timer for one runningHour and 10 runningMinutes\nOutput: 01:10:00\n\n${promptText}\nOutput:`,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0,
      });
      return completion.data.choices[0].text
}

const inputPrompt = require("prompt-sync")({ sigint: true });

//  get input for runningHours, runningMinutes and seconds  from user
const inputHour = parseInt(inputPrompt("Hour: "))
const inputMinute = parseInt(inputPrompt("Minute: "))
const inputSecond = parseInt(inputPrompt("Second: "))

// convert time to seconds 
const durationInSeconds = (inputHour*3600) + (inputMinute*60) + inputSecond

let runningHour  = Math.floor(durationInSeconds/3600)
let runningMinute = (Math.floor(durationInSeconds/60))%60
let runningSeconds = durationInSeconds%60
let runningDuration = durationInSeconds
let intervalID;

// funtion that runs timer
const runTimer = () => {
    if(!intervalID){
        intervalID = setInterval(timer, 1000)
    }
}

// timer function
const timer = () => {
    if (runningDuration > 0){
    runningDuration -= 1
    runningHour = Math.floor(runningDuration/3600)
    runningMinute = (Math.floor(runningDuration/60))%60
    runningSeconds = runningDuration%60
    console.log(`${runningHour}:${runningMinute}:${runningSeconds}`)
    }else{
        clearInterval(intervalID)
    }
}

let promptText = "Set timer to 6 runningHours and 7 runningMinutes and 0 seconds"
openaiResult(promptText)
.then((response)=>{
    console.log(response)
})
.catch((error)=>
console.log(error))
runTimer()
