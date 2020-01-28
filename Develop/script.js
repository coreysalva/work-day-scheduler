var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

function blockMaker(y) {
    var beginningTime = moment().hour(y);
    var endTime = moment().hour();
    if (beginningTime > endTime) {
        return 'past';
    }
    else if (endTime > beginningTime) {
        return 'future';
    }
    else {
        return 'present';
    }
}

function makeRow(x) {
    var rowTime = times[x].charAt(0);
    var tempRow = $("<div class='row time-block'>");
    var tempHour = $("<div class='col-1 hour'>");
    tempHour.text(times[x]);
    tempRow.append(tempHour);
    var tempDescCol = $("<div class='col-10 row' style='padding-left: 0px;'>");
    tempDescCol.addClass(blockMaker(rowTime));
    var descTextArea = $("<textarea class='description'>");
    descTextArea.val(localStorage.getItem("hour" + rowTime));
    tempDescCol.append(descTextArea);
    tempRow.append(tempDescCol);
    var tempSaveCol = $("<div class='col-1 saveBtn'>");
    var descTextArea = $("<i class='fas fa-save'>");
    tempSaveCol.append(descTextArea);
    tempRow.append(tempSaveCol);
    $(".container").append(tempRow);
};

$(document).ready(function () {
    $("#currentDay").text(moment().format('dddd, MMMM Do'));
    for (var i = 0; i < times.length; i++) {
        makeRow(i);
    }

});
