function helloWorld(language = "en") {
  let message = "";
  if (language == "en") {
    message = "Hello World";
  } else if (language == "de") {
    message = "Hallo Welt";
  } else if (language == "fr") {
    message = "Bonjour le monde";
  } else {
    message = "Language is not defined";
  }
  console.log(message);
}

helloWorld();
helloWorld("en");
helloWorld("de");
helloWorld("fr");
helloWorld("qwe");
