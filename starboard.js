/*
 * Starboard Javascript API
 * version: 0.1 (10/07/2009)
 *
 * Copyright 2009 Socialytical
 *
 * Usage:
 *
 *  coming soon :)
 *
 */
var Starboard = {
    loggingEnabled: false,
    defaultHandler: function(response) {
        if (Starboard.loggingEnabled) console.log(response);
    },
    Event: {
        create: function(obj, callback) {
            if (!callback) {
                callback = "Starboard.defaultHandler";
            }
            var head = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            var params = "event[name]="+encodeURIComponent(obj['event']['name'])
                        +"&event[occurred_at]="+encodeURIComponent(obj['event']['occurred_at'])
                        +"&user[id]="+encodeURIComponent(obj['user']['id'])
                        +"&callback="+encodeURIComponent(callback);
            script.src = "http://api.starboardhq.com/events?"+params;
            script.charset = "utf-8";
            if (Starboard.loggingEnabled) console.log(script.src);
            head.appendChild(script);
        }
    }
};