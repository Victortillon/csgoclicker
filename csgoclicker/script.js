document.addEventListener("DOMContentLoaded", () => {
  const inventoryDiv = document.getElementById("inventory");
  const mapSelect = document.getElementById("map-select");
  const caseSelect = document.getElementById("case-select");

  

  let inventory = [];
  let inventoryLimit = 30;
  

  function getRandomSkin(rarity) {
    const filteredItems = items.filter(item => item.rarity === rarity);
    const randomIndex = Math.floor(Math.random() * filteredItems.length);
    return filteredItems[randomIndex];
  }

  function addSkinToInventory(skin) {
    if (inventory.length >= inventoryLimit) {
      alert("Your inventory is full! Sell some skins or upgrade your inventory space.");
      return;
    }
    inventory.push(skin);
    if (typeof displayInventory === "function") displayInventory();
    if (typeof updateInventoryValue === "function") updateInventoryValue();
  }

 

  // Export functions if needed globally
  window.getRandomSkin = getRandomSkin;
  window.addSkinToInventory = addSkinToInventory;
  window.inventory = inventory;
  window.inventoryLimit = inventoryLimit;
  window.items = items;
});
