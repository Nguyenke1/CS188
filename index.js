const item = {
    itemId: 'def5cd03-7bf4-49e9-8f0b-380f90c86ec1',
    name: 'Drake Bulldogs Sweatshirt',
    description: 'Get comfortable in these sweats and look fly while wearing them',
    price: 19.99,
    sizesAvailable: 'S, M, L, XL, XXL'
};


const firstName = 'Bobby';
const lastName = 'Bob';

const customer = {
	customerId: 'aef5cd03-7bf4-49e9-8f0b-380f90c86ec1',
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
    phoneNumber: '+1(515)555-5555'
};

const cart = {
	cartId: 'abf5cd03-7bf4-49e9-8f0b-380f90c86ec1',
	customerId: 'aef5cd03-7bf4-49e9-8f0b-380f90c86ec1',
	createdDate: '2020-01-1',
	purchasedDate: '2020-01-2'
};

const cartItem = {
	cart_itemId: 'abc5cd03-7bf4-49e9-8f0b-380f90c86ec1',
	itemId: 'def5cd03-7bf4-49e9-8f0b-380f90c86ec1',
	cartId: 'abf5cd03-7bf4-49e9-8f0b-380f90c86ec1',
	quantity: 5
};

console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartItem', cartItem);
