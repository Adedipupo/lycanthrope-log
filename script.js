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

record1.addEvent('Running', 1);
record1.addEvent('Drinking', 1);
record1.addEvent('Work', 1);
record1.addEvent('Touched Oak tree', 2);  
record1.addEvent('Peanuts', 2);
record1.addEvent('Brushed teeth', 2);
record1.addEvent('Running', 3);
record1.addEvent('Drinking', 3);
record1.addEvent('Work', 3);
record1.addEvent('Touched Oak tree', 4);
record1.addEvent('Peanuts', 4);
record1.addEvent('Brushed teeth', 4);
record1.addEvent('Peanuts', 5);
record1.addEvent('Brushed teeth', 5);
record1.addEvent('Running', 5);
record1.addEvent('Drinking', 6);
record1.addEvent('Work', 6);
record1.addEvent('Touched Oak tree', 6);
record1.addEvent('Peanuts', 7);
record1.addEvent('Brushed teeth', 7);
record1.addEvent('Running', 7);
record1.addEvent('Drinking', 8);
record1.addEvent('Work', 8);
record1.addEvent('Touched Oak tree', 8);
record1.addEvent('Peanuts', 9);
record1.addEvent('Brushed teeth', 9);
record1.addEvent('Peanuts', 9);
record1.addEvent('Brushed teeth', 2);
record1.addEvent('Running', 1);
record1.addEvent('Drinking', 1);
record1.addEvent('Work', 1);
record1.addEvent('Touched Oak tree', 2);
record1.addEvent('Peanuts', 2);
record1.addEvent('Brushed teeth', 2);
record1.addEvent('Running', 1);
record1.addEvent('Drinking', 1);
record1.addEvent('Work', 1);
record1.addEvent('Touched Oak tree', 1);
record1.addEvent('Peanuts', 2);
record1.addEvent('Brushed teeth', 2);
record1.addEvent('Peanuts', 2);
record1.addEvent('Brushed teeth', 2);
addEntry(["work", "touched tree", "pizza", "running",
    "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
    "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
    "beer"], true);

