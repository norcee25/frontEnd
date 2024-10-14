const phi = 3.14;

// Fungsi untuk menghitung area dengan alias pada ekspor
const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power);

// Mengekspor dengan alias
export { calculateArea as calculateAreaFunc };

export const calculateAreas = (radii) => {
  return radii.map(radius => calculateArea({ radius }));
};