---
 
## **Basics**
 
```python
s = "Hello, World!"
```
 
- **Length**  
  `len(s)`  → `13`
 
- **Access Characters**  
  `s[0]`  → `'H'`  
  `s[-1]`  → `'!'`
 
- **Slicing**  
  `s[0:5]`  → `'Hello'`  
  `s[:5]`  → `'Hello'`  
  `s[7:]`  → `'World!'`
 
---
 
## **String Methods**
 
- **Lowercase / Uppercase**  
  `s.lower()`  → `'hello, world!'`  
  `s.upper()`  → `'HELLO, WORLD!'`  
  `s.title()`  → `'Hello, World!'`
 
- **Strip whitespace**  
  `s.strip()`  
  `s.lstrip()`  
  `s.rstrip()`
 
- **Replace substring**  
  `s.replace("Hello", "Hi")`  → `'Hi, World!'`
 
- **Find substring**  
  `s.find("World")`  → `7`  
  `s.rfind("l")`  → `10`  
  `s.index("o")`  → `4`
 
- **Count substring**  
  `s.count("l")`  → `3`
 
---
 
## **Splitting and Joining**
 
- **Split into list**  
  `s.split(",")`  → `['Hello', ' World!']`
 
- **Join list into string**  
  `", ".join(['Hello', 'World'])`  → `'Hello, World'`
 
---
 
## **Formatting**
 
- **Old style**  
  `"%s, %d" % ("Age", 30)`  → `'Age, 30'`
 
- **New style**  
  `"{} {}".format("Hello", "World")`  → `'Hello World'`  
  `"{name} is {age}".format(name="Bob", age=25)`
 
- **f-strings (Python 3.6+)**  
  `name = "Alice"; f"Hello, {name}!"`  → `'Hello, Alice!'`
 
---
 
## **Check Content**
 
- **Starts/Ends with**  
  `s.startswith("Hello")`  → `True`  
  `s.endswith("!")`  → `True`
 
- **Is digit / alpha / alnum**  
  `'123'.isdigit()`  → `True`  
  `'abc'.isalpha()`  → `True`  
  `'abc123'.isalnum()`  → `True`
 
---
 
## **Other Useful Methods**
 
- **Reverse string**  
  `s[::-1]`  → `'!dlroW ,olleH'`
 
- **Repeat string**  
  `"Hi " * 3`  → `'Hi Hi Hi '`
 
---
 
## **Escape Characters**
 
- **Newline:** `\n`  
- **Tab:** `\t`  
- **Backslash:** `\\`  
- **Quote:** `\'` or `\"`
 
---
 
Let me know if you want examples or details on specific string operations!