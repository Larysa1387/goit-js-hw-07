const categoriesByItem = document.querySelectorAll('.item');
console.log(`В списке ${categoriesByItem.length} категории.`);

categoriesByItem.forEach(itemEl =>
  console.log(`Категория: ${itemEl.firstElementChild.textContent}
Количество элементов: ${itemEl.lastElementChild.children.length}`),
);
