// "<divclass=\"tab-panefadeactivein\"id=\"default-tab-1\">\r\n<h3class=\"m-t-10\">WhatistheCaptialofIndia?<\/h3>\r\n\r\n<divclass=\"form-group\">\r\n<!--<labelclass=\"col-md-3control-label\">InlineCheckbox<\/label>-->\r\n<divclass=\"col-md-9\">\r\n<labelclass=\"checkbox-inline\">\r\n<inputtype=\"checkbox\"value=\"\"\/>\r\nMumbai\r\n<\/label>\r\n<labelclass=\"checkbox-inline\">\r\n<inputtype=\"checkbox\"value=\"\"\/>\r\nDelhi\r\n<\/label>\r\n<labelclass=\"checkbox-inline\">\r\n<inputtype=\"checkbox\"value=\"\"\/>\r\nKolkata\r\n<\/label>\r\n<\/div>\r\n<\/div>\r\n\r\n\r\n<pclass=\"text-rightm-b-0\">\r\n<ahref=\"javascript:;\"class=\"btnbtn-primary\">Submit<\/a>\r\n<\/p>\r\n<\/div>"
// "<liclass=\"active\">\r\n<ahref=\"#default-tab-1\"data-toggle=\"tab\">\r\n<spanclass=\"visible-xs\">Tab1<\/span>\r\n<spanclass=\"hidden-xs\">Question1<\/span>\r\n<\/a>\r\n<\/li>"

var parsedUrl = new URL(window.location.href);
var id = parsedUrl.searchParams.get("id");
let url = "https://app-quizzy.herokuapp.com";
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: url + "/load/quiz?id=" + id,
        success: function(response) {
            console.log({ questions: response[0].questions });
            $.ajax({
                type: "POST",
                url: url + "/load/questions",
                data: { questions: response[0].questions },
                success: function(response) {
                    loadQues(response);
                }
            });
        }
    });
});



function loadQues(data) {
    data.forEach(element => {
        console.log(element);
        let i = 0;
        $(".nav-tabs").append("<li class=\"active\">\r\n<ahref=\"#default-tab-1\"data-toggle=\"tab\">\r\n<spanclass=\"visible-xs\">Tab1<\/span>\r\n<spanclass=\"hidden-xs\">Question1<\/span>\r\n<\/a>\r\n<\/li>");
    });
}