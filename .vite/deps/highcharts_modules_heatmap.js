import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/highcharts/modules/heatmap.js
var require_heatmap = __commonJS({
  "node_modules/highcharts/modules/heatmap.js"(exports, module) {
    !/**
    * Highmaps JS v12.6.0 (2026-04-13)
    * @module highcharts/modules/heatmap
    * @requires highcharts
    *
    * (c) 2009-2026 Highsoft AS
    * Author: Torstein Hønsi
    *
    * A commercial license may be required depending on use.
    * See www.highcharts.com/license
    */
    (function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e(t._Highcharts, t._Highcharts.Axis, t._Highcharts.Color, t._Highcharts.SeriesRegistry, t._Highcharts.SVGElement, t._Highcharts.SVGRenderer) : "function" == typeof define && define.amd ? define("highcharts/modules/heatmap", ["highcharts/highcharts"], function(t2) {
        return e(t2, t2.Axis, t2.Color, t2.SeriesRegistry, t2.SVGElement, t2.SVGRenderer);
      }) : "object" == typeof exports ? exports["highcharts/modules/heatmap"] = e(t._Highcharts, t._Highcharts.Axis, t._Highcharts.Color, t._Highcharts.SeriesRegistry, t._Highcharts.SVGElement, t._Highcharts.SVGRenderer) : t.Highcharts = e(t.Highcharts, t.Highcharts.Axis, t.Highcharts.Color, t.Highcharts.SeriesRegistry, t.Highcharts.SVGElement, t.Highcharts.SVGRenderer);
    })("u" < typeof window ? exports : window, (t, e, i, s, o, r) => (() => {
      "use strict";
      var l, a, n, h, c = { 28: (t2) => {
        t2.exports = o;
      }, 512: (t2) => {
        t2.exports = s;
      }, 532: (t2) => {
        t2.exports = e;
      }, 540: (t2) => {
        t2.exports = r;
      }, 620: (t2) => {
        t2.exports = i;
      }, 944: (e2) => {
        e2.exports = t;
      } }, p = {};
      function d(t2) {
        var e2 = p[t2];
        if (void 0 !== e2) return e2.exports;
        var i2 = p[t2] = { exports: {} };
        return c[t2](i2, i2.exports, d), i2.exports;
      }
      d.n = (t2) => {
        var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return d.d(e2, { a: e2 }), e2;
      }, d.d = (t2, e2) => {
        for (var i2 in e2) d.o(e2, i2) && !d.o(t2, i2) && Object.defineProperty(t2, i2, { enumerable: true, get: e2[i2] });
      }, d.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
      var u = {};
      d.d(u, { default: () => th });
      var f = d(944), g = d.n(f), m = d(532), y = d.n(m), x = d(620), b = d.n(x);
      let { doc: v, win: C } = g();
      function A(t2, e2, i2, s2 = {}) {
        let o2 = "function" == typeof t2 && t2.prototype || t2;
        Object.hasOwnProperty.call(o2, "hcEvents") || (o2.hcEvents = {});
        let r2 = o2.hcEvents;
        g().Point && t2 instanceof g().Point && t2.series && t2.series.chart && (t2.series.chart.runTrackerClick = true);
        let l2 = t2.addEventListener;
        l2 && l2.call(t2, e2, i2, !!g().supportsPassiveEvents && { passive: void 0 === s2.passive ? -1 !== e2.indexOf("touch") : s2.passive, capture: false }), r2[e2] || (r2[e2] = []);
        let a2 = { fn: i2, order: "number" == typeof s2.order ? s2.order : 1 / 0 };
        return r2[e2].push(a2), r2[e2].sort((t3, e3) => t3.order - e3.order), function() {
          !(function(t3, e3, i3) {
            function s3(e4, i4) {
              let s4 = t3.removeEventListener;
              s4 && s4.call(t3, e4, i4, false);
            }
            function o3(i4) {
              let o4, r4;
              t3.nodeName && (e3 ? (o4 = {})[e3] = true : o4 = i4, S(o4, function(t4, e4) {
                if (i4[e4]) for (r4 = i4[e4].length; r4--; ) s3(e4, i4[e4][r4].fn);
              }));
            }
            let r3 = "function" == typeof t3 && t3.prototype || t3;
            if (Object.hasOwnProperty.call(r3, "hcEvents")) {
              let t4 = r3.hcEvents;
              if (e3) {
                let r4 = t4[e3] || [];
                i3 ? (t4[e3] = r4.filter(function(t5) {
                  return i3 !== t5.fn;
                }), s3(e3, i3)) : (o3(t4), t4[e3] = []);
              } else o3(t4), delete r3.hcEvents;
            }
          })(t2, e2, i2);
        };
      }
      function w(t2, e2, i2) {
        return t2 > e2 ? t2 < i2 ? t2 : i2 : e2;
      }
      function M(t2) {
        return null != t2;
      }
      function E(t2, e2) {
        let i2;
        for (i2 in t2 || (t2 = {}), e2) t2[i2] = e2[i2];
        return t2;
      }
      function P(t2, e2, i2, s2) {
        if (i2 = i2 || {}, (v == null ? void 0 : v.createEvent) && (t2.dispatchEvent || t2.fireEvent && t2 !== g())) {
          let s3 = v.createEvent("Events");
          s3.initEvent(e2, true, true), i2 = E(s3, i2), t2.dispatchEvent ? t2.dispatchEvent(i2) : t2.fireEvent(e2, i2);
        } else if (t2.hcEvents) {
          i2.target || E(i2, { preventDefault: function() {
            i2.defaultPrevented = true;
          }, target: t2, type: e2 });
          let s3 = [], o2 = t2, r2 = false;
          for (; o2.hcEvents; ) Object.hasOwnProperty.call(o2, "hcEvents") && o2.hcEvents[e2] && (s3.length && (r2 = true), s3.unshift.apply(s3, o2.hcEvents[e2])), o2 = Object.getPrototypeOf(o2);
          r2 && s3.sort((t3, e3) => t3.order - e3.order), s3.forEach((e3) => {
            false === e3.fn.call(t2, i2, t2) && i2.preventDefault();
          });
        }
        s2 && !i2.defaultPrevented && s2.call(t2, i2);
      }
      function L(t2) {
        return T(t2) && "number" == typeof t2.nodeType;
      }
      function k(t2) {
        return "number" == typeof t2 && !isNaN(t2) && t2 < 1 / 0 && t2 > -1 / 0;
      }
      function I(t2) {
        let e2 = Object.prototype.toString.call(t2);
        return "[object Array]" === e2 || "[object Array Iterator]" === e2;
      }
      function T(t2, e2) {
        return !!t2 && "object" == typeof t2 && (!e2 || !I(t2));
      }
      function O(t2, ...e2) {
        let i2, s2 = [t2, ...e2], o2 = {}, r2 = function(t3, e3) {
          return "object" != typeof t3 && (t3 = {}), S(e3, function(i3, s3) {
            if ("__proto__" !== s3 && "constructor" !== s3) {
              let o3;
              !T(i3, true) || (o3 = i3 == null ? void 0 : i3.constructor, T(i3, true) && !L(i3) && (o3 == null ? void 0 : o3.name) && "Object" !== o3.name) || L(i3) ? t3[s3] = e3[s3] : t3[s3] = r2(t3[s3] || {}, i3);
            }
          }), t3;
        };
        true === t2 && (o2 = s2[1], s2 = Array.prototype.slice.call(s2, 2));
        let l2 = s2.length;
        for (i2 = 0; i2 < l2; i2++) o2 = r2(o2, s2[i2]);
        return o2;
      }
      function S(t2, e2, i2) {
        for (let s2 in t2) Object.hasOwnProperty.call(t2, s2) && e2.call(i2 || t2[s2], t2[s2], s2, t2);
      }
      function D() {
        let t2 = arguments, e2 = t2.length;
        for (let i2 = 0; i2 < e2; i2++) {
          let e3 = t2[i2];
          if (null != e3) return e3;
        }
      }
      function V(t2, e2, i2) {
        return /%$/.test(t2) ? e2 * parseFloat(t2) / 100 + (i2 || 0) : parseFloat(t2);
      }
      Array.prototype.find;
      let { parse: H } = b();
      (l = a || (a = {})).initDataClasses = function(t2) {
        let e2 = this.chart, i2 = this.legendItem = this.legendItem || {}, s2 = this.options, o2 = t2.dataClasses || [], r2, l2, a2 = e2.options.chart.colorCount, n2 = 0, h2;
        this.dataClasses = l2 = [], i2.labels = [];
        for (let t3 = 0, i3 = o2.length; t3 < i3; ++t3) r2 = O(r2 = o2[t3]), l2.push(r2), (e2.styledMode || !r2.color) && ("category" === s2.dataClassColor ? (e2.styledMode || (a2 = (h2 = e2.options.colors || []).length, r2.color = h2[n2]), r2.colorIndex = n2, ++n2 === a2 && (n2 = 0)) : r2.color = H(s2.minColor).tweenTo(H(s2.maxColor), i3 < 2 ? 0.5 : t3 / (i3 - 1)));
      }, l.initStops = function() {
        let t2 = this.options, e2 = this.stops = t2.stops || [[0, t2.minColor || ""], [1, t2.maxColor || ""]];
        for (let t3 = 0, i2 = e2.length; t3 < i2; ++t3) e2[t3].color = H(e2[t3][1]);
      }, l.normalizedValue = function(t2) {
        let e2 = this.max || 0, i2 = this.min || 0;
        return this.logarithmic && (t2 = this.logarithmic.log2lin(t2)), 1 - (e2 - t2) / (e2 - i2 || 1);
      }, l.toColor = function(t2, e2) {
        let i2, s2, o2, r2, l2, a2, n2 = this.dataClasses, h2 = this.stops;
        if (n2) {
          for (a2 = n2.length; a2--; ) if (s2 = (l2 = n2[a2]).from, o2 = l2.to, (void 0 === s2 || t2 >= s2) && (void 0 === o2 || t2 <= o2)) {
            r2 = l2.color, e2 && (e2.dataClass = a2, e2.colorIndex = l2.colorIndex);
            break;
          }
        } else {
          for (i2 = this.normalizedValue(t2), a2 = h2.length; a2-- && !(i2 > h2[a2][0]); ) ;
          s2 = h2[a2] || h2[a2 + 1], i2 = 1 - ((o2 = h2[a2 + 1] || s2)[0] - i2) / (o2[0] - s2[0] || 1), r2 = s2.color.tweenTo(o2.color, i2);
        }
        return r2;
      };
      let z = a, { parse: G } = b();
      !(function(t2) {
        let e2;
        function i2() {
          let { userOptions: t3 } = this;
          if (this.colorAxis = [], t3.colorAxis) {
            var i3;
            t3.colorAxis = I(i3 = t3.colorAxis) ? i3 : [i3], t3.colorAxis.map((t4) => new e2(this, t4));
          }
        }
        function s2(t3) {
          let e3 = this.chart.colorAxis || [], i3 = (e4) => {
            let i4 = t3.allItems.indexOf(e4);
            -1 !== i4 && (this.destroyItem(t3.allItems[i4]), t3.allItems.splice(i4, 1));
          }, s3 = [], o3, r3;
          for (e3.forEach(function(t4) {
            o3 = t4.options, (o3 == null ? void 0 : o3.showInLegend) && (o3.dataClasses && o3.visible ? s3 = s3.concat(t4.getDataClassLegendSymbols()) : o3.visible && s3.push(t4), t4.series.forEach(function(t5) {
              (!t5.options.showInLegend || o3.dataClasses) && ("point" === t5.options.legendType ? t5.points.forEach(function(t6) {
                i3(t6);
              }) : i3(t5));
            }));
          }), r3 = s3.length; r3--; ) t3.allItems.unshift(s3[r3]);
        }
        function o2(t3) {
          t3.visible && t3.item.legendColor && t3.item.legendItem.symbol.attr({ fill: t3.item.legendColor });
        }
        function r2(t3) {
          var _a;
          (_a = this.chart.colorAxis) == null ? void 0 : _a.forEach((e3) => {
            e3.update({}, t3.redraw);
          });
        }
        function l2() {
          var _a;
          (((_a = this.chart.colorAxis) == null ? void 0 : _a.length) || this.colorAttribs) && this.translateColors();
        }
        function a2() {
          let t3 = this.axisTypes;
          t3 ? -1 === t3.indexOf("colorAxis") && t3.push("colorAxis") : this.axisTypes = ["colorAxis"];
        }
        function n2(t3) {
          let e3 = this, i3 = t3 ? "show" : "hide";
          e3.visible = e3.options.visible = !!t3, ["graphic", "dataLabel"].forEach(function(t4) {
            e3[t4] && e3[t4][i3]();
          }), this.series.buildKDTree();
        }
        function h2() {
          let t3 = this, e3 = this.getPointsCollection(), i3 = this.options.nullColor, s3 = this.colorAxis, o3 = this.colorKey;
          e3.forEach((e4) => {
            let r3 = e4.getNestedProperty(o3), l3 = e4.options.color || (e4.isNull || null === e4.value ? i3 : s3 && void 0 !== r3 ? s3.toColor(r3, e4) : e4.color || t3.color);
            l3 && e4.color !== l3 && (e4.color = l3, "point" === t3.options.legendType && e4.legendItem && e4.legendItem.label && t3.chart.legend.colorizeItem(e4, e4.visible));
          });
        }
        function c2() {
          this.elem.attr("fill", G(this.start).tweenTo(G(this.end), this.pos), void 0, true);
        }
        function p2() {
          this.elem.attr("stroke", G(this.start).tweenTo(G(this.end), this.pos), void 0, true);
        }
        t2.compose = function(t3, d2, u2, f2, g2) {
          var m2;
          let y2, x2 = d2.prototype, b2 = u2.prototype, v2 = g2.prototype;
          x2.collectionsWithUpdate.includes("colorAxis") || (e2 = t3, x2.collectionsWithUpdate.push("colorAxis"), x2.collectionsWithInit.colorAxis = [x2.addColorAxis], A(d2, "afterCreateAxes", i2), y2 = (m2 = d2).prototype.createAxis, m2.prototype.createAxis = function(t4, i3) {
            if ("colorAxis" !== t4) return y2.apply(this, arguments);
            let s3 = new e2(this, O(i3.axis, { index: this[t4].length, isX: false }));
            return this.isDirtyLegend = true, this.axes.forEach((t5) => {
              t5.series = [];
            }), this.series.forEach((t5) => {
              t5.bindAxes(), t5.isDirtyData = true;
            }), D(i3.redraw, true) && this.redraw(i3.animation), s3;
          }, b2.fillSetter = c2, b2.strokeSetter = p2, A(f2, "afterGetAllItems", s2), A(f2, "afterColorizeItem", o2), A(f2, "afterUpdate", r2), E(v2, { optionalAxis: "colorAxis", translateColors: h2 }), E(v2.pointClass.prototype, { setVisible: n2 }), A(g2, "afterTranslate", l2, { order: 1 }), A(g2, "bindAxes", a2));
        }, t2.pointSetVisible = n2;
      })(n || (n = {}));
      let R = n;
      var _ = d(512), j = d.n(_);
      let { defaultOptions: W } = g(), { series: N } = j();
      W.colorAxis = O(W.xAxis, { lineWidth: 0, minPadding: 0, maxPadding: 0, gridLineColor: "#ffffff", gridLineWidth: 1, tickPixelInterval: 72, startOnTick: true, endOnTick: true, offset: 0, marker: { animation: { duration: 50 }, width: 0.01, color: "#999999" }, labels: { distance: 8, overflow: "justify", rotation: 0 }, minColor: "#e6e9ff", maxColor: "#0022ff", tickLength: 5, title: { margin: 5 }, showInLegend: true });
      class K extends y() {
        static compose(t2, e2, i2, s2) {
          R.compose(K, t2, e2, i2, s2);
        }
        constructor(t2, e2) {
          super(t2, e2), this.coll = "colorAxis", this.visible = true, this.init(t2, e2);
        }
        init(t2, e2) {
          let i2 = t2.options.legend || {}, s2 = e2.layout ? "vertical" !== e2.layout : "vertical" !== i2.layout;
          this.side = e2.side || s2 ? 2 : 1, this.reversed = e2.reversed, this.opposite = !s2, super.init(t2, e2, "colorAxis"), this.userOptions = e2, I(t2.userOptions.colorAxis) && (t2.userOptions.colorAxis[this.index] = e2), e2.dataClasses && this.initDataClasses(e2), this.initStops(), this.horiz = s2, this.zoomEnabled = false;
        }
        hasData() {
          return !!(this.tickPositions || []).length;
        }
        setTickPositions() {
          if (!this.dataClasses) return super.setTickPositions();
        }
        setOptions(t2) {
          let e2 = this.chart.options.legend || {}, i2 = W.colorAxis, s2 = O("vertical" !== (t2.layout || e2.layout || i2.layout) ? { title: { rotation: 0 } } : { title: { rotation: 90, margin: 10 } }, i2, t2, { showEmpty: false, visible: this.chart.options.legend.enabled && false !== t2.visible });
          super.setOptions(s2), this.options.crosshair = this.options.marker;
        }
        setAxisSize() {
          var _a;
          let t2 = this.chart, e2 = (_a = this.legendItem) == null ? void 0 : _a.symbol, { width: i2, height: s2 } = this.getSize();
          e2 && (this.left = +e2.attr("x"), this.top = +e2.attr("y"), this.width = i2 = +e2.attr("width"), this.height = s2 = +e2.attr("height"), this.right = t2.chartWidth - this.left - i2, this.bottom = t2.chartHeight - this.top - s2, this.pos = this.horiz ? this.left : this.top), this.len = (this.horiz ? i2 : s2) || K.defaultLegendLength;
        }
        getOffset() {
          var _a;
          let t2 = (_a = this.legendItem) == null ? void 0 : _a.group, e2 = this.chart.axisOffset[this.side];
          if (t2) {
            this.axisParent = t2, super.getOffset();
            let i2 = this.chart.legend;
            i2.allItems.forEach(function(t3) {
              t3 instanceof K && t3.drawLegendSymbol(i2, t3);
            }), i2.render(), this.chart.getMargins(true), this.added || (this.added = true), this.labelLeft = 0, this.labelRight = this.width, this.chart.axisOffset[this.side] = e2;
          }
        }
        setLegendColor() {
          let t2 = this.horiz, e2 = this.reversed, i2 = +!!e2, s2 = +!e2, o2 = t2 ? [i2, 0, s2, 0] : [0, s2, 0, i2];
          this.legendColor = { linearGradient: { x1: o2[0], y1: o2[1], x2: o2[2], y2: o2[3] }, stops: this.stops };
        }
        drawLegendSymbol(t2, e2) {
          var _a;
          let i2 = e2.legendItem || {}, s2 = t2.padding, o2 = t2.options, r2 = this.options.labels, l2 = D(o2.itemDistance, 10), a2 = this.horiz, { width: n2, height: h2 } = this.getSize(), c2 = D(o2.labelPadding, a2 ? 16 : 30);
          this.setLegendColor();
          let p2 = 0, d2 = 0;
          if (((_a = this.options.title) == null ? void 0 : _a.text) && !this.axisTitle) {
            this.axisGroup || (this.axisParent = i2.group, this.createGroups());
            let t3 = this.len, e3 = this.top, s3 = this.left, o3 = this.width;
            this.len = a2 ? n2 : h2, this.top = 0, this.left = 0, this.width = n2, this.addTitle(true), this.len = t3, this.top = e3, this.left = s3, this.width = o3;
          }
          if (this.axisTitle) {
            let t3 = this.axisTitle.getBBox();
            p2 = t3.height, d2 = t3.width;
          }
          let u2 = this.options.title || {}, f2 = this.axisTitle ? u2.margin ?? 0 : 0, g2 = a2 ? p2 + f2 : 0;
          i2.symbol || (i2.symbol = this.chart.renderer.symbol("roundedRect").attr({ r: o2.symbolRadius ?? 3, zIndex: 1 }).add(i2.group)), i2.symbol.attr({ x: 0, y: (t2.baseline || 0) - 11 + g2, width: n2, height: h2 }), a2 ? (i2.labelWidth = Math.max(n2 + s2 + l2, d2 || 0), i2.labelHeight = h2 + s2 + c2 + p2 + f2) : (i2.labelWidth = n2 + s2 + (r2.x ?? r2.distance ?? 0) + (this.maxLabelLength || 0) + (d2 || 0) + f2, i2.labelHeight = Math.max(h2 + s2, p2 || 0));
        }
        getTitlePosition(t2) {
          var _a;
          let e2 = super.getTitlePosition(t2), i2 = ((_a = this.options.title) == null ? void 0 : _a.margin) ?? 0;
          if (this.horiz && t2) e2.y = this.top - i2;
          else if (!this.horiz && t2) {
            let t3 = this.options.labels || {}, s2 = t3.x ?? t3.distance ?? 0;
            e2.x = this.left + this.width + s2 + (this.maxLabelLength || 0) + i2;
          }
          return e2;
        }
        setState(t2) {
          this.series.forEach(function(e2) {
            e2.setState(t2);
          });
        }
        setVisible() {
        }
        getSeriesExtremes() {
          let t2 = this.series, e2, i2, s2, o2, r2 = t2.length;
          for (this.dataMin = 1 / 0, this.dataMax = -1 / 0; r2--; ) {
            for (let l2 of (i2 = (o2 = t2[r2]).colorKey = D(o2.options.colorKey, o2.colorKey, o2.pointValKey, o2.zoneAxis, "y"), s2 = o2[i2 + "Min"] && o2[i2 + "Max"], [i2, "value", "y"])) if ((e2 = o2.getColumn(l2)).length) break;
            if (s2) o2.minColorValue = o2[i2 + "Min"], o2.maxColorValue = o2[i2 + "Max"];
            else {
              let t3 = N.prototype.getExtremes.call(o2, e2);
              o2.minColorValue = t3.dataMin, o2.maxColorValue = t3.dataMax;
            }
            M(o2.minColorValue) && M(o2.maxColorValue) && (this.dataMin = Math.min(this.dataMin, o2.minColorValue), this.dataMax = Math.max(this.dataMax, o2.maxColorValue)), s2 || N.prototype.applyExtremes.call(o2);
          }
        }
        drawCrosshair(t2, e2) {
          let i2, s2 = this.legendItem || {}, o2 = e2 == null ? void 0 : e2.plotX, r2 = e2 == null ? void 0 : e2.plotY, l2 = this.pos, a2 = this.len;
          e2 && ((i2 = this.toPixels(e2.getNestedProperty(e2.series.colorKey))) < l2 ? i2 = l2 - 2 : i2 > l2 + a2 && (i2 = l2 + a2 + 2), e2.plotX = i2, e2.plotY = this.len - i2, super.drawCrosshair(t2, e2), e2.plotX = o2, e2.plotY = r2, this.cross && !this.cross.addedToColorAxis && s2.group && (this.cross.addClass("highcharts-coloraxis-marker").add(s2.group), this.cross.addedToColorAxis = true, this.chart.styledMode || "object" != typeof this.crosshair || this.cross.attr({ fill: this.crosshair.color })));
        }
        getPlotLinePath(t2) {
          let e2 = this.left, i2 = t2.translatedValue, s2 = this.top;
          return k(i2) ? this.horiz ? [["M", i2 - 4, s2 - 6], ["L", i2 + 4, s2 - 6], ["L", i2, s2], ["Z"]] : [["M", e2, i2], ["L", e2 - 6, i2 + 6], ["L", e2 - 6, i2 - 6], ["Z"]] : super.getPlotLinePath(t2);
        }
        update(t2, e2) {
          var _a;
          let i2 = this.chart.legend;
          this.series.forEach((t3) => {
            t3.isDirtyData = true;
          }), (t2.dataClasses && i2.allItems || this.dataClasses) && this.destroyItems(), super.update(t2, e2), ((_a = this.legendItem) == null ? void 0 : _a.label) && (this.setLegendColor(), i2.colorizeItem(this, true));
        }
        destroyItems() {
          let t2 = this.chart, e2 = this.legendItem || {};
          if (e2.label) t2.legend.destroyItem(this);
          else if (e2.labels) for (let i2 of e2.labels) t2.legend.destroyItem(i2);
          t2.isDirtyLegend = true;
        }
        destroy() {
          this.chart.isDirtyLegend = true, this.destroyItems(), super.destroy(...[].slice.call(arguments));
        }
        remove(t2) {
          this.destroyItems(), super.remove(t2);
        }
        getDataClassLegendSymbols() {
          let t2, e2 = this, i2 = e2.chart, s2 = e2.legendItem && e2.legendItem.labels || [], o2 = i2.options.legend, r2 = D(o2.valueDecimals, -1), l2 = D(o2.valueSuffix, ""), a2 = (t3) => e2.series.reduce((e3, i3) => (e3.push(...i3.points.filter((e4) => e4.dataClass === t3)), e3), []);
          return s2.length || e2.dataClasses.forEach((o3, n2) => {
            let h2 = o3.from, c2 = o3.to, { numberFormatter: p2 } = i2, d2 = true;
            t2 = "", void 0 === h2 ? t2 = "< " : void 0 === c2 && (t2 = "> "), void 0 !== h2 && (t2 += p2(h2, r2) + l2), void 0 !== h2 && void 0 !== c2 && (t2 += " - "), void 0 !== c2 && (t2 += p2(c2, r2) + l2), s2.push(E({ chart: i2, name: t2, options: {}, drawLegendSymbol: N.prototype.drawLegendSymbol, visible: true, isDataClass: true, setState: (t3) => {
              for (let e3 of a2(n2)) e3.setState(t3);
            }, setVisible: function() {
              this.visible = d2 = e2.visible = !d2;
              let t3 = [];
              for (let e3 of a2(n2)) e3.setVisible(d2), e3.hiddenInDataClass = !d2, -1 === t3.indexOf(e3.series) && t3.push(e3.series);
              i2.legend.colorizeItem(this, d2), t3.forEach((t4) => {
                P(t4, "afterDataClassLegendClick");
              });
            } }, o3));
          }), s2;
        }
        getSize() {
          let { chart: t2, horiz: e2 } = this, { height: i2, width: s2 } = this.options, { legend: o2 } = t2.options;
          return { width: D(M(s2) ? V(s2, t2.chartWidth) : void 0, o2 == null ? void 0 : o2.symbolWidth, e2 ? K.defaultLegendLength : 12), height: D(M(i2) ? V(i2, t2.chartHeight) : void 0, o2 == null ? void 0 : o2.symbolHeight, e2 ? 12 : K.defaultLegendLength) };
        }
      }
      K.defaultLegendLength = 200, K.keepProps = ["legendItem"], E(K.prototype, z), Array.prototype.push.apply(y().keepProps, K.keepProps);
      let F = g();
      F.ColorAxis = F.ColorAxis || K, F.ColorAxis.compose(F.Chart, F.Fx, F.Legend, F.Series);
      var X = d(28), U = d.n(X);
      let { column: { prototype: Y } } = j().seriesTypes;
      var B = h || (h = {});
      function Z(t2) {
        let e2 = this.series, i2 = e2.chart.renderer;
        this.moveToTopOnHover && this.graphic && (e2.stateMarkerGraphic || (e2.stateMarkerGraphic = new (U())(i2, "use").css({ pointerEvents: "none" }).add(this.graphic.parentGroup)), (t2 == null ? void 0 : t2.state) === "hover" ? (this.graphic.attr({ id: this.id }), e2.stateMarkerGraphic.attr({ href: `${i2.url}#${this.id}`, visibility: "visible" })) : e2.stateMarkerGraphic.attr({ href: "" }));
      }
      B.pointMembers = { dataLabelOnNull: true, moveToTopOnHover: true, isValid: function() {
        return null !== this.value && this.value !== 1 / 0 && this.value !== -1 / 0 && (void 0 === this.value || !isNaN(this.value));
      } }, B.seriesMembers = { colorKey: "value", axisTypes: ["xAxis", "yAxis", "colorAxis"], parallelArrays: ["x", "y", "value"], pointArrayMap: ["value"], trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], colorAttribs: function(t2) {
        let e2 = {};
        return M(t2.color) && (!t2.state || "normal" === t2.state) && (e2[this.colorProp || "fill"] = t2.color), e2;
      }, pointAttribs: Y.pointAttribs }, B.compose = function(t2) {
        return A(t2.prototype.pointClass, "afterSetState", Z), t2;
      };
      let $ = h, { scatter: { prototype: { pointClass: q } } } = j().seriesTypes;
      class J extends q {
        applyOptions(t2, e2) {
          return (this.isNull || null === this.value) && delete this.color, super.applyOptions(t2, e2), this.formatPrefix = this.isNull || null === this.value ? "null" : "point", this;
        }
        getCellAttributes() {
          let t2 = this.series, e2 = t2.options, i2 = (e2.colsize || 1) / 2, s2 = (e2.rowsize || 1) / 2, o2 = t2.xAxis, r2 = t2.yAxis, l2 = this.options.marker || t2.options.marker, a2 = t2.pointPlacementToXValue(), n2 = D(this.pointPadding, e2.pointPadding, 0), h2 = { x1: w(Math.round(o2.len - o2.translate(this.x - i2, false, true, false, true, -a2)), -o2.len, 2 * o2.len), x2: w(Math.round(o2.len - o2.translate(this.x + i2, false, true, false, true, -a2)), -o2.len, 2 * o2.len), y1: w(Math.round(r2.translate(this.y - s2, false, true, false, true)), -r2.len, 2 * r2.len), y2: w(Math.round(r2.translate(this.y + s2, false, true, false, true)), -r2.len, 2 * r2.len) };
          for (let t3 of [["width", "x"], ["height", "y"]]) {
            let e3 = t3[0], i3 = t3[1], s3 = i3 + "1", a3 = i3 + "2", c2 = Math.abs(h2[s3] - h2[a3]), p2 = l2 && l2.lineWidth || 0, d2 = Math.abs(h2[s3] + h2[a3]) / 2, u2 = l2 && l2[e3];
            if (M(u2) && u2 < c2) {
              let t4 = u2 / 2 + p2 / 2;
              h2[s3] = d2 - t4, h2[a3] = d2 + t4;
            }
            n2 && (("x" === i3 && o2.reversed || "y" === i3 && !r2.reversed) && (s3 = a3, a3 = i3 + "1"), h2[s3] += n2, h2[a3] -= n2);
          }
          return h2;
        }
        haloPath(t2) {
          if (!t2) return [];
          let { x: e2 = 0, y: i2 = 0, width: s2 = 0, height: o2 = 0 } = this.shapeArgs || {};
          return [["M", e2 - t2, i2 - t2], ["L", e2 - t2, i2 + o2 + t2], ["L", e2 + s2 + t2, i2 + o2 + t2], ["L", e2 + s2 + t2, i2 - t2], ["Z"]];
        }
        isValid() {
          return this.value !== 1 / 0 && this.value !== -1 / 0;
        }
      }
      E(J.prototype, { dataLabelOnNull: true, moveToTopOnHover: true, ttBelow: false });
      var Q = d(540), tt = d.n(Q);
      let { doc: te } = g(), { series: ti, seriesTypes: { column: ts, scatter: to } } = j(), { prototype: { symbols: tr } } = tt(), { colorFromPoint: tl, getContext: ta } = { colorFromPoint: function(t2, e2) {
        let i2 = e2.series.colorAxis;
        if (i2) {
          let s2 = i2.toColor(t2 || 0, e2).split(")")[0].split("(")[1].split(",").map((t3) => D(parseFloat(t3), parseInt(t3, 10)));
          return s2[3] = 255 * D(s2[3], 1), M(t2) && e2.visible || (s2[3] = 0), s2;
        }
        return [0, 0, 0, 0];
      }, getContext: function(t2) {
        let { canvas: e2, context: i2 } = t2;
        return e2 && (i2 == null ? void 0 : i2.clearRect) ? (i2.clearRect(0, 0, e2.width, e2.height), i2) : (t2.canvas = te.createElement("canvas"), t2.context = t2.canvas.getContext("2d", { willReadFrequently: true }) || void 0, t2.context);
      } };
      class tn extends to {
        constructor() {
          super(...arguments), this.valueMax = NaN, this.valueMin = NaN, this.isDirtyCanvas = true;
        }
        drawPoints() {
          let t2 = this, e2 = t2.options, i2 = e2.interpolation, s2 = e2.marker || {};
          if (i2) {
            let { image: e3, chart: i3, xAxis: s3, yAxis: o2 } = t2, { reversed: r2 = false, len: l2 } = s3, { reversed: a2 = false, len: n2 } = o2, h2 = { width: l2, height: n2 };
            if (!e3 || t2.isDirtyData || t2.isDirtyCanvas) {
              let l3 = ta(t2), { canvas: n3, options: { colsize: c2 = 1, rowsize: p2 = 1 }, points: d2, points: { length: u2 } } = t2, f2 = i3.colorAxis && i3.colorAxis[0];
              if (n3 && l3 && f2) {
                let { min: f3, max: g2 } = s3.getExtremes(), { min: m2, max: y2 } = o2.getExtremes(), x2 = g2 - f3, b2 = y2 - m2, v2 = Math.round(x2 / c2 / 8 * 8), C2 = Math.round(b2 / p2 / 8 * 8), [A2, w2] = [[v2, v2 / x2, r2, "ceil"], [C2, C2 / b2, !a2, "floor"]].map(([t3, e4, i4, s4]) => i4 ? (i5) => Math[s4](t3 - e4 * i5) : (t4) => Math[s4](e4 * t4)), M2 = n3.width = v2 + 1, E2 = M2 * (n3.height = C2 + 1), P2 = (u2 - 1) / E2, L2 = new Uint8ClampedArray(4 * E2), k2 = (t3, e4) => 4 * Math.ceil(M2 * w2(e4 - m2) + A2(t3 - f3));
                t2.buildKDTree();
                for (let t3 = 0; t3 < E2; t3++) {
                  let e4 = d2[Math.ceil(P2 * t3)], { x: i4, y: s4 } = e4;
                  L2.set(tl(e4.value, e4), k2(i4, s4));
                }
                l3.putImageData(new ImageData(L2, M2), 0, 0), e3 ? e3.attr({ ...h2, href: n3.toDataURL("image/png", 1) }) : (t2.directTouch = false, t2.image = i3.renderer.image(n3.toDataURL("image/png", 1)).attr(h2).add(t2.group));
              }
              t2.isDirtyCanvas = false;
            } else (e3.width !== l2 || e3.height !== n2) && e3.attr(h2);
          } else (s2.enabled || t2._hasPointMarkers) && (ti.prototype.drawPoints.call(t2), t2.points.forEach((e3) => {
            e3.graphic && (e3.graphic[t2.chart.styledMode ? "css" : "animate"](t2.colorAttribs(e3)), null === e3.value && e3.graphic.addClass("highcharts-null-point"));
          }));
        }
        getExtremes() {
          let { dataMin: t2, dataMax: e2 } = ti.prototype.getExtremes.call(this, this.getColumn("value"));
          return k(t2) && (this.valueMin = t2), k(e2) && (this.valueMax = e2), ti.prototype.getExtremes.call(this);
        }
        getValidPoints(t2, e2) {
          return ti.prototype.getValidPoints.call(this, t2, e2, true);
        }
        hasData() {
          return !!this.dataTable.rowCount;
        }
        init() {
          super.init.apply(this, arguments);
          let t2 = this.options;
          t2.pointRange = D(t2.pointRange, t2.colsize || 1), this.yAxis.axisPointRange = t2.rowsize || 1, tr.ellipse = tr.circle, t2.marker && k(t2.borderRadius) && (t2.marker.r = t2.borderRadius);
          let e2 = this.canvas = document.createElement("canvas");
          e2 && (this.context = e2 == null ? void 0 : e2.getContext("webgpu"));
        }
        markerAttribs(t2, e2) {
          var _a, _b;
          let i2 = t2.shapeArgs || {};
          if (t2.hasImage) return { x: t2.plotX, y: t2.plotY };
          if (e2 && "normal" !== e2) {
            let s2 = t2.options.marker || {}, o2 = this.options.marker || {}, r2 = ((_a = o2.states) == null ? void 0 : _a[e2]) || {}, l2 = ((_b = s2.states) == null ? void 0 : _b[e2]) || {}, a2 = (l2.width || r2.width || i2.width || 0) + (l2.widthPlus || r2.widthPlus || 0), n2 = (l2.height || r2.height || i2.height || 0) + (l2.heightPlus || r2.heightPlus || 0);
            return { x: (i2.x || 0) + ((i2.width || 0) - a2) / 2, y: (i2.y || 0) + ((i2.height || 0) - n2) / 2, width: a2, height: n2 };
          }
          return i2;
        }
        pointAttribs(t2, e2) {
          var _a, _b, _c, _d, _e, _f, _g;
          let i2 = ti.prototype.pointAttribs.call(this, t2, e2), s2 = this.options || {}, o2 = this.chart.options.plotOptions || {}, r2 = o2.series || {}, l2 = o2.heatmap || {}, a2 = (t2 == null ? void 0 : t2.options.borderColor) || s2.borderColor || l2.borderColor || r2.borderColor, n2 = (t2 == null ? void 0 : t2.options.borderWidth) || s2.borderWidth || l2.borderWidth || r2.borderWidth || i2["stroke-width"];
          if (i2.stroke = ((_a = t2 == null ? void 0 : t2.marker) == null ? void 0 : _a.lineColor) || ((_b = s2.marker) == null ? void 0 : _b.lineColor) || a2 || this.color, i2["stroke-width"] = n2, e2 && "normal" !== e2) {
            let o3 = O((_c = s2.states) == null ? void 0 : _c[e2], (_e = (_d = s2.marker) == null ? void 0 : _d.states) == null ? void 0 : _e[e2], ((_g = (_f = t2 == null ? void 0 : t2.options.marker) == null ? void 0 : _f.states) == null ? void 0 : _g[e2]) || {});
            i2.fill = o3.color || b().parse(i2.fill).brighten(o3.brightness || 0).get(), i2.stroke = o3.lineColor || i2.stroke;
          }
          return i2;
        }
        translate() {
          var _a;
          let { borderRadius: t2, marker: e2 } = this.options, i2 = (e2 == null ? void 0 : e2.symbol) || "rect", s2 = tr[i2] ? i2 : "rect", o2 = -1 !== ["circle", "square"].indexOf(s2);
          for (let e3 of (this.generatePoints(), this.points)) {
            let r2 = e3.getCellAttributes(), l2 = Math.min(r2.x1, r2.x2), a2 = Math.min(r2.y1, r2.y2), n2 = Math.max(Math.abs(r2.x2 - r2.x1), 0), h2 = Math.max(Math.abs(r2.y2 - r2.y1), 0);
            if (e3.hasImage = 0 === (((_a = e3.marker) == null ? void 0 : _a.symbol) || i2 || "").indexOf("url"), o2) {
              let t3 = Math.abs(n2 - h2);
              l2 = Math.min(r2.x1, r2.x2) + (n2 < h2 ? 0 : t3 / 2), a2 = Math.min(r2.y1, r2.y2) + (n2 < h2 ? t3 / 2 : 0), n2 = h2 = Math.min(n2, h2);
            }
            e3.hasImage && (e3.marker = { width: n2, height: h2 }), e3.plotX = e3.clientX = (r2.x1 + r2.x2) / 2, e3.plotY = (r2.y1 + r2.y2) / 2, e3.shapeType = "path", e3.shapeArgs = O(true, { x: l2, y: a2, width: n2, height: h2 }, { d: tr[s2](l2, a2, n2, h2, { r: k(t2) ? t2 : 0 }) });
          }
          P(this, "afterTranslate");
        }
      }
      tn.defaultOptions = O(to.defaultOptions, { animation: false, borderRadius: 0, borderWidth: 0, interpolation: false, nullColor: "#f7f7f7", dataLabels: { formatter: function() {
        let { numberFormatter: t2 } = this.series.chart, { value: e2 } = this.point;
        return k(e2) ? t2(e2, -1) : "";
      }, inside: true, verticalAlign: "middle", crop: false, overflow: "allow", padding: 0 }, marker: { symbol: "rect", radius: 0, lineColor: void 0, states: { hover: { lineWidthPlus: 0 }, select: {} } }, clip: true, pointRange: null, tooltip: { pointFormat: "{point.x}, {point.y}: {point.value}<br/>" }, states: { hover: { halo: false, brightness: 0.2 } }, legendSymbol: "rectangle" }), A(tn, "afterDataClassLegendClick", function() {
        this.isDirtyCanvas = true, this.drawPoints(), this.options.enableMouseTracking && this.drawTracker();
      }), E(tn.prototype, { axisTypes: $.seriesMembers.axisTypes, colorKey: $.seriesMembers.colorKey, directTouch: true, getExtremesFromAll: true, keysAffectYAxis: ["y"], parallelArrays: $.seriesMembers.parallelArrays, pointArrayMap: ["y", "value"], pointClass: J, specialGroup: "group", trackerGroups: $.seriesMembers.trackerGroups, alignDataLabel: ts.prototype.alignDataLabel, colorAttribs: $.seriesMembers.colorAttribs, getSymbol: ti.prototype.getSymbol }), $.compose(tn), j().registerSeriesType("heatmap", tn);
      let th = g();
      return u.default;
    })());
  }
});
export default require_heatmap();
/*! Bundled license information:

highcharts/modules/heatmap.js:
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
//# sourceMappingURL=highcharts_modules_heatmap.js.map
