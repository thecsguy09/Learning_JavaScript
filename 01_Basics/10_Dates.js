const date = new Date ();
console.log(date); // Current date and time
const istString = date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
console.log("Current IST time:", istString);

const date2 = new Date("2025-04-06T16:15:35+05:30");
console.log(date2.toString());

// .get and .set methods are easy no need to make notes or remember them