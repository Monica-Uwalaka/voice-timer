class Timer{
    constructor(hour, minute, second){
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.initailDurationInseconds=(this.hour*3600) + (this.minute*60) + this.second;
        this.started = false;
        this.paused = false;
        this.canceled = false;
    }

    durationInSeconds(){
        return (this.hour*3600) + (this.minute*60) + this.second
    }
    
    start(){
        this.started = true;
    }
}

module.exports = Timer