// Express

const express = require('express');
const {products} = require('./data')
const app = express();


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Our Website Check our  <a href='api/products'>Product</a></h1>")
})
app.get('/api/products', (req, res) => {

    const newProducts = products.map((product)=>{
        const {id,name,image} = product;

        return {id,name,image}
    })
    res.json(newProducts)
})
app.get('/api/products/:id', (req, res) => {
    const {id} = req.params;
console.log(id)
    const newProduct = products.find((product)=>product.id === Number(id))
    res.json(newProduct)
})

app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query;
    let sortedProducts = [...products];

    console.log(search,limit)

    if(search){
     sortedProducts = sortedProducts.filter((product)=>product.name.startsWith(search.toLowerCase()))
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})