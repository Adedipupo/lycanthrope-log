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
        this.eventRecord = [...this.eventRecord, event]
    }
}

  const record1 = new Record();

newJournal.addEvent('Drinking', 1);
newJournal.addEvent('Work', 1);
newJournal.addEvent('Touched Oak tree', 1);
newJournal.addEvent('Peanuts', 2);
newJournal.addEvent('Brushed teeth', 2);