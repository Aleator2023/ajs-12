import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalCost(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    totalCostWithDiscount(discount: number): number {
        const total = this.totalCost();
        return total - (total * discount / 100);
    }

    removeItemById(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        if (index > -1) {
            this._items.splice(index, 1);
        }
    }
}
