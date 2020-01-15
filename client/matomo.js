Meteor.Matomo = {
    userInfo: null,

    trackThisPage: function () {
        Meteor.Matomo.trackPage(Router.current().route.path());
    },
    setUserInfo: function(uid) {
        var res = screen.width+'x'+screen.height;
        Meteor.Matomo.userInfo = {
            uid: uid,
            res: res,
            ua: navigator.userAgent,
            urlref: document.referrer
        }
    },
    trackPage: function (route) {
        var url = Meteor.absoluteUrl(route);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackPage", url, Meteor.Matomo.userInfo);
    },
    trackEvent: function (route, event, options) {
        if (typeof options == 'undefined') options = {};
        var url = Meteor.absoluteUrl(route);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackEvent", url, event, options, Meteor.Matomo.userInfo);
    },
    trackDownload: function (downloadRoute) {
        var url = Meteor.absoluteUrl(downloadRoute);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackDownload", url, url, Meteor.Matomo.userInfo);
    },
    trackLink: function(linkRoute) {
        var url = Meteor.absoluteUrl(linkRoute);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackLink", url, url, Meteor.Matomo.userInfo);
    },
    trackSearch: function(route,  search) {
        var url = Meteor.absoluteUrl(route);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackLink", url, search, Meteor.Matomo.userInfo);
    },
    trackGoal: function(route,  idgoal) {
        var url = Meteor.absoluteUrl(route);
        url = url.replace(/([^:]\/)\/+/g, "$1"); // replace double forward slashes: "//"
        Meteor.call("trackGoal", url, idgoal, Meteor.Matomo.userInfo);
    }
};
