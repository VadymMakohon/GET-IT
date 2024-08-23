
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// otherwise: good evening!

let hour = 10; // Change this value to test different cases

if (hour >= 6 && hour < 12) {
    console.log('Good morning!');
} else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
}