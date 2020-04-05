const uuid = require('uuid');

const {
    selectCarts,
    selectCartByCartId,
    selectCartsByCustomerId
    updateCart,
    insertCart,
    deleteCartByCartId
} = require('../../repositories/cart-repository');

describe('cart repository', () => {
    let firstCartId,
        secondCartId,
        expectedCustomerId,
        expectedFirstCart,
        expectedSecondCart;

    beforeEach(() => {
        firstCartId = 'a6083caa-54e4-4744-b23b-374056f1b5d7';
        secondCartId = 'a6083caa-54e4-4744-b23b-374056f1b5d8';
        expectedCustomerId = 'a6083caa-54e4-4744-b23b-374056f1b5d9';

        expectedFirstCart = {
            'cart_id': firstCartId,
            'customer_id': expectedCustomerId
        };
        expectedSecondCart = {
            'cart_id': secondCartId,
            'customer_id': expectedCustomerId
        };
    });

    describe('selectCarts', () => {
        it('should return all the carts', () => {
            const actualCarts = selectCarts();
            const [actualFirstCart, actualSecondCart] = actualCarts.rows;

            expect(actualFirstCart).toEqual(expectedFirstCart);
            expect(actualSecondCart).toEqual(expectedSecondCart);
        });
    });

    describe('selectCartByCartId', () => {
        it('should return a specific cart by cartId', () => {
            const actualFirstCart = selectCartByCartId(firstCartId);

            expect(actualFirstCart).toEqual({
                'cart_id': firstCartId,
                'customer_id': expectedCustomerId
            });

            const actualSecondCart = selectCartByCartId(secondCartId);

            expect(actualSecondCart).toEqual({
                'cart_id': secondCartId,
                'customer_id': expectedCustomerId
            });
        });
    });

    describe('selectCartsByCustomerId', () => {
        it('should return carts by a customerId', () => {
            const actualCarts = selectCartsByCustomerId(expectedCustomerId);

            expect(actualCarts.rows).toEqual([
                expectedFirstCart,
                expectedSecondCart
            ]);
        });

        it('should return no rows if there are no carts for a customerId', () => {
            const actualCarts = selectCartsByCustomerId(uuid.v4());

            expect(actualCarts.rows).toEqual([]);
        });
    });

     describe('deleteCartByCartId', () => {
        it('should return all the carts', () => {
            deleteCartByCartId(expectedCartId);

            const actualCarts = selectCarts();

            expect(actualCarts).toEqual({
                rows: []
            });
        });
    });

    describe('insertCart', () => {
        it('should insert a new carts', () => {
            const newCart = {
                'cart_id': uuid.v4(),
                'customer_id': uuid.v4(),
                'created_date': new Date(),
                'purchased_date': new Date()
            };

            insertCart(newCart);

            const actualCarts = selectCarts();

            expect(actualCarts).toEqual({
                rows: [newCart]
            });
        });
    });

    describe('updateCart', () => {
        it('should update a cart', () => {
            const updatedCart = {
                'cart_id': expectedCartId,
                'customer_id': uuid.v4(),
                'created_date': new Date(),
                'purchased_date': new Date()
            };

            updateCart(updatedCart);

            const actualCart = selectCartByCartId(expectedCartId);

            expect(actualCart).toEqual(updatedCart);
        });
    });
});