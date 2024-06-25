!(function () {
  var analytics = (window.analytics = window.analytics || []);
  if (!analytics.initialize)
    if (analytics.invoked)
      window.console &&
        console.error &&
        console.error("Segment snippet included twice.");
    else {
      analytics.invoked = !0;
      analytics.methods = [
        "trackSubmit",
        "trackClick",
        "trackLink",
        "trackForm",
        "pageview",
        "identify",
        "reset",
        "group",
        "track",
        "ready",
        "alias",
        "debug",
        "page",
        "once",
        "off",
        "on",
      ];
      analytics.factory = function (t) {
        return function () {
          var e = Array.prototype.slice.call(arguments);
          e.unshift(t);
          analytics.push(e);
          return analytics;
        };
      };
      for (var t = 0; t < analytics.methods.length; t++) {
        var e = analytics.methods[t];
        analytics[e] = analytics.factory(e);
      }
      analytics.load = function (t, e) {
        var n = document.createElement("script");
        n.type = "text/javascript";
        n.async = !0;
        n.src =
          "https://sgmnt.envoy.com/analytics.js/v1/" + t + "/analytics.min.js";
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(n, a);
        analytics._loadOptions = e;
      };
      analytics.SNIPPET_VERSION = "4.1.0";

      analytics.load("jmhzjAC1O7mvTJ4taVydJa9YKstvuNME");

      // var page_path = "pages/index.html";
      // Turn /pages/security.html => security
      // var page_name = page_path.replace(/^pages\// ,'').replace(/\.html$/, '').replace(/\.md$/, '');

      // Get the Page Title
      const pageNameFull = document.title.split("-")[0];
      // Trim the page title so you only return the first string before a dash
      const pageNameTrimmed = pageNameFull.trim();

      analytics.page(
        "[envoy.com] " + pageNameTrimmed,
        (properties = { project: "envoy.com" })
      );
    }
})();

window.metrics = {
  trackEvent: function (event, properties, options) {
    if (properties) {
      properties.project = "envoy.com";
    } else {
      properties = { project: "envoy.com" };
    }
    analytics.track("[envoy.com] " + event, properties, options);
  },
};
