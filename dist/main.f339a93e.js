// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("tech")); // 指定图表的配置项和数据

var plantCap = [{
  name: "静态页面",
  value: "8篇 1个项目"
}, {
  name: "编程基础",
  value: "10篇"
}, {
  name: "Vue",
  value: "8篇 3个项目"
}, {
  name: "React",
  value: "6篇 2个项目"
}, {
  name: "项目开发",
  value: "7篇"
}, {
  name: "沟通协作",
  value: "3篇"
}];
var datalist = [{
  offset: [15, 70],
  symbolSize: 90,
  opacity: 0.95,
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: "#e54948"
  }, {
    offset: 1,
    color: "#f08456"
  }])
}, {
  offset: [25, 30],
  symbolSize: 75,
  opacity: 0.95,
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: "#77EEDF"
  }, {
    offset: 1,
    color: "#49ddb2"
  }])
}, {
  offset: [90, 78],
  symbolSize: 80,
  opacity: 0.95,
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: "#34475B"
  }, {
    offset: 0.35,
    color: "#3FB37F"
  }])
}, {
  offset: [85, 35],
  symbolSize: 75,
  opacity: 0.95,
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: "#277aec"
  }, {
    offset: 1,
    color: "#57c5ec"
  }])
}, {
  offset: [55, 70],
  symbolSize: 75,
  opacity: 0.95,
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: "#384D9D"
  }, {
    offset: 1,
    color: "#3C485E"
  }])
}, {
  offset: [56, 45],
  symbolSize: 68,
  opacity: 0.7,
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: "#FFCC33"
  }, {
    offset: 1,
    color: "#e5d273"
  }])
}];
var datas = [];

for (var i = 0; i < plantCap.length; i++) {
  var item = plantCap[i];
  var itemToStyle = datalist[i];
  datas.push({
    name: item.name + "\n" + item.value,
    value: itemToStyle.offset,
    symbolSize: itemToStyle.symbolSize,
    label: {
      normal: {
        textStyle: {
          fontSize: 18,
          fontWeight: 800,
          lineHeight: 22
        }
      }
    },
    itemStyle: {
      normal: {
        color: itemToStyle.color,
        opacity: itemToStyle.opacity
      }
    }
  });
}

option = {
  backgroundColor: "#12468500",
  grid: {
    show: false,
    top: 10,
    bottom: 10
  },
  xAxis: [{
    gridIndex: 0,
    type: "value",
    show: false,
    min: 0,
    max: 100,
    nameLocation: "middle",
    nameGap: 5
  }],
  yAxis: [{
    gridIndex: 0,
    min: 0,
    show: false,
    max: 100,
    nameLocation: "middle",
    nameGap: 30
  }],
  series: [{
    type: "effectScatter",
    // symbol: 'circle',
    // symbolSize: 120,
    hoverAnimation: true,
    label: {
      normal: {
        show: true,
        formatter: "{b}",
        color: "#fff",
        textStyle: {
          fontSize: "20"
        }
      }
    },
    itemStyle: {
      normal: {
        color: "#00acea"
      }
    },
    data: datas
  }]
}; // 使用刚指定的配置项和数据显示图表。

myChart.setOption(option);
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.f339a93e.js.map