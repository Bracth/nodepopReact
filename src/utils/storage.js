const storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export default storage;
