const table = $('#data_table').dataTable();
// let url = "http://localhost:8000"; //For Testings
let url = "https://app-quizzy.herokuapp.com"

function loadTable() {
    $.ajax({
        type: "GET",
        url: url + "/admin/view/quiz",
        data: {},
        success: function(response) {
            table.fnClearTable();
            response.forEach(element => {
                table.fnAddData([
                    element._id,
                    element.title,
                    Object.keys(element.questions).length,
                    "<div class=\"row\"><div class=\"col-md-4\"><div><a onclick=\"return editQuiz(\'" + element._id + "')\" class=\"btn btn-success btn-icon btn-circle btn-lg\"><i class=\" fa fa fa-cog \"></i></a></div></div><div class=\"col-md-4\"><div><a data-click=\"swal-danger\" onclick=\"return deleteQuiz(\'" + element._id + "')\" class=\"btn btn-danger btn-icon btn-circle btn-lg\"><i class=\" fa fa fa-trash-o \"></i></a></div></div></div>"
                ]);
            });
        }
    });

}

$(document).ready(function() {
    loadTable();
});

function editQuiz(id) {
    console.log("Edit quiz " + id);
}


function deleteQuiz(id) {
    console.log("Delete quiz " + id);
    $.ajax({
        type: "DELETE",
        url: url + "/admin/delete/quiz/?id=" + id,
        success: function(response) {
            console.log(response);

        }
    });
}