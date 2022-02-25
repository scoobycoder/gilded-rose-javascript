function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

//Add Food items
items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  // Main Loop for updating quantity
  for (var i = 0; i < items.length; i++) {
    //Cheese should never go bad
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      // Can never go negative
      if (items[i].quality > 0) {
        // Sulfuras cannot be decreased
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      // Everything but cheese can be reduced
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          // Items
          if (items[i].sell_in < 11) {
            // Add items up to 50 items
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            // Add itmes up to 50 items
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    // reduce sell in date by 1, unless Sulfuras
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    // Once Sell-in value is less than 0, then value degrades twice as fast
    if (items[i].sell_in < 0) {
      // Cheese doesn't go bad
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          // Quality can never be negative
          if (items[i].quality > 0) {
            // Cannot remove Sulfuras
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        // Items can't go higher that 30
        if (items[i].quality < 50) {
          // Add quantity
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}
