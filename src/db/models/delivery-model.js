const mongoose = require("mongoose");
import DeliverySchema from "../schemas/delivery-schema";

export default mongoose.model("Delivery", DeliverySchema);
