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
addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], true);
record1.addEvent('Drinking', 1);
record1.addEvent('Work', 1);
record1.addEvent('Touched Oak tree', 1);
record1.addEvent('Peanuts', 2);
record1.addEvent('Brushed teeth', 2);