const mongoose = require("mongoose");
import PaymentSchema from "../schemas/payment-schema";

export default mongoose.model("Payment", PaymentSchema);
