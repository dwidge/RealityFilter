let logs = {};
function log(m = {}) {
  logs = { ...logs, ...m };
  const msgs = Object.entries(logs).map(
    (m) => m[0] + " " + (typeof m[1] === "number" ? m[1].toFixed(3) : m[1])
  );
  logDiv.innerHTML = msgs.join?.("<br/>");
}
