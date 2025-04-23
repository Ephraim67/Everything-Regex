### **Practice 1**

**Lines to Match:**

```
cat
bat
rat
```

#### What do these have in common?

They all:
- End with **"at"**
- Start with a single letter (either **c**, **b**, or **r**)

#### Regex Pattern:
```regex
[cbr]at
```

#### Explanation:
- `[cbr]` matches either **c**, **b**, or **r**
- `at` matches those exact letters in that order


### **Practice 2**

**Lines to Match:**

```
Dog
dog
DOG
```

#### Regex Pattern:
```regex
[Dd][Oo][Gg]
```

#### Or, if your regex engine supports **case-insensitive mode**:

```regex
(?i)dog
```

#### Explanation:
- The first pattern manually matches uppercase or lowercase letters at each position.
- The second one is easier and tells the regex engine to ignore case altogether

### **Practice 3**

**Lines to Match:**

```
123
456
789
```

#### Regex Pattern:
```regex
[0-9][0-9][0-9]
```

#### Explanation:
- `[0-9]` matches **any digit from 0 to 9**
- Since there are three `[0-9]` parts, it matches **three-digit numbers**

You could also write this as:
```regex
\d\d\d
```
Where `\d` means "any digit".


### **Challenge Practice 4**

**Lines to Match:**

```
xYz
XyZ
XYZ
```

#### Regex Pattern:
```regex
[xX][yY][zZ]
```

Or:
```regex
(?i)xyz
```
