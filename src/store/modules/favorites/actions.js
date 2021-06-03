export function addTrack(track) {
  return {
    type: "@favorites/ADD_TRACK",
    payload: { track },
  };
}
export function removeTrack(id) {
  return {
    type: "@favorites/REMOVE_TRACK",
    payload: { id },
  };
}