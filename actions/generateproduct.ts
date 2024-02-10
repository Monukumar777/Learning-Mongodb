interface productType {
  title: string;
  price: number;
  color: string;
  category: string;
  stock: number;
}

const generateProduct = (numofproduct: number): productType[] => {
  let productarr = [];
  for (let index = 1; index < numofproduct; index++) {
    const { categories, colors } = getRandomvalue();

    let product: productType = {
      category: categories,
      price: Number(getRandomNumber(100, 10000).toFixed()),
      stock: Number(getRandomNumber(1, 300).toFixed()),
      title: "this is product",
      color: colors,
    };
    productarr.push(product);
  }
  return productarr;
};
function getRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function getRandomvalue() {
  let categories = [
    "Electronics",
    "Clothing",
    "Mobiles",
    "laptops",
    "Home & Kitchen",
    "Books",
    "Toys",
    "Sports & Outdoors",
  ];
  let colors = [
    "red",
    "green",
    "yellow",
    "blue",
    "white",
    "black",
    "sky",
    "pink",
  ];
  let randomIndex = Math.floor(Math.random() * categories.length);

  return {
    categories: categories[randomIndex],
    colors: colors[randomIndex],
  };
}

export default generateProduct;
