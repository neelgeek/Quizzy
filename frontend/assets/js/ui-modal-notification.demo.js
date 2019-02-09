/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4.0.0-Alpha 6
Version: 3.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v3.0/admin/html/
*/

var handleGritterNotification = function() {
    $('#add-sticky').click(function() {
        $.gritter.add({
            title: 'This is a sticky notice!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacus ut lectus rutrum placerat. ',
            image: 'assets/img/user-2.jpg',
            sticky: true,
            time: '',
            class_name: 'my-sticky-class'
        });
        return false;
    });
    $('#add-regular').click(function() {
        $.gritter.add({
            title: 'This is a regular notice!',
            text: 'This will fade out after a certain amount of time. Sed tempus lacus ut lectus rutrum placerat. ',
            image: 'assets/img/user-3.jpg',
            sticky: false,
            time: ''
        });
        return false;
    });
    $('#add-max').click(function() {
        $.gritter.add({
            title: 'This is a notice with a max of 3 on screen at one time!',
            text: 'This will fade out after a certain amount of time. Sed tempus lacus ut lectus rutrum placerat. ',
            sticky: false,
            image: 'assets/img/user-4.jpg',
            before_open: function() {
                if ($('.gritter-item-wrapper').length === 3) {
                    return false;
                }
            }
        });
        return false;
    });
    $('#add-without-image').click(function() {
        $.gritter.add({
            title: 'This is a notice without an image!',
            text: 'This will fade out after a certain amount of time.'
        });
        return false;
    });
    $('#add-gritter-light').click(function() {
        $.gritter.add({
            title: 'This is a light notification',
            text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
            class_name: 'gritter-light'
        });
        return false;
    });
    $('#add-with-callbacks').click(function() {
        $.gritter.add({
            title: 'This is a notice with callbacks!',
            text: 'The callback is...',
            before_open: function() {
                alert('I am called before it opens');
            },
            after_open: function(e) {
                alert("I am called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
            },
            before_close: function(manual_close) {
                var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
                alert("I am called before it closes: I am passed the jQuery object for the Gritter element... \n" + manually);
            },
            after_close: function(manual_close) {
                var manually = (manual_close) ? 'The "X" was clicked to close me!' : '';
                alert('I am called after it closes. ' + manually);
            }
        });
        return false;
    });
    $('#add-sticky-with-callbacks').click(function() {
        $.gritter.add({
            title: 'This is a sticky notice with callbacks!',
            text: 'Sticky sticky notice.. sticky sticky notice...',
            sticky: true,
            before_open: function() {
                alert('I am a sticky called before it opens');
            },
            after_open: function(e) {
                alert("I am a sticky called after it opens: \nI am passed the jQuery object for the created Gritter element...\n" + e);
            },
            before_close: function(e) {
                alert("I am a sticky called before it closes: I am passed the jQuery object for the Gritter element... \n" + e);
            },
            after_close: function() {
                alert('I am a sticky called after it closes');
            }
        });
        return false;
    });
    $("#remove-all").click(function() {
        $.gritter.removeAll();
        return false;
    });
    $("#remove-all-with-callbacks").click(function() {
        $.gritter.removeAll({
            before_close: function(e) {
                alert("I am called before all notifications are closed.  I am passed the jQuery object containing all  of Gritter notifications.\n" + e);
            },
            after_close: function() {
                alert('I am called after everything has been closed.');
            }
        });
        return false;
    });
};

var handleSweetNotification = function() {
    $('[data-click="swal-primary"]').live('click', function() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "info",
            showCancelButton: true,
            confirmButtonClass: 'btn-primary',
            confirmButtonText: 'Primary!'
        });
    });

    $('[data-click="swal-info"]').live('click', function() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "info",
            showCancelButton: true,
            confirmButtonClass: 'btn-info',
            confirmButtonText: 'Info!'
        });
    });

    $('[data-click="swal-success"]').live('click', function() {
        swal({
            title: "Question Had Been Submitted",
            text: "You Can edit it from Manage Page",
            type: "success",
            showCancelButton: false,
            confirmButtonClass: 'btn-success',
            confirmButtonText: 'Success!'
        });
    });

    $('[data-click="swal-warning"]').live('click', function() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: 'btn-warning',
            confirmButtonText: 'Warning!'
        });
    });

    $('[data-click="swal-danger"]').live('click', function() {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "error",
            showCancelButton: true,
            confirmButtonClass: 'btn-danger',
            confirmButtonText: 'Danger!'
        });
    });
};


var Notification = function() {
    "use strict";
    return {
        //main function
        init: function() {
            handleGritterNotification();
            handleSweetNotification();
        }
    };
}();