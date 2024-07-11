export class LocalStorage {
  static addToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getFromLocalStorage(key) {
    let obj = localStorage.getItem(key);
    return JSON.parse(obj);
  }

  static removeFromLocalStorage(key) {
    localStorage.removeItem(key);
  }

  static clearLocalStorage() {
    localStorage.clear();
  }
}
