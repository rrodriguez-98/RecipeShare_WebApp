// const items = require('../data/items');

// exports.getAllItems = (req, res) => {
//     res.status(200).json(items);
// };

// exports.createItem = (req, res) => {
//     console.log('req.body', req.body); //Debugging

//     const { name } = req.body;
//     if (!name){
//         return res.status(400).json({error: "Missing 'name' in request body"});
//     }

//     const newItem = {
//         id: items.length + 1,
//         name
//     };
//     items.push(newItem);
//     res.status(201).json(newItem);
// };

// exports.updateItem = (req, res) => {
//     const id = parseInt(req.params.id);
//     const { name } = req.body;
//     const item = items.find(i => i.id === id);

//     if (!item) return res.status(404).json({error: 'Item not found'});

//     item.name = name;
//     res.status(200).json(item);
// };

// exports.deleteItem =(req, res) =>{
//     const id = parseInt(req.params.id);
//     const index = items.findIndex(i => i.id === id);

//     if (index === -1) return res.status(404).json({error: 'Item not found'});

//     const deleted = items.splice(index, 1);
//     res.status(200).json(deleted[0]);
// }