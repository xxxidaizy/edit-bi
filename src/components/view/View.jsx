import React, { useEffect } from "react";
import * as echarts from 'echarts';
import '../../styles/view.less';

const View = () => {

  useEffect(() => {
    init()
  }, []);

  const init = () => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('charts'), 'dark');

    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ],
    });
    console.log(myChart.getOption())

  }

  return (
    <div className="view">
      <div className="view__main">
        <div id="charts" style={{ width: 600, height: 400 }}></div>
      </div>
    </div>
  )
}

export default View;