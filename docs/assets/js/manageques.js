$.ajax({
    type: "GET",
    url: "http://localhost:8000/view/questions",
    data: {},
    success: function(response) {
        let i = 0;
        response.forEach(element => {
            i++;
            // console.log(element);
            if (i % 2 == 0) {
                $("#table_body").append(
                    "<tr class='even'> <td>" + element._id + "</td> <td>" + element.text + "</td> <td>" + element.options + "</td> <td>" + element.correct + "</td> <td>" + element.level + "</td><td><div class=\"row\"><div class=\"col-md-4\"><div><a onclick=\"return editQues(\'" + element._id + "')\" class=\"btn btn-success btn-icon btn-circle btn-lg\"><i class=\" fa fa fa-cog \"></i></a></div></div><div class=\"col-md-4\"><div><a data-click=\"swal-danger\" onclick=\"return deleteQues(\'" + element._id + "')\" class=\"btn btn-danger btn-icon btn-circle btn-lg\"><i class=\" fa fa fa-trash-o \"></i></a></div></div></div></td> </tr>"
                );

            } else {
                $("#table_body").append(
                    "<tr class='odd'> <td>" + element._id + "</td> <td>" + element.text + "</td> <td>" + element.options + "</td> <td>" + element.correct + "</td> <td>" + element.level + "</td><td><div class=\"row\"><div class=\"col-md-4\"><div><a onclick=\"return editQues('" + element._id + "')\" class=\"btn btn-success btn-icon btn-circle btn-lg\"><i class=\" fa fa fa-cog \"></i></a></div></div><div class=\"col-md-4\"><div><a data-click=\"swal-danger\" onclick=\"return deleteQues(\'" + element._id + "')\" class=\"btn btn-danger btn-icon btn-circle btn-lg\"><i class=\" fa fa fa-trash-o \"></i></a></div></div></div></td> </tr>"
                );
            }

        });


        console.log(i);
    }
});


function deleteQues(id) {
    console.log(id);
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8000/admin/delete/question/?id=" + id,
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
    $("#table_body").find("#dataTables_empty").remove();
});