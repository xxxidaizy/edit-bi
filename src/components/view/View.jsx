import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import ReactECharts from 'echarts-for-react';
import { Rnd } from "react-rnd";
import { options } from './options'
import '@styles/view.less';

const View = (props) => {
  const { chartsStore } = props;

  const onChartReady = (param, echarts) => {
    console.log('onChartReady:', param, echarts)
  }

  const onChartClick = (param, echarts) => {
    console.log('onChartClick:', param, echarts)
  }

  const onChartLegendselectchanged = (param, echarts) => {
    console.log('onChartLegendselectchanged:', param, echarts)
  }

  const handleItemClick = (event, item) => {
    event.stopPropagation();
    chartsStore.setCurrent(item);
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
          onClick={event => handleItemClick(event, option)}
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
    <div className="view" onClick={event => handleItemClick(event, {})}>
      <div id="view_container" className="view__main">
        {chartsStore.charts.map(item => renderRndCharts({
          ...options[item.type],
          id: item.id
        }))}
      </div>
    </div>
  )
}

export default (inject('chartsStore'))(observer(View));