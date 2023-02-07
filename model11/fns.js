
const NOW = new Date();

console.log(dateFns.isToday(NOW))

// formatting option 
console.log(dateFns.format(NOW, 'YYYY'))//display 2023
console.log(dateFns.format(NOW, 'YY'))//display the last two digit of that year 23
console.log(dateFns.format(NOW, 'MMMM'))// display the month February in full
console.log(dateFns.format(NOW, 'MMM'))// display the first three character of February ie Feb
console.log(dateFns.format(NOW, 'dddd'))// display the day full name
console.log(dateFns.format(NOW, 'ddd'))// display the first three character of the day ie Mon
console.log(dateFns.format(NOW, 'Do'))// display the date and add either th, st, or nd at the end
console.log('Our next meeting will be on ',dateFns.format(NOW,'dddd Do MMMM YYYY'))

// comparing dates 

const Before = new Date('January 5 2023 10:44:00')

console.log(dateFns.distanceInWords(NOW, Before))//distanceInWord() is a method that is going to the distace betwee the Now Date and Before Date in a nicer way in words 
console.log(dateFns.distanceInWords(NOW, Before, {addSuffix: true}))//addSuffix is going to spiced it by adding something like ago 
