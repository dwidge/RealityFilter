function save(key, data) {
  const serializedData = JSON.stringify(data);
  localStorage.setItem(key, serializedData);
}
function load(key) {
  const serializedData = localStorage.getItem(key);
  return serializedData && JSON.parse(serializedData);
}
