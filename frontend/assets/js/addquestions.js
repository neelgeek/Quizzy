let options = {};

function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    console.log(date);

}
$(document).ready(function() {
    randomDate(new Date(2010, 1, 1), new Date(2018, 12, 31), 5, 10);
});


$('#options').keydown(function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode == 13 || keyCode == 32) {
        e.preventDefault();
        var a = $("#options").find("span.tagit-label").each(function(index) {
            options[index] = $(this).text();
        });
        // console.log(options);
        if (Object.keys(options).length > 0) {
            $('#correct_option').append("<option>" + Object.keys(options).length + "</option");
        }
    }

});



$('form#question_form').submit(function(e) {
    e.preventDefault();

    correct_options = {}
    $("#correct_option option:selected").each(function(indexInArray) {
        correct_options[indexInArray] = $(this).text();
    });


    let Qtext = $('#question_text').val();

    let Qtype = $("input[name='qtype']:checked").val();
    let Qdiff = $("input[name='diff']:checked").val();

    let qdata = {
        text: Qtext,
        options: options,
        correct: correct_options,
        level: Qdiff
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:8000/admin/create/question",
        data: qdata,
        success: function(response) {
            console.log(response);
        }
    });
});