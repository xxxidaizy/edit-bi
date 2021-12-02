import { makeAutoObservable } from 'mobx';

const ChartsStore = makeAutoObservable({
  count: 0,
  charts: [],
  current: {},

  // 当前操作对象
  setCurrent(obj) {
    this.current = obj;
  },

  add(value) {
    this.charts = [
      ...this.charts,
      { type: value, id: `${value}_${this.count ++}` }
    ];
  },

  delete(value) {
  },

  // TODO: Set Position
  update(obj) {
    this.charts = this.charts.map(item => item.id === obj.id ? obj : item);
  },
})

export default ChartsStore;
