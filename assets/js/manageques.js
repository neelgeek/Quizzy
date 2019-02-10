const table = $('#data_table').dataTable();
const dtable = $('#data_table').DataTable();
var current_count = 11;
// let url = "http://localhost:8000"; //For Testings
let url = "https://app-quizzy.herokuapp.com"
$(document).ready(function() {
    loadTable(11);
});

function deleteQues(id) {
    console.log(id);
    $.ajax({
        type: "DELETE",
        url: url + "/admin/delete/question/?id=" + id,
        data: {},
        success: function(response) {
            // location.reload();
            console.log(response);

        }
    });
};



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
                    element.options,
                    element.correct,
                    element.level,
                    "<div class=\"row\"><div class=\"col-md-4\"><div><a onclick=\"return editQues(\'" + element._id + "')\" class=\"btn btn-success btn-icon btn-circle btn-lg\"><i class=\" fa fa fa-cog \"></i></a></div></div><div class=\"col-md-4\"><div><a data-click=\"swal-danger\" onclick=\"return deleteQues(\'" + element._id + "')\" class=\"btn btn-danger btn-icon btn-circle btn-lg\"><i class=\" fa fa fa-trash-o \"></i></a></div></div></div>"
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
});