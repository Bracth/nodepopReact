const storage = {
  get(key) {
    const value = localStorage.getItem(key);
    if (!value) {
      return null;
    } else {
      return JSON.parse(value);
    }
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export default storage;
