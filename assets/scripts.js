var today = moment().format('MMMM Do YYYY');
var day = $("#currentDay");
day.text(today);

var containerEl = $(".container");
//times array is used to initialize document
var times = [["8AM", 8], ["9AM", 9], ["10AM", 10], ["11AM", 11], ["12PM", 12], ["1PM", 13], ["2PM", 14], ["3PM", 15], ["4PM", 16], ["5PM", 17]];

//local storage pulls from local storage if it's populated, otherwise it sets it to an empty array that will be populated
var textStorage = JSON.parse(localStorage.getItem("hour_planner"));
if (textStorage == null) {
    textStorage = [];
}

//for loop creates hour rows for each hour in the times array
for (i=0; i<times.length; i++) {
    var currentHour = moment().format('HH');
    
    //logic uses moment time to determine the class of the divs to influence the color
    if (currentHour > parseInt(times[i][1])) {
        var contentText = $(`<textarea type="text" class="textarea past col-6 col-md-8" index="${i}" id="plans" name="plans" placeholder="" />`);
        contentText.text(textStorage[i]);
    }
    else if (currentHour < parseInt(times[i][1])) {
        var contentText = $(`<textarea type="text" class="textarea future col-6 col-md-8" index="${i}" id="plans" name="plans" placeholder="" />`);
        contentText.text(textStorage[i]);
    }
    else if (currentHour == parseInt(times[i][1])) {
        var contentText = $(`<textarea type="text" class="textarea present col-6 col-md-8" index="${i}" id="plans" name="plans" placeholder="" />`); 
        contentText.text(textStorage[i]);
    }

    var hour = $(`<div class="hour"> ${times[i][0]} </div>`);
    var saveButton = $(`<div class="saveBtn"> <i class="fas fa-save"> </div>`);

    var row = $(`<div class="row justify-content-center"> </div>`);
    row.append(hour);
    row.append(contentText);
    row.append(saveButton);
    containerEl.append(row);
}

//event listener for all save buttons
containerEl.on("click", ".saveBtn", saveText);
containerEl.on("click", ".altered", saveText);

//function called on save button click grabs the index and text value from the specific field and adds it to the text storage array
function saveText(event) {
    var saved = ( $(this).parent().children().eq(1) ).val();
        //console.log(saved);
    var index = $(this).parent().children().eq(1).attr("index");
        //console.log(index);
    textStorage[index] = saved;
    
    $(this).parent().children().eq(2).attr("class", "saveBtn");
    $(this).parent().children().eq(2).children().attr("class", "fas fa-save");
        //console.log(save);
        //console.log(textStorage);
    localStorage.setItem("hour_planner", JSON.stringify(textStorage));
}

//adds event listener to the text being edited
containerEl.on("input", "#plans", changeButton);

//changes button class when changes are unsaved to show a light change in save button color
function changeButton(event) {
    $(this).parent().children().eq(2).attr("class", "altered ");
    $(this).parent().children().eq(2).children().attr("class", "far fa-save");
}