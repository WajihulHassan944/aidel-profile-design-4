! function(t, i, d) {
    "use strict";
    var g;
    void 0 === t.lightwidget && (t.lightwidget = {}, g = null, t.addEventListener("message", function(t) {
        var e; - 1 !== d.indexOf(t.origin.replace(/^https?:\/\//i, "")) && ("lightwidget_lightbox" === (e = "object" == typeof t.data ? t.data : JSON.parse(t.data)).type && null === g ? ((g = i.createElement("script")).src = "https://cdn.lightwidget.com/widgets/lightwidget-lightbox.y.js".replace("y", e.version), i.body.appendChild(g)) : e.size <= 0 || [].forEach.call(i.querySelectorAll('iframe[src*="lightwidget.com/widgets/x"],iframe[data-src*="lightwidget.com/widgets/x"],iframe[src*="instansive.com/widgets/x"]'.replace(/x/g, e.widgetId)), function(t) {
            t.style.height = e.size + "px"
        }))
    }, !1))
}(window, document, ["lightwidget.com", "dev.lightwidget.com", "cdn.lightwidget.com"]);