Here’s a **cheat sheet** for commonly used **string manipulation** and **array manipulation** functions in JavaScript:
 
---
 
## **String Manipulation Cheat Sheet**
 
### 1. **`split()`**

Splits a string into an array of substrings based on a separator.
 
#### Syntax:

```javascript

string.split(separator, limit);

```
 
#### Example:

```javascript

const str = "Hello,World,JavaScript";

const arr = str.split(','); // Split by comma

console.log(arr); // Output: ["Hello", "World", "JavaScript"]

```
 
---
 
### 2. **`slice()`**

Extracts a portion of a string and returns it as a new string.
 
#### Syntax:

```javascript

string.slice(startIndex, endIndex);

```
 
#### Example:

```javascript

const str = "Hello, World!";

const sliced = str.slice(0, 5); // Extract from index 0 to 4

console.log(sliced); // Output: "Hello"

```
 
---
 
### 3. **`substring()`**

Similar to `slice()`, but does not accept negative indices.
 
#### Syntax:

```javascript

string.substring(startIndex, endIndex);

```
 
#### Example:

```javascript

const str = "Hello, World!";

const sub = str.substring(7, 12); // Extract from index 7 to 11

console.log(sub); // Output: "World"

```
 
---
 
### 4. **`replace()`**

Replaces a specified value with another value in a string.
 
#### Syntax:

```javascript

string.replace(searchValue, replaceValue);

```
 
#### Example:

```javascript

const str = "Hello, World!";

const newStr = str.replace("World", "JavaScript");

console.log(newStr); // Output: "Hello, JavaScript!"

```
 
---
 
### 5. **`toUpperCase()`**

Converts a string to uppercase.
 
#### Syntax:

```javascript

string.toUpperCase();

```
 
#### Example:

```javascript

const str = "hello";

console.log(str.toUpperCase()); // Output: "HELLO"

```
 
---
 
### 6. **`toLowerCase()`**

Converts a string to lowercase.
 
#### Syntax:

```javascript

string.toLowerCase();

```
 
#### Example:

```javascript

const str = "HELLO";

console.log(str.toLowerCase()); // Output: "hello"

```
 
---
 
### 7. **`trim()`**

Removes whitespace from both ends of a string.
 
#### Syntax:

```javascript

string.trim();

```
 
#### Example:

```javascript

const str = "  Hello, World!  ";

console.log(str.trim()); // Output: "Hello, World!"

```
 
---
 
### 8. **`charAt()`**

Returns the character at a specified index.
 
#### Syntax:

```javascript

string.charAt(index);

```
 
#### Example:

```javascript

const str = "Hello";

console.log(str.charAt(1)); // Output: "e"

```
 
---
 
### 9. **`indexOf()`**

Returns the index of the first occurrence of a specified value.
 
#### Syntax:

```javascript

string.indexOf(searchValue, startIndex);

```
 
#### Example:

```javascript

const str = "Hello, World!";

console.log(str.indexOf("World")); // Output: 7

```
 
---
 
### 10. **`includes()`**

Checks if a string contains a specified value.
 
#### Syntax:

```javascript

string.includes(searchValue, startIndex);

```
 
#### Example:

```javascript

const str = "Hello, World!";

console.log(str.includes("World")); // Output: true

```
 
---

 