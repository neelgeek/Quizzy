let ques = {};
// let url = "http://localhost:8000"; //For Testings
let url = "https://app-quizzy.herokuapp.com"

const table = $('#data_table').dataTable({
    select: true
});
const dtable = $('#data_table').DataTable();
var current_count = 11;
var parsedUrl = new URL(window.location.href);
var id = parsedUrl.searchParams.get("id");
let is_edit = false;
let method = "POST";
if (id) {
    is_edit = true
    $("<div class=\"alert alert-info fade in\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span></button>You are now editing Quiz with id: " + id + ". Reenter Quiz details</div>").insertAfter("#form_panel");
}



$(document).ready(function() {
    loadTable(11);
});



$('form#question_form').submit(function(e) {
    e.preventDefault();
    api_url = url + "/admin/create/quiz"

    let qtitle = $('#quiz_title').val();
    let qmarks = {
        correct: $('#marks_correct').val(),
        wrong: $('#marks_incorrect').val()
    };

    let qdata = {
        title: qtitle,
        marks: qmarks,
        questions: ques
    }
    if (is_edit) {
        api_url = url + "/admin/update/quiz";
        qdata['_id'] = id;
        method = "PATCH";
    }
    $.ajax({
        type: method,
        url: api_url,
        data: qdata,
        success: function(response) {
            console.log(response)
        }
    });


});



function loadTable(count = 11) {
    $.ajax({
        type: "GET",
        url: url + "/view/questions?count=" + count,
        data: {},
        success: function(response) {
            table.fnClearTable();
            response.forEach(element => {
                table.fnAddData([
                    element._id,
                    element.text,
                    element.level
                ]);
            });
        }
    });

}


function editQues(id) {
    window.location = "addquestion.html?id=" + id;
}




$("#data_table").on('page.dt', function(e) {
    e.preventDefault();
    var info = dtable.page.info();
    var count = (info.page * 10) + 11;
    if (count > current_count) {
        current_count = count;
        loadTable(count);
        dtable.page(info.page + 1).draw(true);
    }
    // console.log(count);

});


function addQuestions() {
    $('table > tbody > tr.selected > td.sorting_1').each(function(indexInArray) {
        ques[indexInArray] = $(this).text();
    });
    // console.log(ques);
    console.log("Questions Added");
}