const port = 3000;
const getCategories = async () => {
  const response = await fetch(`http://localhost:${port}/categories`);
  const data = response.json();
  return data;
};

export { getCategories };
