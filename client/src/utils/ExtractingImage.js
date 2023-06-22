export const ExtractingImage = (images) => {
  const pickIndex = Math.floor(Math.random()*images.length);
  return images[pickIndex];
}