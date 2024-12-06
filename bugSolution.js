```javascript
const query = { name: 'John Doe' };

// Correct usage using $setOnInsert to handle missing fields
db.collection('users').updateOne(query, { $inc: { age: 1 }, $setOnInsert: { age: 1 } });
```