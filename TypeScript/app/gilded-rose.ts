export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateSellIn(i){
    if(this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].sellIn--;
    }
  }

  updateQualitySulfuras(i){
    this.items[i].quality = 80;
  }

  updateQualityAgedBrie(i){
    if(this.items[i].sellIn < 0) {
      this.items[i].quality = this.items[i].quality + 2;
    }
    else {
      this.items[i].quality++;
    }
    this.items[i].quality = Math.min(this.items[i].quality,50);
  }

  updateQualityBackstage(i){
    if(this.items[i].sellIn < 0) {
      this.items[i].quality = 0;
    }
    else if(this.items[i].sellIn >= 10) {
      this.items[i].quality++;
    }
    else if(this.items[i].sellIn >= 5) {
      this.items[i].quality = this.items[i].quality + 2;
    }
    else if(this.items[i].sellIn >= 0) {
      this.items[i].quality = this.items[i].quality + 3;
    }
    this.items[i].quality = Math.min(this.items[i].quality,50);
  }

  updateQualityConjured(i){
    if(this.items[i].sellIn < 0) {
      this.items[i].quality = this.items[i].quality - 4;
    }
    else {
      this.items[i].quality = this.items[i].quality - 2;
    }
    this.items[i].quality = Math.max(this.items[i].quality,0);
  }

  updateQualityAnythingElse(i){
    if(this.items[i].sellIn < 0) {
      this.items[i].quality = this.items[i].quality - 2;
    }
    else {
      this.items[i].quality--;
    }
    this.items[i].quality = Math.max(this.items[i].quality,0);
  }

  updateQuality2(){
    this.items.forEach((item, i) => {
      this.updateSellIn(i);
      switch(item.name){
        case "Sulfuras, Hand of Ragnaros":
          this.updateQualitySulfuras(i);
          break;
        case "Aged Brie":
          this.updateQualityAgedBrie(i);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateQualityBackstage(i);
          break;
        case "Conjured Mana Cake":
          this.updateQualityConjured(i);
          break;
        default:
          this.updateQualityAnythingElse(i);
          break;
      }
    });
    return this.items;
  }
}
