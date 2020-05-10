let items = [
     {
        'description': 'Drake Sweatpants',
        'image': 'https://bkstr.scene7.com/is/image/Bkstr/6-33-QZ--H2-C-Black?$GMCategory_ET$',
        'item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f29',
        'price': 30
     },

     {
        'description': 'Drake Sweatshirt',
        'image': 'https://m.media-amazon.com/images/I/615JDVNWE8L._SR500,500_.jpg',
        'item_id': 'd93ff143-9f8b-445a-8d8f-b9b8fe0f9f29',
        'price': 30
     }
 ];

 const selectItems = () => ({
     rows: items
 });

 const selectItemByItemId = (itemId) =>
     items.find((item) => item['item_id'] === itemId);

 const insertItem = (item) => items.push(item);

 const updateItem = (updatedItem) => {
     const itemsThatDontMatch = items.filter((item) =>
         item['item_id'] !== updatedItem['item_id']
     );

     items = [
         ...itemsThatDontMatch, 
         updatedItem
     ];
 };

 const deleteItemByItemId = (itemId) => {
     items = items.filter((item) =>
         item['item_id'] !== itemId
     );
 };

 module.exports = {
     deleteItemByItemId,
     insertItem,
     selectItemByItemId,
     selectItems,
     updateItem
 };