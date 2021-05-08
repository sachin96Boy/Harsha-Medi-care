import express from 'express';

import prodData from './Data.js';

const app = express();

app.get('/api/Products/:id', (req, res) => {
    const product = prodData.products.find(x => x._id === req.params.id);
    if(product){
        res.send(product);
    } else{
        res.status(404).send({message: "Product not found"});
    }
});

app.get('/api/products', (req, res)=> {
    res.send(prodData.products)
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 5000; 


app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});