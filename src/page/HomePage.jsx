import React from "react";
import '../styles/homepage.less'

const HomePage = () => {
  return (
    <div className="home-page flex">
      <div className="home-page__dashboard">
        Dashboard
      </div>
      <div className="home-page__view">
        View
      </div>
      <div className="home-page__panel">
        Panel
      </div>
    </div>
  )
}

export default HomePage;