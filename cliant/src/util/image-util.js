function getImageURL(name) {
  return new URL(`../assets/product-image/${name}`, import.meta.url).href
}

export {getImageURL};