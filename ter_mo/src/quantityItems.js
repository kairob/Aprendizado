let quantityItems = document.getElementById('iten').value;
let quantityItemsAv = document.getElementById('iten1').value;
console.log(quantityItems);
console.log(quantityItemsAv);
function damagedItems() {
  return (
    ((quantityItemsAv / quantityItems) - 1) * 10
  );
}
console.log(damagedItems());
damagedItems();
