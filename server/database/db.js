import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-l0anka7-shard-00-00.icynhvl.mongodb.net:27017,ac-l0anka7-shard-00-01.icynhvl.mongodb.net:27017,ac-l0anka7-shard-00-02.icynhvl.mongodb.net:27017/?ssl=true&replicaSet=atlas-n1s9z1-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log('database connected')
    } catch (error) {
        console.error(error.message)
    }
}

export default Connection