function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);

    return (date);

}



$.ajax({
    type: "GET",
    url: "http://localhost:8000/view/questions",
    data: {},
    success: function(response) {
        let i = 0;
        response.forEach(element => {
            i++;
            console.log(element);
            if (i % 2 == 0) {
                $("#table_body").append(
                    "<tr class='even'> <td>" + element._id + "</td> <td>" + element.text + "</td> <td>" + element.options + "</td> <td>" + element.correct + "</td> <td>" + element.level + "</td><td><div class=\"col-md-1\"><div><i class=\"fa fa-2x fa-cog \"></i></div></div><div class=\"col-md-1\"><div><i class=\"col-md-1 fa fa-2x fa-trash-o\"></i></div></div></td> </tr>"
                );

            } else {
                $("#table_body").append(
                    "<tr class='odd'> <td>" + element._id + "</td> <td>" + element.text + "</td> <td>" + element.options + "</td> <td>" + element.correct + "</td> <td>" + element.level + "</td><td><div class=\"col-md-1\"><div><i class=\"fa fa-2x fa-cog \"></i></div></div><div class=\"col-md-1\"><div><i class=\"col-md-1 fa fa-2x fa-trash-o\"></i></div></div></td> </tr>"
                );
            }

        });


        console.log(i);
    }
});
$(document).ready(function() {
    $("#table_body").find("#dataTables_empty").remove();
});