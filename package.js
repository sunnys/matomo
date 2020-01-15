/* Information about this package */
Package.describe({
    // Short two-sentence summary.
    summary: "Matomo tracking for Meteor.",
    // Version number.
    version: "0.1.0",
    // Optional.  Default is package directory name.
    name: "sunnys:matomo",
    documentation: 'README.md',

    git: 'https://github.com/sunnys/matomo'
});

/* This defines your actual package */
Package.onUse(function (api) {
    api.versionsFrom('1.6.1');
    api.use([
       'ecmascript',
       'check'
    ]);

    var both = ["client", "server"];

    api.addFiles(['client/matomo.js'], ['client']);
    api.addFiles(['server/matomo.js'], ['server']);
});

/* This lets you use npm packages in your package*/
Npm.depends({
    "matomo-tracker": "2.2.1"
});
