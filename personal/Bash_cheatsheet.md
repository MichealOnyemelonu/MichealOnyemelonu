**Bash String Manipulation Cheat Sheet** for common operations:
 
---
 
## **Basics**
 
```bash
s="Hello, World!"
```
 
- **Length**
  ```bash
  ${#s}         # 13
  ```
 
- **Access Characters**
  ```bash
  echo "${s:0:1}"    # H
  echo "${s:7:5}"    # World
  ```
 
- **Substring**
  ```bash
  echo "${s:0:5}"    # Hello
  echo "${s:7}"      # World!
  ```
 
---
 
## **String Replacement**
 
- **Replace First Match**
  ```bash
  echo "${s/World/Bash}"    # Hello, Bash!
  ```
 
- **Replace All Matches**
  ```bash
  echo "${s//l/x}"          # Hexxo, Worxd!
  ```
 
---
 
## **Case Conversion (Bash 4.0+)**
 
- **Lowercase**
  ```bash
  echo "${s,,}"    # hello, world!
  ```
 
- **Uppercase**
  ```bash
  echo "${s^^}"    # HELLO, WORLD!
  ```
 
---
 
## **Trim Whitespace**
 
- **Trim Leading Space**
  ```bash
  s="   abc"
  echo "${s#"${s%%[![:space:]]*}"}"   # abc
  ```
 
- **Trim Trailing Space**
  ```bash
  s="abc   "
  echo "${s%"${s##*[![:space:]]}"}"   # abc
  ```
 
---
 
## **Splitting Strings**
 
- **Split by Delimiter**
  ```bash
  IFS=',' read -ra arr <<< "$s"
  echo "${arr[0]}"    # Hello
  echo "${arr[1]}"    #  World!
  ```
 
---
 
## **Concatenation**
 
```bash
a="Hello"
b="World"
c="$a, $b!"
echo "$c"    # Hello, World!
```
 
---
 
## **Check Substring**
 
- **If Contains**
  ```bash
  [[ "$s" == *"World"* ]] && echo "Yes"
  ```
 
---
 
## **Remove Substrings**
 
- **Remove Prefix**
  ```bash
  s="file.txt"
  echo "${s#file}"    # .txt
  ```
 
- **Remove Suffix**
  ```bash
  s="file.txt"
  echo "${s%.txt}"    # file
  ```
 
---
 
## **Other Useful Operations**
 
- **Reverse String**
  ```bash
  echo "$s" | rev
  ```
 
- **Repeat String**
  ```bash
  printf "%.0sHello " {1..3}   # Hello Hello Hello
  ```
 
---