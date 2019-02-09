function deleteQues(id) {
    console.log(id);
    $.ajax({
        type: "DELETE",
        url: "https://app-quizzy.herokuapp.com/admin/delete/question/?id=" + id,
        data: {},
        success: function(response) {
            // location.reload();
            console.log(response);

        }
    });
};

function editQues(id) {
    window.location = "addquestion.html?id=" + id;
}

$(document).ready(function() {
    var table = $('#data_table').dataTable();
    $.ajax({
        type: "GET",
        url: "https://app-quizzy.herokuapp.com/view/questions",
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

});