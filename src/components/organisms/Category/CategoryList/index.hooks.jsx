export const useCategoryList = () => {
  const categoryRows = (categories = []) =>
    categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
    }))

  return { categoryRows }
}
