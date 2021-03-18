var today = moment().format('MMMM Do YYYY');
var day = $("#currentDay");
day.text(today);

var times = [["8AM", 8], ["9AM", 9], ["10AM", 10], ["11AM", 11], ["12PM", 12], ["1PM", 13], ["2PM", 14], ["3PM", 15], ["4PM", 16], ["5PM", 17]];
var containerEl = $(".container");
var textStorage = [];

for (i=0; i<times.length; i++) {
    var currentHour = moment().format('HH');
    //console.log(currentTime);
    
    //currentHour = convertTime(currentTime);
    if (currentHour > parseInt(times[i][1])) {
        var contentText = $(`<textarea type="text" class="textarea past col-6 col-md-8" index="${i}" id="plans" name="plans" placeholder="" />`); 
        //console.log(times[i][1] + " " + currentHour);
    }
    else if (currentHour < parseInt(times[i][1])) {
        var contentText = $(`<textarea type="text" class="textarea future col-6 col-md-8" index="${i}" id="plans" name="plans" placeholder="" />`); 
        //console.log(times[i][1] + " " + currentHour);
    }
    else if (currentHour == parseInt(times[i][1])) {
        var contentText = $(`<textarea type="text" class="textarea present col-6 col-md-8" index="${i}" id="plans" name="plans" placeholder="" />`); 
        //console.log(times[i][1] + " " + currentHour);
    }

    var hour = $(`<div class="hour"> ${times[i][0]} </div>`);
    var saveButton = $(`<div class="saveBtn"> <i class="fas fa-save"> </div>`);

    var row = $(`<div class="row justify-content-center"> </div>`);
    var timeBlock = $(`<div class="time-block"> </div>`);
    row.append(hour);
    row.append(contentText);
    row.append(saveButton);
    containerEl.append(row);
}

containerEl.on("click", ".saveBtn", saveText);

function saveText(event) {
    var saved = ( $(this).parent().children().eq(1) ).val();
    //console.log(saved);
    var index = $(this).parent().children().eq(1).attr("index");
    //console.log(index);
    textStorage[index] = saved;
    console.log(textStorage);
}

// function convertTime(time) {
//     var hour = time[0] + time[1];
//     var hourNum = parseInt(hour);
//     if (hour[1] = ":") {
//         if (time[5] == "P") {
//             hourNum += 12;
//         }
//     }
//     else {
//         if (time[6] == "P") {
//             hourNum += 12;
//         }
//     }
//     return hourNum;
// }

