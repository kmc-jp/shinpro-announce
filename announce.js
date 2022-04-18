(() => {
  "use strict";

  const schedules = require("./schedule.js");

  let event = [];
  event = [...event, ...schedules.filter(x => !x.repeat && x.date === process.argv[2])];
  event = [...event, ...schedules.filter(x => x.repeat && (x.dayOfWeek === process.argv[3] && x.active))];

  if (event.length === 0) {
    console.log("予定なし")
  }

  console.log(event.map(x => `• *${x.name}*\n\t${x.startTime.substring(0, 2) + ":" + x.startTime.substring(2, 4)}~${x.endTime ? x.endTime.substring(0, 2) + ":" + x.endTime.substring(2, 4) : ""}`).join("\n"));
})()

