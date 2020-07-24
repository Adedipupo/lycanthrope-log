class Record {
    constructor(){
        this.eventRecord = [];
    }
    get record(){
        return this.eventRecord;
    }

    addEvent(event,day){
        const newEvent = {
            name : event,
            day: day
        }
    }
}