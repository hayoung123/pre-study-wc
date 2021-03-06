class Observable {
  constructor() {
    this._observers = new Set();
  }
  subscribe(observer) {
    this._observers.add(observer);
  }
  unsubscribe(observer) {
    this._observers.remove(observer);
  }
  notify() {
    this._observers.forEach((observer) => observer());
  }
}

export default Observable;
