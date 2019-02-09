let options = {};
var parsedUrl = new URL(window.location.href);
var id = parsedUrl.searchParams.get("id");
let is_edit = false;
let method = "POST";
if (id) {
    is_edit = true
    $("<div class=\"alert alert-info fade in\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span></button>You are now editing question with id: " + id + ". Reenter Question details</div>").insertAfter("#form_panel");
}

$('#options').keydown(function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode == 13 || keyCode == 32 || keyCode == 9) {
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

$("#confirm").click(function(e) {
    e.preventDefault();
    console.log("Confirm Clicked");
});

$('form#question_form').submit(function(e) {
    e.preventDefault();
    let api_url = "https://app-quizzy.herokuapp.com/admin/create/question";

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
    if (is_edit) {
        api_url = "https://app-quizzy.herokuapp.com/admin/update/question";
        qdata['_id'] = id;
        method = "PATCH";
    }

    $.ajax({
        type: method,
        url: api_url,
        data: qdata,
        success: function(response) {
            console.log(response);
            // location.reload();
        }
    });
});