import mongoose from "mongoose";

const mongoDb = "mongodb://localhost:27017/set07BE";

async function dbconfig() {
    try {
        const conn = await mongoose.connect(mongoDb)
        console.log("")
        console.log(`DB connected to ${conn.connection.host}`)
    } catch (error: any) {
        console.log(error)
    }
}

export default dbconfig;