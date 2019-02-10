let ques = {};

const table = $('#data_table').dataTable({
    select: true
});
const dtable = $('#data_table').DataTable();
var current_count = 11;
$(document).ready(function() {
    loadTable(11);
});



$('form#question_form').submit(function(e) {
    e.preventDefault();
    console.log("Form Submitted");
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

    $.ajax({
        type: "POST",
        url: "https://app-quizzy.herokuapp.com/admin/create/quiz",
        data: qdata,
        success: function(response) {
            console.log(qdata)
        }
    });


});



function loadTable(count = 11) {
    $.ajax({
        type: "GET",
        url: "https://app-quizzy.herokuapp.com/view/questions?count=" + count,
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