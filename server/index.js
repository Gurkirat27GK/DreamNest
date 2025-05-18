const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("myDB"); // Your custom DB
    const collection = db.collection("users"); // Your collection

    // 🔸 Insert one document
    await collection.insertOne({ name: "Gurkirat", age: 21 });
    console.log("✅ Data inserted");

    // 🔸 Fetch all documents
    const users = await collection.find().toArray();
    console.log("📄 Users in DB:", users);

    // 🔸 Update a user
    await collection.updateOne({ name: "Gurkirat" }, { $set: { age: 22 } });
    console.log("🛠 User updated");

    // 🔸 Delete a user
    await collection.deleteOne({ name: "Gurkirat" });
    console.log("❌ User deleted");

  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  } finally {
    await client.close();
    console.log("🔒 MongoDB connection closed");
  }
}

main();
