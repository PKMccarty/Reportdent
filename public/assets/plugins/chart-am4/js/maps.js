webpackJsonp(["cc1e"], {
    "46vj": function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return d
        });
        var o = i("m4/l")
          , n = i("C6dT")
          , r = i("aGXA")
          , a = i("CnhP")
          , s = i("hD5A")
          , u = i("WYhe")
          , l = i("zhwk")
          , h = i("tjMS")
          , p = i("aCit")
          , c = i("MIZb")
          , d = function(t) {
            function e() {
                var e = t.call(this) || this;
                e._chart = new s.d,
                e.className = "ZoomControl",
                e.align = "right",
                e.valign = "bottom",
                e.layout = "vertical",
                e.padding(5, 5, 5, 5);
                var i = new c.a
                  , o = e.createChild(r.a);
                o.shouldClone = !1,
                o.label.text = "+",
                o.width = Object(h.c)(100),
                o.padding(5, 5, 5, 5),
                e.plusButton = o;
                var a = e.createChild(n.a);
                a.shouldClone = !1,
                a.width = Object(h.c)(100),
                a.background.fill = i.getFor("alternativeBackground"),
                a.background.fillOpacity = .05,
                a.background.events.on("hit", e.handleBackgroundClick, e, !1),
                a.events.on("sizechanged", e.updateThumbSize, e, !1),
                e.slider = a;
                var u = a.createChild(r.a);
                u.shouldClone = !1,
                u.padding(0, 0, 0, 0),
                u.draggable = !0,
                u.events.on("drag", e.handleThumbDrag, e, !1),
                e.thumb = u;
                var l = e.createChild(r.a);
                return l.shouldClone = !1,
                l.label.text = "-",
                l.padding(5, 5, 5, 5),
                e.minusButton = l,
                e.thumb.role = "slider",
                e.thumb.readerLive = "polite",
                e.thumb.readerTitle = e.language.translate("Use arrow keys to zoom in and out"),
                e.minusButton.readerTitle = e.language.translate("Press ENTER to zoom in"),
                e.plusButton.readerTitle = e.language.translate("Press ENTER to zoom out"),
                e.applyTheme(),
                e.events.on("propertychanged", function(t) {
                    "layout" == t.property && e.fixLayout()
                }, void 0, !1),
                e._disposers.push(e._chart),
                e.fixLayout(),
                e
            }
            return o.c(e, t),
            e.prototype.fixLayout = function() {
                "vertical" == this.layout ? (this.width = 40,
                this.height = void 0,
                this.minusButton.width = Object(h.c)(100),
                this.thumb.width = Object(h.c)(100),
                this.plusButton.width = Object(h.c)(100),
                this.slider.width = Object(h.c)(100),
                this.minusButton.marginTop = 1,
                this.plusButton.marginBottom = 2,
                this.slider.height = 0,
                this.minusButton.toFront(),
                this.plusButton.toBack(),
                this.thumb.minX = 0,
                this.thumb.maxX = 0,
                this.thumb.minY = 0) : "horizontal" == this.layout && (this.thumb.minX = 0,
                this.thumb.minY = 0,
                this.thumb.maxY = 0,
                this.height = 40,
                this.width = void 0,
                this.minusButton.height = Object(h.c)(100),
                this.minusButton.width = 30,
                this.thumb.height = Object(h.c)(100),
                this.thumb.width = void 0,
                this.plusButton.height = Object(h.c)(100),
                this.plusButton.width = 30,
                this.slider.height = Object(h.c)(100),
                this.slider.width = 0,
                this.minusButton.marginLeft = 2,
                this.plusButton.marginRight = 2,
                this.minusButton.toBack(),
                this.plusButton.toFront())
            }
            ,
            e.prototype.handleBackgroundClick = function(t) {
                var e = t.target
                  , i = t.spritePoint.y
                  , o = this.chart
                  , n = Math.log(o.maxZoomLevel) / Math.LN2
                  , r = Math.log(o.minZoomLevel) / Math.LN2
                  , a = (e.pixelHeight - i) / e.pixelHeight * (r + (n - r))
                  , s = Math.pow(2, a);
                o.zoomToGeoPoint(o.zoomGeoPoint, s)
            }
            ,
            Object.defineProperty(e.prototype, "chart", {
                get: function() {
                    return this._chart.get()
                },
                set: function(t) {
                    var e = this;
                    this._chart.set(t, new s.c([t.events.on("maxsizechanged", this.updateThumbSize, this, !1), t.events.on("zoomlevelchanged", this.updateThumb, this, !1), this.minusButton.events.on("hit", function() {
                        t.zoomOut(t.zoomGeoPoint)
                    }, t, !1), Object(l.b)().body.events.on("keyup", function(i) {
                        e.topParent.hasFocused && (u.b.isKey(i.event, "enter") ? e.minusButton.isFocused ? t.zoomOut() : e.plusButton.isFocused && t.zoomIn() : u.b.isKey(i.event, "plus") ? t.zoomIn() : u.b.isKey(i.event, "minus") && t.zoomOut())
                    }, t), this.plusButton.events.on("hit", function() {
                        t.zoomIn(t.zoomGeoPoint)
                    }, t, !1)]))
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.updateThumbSize = function() {
                if (this.chart) {
                    var t = this.slider
                      , e = this.thumb;
                    "vertical" == this.layout ? (e.minHeight = Math.min(this.slider.pixelHeight, 20),
                    e.height = t.pixelHeight / this.stepCount,
                    e.maxY = t.pixelHeight - e.pixelHeight,
                    e.pixelHeight <= 1 ? e.visible = !1 : e.visible = !0) : (e.minWidth = Math.min(this.slider.pixelWidth, 20),
                    e.width = t.pixelWidth / this.stepCount,
                    e.maxX = t.pixelWidth - e.pixelWidth,
                    e.pixelWidth <= 1 ? e.visible = !1 : e.visible = !0)
                }
            }
            ,
            e.prototype.updateThumb = function() {
                var t = this.slider
                  , e = this.chart
                  , i = this.thumb;
                if (!i.isDown) {
                    var o = (Math.log(e.zoomLevel) - Math.log(this.chart.minZoomLevel)) / Math.LN2;
                    "vertical" == this.layout ? i.y = t.pixelHeight - (t.pixelHeight - i.pixelHeight) * o / this.stepCount - i.pixelHeight : i.x = t.pixelWidth * o / this.stepCount
                }
            }
            ,
            e.prototype.handleThumbDrag = function() {
                var t, e = this.slider, i = this.chart, o = this.thumb;
                t = Math.log(this.chart.minZoomLevel) / Math.LN2 + (t = "vertical" == this.layout ? this.stepCount * (e.pixelHeight - o.pixelY - o.pixelHeight) / (e.pixelHeight - o.pixelHeight) : this.stepCount * o.pixelX / e.pixelWidth);
                var n = Math.pow(2, t);
                i.zoomToGeoPoint(void 0, n, !1, 0)
            }
            ,
            Object.defineProperty(e.prototype, "stepCount", {
                get: function() {
                    return Math.log(this.chart.maxZoomLevel) / Math.LN2 - Math.log(this.chart.minZoomLevel) / Math.LN2
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.createBackground = function() {
                return new a.a
            }
            ,
            e
        }(n.a);
        p.b.registeredClasses.ZoomControl = d
    },
    QJ7E: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = {};
        i.d(o, "normalizePoint", function() {
            return P
        }),
        i.d(o, "normalizeMultiline", function() {
            return M
        }),
        i.d(o, "wrapAngleTo180", function() {
            return L
        }),
        i.d(o, "geoToPoint", function() {
            return x
        });
        var n = {};
        i.d(n, "Mercator", function() {
            return st
        }),
        i.d(n, "Miller", function() {
            return ut
        }),
        i.d(n, "Eckert6", function() {
            return lt
        }),
        i.d(n, "Orthographic", function() {
            return ht
        }),
        i.d(n, "Projection", function() {
            return j
        });
        var r = {};
        i.d(r, "LegendDataItem", function() {
            return a.b
        }),
        i.d(r, "Legend", function() {
            return a.a
        }),
        i.d(r, "LegendSettings", function() {
            return a.c
        }),
        i.d(r, "HeatLegend", function() {
            return s.a
        }),
        i.d(r, "MapChartDataItem", function() {
            return G
        }),
        i.d(r, "MapChart", function() {
            return T
        }),
        i.d(r, "MapSeriesDataItem", function() {
            return h.b
        }),
        i.d(r, "MapSeries", function() {
            return h.a
        }),
        i.d(r, "MapObject", function() {
            return d
        }),
        i.d(r, "MapPolygon", function() {
            return v
        }),
        i.d(r, "MapImage", function() {
            return m
        }),
        i.d(r, "MapLine", function() {
            return W
        }),
        i.d(r, "MapLineObject", function() {
            return D
        }),
        i.d(r, "MapSpline", function() {
            return V
        }),
        i.d(r, "MapArc", function() {
            return F
        }),
        i.d(r, "MapPolygonSeriesDataItem", function() {
            return K
        }),
        i.d(r, "MapPolygonSeries", function() {
            return U
        }),
        i.d(r, "MapLineSeriesDataItem", function() {
            return Q
        }),
        i.d(r, "MapLineSeries", function() {
            return $
        }),
        i.d(r, "MapSplineSeriesDataItem", function() {
            return tt
        }),
        i.d(r, "MapSplineSeries", function() {
            return et
        }),
        i.d(r, "MapImageSeriesDataItem", function() {
            return it
        }),
        i.d(r, "MapImageSeries", function() {
            return ot
        }),
        i.d(r, "MapArcSeriesDataItem", function() {
            return nt
        }),
        i.d(r, "MapArcSeries", function() {
            return rt
        }),
        i.d(r, "multiPolygonToGeo", function() {
            return B
        }),
        i.d(r, "multiLineToGeo", function() {
            return Z
        }),
        i.d(r, "multiPointToGeo", function() {
            return q
        }),
        i.d(r, "pointToGeo", function() {
            return X
        }),
        i.d(r, "ZoomControl", function() {
            return at.a
        }),
        i.d(r, "SmallMap", function() {
            return S.a
        }),
        i.d(r, "Projection", function() {
            return j
        }),
        i.d(r, "projections", function() {
            return n
        }),
        i.d(r, "geo", function() {
            return o
        });
        var a = i("uWmK")
          , s = i("2OXf")
          , u = i("m4/l")
          , l = i("2I/e")
          , h = i("1pVS")
          , p = i("C6dT")
          , c = i("aCit")
          , d = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapObject",
                e.isMeasured = !1,
                e.layout = "none",
                e.clickable = !0,
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e.prototype.validate = function() {
                this.series && (this.readerTitle = this.series.itemReaderText),
                t.prototype.validate.call(this)
            }
            ,
            e
        }(p.a);
        c.b.registeredClasses.MapObject = d;
        var g = i("Mtpk")
          , m = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapImage",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            Object.defineProperty(e.prototype, "latitude", {
                get: function() {
                    return this.getPropertyValue("latitude")
                },
                set: function(t) {
                    this.setPropertyValue("latitude", t, !1, !0)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "longitude", {
                get: function() {
                    return this.getPropertyValue("longitude")
                },
                set: function(t) {
                    this.setPropertyValue("longitude", t, !1, !0)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.validatePosition = function() {
                g.isNumber(this.latitude) && g.isNumber(this.longitude) && this.moveTo(this.series.chart.projection.convert({
                    latitude: this.latitude,
                    longitude: this.longitude
                })),
                t.prototype.validatePosition.call(this)
            }
            ,
            e
        }(d);
        c.b.registeredClasses.MapImage = m;
        var f = i("R6wv")
          , y = i("MIZb")
          , v = function(t) {
            function e() {
                var e = t.call(this) || this;
                e.className = "MapPolygon",
                e.polygon = e.createChild(f.a),
                e.polygon.shouldClone = !1;
                var i = new y.a;
                return e.fill = i.getFor("secondaryButton"),
                e.stroke = i.getFor("secondaryButtonStroke"),
                e.strokeOpacity = 1,
                e.tooltipPosition = "pointer",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            Object.defineProperty(e.prototype, "multiGeoPolygon", {
                get: function() {
                    return this.getPropertyValue("multiGeoPolygon")
                },
                set: function(t) {
                    this.setPropertyValue("multiGeoPolygon", t, !0)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.validate = function() {
                this.series && (this.polygon.points = this.series.chart.projection.projectGeoArea(this.multiGeoPolygon)),
                t.prototype.validate.call(this)
            }
            ,
            e.prototype.measureElement = function() {}
            ,
            Object.defineProperty(e.prototype, "latitude", {
                get: function() {
                    var t = this.dataItem;
                    return t.north + (t.south - t.north) / 2
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "longitude", {
                get: function() {
                    var t = this.dataItem;
                    return t.east + (t.west - t.east) / 2
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "pixelWidth", {
                get: function() {
                    return this.polygon.pixelWidth
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "pixelHeight", {
                get: function() {
                    return this.polygon.pixelHeight
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(d);
        c.b.registeredClasses.MapPolygon = v;
        var b = i("Gg2j");
        function P(t) {
            var e = L(t.longitude)
              , i = Math.asin(Math.sin(t.latitude * b.RADIANS)) * b.DEGREES
              , o = L(t.latitude);
            return Math.abs(o) > 90 && (e = L(e + 180)),
            t.longitude = e,
            t.latitude = i,
            t
        }
        function M(t) {
            try {
                for (var e = u.g(t), i = e.next(); !i.done; i = e.next()) {
                    var o = i.value;
                    try {
                        for (var n = u.g(o), r = n.next(); !r.done; r = n.next()) {
                            var a = r.value;
                            a = P(a)
                        }
                    } catch (t) {
                        h = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (p = n.return) && p.call(n)
                        } finally {
                            if (h)
                                throw h.error
                        }
                    }
                }
            } catch (t) {
                s = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (l = e.return) && l.call(e)
                } finally {
                    if (s)
                        throw s.error
                }
            }
            return t;
            var s, l, h, p
        }
        function L(t) {
            return (t %= 360) > 180 && (t -= 360),
            t < -180 && (t += 360),
            t
        }
        function x(t) {
            return {
                x: t.longitude,
                y: t.latitude
            }
        }
        var j = function() {
            function t() {
                this.deltaLongitude = 0,
                this.deltaLatitude = 0,
                this.deltaGama = 0,
                this.centerPoint = {
                    x: 0,
                    y: 0
                },
                this.scale = 1
            }
            return t.prototype.projectGeoArea = function(t) {
                var e = this.clipGeoArea(t);
                return this.convertGeoArea(e)
            }
            ,
            t.prototype.projectGeoLine = function(t) {
                return this.convertGeoLine(this.clipGeoLine(t))
            }
            ,
            t.prototype.getClipRectangle1 = function() {
                var t = L(180 - this.deltaLongitude)
                  , e = L(this.deltaLatitude);
                return [{
                    longitude: -180,
                    latitude: e - 90
                }, {
                    longitude: t - 1e-5,
                    latitude: e - 90
                }, {
                    longitude: t - 1e-5,
                    latitude: e + 90
                }, {
                    longitude: -180,
                    latitude: e + 90
                }]
            }
            ,
            t.prototype.getClipRectangle2 = function() {
                var t = L(180 - this.deltaLongitude);
                return [{
                    longitude: t + 1e-5,
                    latitude: -90
                }, {
                    longitude: 180,
                    latitude: -90
                }, {
                    longitude: 180,
                    latitude: 90
                }, {
                    longitude: t + 1e-5,
                    latitude: 90
                }]
            }
            ,
            t.prototype.getRect1 = function() {
                var t = L(180 - this.deltaLongitude)
                  , e = L(this.deltaLatitude);
                return {
                    north: e + 90,
                    south: e - 90,
                    west: t - 180,
                    east: t
                }
            }
            ,
            t.prototype.getRect2 = function() {
                var t = L(180 - this.deltaLongitude)
                  , e = L(this.deltaLatitude);
                return {
                    north: e + 90,
                    south: e - 90,
                    west: t,
                    east: t + 180
                }
            }
            ,
            t.prototype.clipGeoLine = function(t) {
                if (t) {
                    for (var e = [], i = this.getClipRectangle1(), o = this.getClipRectangle2(), n = 0, r = t.length; n < r; n++) {
                        var a = t[n];
                        if (a) {
                            var s = this.clipLine(a, i);
                            if (e = e.concat(s),
                            0 != this.deltaLongitude) {
                                var u = this.clipLine(a, o);
                                e = e.concat(u)
                            }
                        }
                    }
                    return e
                }
            }
            ,
            t.prototype.clipGeoArea = function(t) {
                if (t) {
                    for (var e, i, o = [], n = this.getClipRectangle1(), r = this.getClipRectangle2(), a = this.getRect1(), s = this.getRect2(), l = 0, h = t.length; l < h; l++) {
                        var p = t[l][0]
                          , c = t[l][1]
                          , d = [];
                        if (p) {
                            var g = this.getExtremes(p);
                            if (this.isInside(g, a) || this.isOutside(g, a))
                                d.push([p, c]);
                            else {
                                var m = this.clip(p, n)
                                  , f = this.clip(c, n);
                                d.push([m, f])
                            }
                            if (!this.isInside(g, s) && !this.isOutside(g, s)) {
                                var y = this.clip(p, r)
                                  , v = this.clip(c, r);
                                d.push([y, v])
                            }
                        }
                        try {
                            for (var b = u.g(d), P = b.next(); !P.done; P = b.next()) {
                                var M = P.value;
                                o.push(M)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                P && !P.done && (i = b.return) && i.call(b)
                            } finally {
                                if (e)
                                    throw e.error
                            }
                        }
                    }
                    return o
                }
            }
            ,
            t.prototype.convertGeoArea = function(t) {
                if (t) {
                    for (var e = [], i = 0, o = t.length; i < o; i++) {
                        var n = t[i][0]
                          , r = t[i][1]
                          , a = [];
                        if (n) {
                            for (var s = [], u = 0, l = n.length; u < l; u++) {
                                var h = this.convert(n[u]);
                                s.push(h)
                            }
                            a.push(s)
                        }
                        if (r) {
                            for (var p = [], c = (u = 0,
                            r.length); u < c; u++) {
                                h = this.convert(r[u]);
                                p.push(h)
                            }
                            a.push(p)
                        }
                        e.push(a)
                    }
                    return e
                }
            }
            ,
            t.prototype.convertGeoLine = function(t) {
                if (t) {
                    for (var e = [], i = 0, o = t.length; i < o; i++) {
                        for (var n = t[i], r = [], a = 0, s = n.length; a < s; a++) {
                            var u = n[a]
                              , l = this.convert(u);
                            r.push(l)
                        }
                        e.push(r)
                    }
                    return e
                }
            }
            ,
            t.prototype.convert = function(t) {
                t = P(t),
                t = this.rotate(t, this.deltaLongitude, this.deltaLatitude, this.deltaGama);
                var e = this.project(t.longitude * b.RADIANS, t.latitude * b.RADIANS);
                return {
                    x: b.round(e.x * b.DEGREES - this.centerPoint.x, 4) * this.scale,
                    y: b.round(-e.y * b.DEGREES - this.centerPoint.y, 4) * this.scale
                }
            }
            ,
            t.prototype.invert = function(t) {
                var e = this.unproject((t.x / this.scale + this.centerPoint.x) * b.RADIANS, (-t.y / this.scale - this.centerPoint.y) * b.RADIANS)
                  , i = {
                    longitude: e.longitude * b.DEGREES,
                    latitude: e.latitude * b.DEGREES
                };
                return i = this.unrotate(i, this.deltaLongitude, this.deltaLatitude, this.deltaGama)
            }
            ,
            t.prototype.project = function(t, e) {
                return {
                    x: t,
                    y: e
                }
            }
            ,
            t.prototype.unproject = function(t, e) {
                return {
                    longitude: t,
                    latitude: e
                }
            }
            ,
            t.prototype.rotate = function(t, e, i, o) {
                var n = e * b.RADIANS
                  , r = i * b.RADIANS;
                o *= b.RADIANS;
                var a = t.longitude * b.RADIANS + n
                  , s = t.latitude * b.RADIANS
                  , u = Math.cos(r)
                  , l = Math.sin(r)
                  , h = Math.cos(o)
                  , p = Math.sin(o)
                  , c = Math.cos(s)
                  , d = Math.cos(a) * c
                  , g = Math.sin(a) * c
                  , m = Math.sin(s)
                  , f = m * u + d * l;
                return {
                    longitude: b.DEGREES * Math.atan2(g * h - f * p, d * u - m * l),
                    latitude: b.DEGREES * Math.asin(f * h + g * p)
                }
            }
            ,
            t.prototype.unrotate = function(t, e, i, o) {
                var n = e * b.RADIANS
                  , r = i * b.RADIANS;
                o *= b.RADIANS;
                var a = t.longitude * b.RADIANS - n
                  , s = t.latitude * b.RADIANS
                  , u = Math.cos(r)
                  , l = Math.sin(r)
                  , h = Math.cos(o)
                  , p = Math.sin(o)
                  , c = Math.cos(s)
                  , d = Math.cos(a) * c
                  , g = Math.sin(a) * c
                  , m = Math.sin(s)
                  , f = m * h - g * p;
                return {
                    longitude: b.DEGREES * Math.atan2(g * h + m * p, d * u + f * l),
                    latitude: b.DEGREES * Math.asin(f * u - d * l)
                }
            }
            ,
            t.prototype.clipLine = function(t, e) {
                if (t && 0 != t.length) {
                    var i, o, n, r, a = function(t) {
                        return (o.longitude - i.longitude) * (t.latitude - i.latitude) > (o.latitude - i.latitude) * (t.longitude - i.longitude)
                    }, s = function() {
                        var t = i.longitude - o.longitude
                          , e = i.latitude - o.latitude
                          , a = n.longitude - r.longitude
                          , s = n.latitude - r.latitude
                          , u = i.longitude * o.latitude - i.latitude * o.longitude
                          , l = n.longitude * r.latitude - n.latitude * r.longitude
                          , h = 1 / (t * s - e * a);
                        return {
                            longitude: (u * a - l * t) * h,
                            latitude: (u * s - l * e) * h
                        }
                    }, u = t;
                    for (var l in i = e[e.length - 1],
                    e) {
                        o = e[l];
                        var h = u;
                        u = [],
                        n = h[0];
                        for (var p = 0, c = h.length; p < c; p++)
                            a(r = h[p]) ? (a(n) || u.push(s()),
                            u.push(r)) : a(n) && u.push(s()),
                            n = r;
                        i = o
                    }
                    return [u]
                }
            }
            ,
            t.prototype.clip = function(t, e) {
                if (t && 0 != t.length) {
                    var i, o, n, r, a = function(t) {
                        return (o.longitude - i.longitude) * (t.latitude - i.latitude) > (o.latitude - i.latitude) * (t.longitude - i.longitude)
                    }, s = function() {
                        var t = i.longitude - o.longitude
                          , e = i.latitude - o.latitude
                          , a = n.longitude - r.longitude
                          , s = n.latitude - r.latitude
                          , u = i.longitude * o.latitude - i.latitude * o.longitude
                          , l = n.longitude * r.latitude - n.latitude * r.longitude
                          , h = 1 / (t * s - e * a);
                        return {
                            longitude: (u * a - l * t) * h,
                            latitude: (u * s - l * e) * h
                        }
                    }, u = t;
                    for (var l in i = e[e.length - 1],
                    e) {
                        o = e[l];
                        var h = u;
                        for (var p in u = [],
                        n = h[h.length - 1],
                        h)
                            a(r = h[p]) ? (a(n) || u.push(s()),
                            u.push(r)) : a(n) && u.push(s()),
                            n = r;
                        i = o
                    }
                    return u
                }
            }
            ,
            t.prototype.getExtremes = function(t) {
                for (var e = t[0].longitude, i = t[0].longitude, o = t[0].latitude, n = t[0].latitude, r = 0; r < t.length; r++) {
                    var a = t[r].longitude
                      , s = t[r].latitude;
                    e > a && (e = a),
                    i < a && (i = a),
                    o < s && (o = s),
                    n > s && (n = s)
                }
                return {
                    north: o,
                    east: i,
                    south: n,
                    west: e
                }
            }
            ,
            t.prototype.isInside = function(t, e) {
                return t.north < e.north && t.south > e.south && t.west > e.west && t.east < e.east
            }
            ,
            t.prototype.isOutside = function(t, e) {
                return t.south > e.north || t.north < e.south || t.west > e.east || t.east < e.west
            }
            ,
            t.prototype.intermediatePoint = function(t, e, i) {
                var o = t.latitude * b.RADIANS
                  , n = t.longitude * b.RADIANS
                  , r = e.latitude * b.RADIANS
                  , a = e.longitude * b.RADIANS
                  , s = Math.sin(o)
                  , u = Math.cos(o)
                  , l = Math.sin(n)
                  , h = Math.cos(n)
                  , p = Math.sin(r)
                  , c = Math.cos(r)
                  , d = Math.sin(a)
                  , g = Math.cos(a)
                  , m = r - o
                  , f = a - n
                  , y = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(o) * Math.cos(r) * Math.sin(f / 2) * Math.sin(f / 2)
                  , v = 2 * Math.atan2(Math.sqrt(y), Math.sqrt(1 - y))
                  , P = Math.sin((1 - i) * v) / Math.sin(v)
                  , M = Math.sin(i * v) / Math.sin(v)
                  , L = P * u * h + M * c * g
                  , x = P * u * l + M * c * d
                  , j = P * s + M * p
                  , S = Math.atan2(j, Math.sqrt(L * L + x * x))
                  , C = Math.atan2(x, L);
                return {
                    latitude: S * b.DEGREES,
                    longitude: C * b.DEGREES
                }
            }
            ,
            t
        }();
        c.b.registeredClasses.Projection = j;
        var S = i("q7lS")
          , C = i("WYhe")
          , _ = i("zhwk")
          , O = i("v9UT")
          , w = i("0FpR")
          , I = i("Wglt")
          , G = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapChartDataItem",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e
        }(l.b)
          , T = function(t) {
            function e() {
                var e = t.call(this) || this;
                e.scaleRatio = 1,
                e.zoomDuration = 1e3,
                e.zoomEasing = w.cubicOut,
                e.minZoomLevel = 1,
                e.maxZoomLevel = 32,
                e._prevZoomGeoPoint = {
                    latitude: 0,
                    longitude: 0
                },
                e.className = "MapChart",
                e.projection = new j,
                e.deltaLongitude = 0,
                e.maxPanOut = .7,
                e.homeZoomLevel = 1,
                e.padding(0, 0, 0, 0),
                e.minWidth = 10,
                e.minHeight = 10,
                e.events.once("inited", e.handleAllInited, e, !1);
                var i = e.seriesContainer;
                i.draggable = !0,
                i.visible = !1,
                i.inert = !0,
                i.resizable = !0,
                i.events.on("transformed", e.handleMapTransform, e, !1),
                i.events.on("doublehit", e.handleDoubleHit, e, !1),
                i.events.on("drag", e.handleDrag, e, !1),
                i.zIndex = 0,
                i.background.fillOpacity = 0,
                e.events.on("datavalidated", e.updateExtremes, e, !1);
                var o = e.chartContainer;
                o.parent = e,
                o.isMeasured = !1,
                o.zIndex = -1,
                e._disposers.push(i.events.on("maxsizechanged", function() {
                    e.inited && (e._mapAnimation && e._mapAnimation.stop(),
                    e.updateScaleRatio(),
                    e.zoomToGeoPoint(e._zoomGeoPointReal, e.zoomLevel, !0, 0),
                    e.series.each(function(t) {
                        t.updateTooltipBounds()
                    }))
                }, void 0, !1));
                var n = o.background;
                return n.fillOpacity = 0,
                n.events.on("down", function(t) {
                    e.seriesContainer.dragStart(t.target.interactions.downPointers.getIndex(0))
                }, e),
                n.events.on("up", function(t) {
                    e.seriesContainer.dragStop()
                }, e),
                n.events.on("doublehit", e.handleDoubleHit, e),
                n.focusable = !0,
                o.events.on("down", e.handleMapDown, e, !1),
                e.background.fillOpacity = 0,
                e.background.readerTitle = e.language.translate("Use plus and minus keys on your keyboard to zoom in and out"),
                e._disposers.push(Object(_.b)().body.events.on("keyup", function(t) {
                    if (e.topParent.hasFocused && (!e._zoomControl || !e._zoomControl.thumb.isFocused))
                        switch (C.b.getEventKey(t.event)) {
                        case "up":
                            e.pan({
                                x: 0,
                                y: .1
                            });
                            break;
                        case "down":
                            e.pan({
                                x: 0,
                                y: -.1
                            });
                            break;
                        case "left":
                            e.pan({
                                x: .1,
                                y: 0
                            });
                            break;
                        case "right":
                            e.pan({
                                x: -.1,
                                y: 0
                            })
                        }
                }, e)),
                e.mouseWheelBehavior = "zoom",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e.prototype.handleAllInited = function() {
                var t = !0;
                this.seriesContainer.visible = !0,
                this.series.each(function(e) {
                    e.inited || (t = !1)
                }),
                t ? (this.updateExtremes(),
                this.goHome(0)) : c.b.events.once("exitframe", this.handleAllInited, this, !1)
            }
            ,
            e.prototype.handleDrag = function() {
                var t = this.seriesWidth * this.zoomLevel * this.scaleRatio
                  , e = this.seriesHeight * this.zoomLevel * this.scaleRatio
                  , i = this.seriesContainer.pixelX
                  , o = this.seriesContainer.pixelY
                  , n = this.maxPanOut
                  , r = Math.min(this.maxWidth * (1 - n) - t / 2, -t * (n - .5));
                i < r && (i = r);
                var a = Math.max(this.maxWidth * n + t / 2, this.maxWidth + t * (n - .5));
                i > a && (i = a);
                var s = Math.min(this.maxHeight * (1 - n) - e / 2, -e * (n - .5));
                o < s && (o = s);
                var u = Math.max(this.maxHeight * n + e / 2, this.maxHeight + e * (n - .5));
                o > u && (o = u),
                this.seriesContainer.moveTo({
                    x: i,
                    y: o
                }, void 0, void 0, !0),
                this._zoomGeoPointReal = this.zoomGeoPoint
            }
            ,
            e.prototype.applyInternalDefaults = function() {
                t.prototype.applyInternalDefaults.call(this),
                g.hasValue(this.readerTitle) || (this.readerTitle = this.language.translate("Map"))
            }
            ,
            e.prototype.handleMapDown = function() {
                this._mapAnimation && this._mapAnimation.stop()
            }
            ,
            e.prototype.handleDoubleHit = function(t) {
                var e = O.documentPointToSvg(t.point, this.htmlContainer)
                  , i = this.svgPointToGeo(e);
                this.zoomIn(i)
            }
            ,
            e.prototype.handleWheel = function(t) {
                var e = O.documentPointToSvg(t.point, this.htmlContainer)
                  , i = this.svgPointToGeo(e);
                t.shift.y < 0 ? this.zoomIn(i) : this.zoomOut(i)
            }
            ,
            Object.defineProperty(e.prototype, "mouseWheelBehavior", {
                get: function() {
                    return this.getPropertyValue("mouseWheelBehavior")
                },
                set: function(t) {
                    this.setPropertyValue("mouseWheelBehavior", t) && ("none" != t ? (this._mouseWheelDisposer = this.chartContainer.events.on("wheel", this.handleWheel, this, !1),
                    this._disposers.push(this._mouseWheelDisposer)) : (this._mouseWheelDisposer && this._mouseWheelDisposer.dispose(),
                    this.chartContainer.wheelable = !1))
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "projection", {
                get: function() {
                    return this.getPropertyValue("projection")
                },
                set: function(t) {
                    t.deltaLongitude = this.deltaLongitude,
                    this.setPropertyValue("projection", t) && this.invalidateProjection()
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.updateExtremes = function() {
                var t = this
                  , e = this.west
                  , i = this.east
                  , o = this.north
                  , n = this.south;
                this.west = null,
                this.east = null,
                this.north = null,
                this.south = null;
                var r = this.chartContainer;
                if (I.each(this.series.iterator(), function(e) {
                    (t.west > e.west || !g.isNumber(t.west)) && (t.west = e.west),
                    (t.east < e.east || !g.isNumber(t.east)) && (t.east = e.east),
                    (t.north < e.north || !g.isNumber(t.north)) && (t.north = e.north),
                    (t.south > e.south || !g.isNumber(t.south)) && (t.south = e.south)
                }),
                g.isNumber(this.east) && g.isNumber(this.north)) {
                    this.projection.centerPoint = {
                        x: 0,
                        y: 0
                    },
                    this.projection.scale = 1;
                    var a = this.projection.deltaLongitude;
                    this.projection.deltaLongitude = 0;
                    var s = this.projection.convert({
                        longitude: (this.east - this.west) / 2,
                        latitude: this.north
                    })
                      , u = this.projection.convert({
                        longitude: (this.east - this.west) / 2,
                        latitude: this.south
                    })
                      , l = this.projection.convert({
                        longitude: this.west,
                        latitude: 0
                    })
                      , h = this.projection.convert({
                        longitude: this.east,
                        latitude: 0
                    });
                    this.projection.deltaLongitude = a,
                    this.projection.centerPoint = {
                        x: l.x + (h.x - l.x) / 2,
                        y: s.y + (u.y - s.y) / 2
                    };
                    var p = void 0
                      , c = h.x - l.x
                      , d = u.y - s.y
                      , m = r.innerWidth / c
                      , f = r.innerHeight / d;
                    p = m > f ? f : m,
                    (g.isNaN(p) || p == 1 / 0) && (p = 1);
                    var y = !1;
                    this.projection.scale != p && (this.projection.scale = p,
                    y = !0),
                    this.seriesWidth = c * p,
                    this.seriesHeight = d * p;
                    var v = this.projection.convert({
                        longitude: (this.east - this.west) / 2,
                        latitude: this.north
                    })
                      , b = this.projection.convert({
                        longitude: this.west - this.deltaLongitude,
                        latitude: 0
                    });
                    this._centerGeoPoint = this.projection.invert({
                        x: b.x + this.seriesWidth / 2,
                        y: v.y + this.seriesHeight / 2
                    }),
                    this.seriesContainer.definedBBox = {
                        x: b.x,
                        y: v.y,
                        width: this.seriesWidth,
                        height: this.seriesHeight
                    },
                    this.updateScaleRatio();
                    var P = this.seriesContainer;
                    P.x = r.pixelWidth / 2,
                    P.y = r.pixelHeight / 2,
                    (y || e != this.west || i != this.east || o != this.north || n != this.south) && I.each(this.series.iterator(), function(t) {
                        t.invalidate()
                    })
                }
            }
            ,
            e.prototype.updateScaleRatio = function() {
                var t, e = this.chartContainer.innerWidth / this.seriesWidth, i = this.chartContainer.innerHeight / this.seriesHeight;
                t = e > i ? i : e,
                (g.isNaN(t) || t == 1 / 0) && (t = 1),
                t != this.scaleRatio && (this.scaleRatio = t,
                I.each(this.series.iterator(), function(e) {
                    e.scale = t,
                    e.updateTooltipBounds()
                }),
                this.dispatch("scaleratiochanged"))
            }
            ,
            e.prototype.svgPointToGeo = function(t) {
                var e = this.series.getIndex(0);
                if (e) {
                    var i = O.svgPointToSprite(t, e);
                    return this.seriesPointToGeo(i)
                }
            }
            ,
            e.prototype.geoPointToSVG = function(t) {
                var e = this.series.getIndex(0);
                if (e) {
                    var i = this.geoPointToSeries(t);
                    return O.spritePointToSvg(i, e)
                }
            }
            ,
            e.prototype.seriesPointToGeo = function(t) {
                return this.projection.invert(t)
            }
            ,
            e.prototype.geoPointToSeries = function(t) {
                return this.projection.convert(t)
            }
            ,
            Object.defineProperty(e.prototype, "geodata", {
                get: function() {
                    return this._geodata
                },
                set: function(t) {
                    t != this._geodata && (this._geodata = t,
                    this.invalidateData(),
                    I.each(this._dataUsers.iterator(), function(t) {
                        t.invalidateData()
                    }))
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.zoomToGeoPoint = function(t, e, i, o) {
                var n = this;
                if (t || (t = this.zoomGeoPoint),
                t) {
                    this._zoomGeoPointReal = t,
                    e = b.fitToRange(e, this.minZoomLevel, this.maxZoomLevel);
                    var r = this.projection.convert(t)
                      , a = this.geoPointToSVG(t)
                      , s = O.svgPointToSprite(a, this);
                    return i && (s = {
                        x: this.maxWidth / 2,
                        y: this.maxHeight / 2
                    }),
                    g.isNumber(o) || (o = this.zoomDuration),
                    this._mapAnimation = this.seriesContainer.animate([{
                        property: "scale",
                        to: e
                    }, {
                        property: "x",
                        to: s.x - r.x * e * this.scaleRatio - this.pixelPaddingLeft
                    }, {
                        property: "y",
                        to: s.y - r.y * e * this.scaleRatio - this.pixelPaddingTop
                    }], o, this.zoomEasing),
                    this._disposers.push(this._mapAnimation.events.on("animationended", function() {
                        n._zoomGeoPointReal = n.zoomGeoPoint
                    })),
                    this.seriesContainer.validatePosition(),
                    this._mapAnimation
                }
            }
            ,
            e.prototype.zoomToMapObject = function(t, e, i, o) {
                if (void 0 == i && (i = !0),
                t instanceof m)
                    return g.isNaN(e) && (e = 5),
                    this.zoomToGeoPoint({
                        latitude: t.latitude,
                        longitude: t.longitude
                    }, e, i, o);
                var n = t.dataItem;
                if (n && g.isNumber(n.zoomLevel) && (e = n.zoomLevel),
                t instanceof v) {
                    var r = t.dataItem
                      , a = t.polygon.bbox;
                    g.isNumber(e) || (e = Math.min(this.seriesWidth / a.width, this.seriesHeight / a.height));
                    var s = void 0;
                    if (r && g.hasValue(r.zoomGeoPoint))
                        s = r.zoomGeoPoint;
                    else {
                        var u = {
                            x: a.x + a.width / 2,
                            y: a.y + a.height / 2
                        }
                          , l = O.spritePointToSprite(u, t.polygon, t.series);
                        s = this.seriesPointToGeo(l)
                    }
                    return this.zoomToGeoPoint(s, e, !0, o)
                }
            }
            ,
            e.prototype.zoomToRectangle = function(t, e, i, o, n, r, a) {
                g.isNaN(n) && (n = 1);
                var s = n * Math.min((this.south - this.north) / (i - t), (this.west - this.east) / (o - e));
                return this.zoomToGeoPoint({
                    latitude: t + (i - t) / 2,
                    longitude: o + (e - o) / 2
                }, s, r, a)
            }
            ,
            e.prototype.zoomIn = function(t, e) {
                return this.zoomToGeoPoint(t, 2 * this.zoomLevel, !1, e)
            }
            ,
            e.prototype.zoomOut = function(t, e) {
                return this.zoomToGeoPoint(t, this.zoomLevel / 2, !1, e)
            }
            ,
            e.prototype.pan = function(t, e) {
                var i = this.geoPointToSVG(this.zoomGeoPoint);
                i.x += this.pixelWidth * t.x,
                i.y += this.pixelHeight * t.y,
                this.zoomToGeoPoint(this.svgPointToGeo(i), this.zoomLevel, !0, e)
            }
            ,
            Object.defineProperty(e.prototype, "zoomGeoPoint", {
                get: function() {
                    var t = O.spritePointToSvg({
                        x: this.pixelWidth / 2,
                        y: this.pixelHeight / 2
                    }, this);
                    return this.svgPointToGeo(t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "zoomLevel", {
                get: function() {
                    return this.seriesContainer.scale
                },
                set: function(t) {
                    this.seriesContainer.scale = t
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.handleMapTransform = function() {
                this.zoomLevel != this._prevZoomLevel && (this.dispatch("zoomlevelchanged"),
                this._prevZoomLevel = this.zoomLevel),
                !this.zoomGeoPoint || this._prevZoomGeoPoint.latitude == this.zoomGeoPoint.latitude && this._prevZoomGeoPoint.longitude == this.zoomGeoPoint.longitude || this.dispatch("mappositionchanged")
            }
            ,
            Object.defineProperty(e.prototype, "smallMap", {
                get: function() {
                    if (!this._smallMap) {
                        var t = new S.a;
                        this.smallMap = t
                    }
                    return this._smallMap
                },
                set: function(t) {
                    this._smallMap && this.removeDispose(this._smallMap),
                    this._smallMap = t,
                    this._smallMap.chart = this,
                    t.parent = this.chartContainer
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "zoomControl", {
                get: function() {
                    return this._zoomControl
                },
                set: function(t) {
                    this._zoomControl && this.removeDispose(this._zoomControl),
                    this._zoomControl = t,
                    t.chart = this,
                    t.parent = this.chartContainer
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.createSeries = function() {
                return new h.a
            }
            ,
            Object.defineProperty(e.prototype, "deltaLongitude", {
                get: function() {
                    return this.getPropertyValue("deltaLongitude")
                },
                set: function(t) {
                    this.setPropertyValue("deltaLongitude", L(t)) && this.invalidateProjection()
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "maxPanOut", {
                get: function() {
                    return this.getPropertyValue("maxPanOut")
                },
                set: function(t) {
                    this.setPropertyValue("maxPanOut", t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "homeGeoPoint", {
                get: function() {
                    return this.getPropertyValue("homeGeoPoint")
                },
                set: function(t) {
                    this.setPropertyValue("homeGeoPoint", t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "homeZoomLevel", {
                get: function() {
                    return this.getPropertyValue("homeZoomLevel")
                },
                set: function(t) {
                    this.setPropertyValue("homeZoomLevel", t)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.invalidateProjection = function() {
                this.updateExtremes(),
                this.projection.deltaLongitude = this.deltaLongitude,
                I.each(this.series.iterator(), function(t) {
                    t.invalidate()
                })
            }
            ,
            Object.defineProperty(e.prototype, "geodataSource", {
                get: function() {
                    return this._dataSources.geodata || this.getDataSource("geodata"),
                    this._dataSources.geodata
                },
                set: function(t) {
                    var e = this;
                    this._dataSources.geodata && this.removeDispose(this._dataSources.geodata),
                    this._dataSources.geodata = t,
                    this._dataSources.geodata.component = this,
                    this.events.on("inited", function() {
                        e.loadData("geodata")
                    }, this, !1),
                    this.setDataSourceEvents(t, "geodata")
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.processConfig = function(e) {
                g.hasValue(e.projection) && g.isString(e.projection) && (e.projection = this.createClassInstance(e.projection)),
                g.hasValue(e.smallMap) && !g.hasValue(e.smallMap.type) && (e.smallMap.type = "SmallMap"),
                g.hasValue(e.zoomControl) && !g.hasValue(e.zoomControl.type) && (e.zoomControl.type = "ZoomControl"),
                t.prototype.processConfig.call(this, e)
            }
            ,
            e.prototype.configOrder = function(e, i) {
                return e == i ? 0 : "smallMap" == e ? 1 : "smallMap" == i ? -1 : "series" == e ? 1 : "series" == i ? -1 : t.prototype.configOrder.call(this, e, i)
            }
            ,
            e.prototype.asIs = function(e) {
                return "projection" == e || t.prototype.asIs.call(this, e)
            }
            ,
            Object.defineProperty(e.prototype, "centerGeoPoint", {
                get: function() {
                    return this._centerGeoPoint
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.goHome = function(t) {
                var e = this.homeGeoPoint;
                e || (e = this.centerGeoPoint),
                e && this.zoomToGeoPoint(e, this.homeZoomLevel, !0, t)
            }
            ,
            e.prototype.setPaper = function(e) {
                return this.svgContainer && (this.svgContainer.hideOverflow = !0),
                t.prototype.setPaper.call(this, e)
            }
            ,
            e.prototype.setLegend = function(e) {
                t.prototype.setLegend.call(this, e),
                e && (e.parent = this.chartContainer)
            }
            ,
            e
        }(l.a);
        c.b.registeredClasses.MapChart = T;
        var D = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.adjustRotation = !0,
                e.className = "MapLineObject",
                e.isMeasured = !1,
                e.layout = "none",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e.prototype.validatePosition = function() {
                if (this.mapLine) {
                    var e = this.mapLine.positionToPoint(this.position);
                    if (this.x = e.x,
                    this.y = e.y,
                    this.adjustRotation && (this.rotation = e.angle),
                    this.mapLine.dataItem) {
                        var i = this.mapLine.dataItem.component;
                        this.scale = 1 / i.scale
                    }
                }
                t.prototype.validatePosition.call(this)
            }
            ,
            Object.defineProperty(e.prototype, "position", {
                get: function() {
                    return this.getPropertyValue("position")
                },
                set: function(t) {
                    this.setPropertyValue("position", t, !1, !0)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "adjustRotation", {
                get: function() {
                    return this.getPropertyValue("adjustRotation")
                },
                set: function(t) {
                    this.setPropertyValue("adjustRotation", t, !1, !0)
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(p.a);
        c.b.registeredClasses.MapLineObject = D;
        var z = i("Rnbi")
          , R = i("vMqJ")
          , A = i("jfaP")
          , N = i("8ZqG")
          , E = i("tjMS")
          , W = function(t) {
            function e() {
                var e = t.call(this) || this;
                e.className = "MapLine",
                e.createLine(),
                e.line.stroke = Object(N.c)(),
                e.line.parent = e,
                e.strokeOpacity = 1;
                var i = new y.a;
                return e.stroke = i.getFor("grid"),
                e.shortestDistance = !0,
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e.prototype.createLine = function() {
                this.line = new A.a
            }
            ,
            e.prototype.positionToPoint = function(t) {
                return this.line ? this.line.positionToPoint(t) : {
                    x: 0,
                    y: 0,
                    angle: 0
                }
            }
            ,
            Object.defineProperty(e.prototype, "multiGeoLine", {
                get: function() {
                    return this.getPropertyValue("multiGeoLine")
                },
                set: function(t) {
                    this.setPropertyValue("multiGeoLine", M(t), !0)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "imagesToConnect", {
                get: function() {
                    return this.getPropertyValue("imagesToConnect")
                },
                set: function(t) {
                    for (var e = this, i = 0, o = t.length; i < o; i++) {
                        var n = t[i];
                        if (g.isString(n)) {
                            if (!this.map.hasKey(n))
                                continue;
                            n = this.map.getKey(n),
                            t[i] = n
                        }
                        n.events.on("propertychanged", function(t) {
                            "longitude" != t.property && "latitude" != t.property || e.invalidate()
                        }, this, !1)
                    }
                    this.setPropertyValue("imagesToConnect", t)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.validate = function() {
                var e, i, o = this.series.chart, n = this.multiGeoLine || [];
                if (this.imagesToConnect) {
                    var r = [];
                    n = [r];
                    try {
                        for (var a = u.g(this.imagesToConnect), s = a.next(); !s.done; s = a.next()) {
                            var l = s.value;
                            r.push({
                                longitude: l.longitude,
                                latitude: l.latitude
                            })
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            s && !s.done && (i = a.return) && i.call(a)
                        } finally {
                            if (e)
                                throw e.error
                        }
                    }
                }
                if (this.shortestDistance) {
                    for (var h = [], p = 0, c = n.length; p < c; p++) {
                        for (var d = n[p], g = [], m = 1, f = d.length; m < f; m++) {
                            for (var y = d[m - 1], v = d[m], b = 4 * Math.max(Math.abs(y.latitude - v.latitude), Math.abs(y.longitude - v.longitude)), P = 0; P < b; P++) {
                                var M = o.projection.intermediatePoint(y, v, P / b);
                                if (g.length > 0) {
                                    var L = g[g.length - 1];
                                    Math.abs(L.longitude - M.longitude) > 359 && (h.push(g),
                                    g = [])
                                }
                                g.push(M)
                            }
                            g.push(v)
                        }
                        h.push(g)
                    }
                    n = h
                }
                this.line.segments = o.projection.projectGeoLine(n),
                this._arrow && this._arrow.validatePosition(),
                I.each(this.lineObjects.iterator(), function(t) {
                    t.validatePosition()
                }),
                t.prototype.validate.call(this)
            }
            ,
            e.prototype.measureElement = function() {}
            ,
            Object.defineProperty(e.prototype, "shortestDistance", {
                get: function() {
                    return this.getPropertyValue("shortestDistance")
                },
                set: function(t) {
                    this.setPropertyValue("shortestDistance", t, !0)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "lineObjects", {
                get: function() {
                    return this._lineObjects || (this._lineObjects = new R.e(new D),
                    this._lineObjects.events.on("inserted", this.handleLineObjectAdded, this, !1),
                    this._disposers.push(new R.c(this._lineObjects)),
                    this._disposers.push(this._lineObjects.template)),
                    this._lineObjects
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.handleLineObjectAdded = function(t) {
                var e = t.newValue;
                e.mapLine = this,
                e.parent = this
            }
            ,
            Object.defineProperty(e.prototype, "arrow", {
                get: function() {
                    if (!this._arrow) {
                        var t = this.createChild(D);
                        t.shouldClone = !1,
                        t.width = 8,
                        t.height = 10,
                        t.mapLine = this,
                        t.position = .5;
                        var e = t.createChild(z.a);
                        e.fillOpacity = 1,
                        e.width = Object(E.c)(100),
                        e.height = Object(E.c)(100),
                        e.rotation = 90,
                        e.horizontalCenter = "middle",
                        e.verticalCenter = "middle",
                        this._arrow = t
                    }
                    return this._arrow
                },
                set: function(t) {
                    this._arrow = t,
                    t.mapLine = this,
                    t.parent = this
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.copyFrom = function(e) {
                t.prototype.copyFrom.call(this, e),
                this.line.copyFrom(e.line),
                this.lineObjects.copyFrom(e.lineObjects),
                e._arrow && (this.arrow = e.arrow.clone())
            }
            ,
            Object.defineProperty(e.prototype, "latitude", {
                get: function() {
                    var t = this.dataItem;
                    return t.north + (t.south - t.north) / 2
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "longitude", {
                get: function() {
                    var t = this.dataItem;
                    return t.east + (t.west - t.east) / 2
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(d);
        c.b.registeredClasses.MapLine = W;
        var H = i("xgTw")
          , V = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapSpline",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e.prototype.createLine = function() {
                this.line = new H.a,
                this.line.tensionX = .8,
                this.line.tensionY = .8
            }
            ,
            Object.defineProperty(e.prototype, "shortestDistance", {
                get: function() {
                    return !1
                },
                set: function(t) {},
                enumerable: !0,
                configurable: !0
            }),
            e
        }(W);
        c.b.registeredClasses.MapSpline = V;
        var k = i("MXvJ")
          , F = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapArc",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e.prototype.createLine = function() {
                this.line = new k.a
            }
            ,
            Object.defineProperty(e.prototype, "shortestDistance", {
                get: function() {
                    return !1
                },
                set: function(t) {},
                enumerable: !0,
                configurable: !0
            }),
            e
        }(W);
        function B(t) {
            for (var e = [], i = 0, o = t.length; i < o; i++) {
                var n = t[i][0]
                  , r = t[i][1];
                e[i] = [],
                n && e[i].push(q(n)),
                r && e[i].push(q(r))
            }
            return e
        }
        function Z(t) {
            for (var e = [], i = 0, o = t.length; i < o; i++)
                e.push(q(t[i]));
            return e
        }
        function q(t) {
            for (var e = [], i = 0, o = t.length; i < o; i++)
                e.push(X(t[i]));
            return e
        }
        function X(t) {
            return {
                longitude: t[0],
                latitude: t[1]
            }
        }
        c.b.registeredClasses.MapArc = F;
        var J = i("hJ5i")
          , Y = i("hD5A")
          , K = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapPolygonSeriesDataItem",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            Object.defineProperty(e.prototype, "mapPolygon", {
                get: function() {
                    var t = this;
                    if (!this._mapPolygon) {
                        var e = this.component.mapPolygons.create();
                        this._mapPolygon = e,
                        this.addSprite(e),
                        this._disposers.push(e),
                        this._disposers.push(new Y.b(function() {
                            t.component.mapPolygons.removeValue(e)
                        }
                        ))
                    }
                    return this._mapPolygon
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "polygon", {
                get: function() {
                    return this._polygon
                },
                set: function(t) {
                    this._polygon = t,
                    this.multiGeoPolygon = B([t])
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "multiPolygon", {
                get: function() {
                    return this._multiPolygon
                },
                set: function(t) {
                    this._multiPolygon = t,
                    this.multiGeoPolygon = B(t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "geoPolygon", {
                get: function() {
                    return this._geoPolygon
                },
                set: function(t) {
                    this._geoPolygon = t,
                    this.multiGeoPolygon = [t]
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "multiGeoPolygon", {
                get: function() {
                    return this._multiGeoPolygon
                },
                set: function(t) {
                    this._multiGeoPolygon = t,
                    this.updateAreaExtremes(t),
                    this.mapPolygon.multiGeoPolygon = this._multiGeoPolygon
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.updateAreaExtremes = function(t) {
                for (var e = 0, i = t.length; e < i; e++) {
                    var o = t[e][0];
                    this.updateExtremes(o)
                }
            }
            ,
            e
        }(h.b)
          , U = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.parsingStepDuration = 250,
                e.className = "MapPolygonSeries",
                e.dataFields.multiPolygon = "multiPolygon",
                e.dataFields.polygon = "polygon",
                e.dataFields.geoPolygon = "geoPolygon",
                e.dataFields.multiGeoPolygon = "multiGeoPolygon",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e.prototype.createDataItem = function() {
                return new K
            }
            ,
            e.prototype.processIncExc = function() {
                this.mapPolygons.clear(),
                t.prototype.processIncExc.call(this)
            }
            ,
            e.prototype.validateData = function() {
                var e = this;
                if (this.data.length > 0 && 0 == this._parseDataFrom && this.mapPolygons.clear(),
                this.west = null,
                this.east = null,
                this.north = null,
                this.south = null,
                this.useGeodata || this.geodata) {
                    var i = this._dataSources.geodata ? void 0 : this.chart.geodata;
                    if (this.geodata && (i = this.geodata),
                    i) {
                        var o = void 0;
                        if ("FeatureCollection" == i.type ? o = i.features : "Feature" == i.type ? o = [i] : -1 != ["Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon"].indexOf(i.type) ? o = [{
                            geometry: i
                        }] : console.log("nothing found in geoJSON"),
                        o)
                            for (var n = function(t, e) {
                                var i = o[t]
                                  , n = i.geometry;
                                if (n) {
                                    var a = n.type
                                      , s = i.id;
                                    if ("Polygon" == a || "MultiPolygon" == a) {
                                        if (!r.checkInclude(r.include, r.exclude, s))
                                            return "continue";
                                        var u = n.coordinates;
                                        u && "Polygon" == a && (u = [u]);
                                        var l = J.find(r.data, function(t, e) {
                                            return t.id == s
                                        });
                                        l ? l.multiPolygon || (l.multiPolygon = u) : (l = {
                                            multiPolygon: u,
                                            id: s
                                        },
                                        r.data.push(l)),
                                        O.softCopyProperties(i.properties, l)
                                    }
                                }
                            }, r = this, a = 0, s = o.length; a < s; a++)
                                n(a)
                    }
                }
                t.prototype.validateData.call(this),
                I.each(this.dataItems.iterator(), function(t) {
                    e.mapPolygons.moveValue(t.mapPolygon)
                })
            }
            ,
            e.prototype.validate = function() {
                t.prototype.validate.call(this),
                I.each(this.mapPolygons.iterator(), function(t) {
                    t.validate()
                })
            }
            ,
            Object.defineProperty(e.prototype, "mapPolygons", {
                get: function() {
                    if (!this._mapPolygons) {
                        var t = new v
                          , e = new R.e(t);
                        this._disposers.push(new R.c(e)),
                        this._disposers.push(e.template),
                        e.template.focusable = !0,
                        e.events.on("inserted", this.handleObjectAdded, this, !1),
                        this._mapPolygons = e
                    }
                    return this._mapPolygons
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.getPolygonById = function(t) {
                return I.find(this.mapPolygons.iterator(), function(e) {
                    return e.dataItem.dataContext.id == t
                })
            }
            ,
            e.prototype.copyFrom = function(e) {
                this.mapPolygons.template.copyFrom(e.mapPolygons.template),
                t.prototype.copyFrom.call(this, e)
            }
            ,
            e
        }(h.a);
        c.b.registeredClasses.MapPolygonSeries = U,
        c.b.registeredClasses.MapPolygonSeriesDataItem = K;
        var Q = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapLineSeriesDataItem",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            Object.defineProperty(e.prototype, "mapLine", {
                get: function() {
                    var t = this;
                    if (!this._mapLine) {
                        var e = this.component.mapLines.create();
                        this._mapLine = e,
                        this.addSprite(e),
                        this._disposers.push(e),
                        this._disposers.push(new Y.b(function() {
                            t.component.mapLines.removeValue(e)
                        }
                        ))
                    }
                    return this._mapLine
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "line", {
                get: function() {
                    return this._line
                },
                set: function(t) {
                    this._line = t,
                    this.multiGeoLine = Z([t])
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "multiLine", {
                get: function() {
                    return this._multiLine
                },
                set: function(t) {
                    this._multiLine = t,
                    this.multiGeoLine = Z(t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "geoLine", {
                get: function() {
                    return this._geoLine
                },
                set: function(t) {
                    this._geoLine = t,
                    this.multiGeoLine = [t]
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "multiGeoLine", {
                get: function() {
                    return this._multiGeoLine
                },
                set: function(t) {
                    this._multiGeoLine = t,
                    this.updateLineExtremes(t),
                    this.mapLine.multiGeoLine = this._multiGeoLine
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.updateLineExtremes = function(t) {
                for (var e = 0, i = t.length; e < i; e++) {
                    var o = t[e];
                    this.updateExtremes(o)
                }
            }
            ,
            e
        }(h.b)
          , $ = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapLineSeries",
                e.dataFields.multiLine = "multiLine",
                e.dataFields.line = "line",
                e.dataFields.geoLine = "geoLine",
                e.dataFields.multiGeoLine = "multiGeoLine",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e.prototype.createDataItem = function() {
                return new Q
            }
            ,
            e.prototype.validateData = function() {
                var e = this;
                if (this.data.length > 0 && this.mapLines.clear(),
                this.useGeodata || this.geodata) {
                    var i = this.chart.geodata;
                    if (i) {
                        var o = void 0;
                        if ("FeatureCollection" == i.type ? o = i.features : "Feature" == i.type ? o = [i] : -1 != ["Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon"].indexOf(i.type) ? o = [{
                            geometry: i
                        }] : console.log("nothing found in geoJSON"),
                        o)
                            for (var n = function(t, e) {
                                var i = o[t]
                                  , n = i.geometry;
                                if (n) {
                                    var a = n.type
                                      , s = i.id;
                                    if ("LineString" == a || "MultiLineString" == a) {
                                        if (!r.checkInclude(r.include, r.exclude, s))
                                            return "continue";
                                        var u = n.coordinates;
                                        u && "MultiLineString" == a && (u = [u]);
                                        var l = J.find(r.data, function(t, e) {
                                            return t.id == s
                                        });
                                        l ? l.multiLineString || (l.multiLineString = u) : (l = {
                                            multiLineString: u,
                                            id: s
                                        },
                                        r.data.push(l)),
                                        O.softCopyProperties(i.properties, l)
                                    }
                                }
                            }, r = this, a = 0, s = o.length; a < s; a++)
                                n(a)
                    }
                }
                t.prototype.validateData.call(this),
                I.each(this.dataItems.iterator(), function(t) {
                    e.mapLines.moveValue(t.mapLine)
                })
            }
            ,
            Object.defineProperty(e.prototype, "mapLines", {
                get: function() {
                    if (!this._mapLines) {
                        var t = this.createLine()
                          , e = new R.e(t);
                        this._disposers.push(new R.c(e)),
                        this._disposers.push(e.template),
                        e.events.on("inserted", this.handleObjectAdded, this, !1),
                        this._mapLines = e
                    }
                    return this._mapLines
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.createLine = function() {
                return new W
            }
            ,
            e.prototype.validate = function() {
                t.prototype.validate.call(this),
                I.each(this.mapLines.iterator(), function(t) {
                    t.validate()
                })
            }
            ,
            e.prototype.copyFrom = function(e) {
                this.mapLines.template.copyFrom(e.mapLines.template),
                t.prototype.copyFrom.call(this, e)
            }
            ,
            e
        }(h.a);
        c.b.registeredClasses.MapLineSeries = $,
        c.b.registeredClasses.MapLineSeriesDataItem = Q;
        var tt = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapSplineSeriesDataItem",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e
        }(Q)
          , et = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapSplineSeries",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e.prototype.createDataItem = function() {
                return new tt
            }
            ,
            e.prototype.createLine = function() {
                return new V
            }
            ,
            e
        }($);
        c.b.registeredClasses.MapSplineSeries = et,
        c.b.registeredClasses.MapSplineSeriesDataItem = tt;
        var it = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapImageSeriesDataItem",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            Object.defineProperty(e.prototype, "mapImage", {
                get: function() {
                    var t = this;
                    if (!this._mapImage) {
                        var e = this.component.mapImages.create();
                        this.addSprite(e),
                        this._mapImage = e,
                        this._disposers.push(e),
                        this._disposers.push(new Y.b(function() {
                            t.component.mapImages.removeValue(e)
                        }
                        ))
                    }
                    return this._mapImage
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "point", {
                get: function() {
                    return this._point
                },
                set: function(t) {
                    this._point = t,
                    this.geoPoint = X(t)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "geoPoint", {
                get: function() {
                    return this._geoPoint
                },
                set: function(t) {
                    this._geoPoint = t,
                    this.updateExtremes([this._geoPoint]),
                    this.mapImage.latitude = this._geoPoint.latitude,
                    this.mapImage.longitude = this._geoPoint.longitude
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        }(h.b)
          , ot = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapImageSeries",
                e.dataFields.multiPoint = "multiPoint",
                e.dataFields.point = "point",
                e.dataFields.geoPoint = "geoPoint",
                e.dataFields.multiGeoPoint = "multiGeoPoint",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e.prototype.createDataItem = function() {
                return new it
            }
            ,
            e.prototype.validateData = function() {
                var e = this;
                if (this.data.length > 0 && this.mapImages.clear(),
                this.useGeodata && (this.useGeodata || this.geodata)) {
                    var i = this.chart.geodata
                      , o = void 0;
                    if ("FeatureCollection" == i.type ? o = i.features : "Feature" == i.type ? o = [i] : -1 != ["Point", "LineString", "Polygon", "MultiPoint", "MultiLineString", "MultiPolygon"].indexOf(i.type) ? o = [{
                        geometry: i
                    }] : console.log("nothing found in geoJSON"),
                    o)
                        for (var n = function(t, e) {
                            var i = o[t]
                              , n = i.geometry;
                            if (n) {
                                var a = n.type
                                  , s = i.id;
                                if ("Point" == a || "MultiPoint" == a) {
                                    if (!r.checkInclude(r.include, r.exclude, s))
                                        return "continue";
                                    var u = n.coordinates;
                                    u && "MultiPoint" == a && (u = [u]);
                                    var l = J.find(r.data, function(t, e) {
                                        return t.id == s
                                    });
                                    l ? l.multiPoint || (l.multiPoint = u) : (l = {
                                        multiPoint: u,
                                        id: s
                                    },
                                    r.data.push(l)),
                                    O.softCopyProperties(i.properties, l)
                                }
                            }
                        }, r = this, a = 0, s = o.length; a < s; a++)
                            n(a)
                }
                t.prototype.validateData.call(this),
                I.each(this.dataItems.iterator(), function(t) {
                    var i = t.mapImage;
                    e.mapImages.moveValue(i),
                    g.isNumber(i.latitude) && g.isNumber(i.latitude) && (t.geoPoint = {
                        latitude: i.latitude,
                        longitude: i.longitude
                    })
                })
            }
            ,
            Object.defineProperty(e.prototype, "mapImages", {
                get: function() {
                    if (!this._mapImages) {
                        var t = new m
                          , e = new R.e(t);
                        this._disposers.push(new R.c(e)),
                        this._disposers.push(e.template),
                        e.template.focusable = !0,
                        e.events.on("inserted", this.handleObjectAdded, this, !1),
                        this._mapImages = e
                    }
                    return this._mapImages
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.validateDataElement = function(e) {
                t.prototype.validateDataElement.call(this, e),
                e.mapImage.invalidate()
            }
            ,
            e.prototype.validate = function() {
                t.prototype.validate.call(this),
                I.each(this.mapImages.iterator(), function(t) {
                    t.validatePosition()
                })
            }
            ,
            e.prototype.copyFrom = function(e) {
                this.mapImages.template.copyFrom(e.mapImages.template),
                t.prototype.copyFrom.call(this, e)
            }
            ,
            e
        }(h.a);
        c.b.registeredClasses.MapImageSeries = ot,
        c.b.registeredClasses.MapImageSeriesDataItem = it;
        var nt = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapArcSeriesDataItem",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e
        }(Q)
          , rt = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.className = "MapArcSeries",
                e.applyTheme(),
                e
            }
            return u.c(e, t),
            e.prototype.createDataItem = function() {
                return new nt
            }
            ,
            e.prototype.createLine = function() {
                return new F
            }
            ,
            e
        }($);
        c.b.registeredClasses.MapArcSeries = rt,
        c.b.registeredClasses.MapArcSeriesDataItem = nt;
        var at = i("46vj")
          , st = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.c(e, t),
            e.prototype.unproject = function(t, e) {
                return {
                    longitude: t,
                    latitude: 2 * Math.atan(Math.exp(e)) - Math.PI / 2
                }
            }
            ,
            e.prototype.project = function(t, e) {
                return {
                    x: t,
                    y: Math.log(Math.tan((Math.PI / 2 + e) / 2))
                }
            }
            ,
            e
        }(j);
        c.b.registeredClasses.Mercator = st;
        var ut = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.c(e, t),
            e.prototype.unproject = function(t, e) {
                return {
                    longitude: t,
                    latitude: 2.5 * Math.atan(Math.exp(.8 * e)) - .625 * Math.PI
                }
            }
            ,
            e.prototype.project = function(t, e) {
                return {
                    x: t,
                    y: 1.25 * Math.log(Math.tan(Math.PI / 4 + .4 * e))
                }
            }
            ,
            e
        }(j);
        c.b.registeredClasses.Miller = ut;
        var lt = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.c(e, t),
            e.prototype.unproject = function(t, e) {
                var i = 1 + Math.PI / 2
                  , o = Math.sqrt(i / 2);
                return {
                    longitude: 2 * t * o / (1 + Math.cos(e *= o)),
                    latitude: Math.asin((e + Math.sin(e)) / i)
                }
            }
            ,
            e.prototype.project = function(t, e) {
                for (var i = (1 + Math.PI / 2) * Math.sin(e), o = 0, n = 1 / 0; o < 10 && Math.abs(n) > 1e-5; o++)
                    e -= n = (e + Math.sin(e) - i) / (1 + Math.cos(e));
                return i = Math.sqrt(2 + Math.PI),
                {
                    x: t * (1 + Math.cos(e)) / i,
                    y: 2 * e / i
                }
            }
            ,
            e
        }(j);
        c.b.registeredClasses.Eckert6 = lt;
        var ht = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return u.c(e, t),
            e.prototype.project = function(t, e) {
                return {
                    x: Math.cos(e) * Math.sin(t),
                    y: Math.sin(e)
                }
            }
            ,
            e.prototype.getClipRectangle1 = function() {
                var t = 90 - this.deltaLongitude
                  , e = -this.deltaLatitude;
                return [{
                    longitude: t - 180,
                    latitude: e - 90
                }, {
                    longitude: t - 1e-5,
                    latitude: e - 90
                }, {
                    longitude: t - 1e-5,
                    latitude: e + 90
                }, {
                    longitude: t - 180,
                    latitude: e + 90
                }]
            }
            ,
            e.prototype.getRect1 = function() {
                var t = 90 - this.deltaLongitude
                  , e = -this.deltaLatitude;
                return {
                    north: e + 90,
                    south: e - 90,
                    west: t - 180,
                    east: t
                }
            }
            ,
            e.prototype.getClipRectangle2 = function() {
                var t, e = 90 - this.deltaLongitude, i = -this.deltaLatitude;
                return [{
                    longitude: 1e-5 + e - 180 + (t = e > 0 ? -360 : 360),
                    latitude: i - 90
                }, {
                    longitude: e - 1e-5 + t,
                    latitude: i - 90
                }, {
                    longitude: e - 1e-5 + t,
                    latitude: i + 90
                }, {
                    longitude: 1e-5 + e - 180 + t,
                    latitude: i + 90
                }]
            }
            ,
            e.prototype.getRect2 = function() {
                var t, e = 90 - this.deltaLongitude, i = -this.deltaLatitude;
                return {
                    north: i + 90,
                    south: i - 90,
                    west: e - 180 + (t = e > 0 ? -360 : 360),
                    east: e + t
                }
            }
            ,
            e.prototype.clipGeoArea = function(t) {
                if (t) {
                    for (var e, i, o = [], n = this.getClipRectangle1(), r = this.getClipRectangle2(), a = this.getRect1(), s = this.getRect2(), l = 0, h = t.length; l < h; l++) {
                        var p = t[l][0]
                          , c = t[l][1]
                          , d = [];
                        if (p) {
                            var g = this.getExtremes(p);
                            if (this.isInside(g, a) || this.isOutside(g, a))
                                this.isInside(g, a) && d.push([p, c]);
                            else {
                                var m = this.clip(p, n)
                                  , f = this.clip(c, n);
                                d.push([m, f])
                            }
                            if (this.isInside(g, s) || this.isOutside(g, s))
                                this.isInside(g, s) && d.push([p, c]);
                            else {
                                var y = this.clip(p, r)
                                  , v = this.clip(c, r);
                                d.push([y, v])
                            }
                        }
                        try {
                            for (var P = u.g(d), M = P.next(); !M.done; M = P.next()) {
                                var L = M.value;
                                o.push(L)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                M && !M.done && (i = P.return) && i.call(P)
                            } finally {
                                if (e)
                                    throw e.error
                            }
                        }
                    }
                    for (l = 0,
                    h = o.length; l < h; l++) {
                        if (p = o[l][0])
                            for (var x = p.length, j = p[x - 1], S = 0; S < x; S++) {
                                var C = p[S];
                                if (b.round(C.longitude, 4) == b.round(j.longitude, 4)) {
                                    var _ = Math.abs(2 * (j.latitude - C.latitude))
                                      , O = [];
                                    if (_ > 1) {
                                        for (var w = 1; w < _; w++)
                                            O.push({
                                                longitude: j.longitude,
                                                latitude: j.latitude + (C.latitude - j.latitude) / _ * w
                                            });
                                        p.splice.apply(p, u.f([S, 0], O)),
                                        S += O.length
                                    }
                                }
                                j = C
                            }
                    }
                    return o
                }
            }
            ,
            e
        }(j);
        c.b.registeredClasses.Orthographic = ht,
        window.am4maps = r
    },
    q7lS: function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return d
        });
        var o = i("m4/l")
          , n = i("C6dT")
          , r = i("GtDR")
          , a = i("vMqJ")
          , s = i("hD5A")
          , u = i("aCit")
          , l = i("8ZqG")
          , h = i("MIZb")
          , p = i("v9UT")
          , c = i("Mtpk")
          , d = function(t) {
            function e() {
                var e = t.call(this) || this;
                e._chart = new s.d,
                e.className = "SmallMap",
                e.align = "left",
                e.valign = "bottom",
                e.percentHeight = 20,
                e.percentWidth = 20,
                e.margin(5, 5, 5, 5);
                var i = new h.a;
                e.background.fillOpacity = .9,
                e.background.fill = i.getFor("background"),
                e.events.on("hit", e.moveToPosition, e, !1),
                e.events.on("maxsizechanged", e.updateMapSize, e, !1),
                e.seriesContainer = e.createChild(n.a),
                e.seriesContainer.shouldClone = !1;
                var o = e.createChild(r.a);
                return o.shouldClone = !1,
                o.stroke = i.getFor("alternativeBackground"),
                o.strokeWidth = 1,
                o.strokeOpacity = .5,
                o.fill = Object(l.c)(),
                o.verticalCenter = "middle",
                o.horizontalCenter = "middle",
                o.isMeasured = !1,
                e.rectangle = o,
                e._disposers.push(e._chart),
                e.applyTheme(),
                e
            }
            return o.c(e, t),
            Object.defineProperty(e.prototype, "series", {
                get: function() {
                    return this._series || (this._series = new a.b,
                    this._series.events.on("inserted", this.handleSeriesAdded, this, !1),
                    this._series.events.on("removed", this.handleSeriesRemoved, this, !1)),
                    this._series
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.handleSeriesAdded = function(t) {
                var e = t.newValue;
                if (this.chart.series.contains(e)) {
                    var i = e.clone();
                    this._series.removeValue(e),
                    this._series.push(i),
                    e = i,
                    this.chart.dataUsers.push(i)
                }
                e.chart = this.chart,
                e.parent = this.seriesContainer,
                e.interactionsEnabled = !1
            }
            ,
            e.prototype.handleSeriesRemoved = function(t) {
                this.invalidate()
            }
            ,
            e.prototype.moveToPosition = function(t) {
                var e = t.svgPoint
                  , i = p.svgPointToSprite(e, this.rectangle)
                  , o = this.chart.zoomLevel
                  , n = Math.min(this.percentWidth, this.percentHeight) / 100
                  , r = (i.x + this.rectangle.pixelWidth / 2) / n * o
                  , a = (i.y + this.rectangle.pixelHeight / 2) / n * o
                  , s = this.chart.svgPointToGeo({
                    x: r,
                    y: a
                });
                this.chart.zoomToGeoPoint(s, this.chart.zoomLevel, !0)
            }
            ,
            Object.defineProperty(e.prototype, "chart", {
                get: function() {
                    return this._chart.get()
                },
                set: function(t) {
                    this.chart != t && this._chart.set(t, new s.c([t.events.on("mappositionchanged", this.updateRectangle, this, !1), t.events.on("scaleratiochanged", this.updateMapSize, this, !1)]))
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.updateRectangle = function() {
                var t = this.chart
                  , e = t.zoomLevel
                  , i = this.rectangle;
                i.width = this.pixelWidth / e,
                i.height = this.pixelHeight / e;
                var o = Math.min(this.percentWidth, this.percentHeight) / 100
                  , n = t.seriesContainer;
                i.x = Math.ceil((e * n.pixelWidth / 2 - n.pixelX) * o / e + i.pixelWidth / 2),
                i.y = Math.ceil((e * n.pixelHeight / 2 - n.pixelY) * o / e + i.pixelHeight / 2),
                i.validate()
            }
            ,
            e.prototype.updateMapSize = function() {
                this.chart && (this.seriesContainer.scale = this.chart.scaleRatio * Math.min(this.percentWidth, this.percentHeight) / 100,
                this.updateRectangle(),
                this.afterDraw())
            }
            ,
            e.prototype.afterDraw = function() {
                t.prototype.afterDraw.call(this),
                this.seriesContainer.moveTo({
                    x: this.pixelWidth / 2,
                    y: this.pixelHeight / 2
                }),
                this.rectangle.maskRectangle = {
                    x: -1,
                    y: -1,
                    width: Math.ceil(this.pixelWidth + 2),
                    height: Math.ceil(this.pixelHeight + 2)
                }
            }
            ,
            e.prototype.processConfig = function(e) {
                if (e && c.hasValue(e.series) && c.isArray(e.series))
                    for (var i = 0, o = e.series.length; i < o; i++) {
                        var n = e.series[i];
                        c.hasValue(n) && c.isString(n) && this.map.hasKey(n) && (e.series[i] = this.map.getKey(n))
                    }
                t.prototype.processConfig.call(this, e)
            }
            ,
            e
        }(n.a);
        u.b.registeredClasses.SmallMap = d
    }
}, ["QJ7E"]);
