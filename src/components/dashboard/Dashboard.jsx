import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import '@styles/dashboard.less';

const menus = [
  'pie',
  'line',
];

const Dashboard = (props) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open)
  }

  const handleAdd = (item) => {
    props.chartsStore.add(item)
  }

  return (
    <div className="dashboard">
      <div className="dashboard__head" onClick={handleClick}>
        Dashboard
      </div>
      <div className="dashboard__main">
        {open && menus.map(item => (
          <div
            key={item}
            onClick={() => handleAdd(item)}
            className="dashboard__main-item flex flex-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default (inject('chartsStore'))(observer(Dashboard));