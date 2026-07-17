import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/highcharts/modules/contour.js
var require_contour = __commonJS({
  "node_modules/highcharts/modules/contour.js"(exports, module) {
    !/**
    * Highmaps JS v12.6.0 (2026-04-13)
    * @module highcharts/modules/contour
    * @requires highcharts
    *
    * (c) 2009-2025 Highsoft AS
    *
    * License: www.highcharts.com/license
    */
    (function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(e._Highcharts, e._Highcharts.Axis, e._Highcharts.Color, e._Highcharts.SeriesRegistry) : "function" == typeof define && define.amd ? define("highcharts/modules/contour", ["highcharts/highcharts"], function(e2) {
        return t(e2, e2.Axis, e2.Color, e2.SeriesRegistry);
      }) : "object" == typeof exports ? exports["highcharts/modules/contour"] = t(e._Highcharts, e._Highcharts.Axis, e._Highcharts.Color, e._Highcharts.SeriesRegistry) : e.Highcharts = t(e.Highcharts, e.Highcharts.Axis, e.Highcharts.Color, e.Highcharts.SeriesRegistry);
    })("u" < typeof window ? exports : window, (e, t, i, r) => (() => {
      "use strict";
      var o, s, n, l, a = { 512: (e2) => {
        e2.exports = r;
      }, 532: (e2) => {
        e2.exports = t;
      }, 620: (e2) => {
        e2.exports = i;
      }, 944: (t2) => {
        t2.exports = e;
      } }, h = {};
      function u(e2) {
        var t2 = h[e2];
        if (void 0 !== t2) return t2.exports;
        var i2 = h[e2] = { exports: {} };
        return a[e2](i2, i2.exports, u), i2.exports;
      }
      u.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return u.d(t2, { a: t2 }), t2;
      }, u.d = (e2, t2) => {
        for (var i2 in t2) u.o(t2, i2) && !u.o(e2, i2) && Object.defineProperty(e2, i2, { enumerable: true, get: t2[i2] });
      }, u.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
      var f = {};
      u.d(f, { default: () => K });
      var c = u(944), d = u.n(c), p = u(532), g = u.n(p), m = u(620), v = u.n(m);
      let { doc: x, win: y } = d();
      function C(e2, t2, i2, r2 = {}) {
        let o2 = "function" == typeof e2 && e2.prototype || e2;
        Object.hasOwnProperty.call(o2, "hcEvents") || (o2.hcEvents = {});
        let s2 = o2.hcEvents;
        d().Point && e2 instanceof d().Point && e2.series && e2.series.chart && (e2.series.chart.runTrackerClick = true);
        let n2 = e2.addEventListener;
        n2 && n2.call(e2, t2, i2, !!d().supportsPassiveEvents && { passive: void 0 === r2.passive ? -1 !== t2.indexOf("touch") : r2.passive, capture: false }), s2[t2] || (s2[t2] = []);
        let l2 = { fn: i2, order: "number" == typeof r2.order ? r2.order : 1 / 0 };
        return s2[t2].push(l2), s2[t2].sort((e3, t3) => e3.order - t3.order), function() {
          !(function(e3, t3, i3) {
            function r3(t4, i4) {
              let r4 = e3.removeEventListener;
              r4 && r4.call(e3, t4, i4, false);
            }
            function o3(i4) {
              let o4, s4;
              e3.nodeName && (t3 ? (o4 = {})[t3] = true : o4 = i4, O(o4, function(e4, t4) {
                if (i4[t4]) for (s4 = i4[t4].length; s4--; ) r3(t4, i4[t4][s4].fn);
              }));
            }
            let s3 = "function" == typeof e3 && e3.prototype || e3;
            if (Object.hasOwnProperty.call(s3, "hcEvents")) {
              let e4 = s3.hcEvents;
              if (t3) {
                let s4 = e4[t3] || [];
                i3 ? (e4[t3] = s4.filter(function(e5) {
                  return i3 !== e5.fn;
                }), r3(t3, i3)) : (o3(e4), e4[t3] = []);
              } else o3(e4), delete s3.hcEvents;
            }
          })(e2, t2, i2);
        };
      }
      function b(e2, t2, i2, r2) {
        let o2 = {};
        return !(function e3(t3, o3, s2, n2) {
          let l2 = i2 ? o3 : t3;
          O(t3, function(i3, a2) {
            if (!n2 && r2 && r2.indexOf(a2) > -1 && o3[a2]) {
              var h2;
              i3 = w(h2 = i3) ? h2 : [h2], s2[a2] = [];
              for (let t4 = 0; t4 < Math.max(i3.length, o3[a2].length); t4++) o3[a2][t4] && (void 0 === i3[t4] ? s2[a2][t4] = o3[a2][t4] : (s2[a2][t4] = {}, e3(i3[t4], o3[a2][t4], s2[a2][t4], n2 + 1)));
            } else I(i3, true) && !i3.nodeType ? (s2[a2] = w(i3) ? [] : {}, e3(i3, o3[a2] || {}, s2[a2], n2 + 1), 0 === Object.keys(s2[a2]).length && ("colorAxis" !== a2 || 0 !== n2) && delete s2[a2]) : (t3[a2] !== o3[a2] || a2 in t3 && !(a2 in o3)) && "__proto__" !== a2 && "constructor" !== a2 && (s2[a2] = l2[a2]);
          });
        })(e2, t2, o2, 0), o2;
      }
      function U(e2, t2) {
        let i2;
        for (i2 in e2 || (e2 = {}), t2) e2[i2] = t2[i2];
        return e2;
      }
      function A(e2) {
        return I(e2) && "number" == typeof e2.nodeType;
      }
      function w(e2) {
        let t2 = Object.prototype.toString.call(e2);
        return "[object Array]" === t2 || "[object Array Iterator]" === t2;
      }
      function I(e2, t2) {
        return !!e2 && "object" == typeof e2 && (!t2 || !w(e2));
      }
      function E(e2, ...t2) {
        let i2, r2 = [e2, ...t2], o2 = {}, s2 = function(e3, t3) {
          return "object" != typeof e3 && (e3 = {}), O(t3, function(i3, r3) {
            if ("__proto__" !== r3 && "constructor" !== r3) {
              let o3;
              !I(i3, true) || (o3 = i3 == null ? void 0 : i3.constructor, I(i3, true) && !A(i3) && (o3 == null ? void 0 : o3.name) && "Object" !== o3.name) || A(i3) ? e3[r3] = t3[r3] : e3[r3] = s2(e3[r3] || {}, i3);
            }
          }), e3;
        };
        true === e2 && (o2 = r2[1], r2 = Array.prototype.slice.call(r2, 2));
        let n2 = r2.length;
        for (i2 = 0; i2 < n2; i2++) o2 = s2(o2, r2[i2]);
        return o2;
      }
      function O(e2, t2, i2) {
        for (let r2 in e2) Object.hasOwnProperty.call(e2, r2) && t2.call(i2 || e2[r2], e2[r2], r2, e2);
      }
      function P() {
        let e2 = arguments, t2 = e2.length;
        for (let i2 = 0; i2 < t2; i2++) {
          let t3 = e2[i2];
          if (null != t3) return t3;
        }
      }
      function S(e2, t2, i2) {
        return /%$/.test(e2) ? t2 * parseFloat(e2) / 100 + (i2 || 0) : parseFloat(e2);
      }
      Array.prototype.find;
      let { parse: M } = v();
      (o = s || (s = {})).initDataClasses = function(e2) {
        let t2 = this.chart, i2 = this.legendItem = this.legendItem || {}, r2 = this.options, o2 = e2.dataClasses || [], s2, n2, l2 = t2.options.chart.colorCount, a2 = 0, h2;
        this.dataClasses = n2 = [], i2.labels = [];
        for (let e3 = 0, i3 = o2.length; e3 < i3; ++e3) s2 = E(s2 = o2[e3]), n2.push(s2), (t2.styledMode || !s2.color) && ("category" === r2.dataClassColor ? (t2.styledMode || (l2 = (h2 = t2.options.colors || []).length, s2.color = h2[a2]), s2.colorIndex = a2, ++a2 === l2 && (a2 = 0)) : s2.color = M(r2.minColor).tweenTo(M(r2.maxColor), i3 < 2 ? 0.5 : e3 / (i3 - 1)));
      }, o.initStops = function() {
        let e2 = this.options, t2 = this.stops = e2.stops || [[0, e2.minColor || ""], [1, e2.maxColor || ""]];
        for (let e3 = 0, i2 = t2.length; e3 < i2; ++e3) t2[e3].color = M(t2[e3][1]);
      }, o.normalizedValue = function(e2) {
        let t2 = this.max || 0, i2 = this.min || 0;
        return this.logarithmic && (e2 = this.logarithmic.log2lin(e2)), 1 - (t2 - e2) / (t2 - i2 || 1);
      }, o.toColor = function(e2, t2) {
        let i2, r2, o2, s2, n2, l2, a2 = this.dataClasses, h2 = this.stops;
        if (a2) {
          for (l2 = a2.length; l2--; ) if (r2 = (n2 = a2[l2]).from, o2 = n2.to, (void 0 === r2 || e2 >= r2) && (void 0 === o2 || e2 <= o2)) {
            s2 = n2.color, t2 && (t2.dataClass = l2, t2.colorIndex = n2.colorIndex);
            break;
          }
        } else {
          for (i2 = this.normalizedValue(e2), l2 = h2.length; l2-- && !(i2 > h2[l2][0]); ) ;
          r2 = h2[l2] || h2[l2 + 1], i2 = 1 - ((o2 = h2[l2 + 1] || r2)[0] - i2) / (o2[0] - r2[0] || 1), s2 = r2.color.tweenTo(o2.color, i2);
        }
        return s2;
      };
      let L = s, { parse: B } = v();
      !(function(e2) {
        let t2;
        function i2() {
          let { userOptions: e3 } = this;
          if (this.colorAxis = [], e3.colorAxis) {
            var i3;
            e3.colorAxis = w(i3 = e3.colorAxis) ? i3 : [i3], e3.colorAxis.map((e4) => new t2(this, e4));
          }
        }
        function r2(e3) {
          let t3 = this.chart.colorAxis || [], i3 = (t4) => {
            let i4 = e3.allItems.indexOf(t4);
            -1 !== i4 && (this.destroyItem(e3.allItems[i4]), e3.allItems.splice(i4, 1));
          }, r3 = [], o3, s3;
          for (t3.forEach(function(e4) {
            o3 = e4.options, (o3 == null ? void 0 : o3.showInLegend) && (o3.dataClasses && o3.visible ? r3 = r3.concat(e4.getDataClassLegendSymbols()) : o3.visible && r3.push(e4), e4.series.forEach(function(e5) {
              (!e5.options.showInLegend || o3.dataClasses) && ("point" === e5.options.legendType ? e5.points.forEach(function(e6) {
                i3(e6);
              }) : i3(e5));
            }));
          }), s3 = r3.length; s3--; ) e3.allItems.unshift(r3[s3]);
        }
        function o2(e3) {
          e3.visible && e3.item.legendColor && e3.item.legendItem.symbol.attr({ fill: e3.item.legendColor });
        }
        function s2(e3) {
          var _a;
          (_a = this.chart.colorAxis) == null ? void 0 : _a.forEach((t3) => {
            t3.update({}, e3.redraw);
          });
        }
        function n2() {
          var _a;
          (((_a = this.chart.colorAxis) == null ? void 0 : _a.length) || this.colorAttribs) && this.translateColors();
        }
        function l2() {
          let e3 = this.axisTypes;
          e3 ? -1 === e3.indexOf("colorAxis") && e3.push("colorAxis") : this.axisTypes = ["colorAxis"];
        }
        function a2(e3) {
          let t3 = this, i3 = e3 ? "show" : "hide";
          t3.visible = t3.options.visible = !!e3, ["graphic", "dataLabel"].forEach(function(e4) {
            t3[e4] && t3[e4][i3]();
          }), this.series.buildKDTree();
        }
        function h2() {
          let e3 = this, t3 = this.getPointsCollection(), i3 = this.options.nullColor, r3 = this.colorAxis, o3 = this.colorKey;
          t3.forEach((t4) => {
            let s3 = t4.getNestedProperty(o3), n3 = t4.options.color || (t4.isNull || null === t4.value ? i3 : r3 && void 0 !== s3 ? r3.toColor(s3, t4) : t4.color || e3.color);
            n3 && t4.color !== n3 && (t4.color = n3, "point" === e3.options.legendType && t4.legendItem && t4.legendItem.label && e3.chart.legend.colorizeItem(t4, t4.visible));
          });
        }
        function u2() {
          this.elem.attr("fill", B(this.start).tweenTo(B(this.end), this.pos), void 0, true);
        }
        function f2() {
          this.elem.attr("stroke", B(this.start).tweenTo(B(this.end), this.pos), void 0, true);
        }
        e2.compose = function(e3, c2, d2, p2, g2) {
          var m2;
          let v2, x2 = c2.prototype, y2 = d2.prototype, b2 = g2.prototype;
          x2.collectionsWithUpdate.includes("colorAxis") || (t2 = e3, x2.collectionsWithUpdate.push("colorAxis"), x2.collectionsWithInit.colorAxis = [x2.addColorAxis], C(c2, "afterCreateAxes", i2), v2 = (m2 = c2).prototype.createAxis, m2.prototype.createAxis = function(e4, i3) {
            if ("colorAxis" !== e4) return v2.apply(this, arguments);
            let r3 = new t2(this, E(i3.axis, { index: this[e4].length, isX: false }));
            return this.isDirtyLegend = true, this.axes.forEach((e5) => {
              e5.series = [];
            }), this.series.forEach((e5) => {
              e5.bindAxes(), e5.isDirtyData = true;
            }), P(i3.redraw, true) && this.redraw(i3.animation), r3;
          }, y2.fillSetter = u2, y2.strokeSetter = f2, C(p2, "afterGetAllItems", r2), C(p2, "afterColorizeItem", o2), C(p2, "afterUpdate", s2), U(b2, { optionalAxis: "colorAxis", translateColors: h2 }), U(b2.pointClass.prototype, { setVisible: a2 }), C(g2, "afterTranslate", n2, { order: 1 }), C(g2, "bindAxes", l2));
        }, e2.pointSetVisible = a2;
      })(n || (n = {}));
      let T = n;
      var F = u(512), N = u.n(F);
      let { defaultOptions: V } = d(), { series: _ } = N();
      V.colorAxis = E(V.xAxis, { lineWidth: 0, minPadding: 0, maxPadding: 0, gridLineColor: "#ffffff", gridLineWidth: 1, tickPixelInterval: 72, startOnTick: true, endOnTick: true, offset: 0, marker: { animation: { duration: 50 }, width: 0.01, color: "#999999" }, labels: { distance: 8, overflow: "justify", rotation: 0 }, minColor: "#e6e9ff", maxColor: "#0022ff", tickLength: 5, title: { margin: 5 }, showInLegend: true });
      class D extends g() {
        static compose(e2, t2, i2, r2) {
          T.compose(D, e2, t2, i2, r2);
        }
        constructor(e2, t2) {
          super(e2, t2), this.coll = "colorAxis", this.visible = true, this.init(e2, t2);
        }
        init(e2, t2) {
          let i2 = e2.options.legend || {}, r2 = t2.layout ? "vertical" !== t2.layout : "vertical" !== i2.layout;
          this.side = t2.side || r2 ? 2 : 1, this.reversed = t2.reversed, this.opposite = !r2, super.init(e2, t2, "colorAxis"), this.userOptions = t2, w(e2.userOptions.colorAxis) && (e2.userOptions.colorAxis[this.index] = t2), t2.dataClasses && this.initDataClasses(t2), this.initStops(), this.horiz = r2, this.zoomEnabled = false;
        }
        hasData() {
          return !!(this.tickPositions || []).length;
        }
        setTickPositions() {
          if (!this.dataClasses) return super.setTickPositions();
        }
        setOptions(e2) {
          let t2 = this.chart.options.legend || {}, i2 = V.colorAxis, r2 = E("vertical" !== (e2.layout || t2.layout || i2.layout) ? { title: { rotation: 0 } } : { title: { rotation: 90, margin: 10 } }, i2, e2, { showEmpty: false, visible: this.chart.options.legend.enabled && false !== e2.visible });
          super.setOptions(r2), this.options.crosshair = this.options.marker;
        }
        setAxisSize() {
          var _a;
          let e2 = this.chart, t2 = (_a = this.legendItem) == null ? void 0 : _a.symbol, { width: i2, height: r2 } = this.getSize();
          t2 && (this.left = +t2.attr("x"), this.top = +t2.attr("y"), this.width = i2 = +t2.attr("width"), this.height = r2 = +t2.attr("height"), this.right = e2.chartWidth - this.left - i2, this.bottom = e2.chartHeight - this.top - r2, this.pos = this.horiz ? this.left : this.top), this.len = (this.horiz ? i2 : r2) || D.defaultLegendLength;
        }
        getOffset() {
          var _a;
          let e2 = (_a = this.legendItem) == null ? void 0 : _a.group, t2 = this.chart.axisOffset[this.side];
          if (e2) {
            this.axisParent = e2, super.getOffset();
            let i2 = this.chart.legend;
            i2.allItems.forEach(function(e3) {
              e3 instanceof D && e3.drawLegendSymbol(i2, e3);
            }), i2.render(), this.chart.getMargins(true), this.added || (this.added = true), this.labelLeft = 0, this.labelRight = this.width, this.chart.axisOffset[this.side] = t2;
          }
        }
        setLegendColor() {
          let e2 = this.horiz, t2 = this.reversed, i2 = +!!t2, r2 = +!t2, o2 = e2 ? [i2, 0, r2, 0] : [0, r2, 0, i2];
          this.legendColor = { linearGradient: { x1: o2[0], y1: o2[1], x2: o2[2], y2: o2[3] }, stops: this.stops };
        }
        drawLegendSymbol(e2, t2) {
          var _a;
          let i2 = t2.legendItem || {}, r2 = e2.padding, o2 = e2.options, s2 = this.options.labels, n2 = P(o2.itemDistance, 10), l2 = this.horiz, { width: a2, height: h2 } = this.getSize(), u2 = P(o2.labelPadding, l2 ? 16 : 30);
          this.setLegendColor();
          let f2 = 0, c2 = 0;
          if (((_a = this.options.title) == null ? void 0 : _a.text) && !this.axisTitle) {
            this.axisGroup || (this.axisParent = i2.group, this.createGroups());
            let e3 = this.len, t3 = this.top, r3 = this.left, o3 = this.width;
            this.len = l2 ? a2 : h2, this.top = 0, this.left = 0, this.width = a2, this.addTitle(true), this.len = e3, this.top = t3, this.left = r3, this.width = o3;
          }
          if (this.axisTitle) {
            let e3 = this.axisTitle.getBBox();
            f2 = e3.height, c2 = e3.width;
          }
          let d2 = this.options.title || {}, p2 = this.axisTitle ? d2.margin ?? 0 : 0, g2 = l2 ? f2 + p2 : 0;
          i2.symbol || (i2.symbol = this.chart.renderer.symbol("roundedRect").attr({ r: o2.symbolRadius ?? 3, zIndex: 1 }).add(i2.group)), i2.symbol.attr({ x: 0, y: (e2.baseline || 0) - 11 + g2, width: a2, height: h2 }), l2 ? (i2.labelWidth = Math.max(a2 + r2 + n2, c2 || 0), i2.labelHeight = h2 + r2 + u2 + f2 + p2) : (i2.labelWidth = a2 + r2 + (s2.x ?? s2.distance ?? 0) + (this.maxLabelLength || 0) + (c2 || 0) + p2, i2.labelHeight = Math.max(h2 + r2, f2 || 0));
        }
        getTitlePosition(e2) {
          var _a;
          let t2 = super.getTitlePosition(e2), i2 = ((_a = this.options.title) == null ? void 0 : _a.margin) ?? 0;
          if (this.horiz && e2) t2.y = this.top - i2;
          else if (!this.horiz && e2) {
            let e3 = this.options.labels || {}, r2 = e3.x ?? e3.distance ?? 0;
            t2.x = this.left + this.width + r2 + (this.maxLabelLength || 0) + i2;
          }
          return t2;
        }
        setState(e2) {
          this.series.forEach(function(t2) {
            t2.setState(e2);
          });
        }
        setVisible() {
        }
        getSeriesExtremes() {
          let e2 = this.series, t2, i2, r2, o2, s2 = e2.length;
          for (this.dataMin = 1 / 0, this.dataMax = -1 / 0; s2--; ) {
            for (let n2 of (i2 = (o2 = e2[s2]).colorKey = P(o2.options.colorKey, o2.colorKey, o2.pointValKey, o2.zoneAxis, "y"), r2 = o2[i2 + "Min"] && o2[i2 + "Max"], [i2, "value", "y"])) if ((t2 = o2.getColumn(n2)).length) break;
            if (r2) o2.minColorValue = o2[i2 + "Min"], o2.maxColorValue = o2[i2 + "Max"];
            else {
              let e3 = _.prototype.getExtremes.call(o2, t2);
              o2.minColorValue = e3.dataMin, o2.maxColorValue = e3.dataMax;
            }
            null != o2.minColorValue && null != o2.maxColorValue && (this.dataMin = Math.min(this.dataMin, o2.minColorValue), this.dataMax = Math.max(this.dataMax, o2.maxColorValue)), r2 || _.prototype.applyExtremes.call(o2);
          }
        }
        drawCrosshair(e2, t2) {
          let i2, r2 = this.legendItem || {}, o2 = t2 == null ? void 0 : t2.plotX, s2 = t2 == null ? void 0 : t2.plotY, n2 = this.pos, l2 = this.len;
          t2 && ((i2 = this.toPixels(t2.getNestedProperty(t2.series.colorKey))) < n2 ? i2 = n2 - 2 : i2 > n2 + l2 && (i2 = n2 + l2 + 2), t2.plotX = i2, t2.plotY = this.len - i2, super.drawCrosshair(e2, t2), t2.plotX = o2, t2.plotY = s2, this.cross && !this.cross.addedToColorAxis && r2.group && (this.cross.addClass("highcharts-coloraxis-marker").add(r2.group), this.cross.addedToColorAxis = true, this.chart.styledMode || "object" != typeof this.crosshair || this.cross.attr({ fill: this.crosshair.color })));
        }
        getPlotLinePath(e2) {
          let t2 = this.left, i2 = e2.translatedValue, r2 = this.top;
          return "number" == typeof i2 && !isNaN(i2) && i2 < 1 / 0 && i2 > -1 / 0 ? this.horiz ? [["M", i2 - 4, r2 - 6], ["L", i2 + 4, r2 - 6], ["L", i2, r2], ["Z"]] : [["M", t2, i2], ["L", t2 - 6, i2 + 6], ["L", t2 - 6, i2 - 6], ["Z"]] : super.getPlotLinePath(e2);
        }
        update(e2, t2) {
          var _a;
          let i2 = this.chart.legend;
          this.series.forEach((e3) => {
            e3.isDirtyData = true;
          }), (e2.dataClasses && i2.allItems || this.dataClasses) && this.destroyItems(), super.update(e2, t2), ((_a = this.legendItem) == null ? void 0 : _a.label) && (this.setLegendColor(), i2.colorizeItem(this, true));
        }
        destroyItems() {
          let e2 = this.chart, t2 = this.legendItem || {};
          if (t2.label) e2.legend.destroyItem(this);
          else if (t2.labels) for (let i2 of t2.labels) e2.legend.destroyItem(i2);
          e2.isDirtyLegend = true;
        }
        destroy() {
          this.chart.isDirtyLegend = true, this.destroyItems(), super.destroy(...[].slice.call(arguments));
        }
        remove(e2) {
          this.destroyItems(), super.remove(e2);
        }
        getDataClassLegendSymbols() {
          let e2, t2 = this, i2 = t2.chart, r2 = t2.legendItem && t2.legendItem.labels || [], o2 = i2.options.legend, s2 = P(o2.valueDecimals, -1), n2 = P(o2.valueSuffix, ""), l2 = (e3) => t2.series.reduce((t3, i3) => (t3.push(...i3.points.filter((t4) => t4.dataClass === e3)), t3), []);
          return r2.length || t2.dataClasses.forEach((o3, a2) => {
            let h2 = o3.from, u2 = o3.to, { numberFormatter: f2 } = i2, c2 = true;
            e2 = "", void 0 === h2 ? e2 = "< " : void 0 === u2 && (e2 = "> "), void 0 !== h2 && (e2 += f2(h2, s2) + n2), void 0 !== h2 && void 0 !== u2 && (e2 += " - "), void 0 !== u2 && (e2 += f2(u2, s2) + n2), r2.push(U({ chart: i2, name: e2, options: {}, drawLegendSymbol: _.prototype.drawLegendSymbol, visible: true, isDataClass: true, setState: (e3) => {
              for (let t3 of l2(a2)) t3.setState(e3);
            }, setVisible: function() {
              this.visible = c2 = t2.visible = !c2;
              let e3 = [];
              for (let t3 of l2(a2)) t3.setVisible(c2), t3.hiddenInDataClass = !c2, -1 === e3.indexOf(t3.series) && e3.push(t3.series);
              i2.legend.colorizeItem(this, c2), e3.forEach((e4) => {
                !(function(e5, t3, i3, r3) {
                  if (i3 = i3 || {}, (x == null ? void 0 : x.createEvent) && (e5.dispatchEvent || e5.fireEvent && e5 !== d())) {
                    let r4 = x.createEvent("Events");
                    r4.initEvent(t3, true, true), i3 = U(r4, i3), e5.dispatchEvent ? e5.dispatchEvent(i3) : e5.fireEvent(t3, i3);
                  } else if (e5.hcEvents) {
                    i3.target || U(i3, { preventDefault: function() {
                      i3.defaultPrevented = true;
                    }, target: e5, type: t3 });
                    let r4 = [], o4 = e5, s3 = false;
                    for (; o4.hcEvents; ) Object.hasOwnProperty.call(o4, "hcEvents") && o4.hcEvents[t3] && (r4.length && (s3 = true), r4.unshift.apply(r4, o4.hcEvents[t3])), o4 = Object.getPrototypeOf(o4);
                    s3 && r4.sort((e6, t4) => e6.order - t4.order), r4.forEach((t4) => {
                      false === t4.fn.call(e5, i3, e5) && i3.preventDefault();
                    });
                  }
                })(e4, "afterDataClassLegendClick");
              });
            } }, o3));
          }), r2;
        }
        getSize() {
          let { chart: e2, horiz: t2 } = this, { height: i2, width: r2 } = this.options, { legend: o2 } = e2.options;
          return { width: P(null != r2 ? S(r2, e2.chartWidth) : void 0, o2 == null ? void 0 : o2.symbolWidth, t2 ? D.defaultLegendLength : 12), height: P(null != i2 ? S(i2, e2.chartHeight) : void 0, o2 == null ? void 0 : o2.symbolHeight, t2 ? 12 : D.defaultLegendLength) };
        }
      }
      D.defaultLegendLength = 200, D.keepProps = ["legendItem"], U(D.prototype, L), Array.prototype.push.apply(g().keepProps, D.keepProps);
      let z = d();
      z.ColorAxis = z.ColorAxis || D, z.ColorAxis.compose(z.Chart, z.Fx, z.Legend, z.Series);
      let { scatter: { prototype: { pointClass: G } } } = N().seriesTypes, j = `

struct VertexInput {
    @location(0) pos: vec3f
}

struct VertexOutput {
    @builtin(position) pos: vec4f,
    @location(0) originalPos: vec3f,
    @location(1) valExtremes: vec2f,
}

@group(0) @binding(0) var<uniform> uExtremes: vec4f;
@group(0) @binding(1) var<uniform> uValueExtremes: vec2f;
@group(0) @binding(9) var<uniform> uIsInverted: u32;

@vertex
fn vertexMain(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    let pos = input.pos;

    let xMin = uExtremes[0];
    let xMax = uExtremes[1];
    let yMin = uExtremes[2];
    let yMax = uExtremes[3];

    var posX: f32;
    var posY: f32;
    if (uIsInverted > 0u) {
        posX = (1.0 - (pos.y - yMin) / (yMax - yMin)) * 2.0 - 1.0;
        posY = (1.0 - (pos.x - xMin) / (xMax - xMin)) * 2.0 - 1.0;
    } else {
        posX = (pos.x - xMin) / (xMax - xMin) * 2.0 - 1.0;
        posY = (pos.y - yMin) / (yMax - yMin) * 2.0 - 1.0;
    }

    output.valExtremes = uValueExtremes;
    output.originalPos = pos.xyz;
    output.pos = vec4f(posX, posY, 0, 1);

    return output;
}

// ------------------------------------------------

struct FragmentInput {
    @location(0) originalPos: vec3f,
    @location(1) valExtremes: vec2f
}

@group(0) @binding(2) var<storage> uColorStops: array<vec4<f32>>;
@group(0) @binding(3) var<uniform> uColorStopsCount: u32;
@group(0) @binding(4) var<uniform> uContourInterval: f32;
@group(0) @binding(5) var<uniform> uContourOffset: f32;
@group(0) @binding(6) var<uniform> uSmoothColoring: u32;
@group(0) @binding(7) var<uniform> uContourLineWidth: f32;
@group(0) @binding(8) var<uniform> uContourLineColor: vec3f;

fn getColor(value: f32) -> vec3<f32> {
    let stopCount = uColorStopsCount;

    if (stopCount == 0u) {
        return vec3<f32>(1.0, 1.0, 1.0);
    }

    for (var i: u32 = 0u; i < stopCount - 1u; i = i + 1u) {
        if (value < uColorStops[i + 1u].x) {
            let t = (value - uColorStops[i].x) /
                (uColorStops[i + 1u].x - uColorStops[i].x);

            return mix(uColorStops[i].yzw, uColorStops[i + 1u].yzw, t);
        }
    }

    return uColorStops[stopCount - 1u].yzw;
}

@fragment
fn fragmentMain(input: FragmentInput) -> @location(0) vec4f {
    let val = input.originalPos.z;

    // Contour lines
    let lineWidth: f32 = uContourLineWidth;

    let val_dx: f32 = dpdx(val);
    let val_dy: f32 = dpdy(val);
    let gradient: f32 = length(vec2f(val_dx, val_dy));

    let epsilon: f32 = max(uContourInterval * 1.0e-6, 1.0e-12);
    let adjustedLineWidth: f32 = lineWidth * gradient + epsilon;

    let adjustedVal: f32 = val - uContourOffset;
    let valDiv: f32 = adjustedVal / uContourInterval;
    let valMod: f32 = adjustedVal - uContourInterval * floor(valDiv);

    let lineMask: f32 = smoothstep(0.0, adjustedLineWidth, valMod) * (
        1.0 - smoothstep(
            uContourInterval - adjustedLineWidth,
            uContourInterval,
            valMod
        )
    );

    // Background color
    let minHeight: f32 = input.valExtremes.x;
    let maxHeight: f32 = input.valExtremes.y;

    var bgColor: vec3f;
    if (uSmoothColoring > 0u) {
        bgColor = getColor((val - minHeight) / (maxHeight - minHeight));
    } else {
        let adjustedVal: f32 = val - uContourOffset;
        let averageValInBand: f32 = floor(
            adjustedVal / uContourInterval
        ) * uContourInterval + uContourOffset + uContourInterval / 2.0;

        bgColor = getColor(
            (averageValInBand - minHeight) /
            (maxHeight - minHeight)
        );
    }

    // Mix
    var pixelColor = bgColor;
    if (lineWidth > 0.0) {
        pixelColor = mix(uContourLineColor, pixelColor, lineMask);
    }

    return vec4(pixelColor, 1.0);
}

`, { composed: k } = d();
      function W(e2, t2, i2, r2) {
        return [["M", e2, t2], ["L", e2 + i2, t2 + r2], ["M", e2 + i2, t2], ["L", e2, t2 + r2], ["Z"]];
      }
      (l || (l = {})).compose = function(e2) {
        0 > k.indexOf("Series.CrossSymbol") && k.push("Series.CrossSymbol") && (e2.prototype.symbols.cross = W);
      };
      let R = l, H = class {
        constructor(e2) {
          this.points = e2;
          const t2 = e2.length >>> 1;
          this.epsilon = 4 * Number.EPSILON;
          let i2 = 1 / 0, r2 = -1 / 0, o2 = 1 / 0, s2 = -1 / 0;
          for (let n3 = 0; n3 < t2; n3++) {
            const t3 = e2[n3 << 1], l3 = e2[(n3 << 1) + 1];
            t3 < i2 && (i2 = t3), t3 > r2 && (r2 = t3), l3 < o2 && (o2 = l3), l3 > s2 && (s2 = l3);
          }
          const n2 = r2 - i2 || 1, l2 = s2 - o2 || 1;
          this.minX = i2, this.minY = o2, this.invScaleX = 1 / n2, this.invScaleY = 1 / l2;
          const a2 = new Uint32Array(t2), h2 = (t3) => (e2[t3 << 1] - i2) * this.invScaleX, u2 = (t3) => (e2[(t3 << 1) + 1] - o2) * this.invScaleY;
          for (let e3 = 0; e3 < t2; e3++) a2[e3] = e3;
          a2.sort((e3, t3) => h2(e3) - h2(t3) || u2(e3) - u2(t3));
          let f2 = +!!t2, c2, d2;
          for (let e3 = 1; e3 < t2; ++e3) c2 = a2[f2 - 1], d2 = a2[e3], (h2(c2) !== h2(d2) || u2(c2) !== u2(d2)) && (a2[f2++] = d2);
          this.ids = a2.subarray(0, f2), this.triangles = this.triangulate();
        }
        triangulate() {
          let e2, t2, i2 = this.ids.length;
          if (i2 < 3) return new Uint32Array(0);
          let r2 = this.points, { minX: o2, minY: s2, invScaleX: n2, invScaleY: l2 } = this, a2 = (e3) => (r2[e3 << 1] - o2) * n2, h2 = (e3) => (r2[(e3 << 1) + 1] - s2) * l2, u2 = (e3, t3, i3) => {
            let r3 = a2(e3), o3 = h2(e3), s3 = a2(t3) - r3, n3 = h2(t3) - o3, l3 = a2(i3) - r3, u3 = h2(i3) - o3, f3 = (Math.abs(s3 * u3) + Math.abs(n3 * l3)) * this.epsilon;
            return s3 * u3 - n3 * l3 > f3;
          }, f2 = (e3, t3, i3, r3) => {
            if (e3 === r3 || t3 === r3 || i3 === r3) return false;
            let o3 = a2(e3) - a2(r3), s3 = h2(e3) - h2(r3), n3 = a2(t3) - a2(r3), l3 = h2(t3) - h2(r3), u3 = a2(i3) - a2(r3), f3 = h2(i3) - h2(r3), c3 = o3 * o3 + s3 * s3, d3 = n3 * n3 + l3 * l3, p3 = u3 * u3 + f3 * f3, g3 = l3 * p3 - d3 * f3, m3 = n3 * p3 - d3 * u3, v3 = n3 * f3 - l3 * u3, x3 = (Math.abs(o3 * g3) + Math.abs(s3 * m3) + Math.abs(c3 * v3)) * this.epsilon;
            return o3 * g3 - s3 * m3 + c3 * v3 > x3;
          }, c2 = Math.max(32, 8 * i2 + 7 & -4), d2 = new Int32Array(c2), p2 = new Int32Array(c2), g2 = new Uint32Array(c2), m2 = new Uint8Array(c2), v2 = 0, x2 = (e3) => p2[p2[e3]], y2 = (e3) => x2(p2[e3]), C2 = (e3) => g2[x2(e3)], b2 = (e3) => p2[d2[y2(e3)]], U2 = (e3) => p2[d2[p2[e3]]], A2 = (e3) => d2[x2(e3)], w2 = (e3, t3) => u2(e3, g2[t3], C2(t3)), I2 = (e3, t3) => u2(e3, C2(t3), g2[t3]), E2 = (e3, t3) => I2(C2(e3), t3), O2 = (e3, t3) => {
            ((e4) => {
              if (e4 <= c2) return;
              let t4 = c2 << 1;
              for (; t4 < e4; ) t4 <<= 1;
              let i4 = new Int32Array(t4), r4 = new Int32Array(t4), o4 = new Uint32Array(t4), s4 = new Uint8Array(t4);
              i4.set(d2), r4.set(p2), o4.set(g2), s4.set(m2), d2 = i4, p2 = r4, g2 = o4, m2 = s4, c2 = t4;
            })(v2 + 4);
            let i3 = v2, r3 = v2 + 1, o3 = v2 + 2, s3 = v2 + 3;
            return v2 += 4, p2[i3] = r3, p2[r3] = o3, p2[o3] = s3, p2[s3] = i3, d2[i3] = i3, d2[o3] = o3, d2[r3] = s3, d2[s3] = r3, g2[i3] = e3, g2[o3] = t3, g2[r3] = 4294967295, g2[s3] = 4294967295, i3;
          }, P2 = (e3, t3) => {
            let i3 = p2[d2[e3]], r3 = p2[d2[t3]], o3 = d2[e3], s3 = d2[r3], n3 = d2[i3];
            d2[e3] = d2[t3], d2[t3] = o3, d2[i3] = s3, d2[r3] = n3;
          }, S2 = (e3, t3) => {
            let i3 = O2(C2(e3), g2[t3]);
            return P2(i3, b2(e3)), P2(x2(i3), t3), i3;
          }, M2 = (e3) => {
            P2(e3, U2(e3));
            let t3 = x2(e3);
            P2(t3, U2(t3));
          }, L2 = this.ids, B2 = (e3, t3) => {
            let i3 = t3 - e3;
            if (2 === i3) {
              let t4 = O2(L2[e3], L2[e3 + 1]);
              return [t4, x2(t4)];
            }
            if (3 === i3) {
              let t4 = O2(L2[e3], L2[e3 + 1]), i4 = O2(L2[e3 + 1], L2[e3 + 2]);
              P2(x2(t4), i4);
              let r4 = L2[e3], o4 = L2[e3 + 1], s4 = L2[e3 + 2];
              if (u2(r4, o4, s4)) return S2(i4, t4), [t4, x2(i4)];
              if (u2(r4, s4, o4)) {
                let e4 = S2(i4, t4);
                return [x2(e4), e4];
              }
              return [t4, x2(i4)];
            }
            let r3 = e3 + (i3 + 1 >>> 1), o3 = B2(e3, r3), s3 = B2(r3, t3), n3 = o3[0], l3 = o3[1], a3 = s3[0], h3 = s3[1];
            for (; ; ) if (w2(g2[a3], l3)) l3 = b2(l3);
            else if (I2(g2[l3], a3)) a3 = A2(a3);
            else break;
            let c3 = S2(x2(a3), l3);
            for (g2[l3] === g2[n3] && (n3 = x2(c3)), g2[a3] === g2[h3] && (h3 = c3); ; ) {
              let e4 = d2[x2(c3)];
              if (E2(e4, c3)) for (; f2(C2(c3), g2[c3], C2(e4), C2(d2[e4])); ) {
                let t5 = d2[e4];
                M2(e4), e4 = t5;
              }
              let t4 = U2(c3);
              if (E2(t4, c3)) for (; f2(C2(c3), g2[c3], C2(t4), C2(U2(t4))); ) {
                let e5 = U2(t4);
                M2(t4), t4 = e5;
              }
              if (!E2(e4, c3) && !E2(t4, c3)) break;
              c3 = !E2(e4, c3) || E2(t4, c3) && f2(C2(e4), g2[e4], g2[t4], C2(t4)) ? S2(t4, x2(c3)) : S2(x2(c3), x2(e4));
            }
            return [n3, h3];
          }, T2 = B2(0, i2)[0];
          for (; w2(C2(d2[T2]), T2); ) T2 = d2[T2];
          let F2 = [T2], N2 = 0;
          {
            let e3 = T2;
            do
              F2.push(x2(e3)), m2[e3] = 1, e3 = b2(e3);
            while (e3 !== T2);
          }
          let V2 = [];
          for (; N2 < F2.length; ) {
            let i3 = F2[N2++];
            if (!m2[i3]) {
              e2 = i3;
              do
                V2.push(g2[e2]), m2[t2 = x2(e2)] || F2.push(t2), m2[e2] = 1, e2 = b2(e2);
              while (e2 !== i3);
            }
          }
          return new Uint32Array(V2);
        }
      }, { seriesTypes: { scatter: Y } } = N();
      class q extends Y {
        static compose(e2) {
          R.compose(e2);
        }
        getContourData() {
          let e2 = this.points, t2 = e2.length, i2 = new Float32Array(3 * t2), r2 = new Float64Array(2 * t2);
          for (let o2 = 0; o2 < t2; o2++) {
            let { x: t3, y: s2 = 0, value: n2 } = e2[o2], l2 = 2 * o2, a2 = 3 * o2;
            r2[l2] = t3, r2[l2 + 1] = s2, i2[a2] = t3, i2[a2 + 1] = s2, i2[a2 + 2] = n2 ?? 0;
          }
          return [new H(r2).triangles, i2];
        }
        update(e2, t2) {
          e2 = b(e2, this.userOptions);
          let i2 = ["smoothColoring", "contourInterval", "contourOffset", "lineColor", "lineWidth"], r2 = Object.keys(e2).some((e3) => !i2.includes(e3)), o2 = r2 ? void 0 : this.setOptions(E(this.userOptions, e2)), s2 = !!o2 && Object.keys(b(o2, this.options)).some((e3) => !i2.includes(e3));
          r2 || s2 ? super.update(e2, t2) : (this.options = o2, this.setUniforms());
        }
        drawPoints() {
          let { group: e2 } = this;
          if (!e2) return;
          this.canvas || (this.foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"), e2.element.appendChild(this.foreignObject), this.canvas = document.createElement("canvas"), this.foreignObject.appendChild(this.canvas));
          let { canvas: t2, xAxis: i2, yAxis: r2 } = this, o2 = this.foreignObject, s2 = o2.width.baseVal.value, n2 = o2.height.baseVal.value, { devicePixelRatio: l2 } = window, a2 = i2.len, h2 = r2.len;
          this.chart.inverted && ([a2, h2] = [h2, a2]), s2 !== a2 && (o2.setAttribute("width", a2), t2.width = a2 * l2, t2.style.width = a2 + "px"), n2 !== h2 && (o2.setAttribute("height", h2), t2.height = h2 * l2, t2.style.height = h2 + "px"), this.renderFrame ? this.renderFrame() : this.run();
        }
        async run() {
          let e2 = this.chart, t2 = e2.renderer, i2 = this.canvas, r2 = navigator.gpu, o2 = this.context = i2.getContext("webgpu");
          if (!r2 || !o2) return void (0, c.error)(37, false, e2);
          if (t2.asyncCounter += 1, o2) {
            let e3 = this.device;
            this.adapter || (this.adapter = await r2.requestAdapter()), !e3 && this.adapter && (e3 = this.device = await this.adapter.requestDevice());
            let t3 = r2.getPreferredCanvasFormat();
            if (e3) {
              o2.configure({ device: e3, format: t3, colorSpace: "display-p3", alphaMode: "premultiplied", usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC });
              let [i3, r3] = this.getContourData(), { vertex: s2, index: n2, extremesUniform: l2, valueExtremesUniform: a2, contourIntervalUniform: h2, contourOffsetUniform: u2, smoothColoringUniform: f2, lineWidthUniform: c2, contourLineColor: d2, colorAxisStopsCountUniform: p2, colorAxisStopsUniform: g2, isInvertedUniform: m2 } = this.buffers = { vertex: e3.createBuffer({ size: r3.byteLength, usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST }), index: e3.createBuffer({ size: i3.byteLength, usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST }), extremesUniform: e3.createBuffer({ size: 4 * Float32Array.BYTES_PER_ELEMENT, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), valueExtremesUniform: e3.createBuffer({ size: 2 * Float32Array.BYTES_PER_ELEMENT, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), contourIntervalUniform: e3.createBuffer({ size: 4, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), contourOffsetUniform: e3.createBuffer({ size: 4, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), smoothColoringUniform: e3.createBuffer({ size: 4, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), lineWidthUniform: e3.createBuffer({ size: 4, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), contourLineColor: e3.createBuffer({ size: 12, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), colorAxisStopsCountUniform: e3.createBuffer({ size: 4, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }), colorAxisStopsUniform: e3.createBuffer({ size: 64 * Float32Array.BYTES_PER_ELEMENT, usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST }), isInvertedUniform: e3.createBuffer({ size: 4, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST }) };
              e3.queue.writeBuffer(s2, 0, r3), e3.queue.writeBuffer(n2, 0, i3);
              let v2 = e3.createShaderModule({ code: j }), x2 = e3.createRenderPipeline({ layout: "auto", vertex: { module: v2, entryPoint: "vertexMain", buffers: [{ arrayStride: 12, attributes: [{ format: "float32x3", offset: 0, shaderLocation: 0 }] }] }, fragment: { module: v2, entryPoint: "fragmentMain", targets: [{ format: t3 }] }, primitive: { topology: "triangle-list" } }), y2 = e3.createBindGroup({ layout: x2.getBindGroupLayout(0), entries: [{ binding: 0, resource: { buffer: l2, label: "extremesUniformBuffer" } }, { binding: 1, resource: { buffer: a2, label: "valueExtremesUniformBuffer" } }, { binding: 2, resource: { buffer: g2, label: "colorAxisStopsBuffer" } }, { binding: 3, resource: { buffer: p2, label: "colorAxisStopsCountBuffer" } }, { binding: 4, resource: { buffer: h2, label: "contourIntervalUniformBuffer" } }, { binding: 5, resource: { buffer: u2, label: "contourOffsetUniformBuffer" } }, { binding: 6, resource: { buffer: f2, label: "smoothColoringUniformBuffer" } }, { binding: 7, resource: { buffer: c2, label: "lineWidthUniformBuffer" } }, { binding: 8, resource: { buffer: d2, label: "contourLineColorBuffer" } }, { binding: 9, resource: { buffer: m2, label: "isInvertedUniformBuffer" } }] });
              this.renderFrame = function() {
                this.setUniforms(false);
                let t4 = e3.createCommandEncoder(), r4 = o2.getCurrentTexture(), l3 = t4.beginRenderPass({ colorAttachments: [{ view: r4.createView(), loadOp: "clear", clearValue: [0, 0, 0, 0], storeOp: "store" }] });
                l3.setPipeline(x2), l3.setVertexBuffer(0, s2), l3.setIndexBuffer(n2, "uint32"), l3.setBindGroup(0, y2), l3.drawIndexed(i3.length), l3.end(), e3.queue.submit([t4.finish()]);
              }, this.renderFrame();
            }
          }
          t2.asyncCounter--, t2.asyncCounter || !e2 || e2.hasLoaded || e2.onload();
        }
        destroy() {
          var _a, _b;
          (_b = (_a = this.canvas) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.remove(), super.destroy();
        }
        drawGraph() {
        }
        setUniforms(e2 = true) {
          this.setFrameExtremesUniform(false), this.setValueExtremesUniform(false), this.setColorAxisStopsUniforms(false), this.setContourIntervalUniform(false), this.setContourOffsetUniform(false), this.setSmoothColoringUniform(false), this.setLineWidthUniform(false), this.setContourLineColorUniform(false), this.setIsInvertedUniform(e2);
        }
        setContourIntervalUniform(e2 = true) {
          var _a, _b;
          this.device && ((_a = this.buffers) == null ? void 0 : _a.contourIntervalUniform) && (this.device.queue.writeBuffer(this.buffers.contourIntervalUniform, 0, new Float32Array([this.getContourInterval()])), e2 && ((_b = this.renderFrame) == null ? void 0 : _b.call(this)));
        }
        setContourOffsetUniform(e2 = true) {
          var _a, _b;
          this.device && ((_a = this.buffers) == null ? void 0 : _a.contourOffsetUniform) && (this.device.queue.writeBuffer(this.buffers.contourOffsetUniform, 0, new Float32Array([this.getContourOffset()])), e2 && ((_b = this.renderFrame) == null ? void 0 : _b.call(this)));
        }
        setSmoothColoringUniform(e2 = true) {
          var _a, _b;
          this.device && ((_a = this.buffers) == null ? void 0 : _a.smoothColoringUniform) && (this.device.queue.writeBuffer(this.buffers.smoothColoringUniform, 0, new Float32Array([this.getSmoothColoring()])), e2 && ((_b = this.renderFrame) == null ? void 0 : _b.call(this)));
        }
        setLineWidthUniform(e2 = true) {
          var _a, _b;
          this.device && ((_a = this.buffers) == null ? void 0 : _a.lineWidthUniform) && (this.device.queue.writeBuffer(this.buffers.lineWidthUniform, 0, new Float32Array([this.getLineWidth()])), e2 && ((_b = this.renderFrame) == null ? void 0 : _b.call(this)));
        }
        setContourLineColorUniform(e2 = true) {
          var _a, _b;
          this.device && ((_a = this.buffers) == null ? void 0 : _a.contourLineColor) && (this.device.queue.writeBuffer(this.buffers.contourLineColor, 0, new Float32Array(this.getContourLineColor())), e2 && ((_b = this.renderFrame) == null ? void 0 : _b.call(this)));
        }
        setFrameExtremesUniform(e2 = true) {
          var _a, _b;
          this.device && ((_a = this.buffers) == null ? void 0 : _a.extremesUniform) && (this.device.queue.writeBuffer(this.buffers.extremesUniform, 0, new Float32Array(this.getFrameExtremes())), e2 && ((_b = this.renderFrame) == null ? void 0 : _b.call(this)));
        }
        setValueExtremesUniform(e2 = true) {
          var _a, _b;
          this.device && ((_a = this.buffers) == null ? void 0 : _a.valueExtremesUniform) && (this.device.queue.writeBuffer(this.buffers.valueExtremesUniform, 0, new Float32Array(this.getValueAxisExtremes())), e2 && ((_b = this.renderFrame) == null ? void 0 : _b.call(this)));
        }
        setColorAxisStopsUniforms(e2 = true) {
          var _a, _b, _c;
          let t2 = (_a = this.buffers) == null ? void 0 : _a.colorAxisStopsUniform, i2 = (_b = this.buffers) == null ? void 0 : _b.colorAxisStopsCountUniform;
          if (this.device && t2 && i2) {
            let { array: r2, length: o2 } = this.getColorAxisStopsData();
            this.device.queue.writeBuffer(t2, 0, r2), this.device.queue.writeBuffer(i2, 0, new Uint32Array([o2])), e2 && ((_c = this.renderFrame) == null ? void 0 : _c.call(this));
          }
        }
        setIsInvertedUniform(e2 = true) {
          var _a, _b;
          this.device && ((_a = this.buffers) == null ? void 0 : _a.isInvertedUniform) && (this.device.queue.writeBuffer(this.buffers.isInvertedUniform, 0, new Uint32Array([+!!this.chart.inverted])), e2 && ((_b = this.renderFrame) == null ? void 0 : _b.call(this)));
        }
        getContourInterval() {
          let e2 = this.options.contourInterval ?? (() => {
            let [e3, t2] = this.getValueAxisExtremes();
            return (function(e4, t3, i2, r2, o2) {
              var s2, n2;
              let l2, a2 = e4;
              i2 = P(i2, Math.pow(10, Math.floor(Math.log(e4) / Math.LN10)));
              let h2 = e4 / i2;
              for (t3 || (t3 = [1, 2, 2.5, 5, 10]), l2 = 0; l2 < t3.length && (a2 = t3[l2], !(h2 <= (t3[l2] + (t3[l2 + 1] || t3[l2])) / 2)); l2++) ;
              return s2 = a2 * i2, n2 = -Math.round(Math.log(1e-3) / Math.LN10), a2 = s2 > 1e14 ? s2 : parseFloat(s2.toPrecision(n2 || 14));
            })((t2 - e3) / 10);
          })();
          return isNaN(e2) || e2 <= 0 ? -1 : e2;
        }
        getContourOffset() {
          let e2 = this.options.contourOffset ?? 0;
          return isNaN(e2) || e2 <= 0 ? 0 : e2;
        }
        getSmoothColoring() {
          return +!!this.options.smoothColoring;
        }
        getLineWidth() {
          return this.userOptions.lineWidth ?? 1;
        }
        getContourLineColor() {
          let { lineColor: e2 = "#000000" } = this.options;
          return q.rgbaAsFrac(new (v())(e2).rgba);
        }
        getFrameExtremes() {
          let { xAxis: e2, yAxis: t2 } = this;
          return [e2.toValue(0, true), e2.toValue(e2.len, true), t2.toValue(t2.len, true), t2.toValue(0, true)];
        }
        getValueAxisExtremes() {
          var _a, _b;
          let e2 = this.valueMin;
          isNaN(e2 || NaN) && isNaN((e2 = (_a = this.colorAxis) == null ? void 0 : _a.min) || NaN) && (e2 = Math.min(...this.points.map((e3) => e3.value || 0)));
          let t2 = this.valueMax;
          return isNaN(t2 || NaN) && isNaN((t2 = (_b = this.colorAxis) == null ? void 0 : _b.max) || NaN) && (t2 = Math.max(...this.points.map((e3) => e3.value || 0))), [e2 || 0, t2 || 0];
        }
        getColorAxisStopsData() {
          var _a, _b;
          let e2, t2 = (_a = this.colorAxis) == null ? void 0 : _a.stops;
          if (t2) for (let i2 of (e2 = [], t2)) {
            let t3 = (_b = i2 == null ? void 0 : i2.color) == null ? void 0 : _b.rgba;
            t3 && e2.push(i2[0], ...q.rgbaAsFrac(t3));
          }
          return { array: new Float32Array(e2 ?? [0, 0, 0, 0, 1, 1, 1, 1]), length: (t2 == null ? void 0 : t2.length) || 2 };
        }
        static rgbaAsFrac(e2) {
          return [e2[0], e2[1], e2[2]].map((e3) => e3 / 255);
        }
      }
      q.defaultOptions = E(Y.defaultOptions, { colorKey: "value", clip: false, marker: { symbol: "cross", states: { hover: { lineColor: "black" } } }, states: { hover: { halo: void 0 } }, zIndex: 0 }), U(q.prototype, { pointClass: class extends G {
      }, pointArrayMap: ["y", "value"], keysAffectYAxis: ["y"], invertible: false }), N().registerSeriesType("contour", q);
      let X = d();
      q.compose(X.Renderer);
      let K = d();
      return f.default;
    })());
  }
});
export default require_contour();
/*! Bundled license information:

highcharts/modules/contour.js:
  (**
  * @license Highcharts JS v12.6.0 (2026-04-13)
  * @module highcharts/modules/color-axis
  * @requires highcharts
  *
  * ColorAxis module
  *
  * (c) 2012-2026 Highsoft AS
  * Author: Paweł Potaczek
  *
  * A commercial license may be required depending on use.
  * See www.highcharts.com/license
  *)
*/
//# sourceMappingURL=highcharts_modules_contour.js.map
