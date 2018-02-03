
var GigDetailsController = function (followingService) {
    var followButton;

    var init = function (container) {
        $(".js-toggle-follow").click(toggleFollowing);
    };

    var toggleFollowing = function (e) {
        followButton = $(e.target);
        var followeeId = followButton.attr("data-user-id");

        if (followButton.hasClass("btn-default"))
            followingService.createFollowing(followeeId, done, fail);
        else
            followingService.deleteFollowing(followeeId, done, fail);
    };

    var done = function () {

        followButton.toggleClass("btn-info").toggleClass("btn-default");

        followButton.text(followButton.hasClass("btn-default") ? "Follow" : "Following");
    };

    var fail = function () {
        alert("Something failed!");
    };

    return {
        init: init
    };

}(FollowingService);