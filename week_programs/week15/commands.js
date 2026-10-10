```javascript
// WEEK 15 - MongoDB Space Mission Management System

// Create / Select Database
use spaceMissionDB

// Create Collection
db.createCollection("missions")

// Insert Missions
db.missions.insertMany([
  {
    astronaut: "Ami",
    mission: "Lunar Explorer",
    destination: "Moon",
    budget: 320,
    status: "Completed"
  },
  {
    astronaut: "Arjun",
    mission: "Red Planet",
    destination: "Mars",
    budget: 450,
    status: "In Progress"
  },
  {
    astronaut: "Meena",
    mission: "Jupiter Probe",
    destination: "Jupiter",
    budget: 280,
    status: "Completed"
  },
  {
    astronaut: "Karthik",
    mission: "Saturn Discovery",
    destination: "Saturn",
    budget: 220,
    status: "Completed"
  },
  {
    astronaut: "Sneha",
    mission: "Deep Space Voyager",
    destination: "Deep Space",
    budget: 520,
    status: "Cancelled"
  }
])

// ---------------- CRUD OPERATIONS ----------------

// CREATE
db.missions.insertOne({
  astronaut: "Anu",
  mission: "Nebula Explorer",
  destination: "Orion Nebula",
  budget: 250,
  status: "In Progress"
})

// READ
db.missions.find()

// UPDATE
db.missions.updateOne(
  { astronaut: "Anu" },
  { $set: { status: "Completed" } }
)

// DELETE
db.missions.deleteOne({ astronaut: "Anu" })

// ---------------- MONGODB QUERIES ----------------

// Find completed missions
db.missions.find({ status: "Completed" })

// Limit - show only 3 missions
db.missions.find().limit(3)

// Sort - highest budget first
db.missions.find().sort({ budget: -1 })

// Sort - lowest budget first
db.missions.find().sort({ budget: 1 })

// Create Index
db.missions.createIndex({ astronaut: 1 })

// Display Indexes
db.missions.getIndexes()

// ---------------- AGGREGATION ----------------

// Destination-wise total missions
db.missions.aggregate([
  {
    $group: {
      _id: "$destination",
      totalMissions: { $sum: 1 }
    }
  }
])

// Destination-wise average mission budget
db.missions.aggregate([
  {
    $group: {
      _id: "$destination",
      averageBudget: { $avg: "$budget" }
    }
  }
])

// Drop collection
// db.missions.drop()

// Drop database
// db.dropDatabase()
```