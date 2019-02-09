let options = {};


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
        dataType: "application/json",
        success: function(response) {
            console.log(response);
        }
    });
});