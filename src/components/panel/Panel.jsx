import React, { useState } from "react";
import { Rnd } from "react-rnd";
import '@styles/panel.less';

const Panel = (props) => {

  const [open, setOpen] = useState(false);

  const [options, setOptions] = useState({});

  const handleClick = () => {
    setOpen(!open);
    setOptions(props.currentCharts.getOption?.())
    console.log(options)
  }

  const handleDragStop = (e, d) => {
    console.log(e, d)
  }

  return (
    <div className="panel">
      <div className="panel__trigger" onClick={handleClick}>
        {open ? '关闭属性' : '显示属性'}
      </div>

      {/* Panel Detail */}
      {open ? (
        <Rnd
          default={{ x: -210, y: 30, width: 270 }}
          onDragStop={handleDragStop}
          bounds="body"
        >
          <div className="panel__container">
            <div className="panel__container-head">
              {/* TODO: title dynamic */}
              <div className="panel__container-head-title">
                Panel Options: 
              </div>
              <div
                className="panel__container-head-close"
                onClick={handleClick}
              >
                x
              </div>
            </div>
            <div className="panel__container-main">
              content 
            </div>
          </div>
        </Rnd>
      ) : null}
    </div>
  )
}

export default Panel;