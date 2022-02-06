export const Distance = (lat1, lon1, lat2, lon2) => {
  //   const lat2 = 26.4969;
  //   const lon2 = 80.3246;
  //   //   const lat2 = 26.9143;
  //   const lon2 = 80.9419;
  const pi = Math.PI / 180;
  const a =
    0.5 -
    Math.cos((lat2 - lat1) * pi) / 2 +
    (Math.cos(lat1 * pi) *
      Math.cos(lat2 * pi) *
      (1 - Math.cos((lon2 - lon1) * pi))) /
      2;
  console.log("a= ", a);
  return 12742 * Math.asin(Math.sqrt(Math.abs(a)));
};
