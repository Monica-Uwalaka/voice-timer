import openaiResult from "./services/openaiTextInterpreter.js";
import PromptSync from "prompt-sync";
import { Timer } from "./models/timer.js";

const inputPrompt = PromptSync({ sigint: true });

//  get input for Hours, Minutes and seconds from user
const inputHour = parseInt(inputPrompt("Hour: "))
const inputMinute = parseInt(inputPrompt("Minute: "))
const inputSecond = parseInt(inputPrompt("Second: "))

const newtimer = new Timer(inputHour,inputMinute,inputSecond);
const durationInSeconds = newtimer.durationInSeconds()

let runningHour  = Math.floor(durationInSeconds/3600)
let runningMinute = (Math.floor(durationInSeconds/60))%60
let runningSeconds = durationInSeconds%60
let runningDuration = durationInSeconds
let intervalID;

// funtion that runs timer
const runTimer = () => {
    if(!intervalID){
        intervalID = setInterval(countdown, 1000)
    }
}

// timer function
const countdown = () => {
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
