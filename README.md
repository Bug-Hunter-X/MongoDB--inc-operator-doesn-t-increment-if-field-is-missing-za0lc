# MongoDB $inc Operator Unexpected Behavior

This repository demonstrates an uncommon issue encountered when using the `$inc` operator in MongoDB update operations.  The `$inc` operator, while typically used to increment numeric fields, behaves unexpectedly if the target field does not already exist in the document.

The `bug.js` file illustrates the problem: if the `age` field is missing from a user document, the `$inc` operation will not create it and increment it; instead it will simply do nothing. The intended behavior may be to create the field and increment it.

The solution (`bugSolution.js`) shows how to handle this using the `$setOnInsert` operator for proper creation and incrementing.