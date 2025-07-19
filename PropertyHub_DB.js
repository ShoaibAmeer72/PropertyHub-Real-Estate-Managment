
// PropertyHub - Real Estate Property Management System


// 1. Users Collection

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "role", "createdAt"],
      properties: {
        name: {
          bsonType: "string",
          description: "Full name"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+$",
          description: "User's email address"
        },
        password: {
          bsonType: "string",
          description: "Hashed password"
        },
        role: {
          enum: ["admin", "agent", "buyer"],
          description: "User role"
        },
        createdAt: {
          bsonType: "date",
          description: "Creation timestamp"
        }
      }
    }
  }
});

// 2. Properties Collection

db.createCollection("properties", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "description", "price", "location", "status", "images", "agentId", "createdAt"],
      properties: {
        title: {
          bsonType: "string"
        },
        description: {
          bsonType: "string"
        },
        price: {
          bsonType: "number"
        },
        location: {
          bsonType: "string"
        },
        status: {
          enum: ["available", "sold", "rented"]
        },
        images: {
          bsonType: "array",
          items: {
            bsonType: "string"
          }
        },
        agentId: {
          bsonType: "objectId"
        },
        createdAt: {
          bsonType: "date"
        }
      }
    }
  }
});

// 3. Inquiries Collection

db.createCollection("inquiries", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["propertyId", "buyerId", "message", "createdAt"],
      properties: {
        propertyId: {
          bsonType: "objectId"
        },
        buyerId: {
          bsonType: "objectId"
        },
        message: {
          bsonType: "string"
        },
        createdAt: {
          bsonType: "date"
        }
      }
    }
  }
});

// 4. Favorites Collection

db.createCollection("favorites", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["buyerId", "propertyIds", "createdAt"],
      properties: {
        buyerId: {
          bsonType: "objectId"
        },
        propertyIds: {
          bsonType: "array",
          items: {
            bsonType: "objectId"
          }
        },
        createdAt: {
          bsonType: "date"
        }}
    }}
});

// 5. Categories Collection

db.createCollection("categories", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      properties: {
        name: {
          bsonType: "string"
        }}
    }}
  });
