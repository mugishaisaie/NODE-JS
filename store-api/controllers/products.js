
const Product = require("../models/product")

const getAllProductsStatic = async(req,res)=>{

    // const products = await Product.find({}).sort("name -price");
    const products = await Product.find({}).select("name price").limit(2).skip(1);
    // res.status(200).json({msg:"products testing route"})
    res.status(200).json(products)
}
const getAllProducts = async(req,res)=>{
    const {featured,company,name,sort,fields,numericFilters} = req.query;
    let queryObject = {};

    if(typeof featured !== "undefined"){
        queryObject.featured = featured === 'true' ? true : false;
    }

    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex:name,$options:'i'};
    }

    // Numeric filter
    if(numericFilters){
        const operatorMap = {
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte',
        }
        const regEx =/\b(>=|<=|>|<|=)\b/g
        let filters = numericFilters.replace(regEx,(match)=>`-${operatorMap[match]}-`);

        const options = ["price","rating"];
        filters = filters.split(",").forEach(item => {
            const [field,operator,value] = item.split('-')
            if(options.includes(field)){
                queryObject[field] = {[operator]:Number(value)}
            }
            
        });
    }
    console.log(queryObject)
    let results =  Product.find(queryObject);

    if(sort){
        // console.log(sort)
        const sortList = sort.split(',').join(" ");
        results.sort(sortList)

    }else{
        results.sort("createdAt")
    }

    if(fields){
        const fieldList = fields.split(',').join(" ");
        results.select(fieldList)
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = Number(page - 1)*limit;
    results = results.skip(skip).limit(limit)

    
    const products = await results;
    res.status(200).json(products)
}

module.exports ={
    getAllProductsStatic,
    getAllProducts
}