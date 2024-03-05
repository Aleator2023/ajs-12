import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';

describe('Cart', () => {
    it('calculates total cost without discount', () => {
        const cart = new Cart();
        cart.add({id: 1, price: 100} as Buyable);
        cart.add({id: 2, price: 200} as Buyable);

        expect(cart.totalCost()).toBe(300);
    });

    it('calculates total cost with discount', () => {
        const cart = new Cart();
        cart.add({id: 1, price: 100} as Buyable);
        cart.add({id: 2, price: 200} as Buyable);

        expect(cart.totalCostWithDiscount(10)).toBe(270);
    });

    it('removes an item by id', () => {
        const cart = new Cart();
        cart.add({id: 1, price: 100} as Buyable);
        cart.add({id: 2, price: 200} as Buyable);

        cart.removeItemById(1);

        expect(cart.items.length).toBe(1);
        expect(cart.items[0].id).toBe(2);
    });
});
