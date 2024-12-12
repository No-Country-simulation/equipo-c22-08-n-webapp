import { Schema, model } from "mongoose";

const RequestSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true
        },

        mascota_id: { type: Schema.Types.ObjectId, ref: "Mascota", required: true },
        request_date: {
            type: Date,
            default: Date.now
        },

        phone: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["pending", "rejected", "approve"],
            default: "pending",
            validate: {
                validator: function (value) {
                    return ["pending", "rejected", "approve"].includes(value);
                },
                message: ({ value }) => `${value} is not a valid status`,
            }          
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const RequestModel = model("Request", RequestSchema);
export default RequestModel;