/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('sigmadatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    [
        {
          "_id": {
            "$oid": "6687e8062cd53c0b6f1ffd2d"
          },
          "Name": "java",
          "price": 20000,
          "author": "Aayush"
        },
        {
          "_id": {
            "$oid": "6687e8062cd53c0b6f1ffd2e"
          },
          "Name": "python",
          "price": 25000,
          "author": "Bhargav"
        },
        {
          "_id": {
            "$oid": "6687e8062cd53c0b6f1ffd2f"
          },
          "Name": "javascript",
          "price": 18000,
          "author": "Charles"
        },
        {
          "_id": {
            "$oid": "6687e8062cd53c0b6f1ffd30"
          },
          "Name": "C++",
          "price": 22000,
          "author": "David"
        },
        {
          "_id": {
            "$oid": "6687e8062cd53c0b6f1ffd31"
          },
          "Name": "C#",
          "price": 19000,
          "author": "Emma"
        },
        {
          "_id": {
            "$oid": "6687e8062cd53c0b6f1ffd32"
          },
          "Name": "Ruby",
          "price": 21000,
          "author": "Frank"
        },
        {
          "_id": {
            "$oid": "6687e8062cd53c0b6f1ffd33"
          },
          "Name": "PHP",
          "price": 17000,
          "author": "Gina"
        },
        {
          "_id": {
            "$oid": "6687e8062cd53c0b6f1ffd34"
          },
          "Name": "Swift",
          "price": 24000,
          "author": "Harris"
        },
        {
          "_id": {
            "$oid": "6687e8062cd53c0b6f1ffd35"
          },
          "Name": "Go",
          "price": 23000,
          "author": "Ishaan"
        },
        {
          "_id": {
            "$oid": "6687e8062cd53c0b6f1ffd36"
          },
          "Name": "Kotlin",
          "price": 26000,
          "author": "Jack"
        }
      ]
      
]);

