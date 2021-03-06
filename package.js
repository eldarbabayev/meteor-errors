Package.describe({
    name: 'eldarbabayev:meteor-errors',
    version: '1.0.0',
    summary: 'A pattern to display application errors to the users',
    git: 'https://github.com/eldarbabayev/meteor-errors.git',
    documentation: 'README.md'
});

Package.onUse(function(api, where) {
    api.versionsFrom('1.2.1');
    api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
    api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
    if (api.export)
	api.export('Errors');
});


