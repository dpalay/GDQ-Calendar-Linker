const { google } = require("calendar-link");
/*
let results = []

rows = $("#runTable tbody tr")
rows.toArray().forEach((row,i,arr) => {
    if (row.className === "day-split"){
        let date = $(row).find("tr.day-split").find("td").text()
        $(row).nextUntil("tr",".day-split").toArray().forEach((r,i,arr) => {
            if (r.className === ""){
                results.push(
                    {
                        startTime: $(r).find("td.start-time").text()
                        ,title: $(r).find("td:first+td").text()
                        ,typeOfRun: $(arr[i+1]).find("td:first+td").text()
                        ,length: $(arr[i+1]).find("td:first").text()
                        ,date: date
                    })
            }
        })
    }
})

rows.toArray().forEach((row,i,arr) => {
    if (row.className === "day-split"){
        results.push({daterow: $(row).find("td")[0].innerText, data:[]})
    }
    
})


results.forEach(day => {

})
*/

function convertTimeString(timeString) {
  return timeString.split(":").reduce((prev, cur, i) => {
    switch (i) {
      case 0:
        return cur;
      case 1:
        return parseFloat(prev) + cur / 60.0;
      case 2:
        return parseFloat(prev) + cur / 60.0 / 60.0;
      default:
        break;
    }
  });
}

let date = "";
$("table#runTable tbody tr")
  .get()
  .forEach((row, ind, arr) => {
    if (row.className === "day-split") {
      date = $(row).find("td")[0].innerText;
    }
    if (row.className === "") {
      let a = document.createElement("a");
      let i = document.createElement("i");

      let run = {
        startTime: $(row).find("td.start-time").text(),
        title: $(row).find("td:first+td").text(),
        typeOfRun: $(arr[ind + 1])
          .find("td:first+td")
          .text(),
        length: $(arr[ind + 1])
          .find("td:first")
          .text(),
        date: date,
      };
      a.href = google({
        start: run.startTime,
        title: `GDQ - ${run.title}-${run.typeOfRun}`,
        duration: [convertTimeString(run.length), "hour"],
      });
      a.target = "_blank"

      i.classList = "fa fa-calendar-plus-o";
      a.appendChild(i);
      $(row).find("td:last").get()[0].appendChild(a);
    }
  });
