export class LocalStorage {
  static add(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key) {
    let obj = localStorage.getItem(key);
    return JSON.parse(obj);
  }

  static remove(key) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}
