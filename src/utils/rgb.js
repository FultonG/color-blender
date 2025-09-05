export const avg = (...nums) =>
  Math.floor(nums.reduce((sum, n) => sum + n, 0) / nums.length);

export const toString = (rgb) => `${rgb.r}, ${rgb.g}, ${rgb.b}`;
export const white = { r: 255, g: 255, b: 255 };
export const generatePalette = (numColors) => {
  return new Array(numColors).fill(0).map(() => ({
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  }));
};
