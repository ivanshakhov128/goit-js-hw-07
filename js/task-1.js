const categoriesList = document.querySelector('#categories');
const categoriesItem = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItem.length}`);
categoriesItem.forEach(item => {
  const headings = item.querySelector('h2').textContent;
  const liItems = item.querySelectorAll('ul li').length;
  console.log(`Category: ${headings}`);
  console.log(`Elements: ${liItems}`);
});
