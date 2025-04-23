Regular expressions are **patterns** used to match **sequences of characters** in strings.  
Think of it like giving the computer instructions to **find specific kinds of text**.

### Key Takeaway from Lesson 1:
- **Everything is a character**.
- You write **patterns** to match sequences of these characters.
- Regex will match strings based on the **rules** (or syntax) you define.

### Example: Matching Three Lines

Suppose you are given these three lines of text:

```
abc
aBc
ABC
```

The goal is to write a regular expression that **matches all three lines**.



### Strategy:

Each line contains three characters that are all **a variation of the letters A, B, and C**, but in different **cases** (lowercase, uppercase, mixed).

So we need a pattern that:
- Matches `a` or `A`
- Then matches `b` or `B`
- Then matches `c` or `C`



### Regex Solution:

```regex
[aA][bB][cC]
```


### Explanation:

- `[aA]` — matches either lowercase **a** or uppercase **A**
- `[bB]` — matches either lowercase **b** or uppercase **B**
- `[cC]` — matches either lowercase **c** or uppercase **C**

So it matches:
- `abc`
- `aBc`
- `ABC`


### Tip:
You could also use the **case-insensitive** flag (in some regex engines), like this:

```regex
(?i)abc
```

- `(?i)` tells the regex engine to ignore case.
- This matches **abc**, **ABC**, **aBc**, etc.

Lesson 1 teaches:
- Every letter or symbol is a character.
- Regex matches based on the pattern of characters.
- Use square brackets `[]` to match one character from a **set**.
- Optionally, use flags (like `(?i)`) to make matching more flexible.
