export function isTimeToRequest(type) {
  return {
    type: "START",
    payload: type,
  };
}
