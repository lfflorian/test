import { Item } from './gilded-rose'

export interface ItemUpdate {
    update(item: Item)
}

export class AgedBriedUpdate implements ItemUpdate {
    update(item: Item): void {
        item.sellIn -= 1
        if (item.quality < 50) {
            item.quality += 1
        }
    }
}

export class BackstagePassesUpdate implements ItemUpdate {
    update(item: Item): void {
        item.sellIn -= 1
        if (item.quality < 50) {
            if (item.sellIn < 11 && item.sellIn >= 6) {
                item.quality += 2
            } else if (item.sellIn < 6 && item.sellIn >= 0) {
                item.quality += 3
            } else if (item.sellIn < 0) {
                item.quality = 0
            } else {
                item.quality += 1
            }
        }
    }
}

export class SulfurasUpdate implements ItemUpdate {
    update(item: Item): void {
    }
}

export class DefaultUpdate implements ItemUpdate {
    update(item: Item): void {
        item.sellIn -= 1
        if (item.quality > 0) {
            if (item.sellIn >= 0) {
                item.quality -= 1
            }
            else {
                item.quality -= 2
            }
        }
    }
}
