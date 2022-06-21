/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'jstree': [ 'webjars!jquery.js' ]
    }
});
