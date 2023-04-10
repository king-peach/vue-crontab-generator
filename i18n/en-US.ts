const vueCron = {
  Seconds: {
    name: 'Seconds',
    every: 'Every second',
    interval: ['Starting at second', ' Every', 'second(s)'],
    specific: 'Specific second (choose one or many)',
    cycle: ['Every second between second', 'and second']
  },
  Minutes: {
    name: 'Minutes',
    every: 'Every minute',
    interval: ['Starting at minute', ' Every', 'minute(s)'],
    specific: 'Specific minute (choose one or many)',
    cycle: ['Every minute between minute', 'and minute']
  },
  Hours: {
    name: 'Hours',
    every: 'Every hour',
    interval: ['Starting at hour', ' Every', 'hour(s)'],
    specific: 'Specific hour (choose one or many)',
    cycle: ['Every hour between hour', 'and hour']
  },
  Day: {
    name: 'Day',
    every: 'Every day',
    intervalWeek: ['Starting on', ' Every', 'day(s)'],
    intervalDay: ['Starting at the', 'of the month Every', 'day(s)'],
    specificWeek: 'Specific day of week (choose one or many)',
    specificDay: 'Specific day of month (choose one or many)',
    lastDay: 'On the last day of the month',
    lastWeekday: 'On the last weekday of the month',
    lastWeek: ['On the last', ' of the month'],
    beforeEndMonth: ['day(s) before the end of the month', 'day'],
    nearestWeekday: ['Nearest weekday (Monday to Friday) to the', 'of the month'],
    someWeekday: ['On the', 'of the month']
  },
  Week: {
    name: 'Week',
    day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  Month: {
    name: 'Month',
    every: 'Every month',
    interval: ['Starting in', ' Every', 'month(s)'],
    specific: 'Specific month (choose one or many)',
    cycle: ['Every month between', 'and']
  },
  Year: {
    name: 'Year',
    every: 'Any year',
    interval: ['Starting in', ' Every', 'year(s)'],
    specific: 'Specific year (choose one or many)',
    cycle: ['Every year between', 'and']
  },
  Save: 'Save',
  Close: 'Close',
  Placeholder: {
    select: 'Please Select',
    input: 'Please Input'
  }
}

export default {
  ...vueCron
}