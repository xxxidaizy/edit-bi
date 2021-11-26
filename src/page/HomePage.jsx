import React, { useState } from "react";
import Dashboard from '@components/dashboard/Dashboard';
import View from '@components/view/View';
import Panel from '@components/panel/Panel';
import '@styles/homepage.less';

const HomePage = () => {
  const [currentCharts, setCurrentCharts] = useState({});

  const setCharts = obj => {
    setCurrentCharts(obj)
    console.log(obj)
  }

  return (
    <div className="home-page flex">
      <div className="home-page__dashboard">
        <Dashboard />
      </div>
      <div className="home-page__view">
        <View setCharts={setCharts} />
      </div>
      <div className="home-page__panel">
        <Panel currentCharts={currentCharts} />
      </div>
    </div>
  )
}

export default HomePage;