import { Item } from './gilded-rose'

export  interface ItemUpdate {
    update(item : Item)
}

export class AgedBriedUpdate implements ItemUpdate {
    update(item : Item) : void {
        console.log('Aged Bried')
    }
}

export class BackstagePassesUpdate implements ItemUpdate {
    update(item : Item) : void {
        console.log('Backstage passes')
    }
}

export class SulfurasUpdate implements ItemUpdate {
    update(item : Item) : void {
        console.log('Sulfura Bried')
    }
}

export class DefaultUpdate implements ItemUpdate {
    update(item : Item) : void {
        console.log('Default')
    }
}
