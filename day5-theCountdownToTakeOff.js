/* Challenge #5: The Countdown to Take Off

Elves have a secret timestamp: it’s the exact date and time when Santa Claus takes off with the sleigh 🛷 to deliver gifts around the world. But at the North Pole they use a super weird format to store the time: YYYY*MM*DD@HH|mm|ss NP (example: 2025*12*25@00|00|00 NP).

Your mission is to write a function that receives:

    fromTime → reference date in elf format (YYYY*MM*DD@HH|mm|ss NP).
    takeOffTime → the same takeoff date, also in elf format.

The function must return:

    The full seconds remaining until takeoff.
    If we’re exactly at takeoff time → 0.
    If takeoff already happened → a negative number indicating how many seconds have passed since then.

🎯 Rules

    First convert the elf format to a timestamp. The NP suffix indicates official North Pole time (no time zones or DST), so you can treat it as if it were UTC.
    Use differences in seconds, not milliseconds.
    Always round down (floor): only full seconds. */


function timeUntilTakeOff(fromTime, takeOffTime) {
  const fromTimeConverted = fromTime.split('').map(char => {
    return char === '*' ? '-' : char === '@' ? 'T' : char === '|' ? ':' : char;
  }).slice(0, -3).join('');
  const fromTimeSeconds = new Date(fromTimeConverted).getTime() / 1000;
  const takeOffTimeConverted = takeOffTime.split('').map(char => {
    return char === '*' ? '-' : char === '@' ? 'T' : char === '|' ? ':' : char;
  }).slice(0, -3).join('');
  const takeOffTimeSeconds = new Date(takeOffTimeConverted).getTime() / 1000;
  return Math.floor(takeOffTimeSeconds - fromTimeSeconds);
}


// Examples

const takeoff = '2025*12*25@00|00|00 NP'

// from December 24, 2025, 23:59:30, 30 seconds before takeoff
console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff));
// 30

// exactly at takeoff time
console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff));
// 0

// 12 seconds after takeoff
console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff));
// -12
