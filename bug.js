```javascript
const query = { name: 'John Doe' };

// Incorrect usage of $inc operator, will not increment the value if field is missing
db.collection('users').updateOne(query, { $inc: { age: 1 } });
```