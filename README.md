# sunnys:matomo
Meteor package that allows you to use Matomo Analytics with your application.

An improved fork of https://github.com/vjrj/piwik/, https://github.com/appjitsu/piwik/ and https://github.com/DavidSichau/piwik/ . Thanks for the great work.

This package uses matomo-tracker (https://www.npmjs.com/package/matomo-tracker).

NOTE: NPM package piwik-tracker is deprecated. Migraation from piwik-tracker to matomo-tracker.

#### Installation

```
meteor add ssunnys:matomo
```

#### Setup

Add the following Environmentsvariables
```
MATOMO_URL = `http://your_matomo_server_url/matomo.php"`
MATOMO_SITE_ID = `0`
MATOMO_TOKEN = `<YOUR SECRET MATOMO TOKEN>`

```

or via [settings.json](https://github.com/vjrj/matomo/blob/master/settings.json).

#### Usage

On the client serveral helpers functions are provided to track different statistics.

Before any tracking you should call the helper `setUserInfo` with the current UserId or with null.
This helper collects data like the user Agent the referral and the resolution of the users device.

```
Meteor.startup(function() {
    return Tracker.autorun(function() {
        var userId;
        userId = Meteor.userId();
        Meteor.Matomo.setUserInfo(userId);
    });
});
```

To track a specific site use the following method:
```
// to track page in your router (onRun hook)
Meteor.Matomo.trackPage(Router.current().route.path(this));
```

To track a download use:
```
Meteor.Matomo.trackDownload(downloadUrl);
```

To track a external Link use:
```
Meteor.Matomo.trackLink(linkUrl);
```

To track a search use:
```
Meteor.Matomo.trackSearch(url, {
    search: 'my cool keyword', // the search term
    search_cat: 'page search', //the category of the search
    search_count: '42' //the number of search results

});
```

To track a goal use:
```
Meteor.Matomo.trackGoal(url, goalId)
```



```
// track an event
Meteor.Matomo.trackEvent(
	Router.current().route.path(this), // the route: ie - /home, not the full url
	{
		category: "Page or Section",
		action: "Viewed|Completed|Submitted|Etc",
		name: "Name of the Event - Submitted Contact Form",
		value: "Optional Value - like how many rows saved, etc."
	},
	{// any number of extra optional values.
	 // Pass null if you do not want to pass additional values
		"1": ["Name", "Value", "page|visit"],
		"2": ["Name", "Value", "page|visit"],
		"3": ["Name", "Value", "page|visit"],
		"4": ["Name", "Value", "page|visit"],
		"5": ["Name", "Value", "page|visit"],
		"6": ["Name", "Value", "page|visit"]
	}
);
```

#### Additional Matomo Documentation:

For trackEvent and trackPageView:
http://developer.matomo.org/api-reference/tracking-javascript
http://developer.matomo.org/api-reference/tracking-api

	- trackEvent(category, action, [name], [value]) - Logs an event with an event category (Videos, Music, Games...), an event action (Play, Pause, Duration, Add Playlist, Downloaded, Clicked...), and an optional event name and optional numeric value.
	- trackPageView([customTitle]) - Logs a visit to this page


For custom event variables:
http://matomo.org/blog/2012/10/using-custom-variables-in-matomo-tutorial
