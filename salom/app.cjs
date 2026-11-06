import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const manzil = process.env.Mongo; 

console.log("Kuting...");

async function bazagaUlanish() {
    try {
        await mongoose.connect(manzil);
        console.log("Bazaga ulandi!");
    } catch (xato) {
        console.log("Ulanmadi:", xato.message);
    }
}

bazagaUlanish();
