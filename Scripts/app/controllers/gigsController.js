
var GigsController = function (attendanceService) {
    var button;

    var init = function (container) {
        $(".js-toggle-attendance").click(toggleAttendance);
        //$(container).on("click", ".js-toggle-attendance", toggleAttendance);
    };

    var toggleAttendance = function (e) {
        button = $(e.target);

        var gigId = button.attr("data-gig-id");

        if (button.hasClass("btn-default"))
            attendanceService.createAttendance(gigId, done, fail);
        else
            attendanceService.deleteAttendance(gigId, done, fail);
    };

    var done = function () {        

        button.toggleClass("btn-info").toggleClass("btn-default");

        button.text(button.hasClass("btn-default") ? "Going?" : "Going");
    };

    var fail = function () {
        alert("Something failed!");
    };

    return {
        init: init
    };

    }(AttendanceService);
