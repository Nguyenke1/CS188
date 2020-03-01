const uuid = require('uuid');
let items = [
	{
		'itemId': uuid.v4(),
		'name': 'Drake Hoodie',
		'description': 'A hoodie with the Drake logo.'
		'price': 10.99
		'sizes': 'S, M, L, XL, XXL'
	},
	{
		'itemId': uuid.v4(),
		'name': 'Drake Shorts',
		'description': 'A pair of shorts with the Drake logo.'
		'price': 5.99
		'sizes': 'S, M, L, XL, XXL'
	},

	{
		'itemId': uuid.v4(),
		'name': 'Drake Shirt',
		'description': 'A shirt with the Drake logo.'
		'price': 7.99
		'sizes': 'S, M, L, XL, XXL'
	}
];

const selectItems = () => ({
    rows: items,
    error: new Error(),
    driver: 'postgres'
});

const selectItemByItemId = (itemId) =>
    items.find((item) => item['item_id'] === itemId);


module.exports = {
    selectItems,
    selectItemByItemId,
};

