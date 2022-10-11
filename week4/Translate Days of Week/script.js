let day = prompt("Enter the day of the week").toLowerCase();
let dayInGerman = "";
// if (day == "Monday") {
//   window.alert("Heute is Montag");
// } else if (day == "Tuesday") {
//   window.alert("Heute is Dienstag");
// } else if (day == "Wednesday") {
//   window.alert("Heute is Mittwoch");
// } else if (day == "Thursday") {
//   window.alert("Heute is Donnerstag");
// } else if (day == "Friday") {
//   window.alert("Heute is Freitag");
// } else if (day == "Saturday") {
//   window.alert("Heute is Samstag");
// } else if (day == "Sunday") {
//   window.alert("Heute is Sonntag");
// }

switch (day) {
  case "monday":
    dayInGerman = "Montag";
    break;
  case "tuesday":
    dayInGerman = "Dienstag";
    break;
  case "wednesday":
    dayInGerman = "Mittwoch";
    break;
  case "thursday":
    dayInGerman = "Donnerstag";
    break;
  case "friday":
    dayInGerman = "Freiteg";
    break;
  case "saturday":
    dayInGerman = "Samstag";
    break;
  case "sunday":
    dayInGerman = "Sonntag";
    break;
  default:
    dayInGerman = "not valid";
}

if (dayInGerman != undefined) {
  window.alert("The translation of the day is " + dayInGerman);
}
