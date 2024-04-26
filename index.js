const mongoose = require('mongoose');
const ProductsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const saveInDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

    const Product = mongoose.model("products", ProductsSchema);
    let data = new Product({ name: "Iphone 1 Pro", price: 1370, brand: "Iphone", category: "Mobile" });
    let result = await data.save();
    console.log(result);
}
// saveInDB();

const updateInDB = async () => {
    const Product = mongoose.model("products", ProductsSchema);
    let data = await Product.updateOne(
        { name: "Iphone 15 Pro" },
        {
            $set: { price: 700 }
        }
    );
    console.log("ssss", data);
};
// updateInDB()

const deleteInDB = async () => {
    const Product = mongoose.model("products", ProductsSchema);
    let data = await Product.deleteOne({filter:{ name: "Iphone 15 Pro" }})
    console.log("data", data)
}
// deleteInDB()

const findInDB = async () => {
    const Product = mongoose.model("products", ProductsSchema);
    let data = await Product.find()
    console.log("data", data)
}
// findInDB()