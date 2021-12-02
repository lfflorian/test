import { ItemUpdate, AgedBriedUpdate, BackstagePassesUpdate, SulfurasUpdate, DefaultUpdate } from './items-update'

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

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let met : ItemUpdate;
            switch (this.items[i].name) {
                case 'Aged Brie':
                    met = new AgedBriedUpdate()
                    met.update(this.items[i])
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    met = new BackstagePassesUpdate()
                    met.update(this.items[i])
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    met = new SulfurasUpdate()
                    met.update(this.items[i])
                    break;
                default:
                    met = new DefaultUpdate()
                    met.update(this.items[i])
                    break;
            }
        }

        return this.items;
    }
}

