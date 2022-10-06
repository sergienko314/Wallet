export function getConditionCategory(transType) {
  return (category, { getState }) => {
    const { [transType]: categories } = getState().categories;
    const { category: title } = category;
    const normalizedTitle = title.toLowerCase();
    if (
      categories.some(elem => elem.category.toLowerCase() === normalizedTitle)
    ) {
      alert('i have this category');
      return false;
    }
    return true;
  };
}
