import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import ReactECharts from 'echarts-for-react';
import { Rnd } from "react-rnd";
import { options } from './options'
import '@styles/view.less';

const View = (props) => {
  const chartsStore = props.chartsStore;

  const onChartReady = (param, echarts) => {
    console.log('onChartReady:', param, echarts)
  }

  const onChartClick = (param, echarts) => {
    console.log('onChartClick:', param, echarts)
  }

  const onChartLegendselectchanged = (param, echarts) => {
    console.log('onChartLegendselectchanged:', param, echarts)
  }

  const handleItemClick = (item) => {
    console.log(1111, item)
    chartsStore.setCurrent(item);
    // TODO: 设置当前操作Item，用于显示属性Panel内容
  }

  const renderRndCharts = (option) => {
    const position = { x: 0, y: 0, width: 400, height: 300 };
    
    return (
      <Rnd
        key={option.id}
        default={position}
        bounds=".view"
      >
        <div
          onClick={() => handleItemClick(option)}
          className="view__main-item"
        >
          <ReactECharts
            option={option}
            style={{ height: '100%' }}
            theme="dark"
            onChartReady={onChartReady}
            onEvents={{
              'click': onChartClick,
              'legendselectchanged': onChartLegendselectchanged
            }}
          />
        </div>
      </Rnd>
    );
  }

  return (
    <div className="view">
      <div className="view__main" id="view_container">
        {chartsStore.charts.map(item => renderRndCharts({
          ...options[item.type],
          id: item.id
        }))}
      </div>
    </div>
  )
}

export default (inject('chartsStore'))(observer(View));