## The 123s

Characters include normal letters, but digits as well. In fact, numbers 0-9 are also just characters and if you look at an ASCII table, they are listed sequentially.

Over the various lessons, you will be introduced to a number of special metacharacters used in regular expressions that can be used to match a specific type of character. In this case, the character \d can be used in place of any digit from 0 to 9. The preceding slash distinguishes it from the simple d character and indicates that it is a metacharacter.

Below are a few more lines of text containing digits. Try writing a pattern that matches all the digits in the strings below, and notice how your pattern matches anywhere within the string, not just starting at the first character. We will learn how to control this in a later lesson.


## Key Concept: `\d`

- `\d` is a **metacharacter** in regex.
- It matches **any single digit** (0 through 9).
- Think of it like shorthand for `[0-9]`.

 
## Example 1

**Lines to Match:**

```
The year is 2025
Room 101 is ready
abc123xyz
```

## Regex Pattern:
```regex
\d
```

## Explanation:
- This will match **any single digit** it sees.
- In `"The year is 2025"`, it will match `2`, `0`, `2`, `5`
- In `"Room 101 is ready"`, it will match `1`, `0`, `1`
- In `"abc123xyz"`, it will match `1`, `2`, `3`



## If You Want to Match **Multiple Digits**

Use `+` to match **one or more digits** in a row:

```regex
\d+
```

## Now it matches:
- `2025` (as one match)
- `101`
- `123`



## Bonus: Match Digits at the End

If you want to match digits **only at the end** of a line:

```regex
\d+$
```

- `$` is an **anchor** that means "end of the line"
- So it only matches digits if they come **at the very end**


## Challenge Time

Try matching just the numbers in the following lines using what you've learned:

```
Error 404: Not Found
My PIN is 9876
user123 joined
```
