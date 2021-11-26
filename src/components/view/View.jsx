import React, { useEffect, useState } from "react";
import ReactECharts from 'echarts-for-react';
import { Rnd } from "react-rnd";
import { option } from './options'
import '@styles/view.less';

const View = (props) => {

  const onChartReady = (param, echarts) => {
    console.log('onChartReady:', param, echarts)
  }

  const onChartClick = (param, echarts) => {
    console.log('onChartClick:', param, echarts)
  }

  const onChartLegendselectchanged = (param, echarts) => {
    console.log('onChartLegendselectchanged:', param, echarts)
  }

  const handleItemClick = () => {
    console.log(1111)
    // TODO: 设置当前操作Item，用于显示属性Panel内容
  }

  const renderEcharts = () => {
    return (
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
    )
  }

  return (
    <div className="view">
      <div className="view__main">
        <Rnd
          default={{ x: 0, y: 0, width: 400, height: 300 }}
          bounds=".view"
        >
          <div onClick={handleItemClick} className="view__main-item">
            {renderEcharts()}
          </div>
        </Rnd>
      </div>
    </div>
  )
}

export default View;