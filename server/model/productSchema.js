import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, default: "https://static.vecteezy.com/system/resources/thumbnails/005/720/408/small_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});

const Prod = mongoose.model('Product', productSchema);
export default Prod
