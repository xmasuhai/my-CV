const e=echarts.init(document.getElementById("tech")),o=[{name:"静态页面",value:"8篇 1个项目"},{name:"编程基础",value:"10篇"},{name:"Vue",value:"8篇 3个项目"},{name:"React",value:"6篇 2个项目"},{name:"项目开发",value:"7篇"},{name:"沟通协作",value:"3篇"}],t=[{offset:[15,70],symbolSize:90,opacity:.95,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#e54948"},{offset:1,color:"#f08456"}])},{offset:[25,30],symbolSize:75,opacity:.95,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#77EEDF"},{offset:1,color:"#49ddb2"}])},{offset:[90,78],symbolSize:80,opacity:.95,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#34475B"},{offset:.35,color:"#3FB37F"}])},{offset:[85,35],symbolSize:75,opacity:.95,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#277aec"},{offset:1,color:"#57c5ec"}])},{offset:[55,70],symbolSize:75,opacity:.95,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#384D9D"},{offset:1,color:"#3C485E"}])},{offset:[56,45],symbolSize:68,opacity:.7,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FFCC33"},{offset:1,color:"#e5d273"}])}];let a=[];for(let e=0;e<o.length;e++){let r=o[e],l=t[e];a.push({name:r.name+"\n"+r.value,value:l.offset,symbolSize:l.symbolSize,label:{normal:{textStyle:{fontSize:18,fontWeight:800,lineHeight:22}}},itemStyle:{normal:{color:l.color,opacity:l.opacity}}})}const r={backgroundColor:"#12468500",grid:{show:!1,top:10,bottom:10},xAxis:[{gridIndex:0,type:"value",show:!1,min:0,max:100,nameLocation:"middle",nameGap:5}],yAxis:[{gridIndex:0,min:0,show:!1,max:100,nameLocation:"middle",nameGap:30}],series:[{type:"effectScatter",hoverAnimation:!0,label:{normal:{show:!0,formatter:"{b}",color:"#fff",textStyle:{fontSize:"20"}}},itemStyle:{normal:{color:"#00acea"}},data:a}]};e.setOption(r);
//# sourceMappingURL=index.8e44cd33.js.map
