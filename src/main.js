// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById("tech"));
// 指定图表的配置项和数据
const plantCap = [
  {
    name: "静态页面",
    value: "8篇 1个项目",
  },
  {
    name: "编程基础",
    value: "10篇",
  },
  {
    name: "Vue",
    value: "8篇 3个项目",
  },
  {
    name: "React",
    value: "6篇 2个项目",
  },
  {
    name: "项目开发",
    value: "7篇",
  },
  {
    name: "沟通协作",
    value: "3篇",
  },
];

const datalist = [
  {
    offset: [15, 70],
    symbolSize: 90,
    opacity: 0.95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#e54948",
      },
      {
        offset: 1,
        color: "#f08456",
      },
    ]),
  },
  {
    offset: [25, 30],
    symbolSize: 75,
    opacity: 0.95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#77EEDF",
      },
      {
        offset: 1,
        color: "#49ddb2",
      },
    ]),
  },
  {
    offset: [90, 78],
    symbolSize: 80,
    opacity: 0.95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#34475B",
      },
      {
        offset: 0.35,
        color: "#3FB37F",
      },
    ]),
  },
  {
    offset: [85, 35],
    symbolSize: 75,
    opacity: 0.95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#277aec",
      },
      {
        offset: 1,
        color: "#57c5ec",
      },
    ]),
  },
  {
    offset: [55, 70],
    symbolSize: 75,
    opacity: 0.95,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#384D9D",
      },
      {
        offset: 1,
        color: "#3C485E",
      },
    ]),
  },
  {
    offset: [56, 45],
    symbolSize: 68,
    opacity: 0.7,
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
        offset: 0,
        color: "#FFCC33",
      },
      {
        offset: 1,
        color: "#e5d273",
      },
    ]),
  },
];
let datas = [];
for (let i = 0; i < plantCap.length; i++) {
  let item = plantCap[i];
  let itemToStyle = datalist[i];
  datas.push({
    name: item.name + "\n" + item.value,
    value: itemToStyle.offset,
    symbolSize: itemToStyle.symbolSize,
    label: {
      normal: {
        textStyle: {
          fontSize: 18,
          fontWeight: 800,
          lineHeight: 22,
        },
      },
    },
    itemStyle: {
      normal: {
        color: itemToStyle.color,
        opacity: itemToStyle.opacity,
      },
    },
  });
}
option = {
  backgroundColor: "#12468500",
  grid: {
    show: false,
    top: 10,
    bottom: 10,
  },
  xAxis: [
    {
      gridIndex: 0,
      type: "value",
      show: false,
      min: 0,
      max: 100,
      nameLocation: "middle",
      nameGap: 5,
    },
  ],
  yAxis: [
    {
      gridIndex: 0,
      min: 0,
      show: false,
      max: 100,
      nameLocation: "middle",
      nameGap: 30,
    },
  ],
  series: [
    {
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
            fontSize: "20",
          },
        },
      },
      itemStyle: {
        normal: {
          color: "#00acea",
        },
      },
      data: datas,
    },
  ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
