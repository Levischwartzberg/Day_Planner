console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

var times = [["8AM", 8], ["9AM", 9], ["10AM", 10], ["11AM", 11], ["12PM", 12], ["1PM", 13], ["2PM", 14], ["3PM", 15], ["4PM", 16], ["5PM", 17]];
var containerEl = $(".container");

for (i=0; i<times.length; i++) {
    var currentTime = moment().format('LT');
    console.log(currentTime);
    
    currentHour = convertTime(currentTime);
    if (currentHour > parseInt(times[i][1])) {
        var contentText = $(`<input type="text" class="textarea past" id="plans" name="plans" placeholder="" />`); 
        console.log(times[i][1] + " " + currentHour);
    }
    else if (currentHour < parseInt(times[i][1])) {
        var contentText = $(`<input type="text" class="textarea future" id="plans" name="plans" placeholder="" />`); 
        console.log(times[i][1] + " " + currentHour);
    }
    else if (currentHour == parseInt(times[i][1])) {
        var contentText = $(`<input type="text" class="textarea present" id="plans" name="plans" placeholder="" />`); 
        console.log(times[i][1] + " " + currentHour);
    }

    

    var hour = $(`<div class="hour"> ${times[i][0]} </div>`);
    var saveButton = $(`<div class="saveBtn"> </div>`);

    var row = $(`<div class="row"> </div>`);
    var timeBlock = $(`<div class="time-block"> </div>`);
    row.append(hour);
    row.append(contentText);
    row.append(saveButton);
    containerEl.append(row);
}

containerEl.on("click", ".saveBtn", saveText);

function saveText(event) {
    var saved = ( $(this).parent().children().eq(1) ).val();
    console.log( saved );
}

function convertTime(time) {
    var hour = time[0] + time[1];
    var hourNum = parseInt(hour);
    if (hour[1] = ":") {
        hour = hour[0];
        hourNum += 12;
    } 
    return hourNum;
}

