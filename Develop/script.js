var times = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var militaryTimes = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
function blockMaker(y) {
    var beginningTime = y;
    var nowTime = moment().hour();
    console.log(nowTime);
    if (parseInt(beginningTime) < nowTime) {
        return 'past';
    }
    else if (nowTime < parseInt(beginningTime)) {
        return 'future';
    }
    else {
        return 'present';
    }
}

function makeRow(x) {
    var rowTime = times[x];
    var rowMili = militaryTimes[x];
    rowTime = rowTime.replace(/[^0-9]/g, '');
    var tempRow = $("<div class='row time-block'>");
    var tempHour = $("<div class='col-1 hour'>");
    tempHour.text(times[x]);
    tempRow.append(tempHour);
    var tempDescCol = $("<div class='col-10 row' data-hour='" + rowTime + "' style='padding-left: 0px;'>");
    tempDescCol.addClass(blockMaker(rowMili));
    var descTextArea = $("<textarea class='description my-row" + rowTime + "'>");
    var savedText = localStorage.getItem(rowTime);
    descTextArea.val(savedText);
    tempDescCol.append(descTextArea);
    tempRow.append(tempDescCol);
    var tempSaveCol = $("<div class='col-1 saveBtn' data-hour='" + rowTime + "'>");
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
    $(document).on("click", ".saveBtn", function () {
        var num = $(this).data("hour");
        var currNum = $(".my-row" + num);
        var currText = currNum.val();
        //Save t

        localStorage.setItem(num, currText);


    });

});
