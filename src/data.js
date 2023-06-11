import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Beaver Creek",
      artist: "Aso, Middle School, Aviino",
      id: uuidv4(),
      active: true,
      color: ["#205950", "#2ab3bf"],
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",

      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
    },
    {
      name: "Daylight",
      artist: "Aiguille",
      id: uuidv4(),
      active: false,
      color: ["#EF8EA9", "#ab417f"],
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
    },
    {
      name: "Reflection",
      artist: "Swørn",
      id: uuidv4(),
      active: false,
      color: ["#CD607D", "#c94043"],
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
    },
    {
      name: "Nightfall",
      artist: "Aiguille",
      id: uuidv4(),
      active: false,
      color: ["#EF8EA9", "#ab417f"],
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
    },
    {
      name: "Under the City Stars",
      artist: "Aso, Middle School, Aviino",
      id: uuidv4(),
      active: false,
      color: ["#205950", "#2ab3bf"],
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
    },
    {
      name: "Keep Going",
      artist: "Swørn",
      id: uuidv4(),
      active: false,
      color: ["#CD607D", "#c94043"],
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
    },
  ];
}

export default chillHop;
