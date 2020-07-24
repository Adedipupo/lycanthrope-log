class Record {
  constructor() {
    this.eventRecord = [];
  }
  get record() {
    return this.eventRecord;
  }

  addEvent(event, day) {
    const newEvent = {
      name: event,
      day: day,
    };
    this.eventRecord = [...this.eventRecord, newEvent];
  }
    getEventsForDay(day) {
        let dayEvents = this.eventRecord.filter((e) => (e.day === day))
        if (dayEvents.length === 0) return `No events log for the day ${day}`
        return this.events.filter((event) => (
            event.day === day
        ))
    }
    getTransformationDays() {
        return this.eventRecord.reduce((days, event) => {
            if (event.name.includes('Pizza')) {
                days.push(`Day ${event.day}`);
            }
            return days;
        }, [])
    }
}

const record1 = new Record();

record1.addEvent("Running", 1);
record1.addEvent("Pizza", 1);
record1.addEvent("Work", 1);
record1.addEvent("Touched Oak tree", 2);
record1.addEvent("Peanuts", 2);
record1.addEvent("Brushed teeth", 2);
record1.addEvent("Running", 3);
record1.addEvent("Drinking", 3);
record1.addEvent("Cycling", 3);
record1.addEvent("Television", 4);
record1.addEvent("Touched Oak tree", 4);
record1.addEvent("Brushed teeth", 4);
record1.addEvent("Peanuts", 5);
record1.addEvent("Brushed teeth", 5);
record1.addEvent("Running", 5);
record1.addEvent("Drinking", 6);
record1.addEvent("Work", 6);
record1.addEvent("Touched Oak tree", 6);
record1.addEvent("Peanuts", 7);
record1.addEvent("Brushed teeth", 7);
record1.addEvent("Running", 7);
record1.addEvent("Drinking", 8);
record1.addEvent("Work", 8);
record1.addEvent("Touched Oak tree", 8);
record1.addEvent("Pizza", 9);
record1.addEvent("Brushed teeth", 9);
record1.addEvent("Peanuts", 9);
record1.addEvent("Brushed teeth", 10);
record1.addEvent("Running", 10);
record1.addEvent("Drinking", 10);
record1.addEvent("Work", 11);
record1.addEvent("Touched Oak tree", 11);
record1.addEvent("Peanuts", 11);
record1.addEvent("Brushed teeth", 12);
record1.addEvent("Break", 12);
record1.addEvent("Beer", 12);
record1.addEvent("Work", 13);
record1.addEvent("Pizza", 13);
record1.addEvent("Peanuts", 13);
record1.addEvent("Brushed teeth", 14);
record1.addEvent("Television", 14);
record1.addEvent("Cycling", 14);

console.log(record1.record);
console.log(newJournal.getTransformationDays());