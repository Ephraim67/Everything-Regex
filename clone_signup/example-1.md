### Step 1: Create the script file
Create a new file named `school_checker.rb` (you can use any text editor)

### Step 2: Write the script
Here's the complete script with explanations:

```ruby
#!/usr/bin/env ruby

# Check if an argument was provided
if ARGV.empty?
  puts "Please provide a string as an argument."
  exit
end

# Get the first argument
input_string = ARGV[0]

# Define the regular expression to match 'School'
# \A matches start of string, \z matches end of string
# This makes it match the entire string exactly
regex = /\ASchool\z/i  # The 'i' makes it case insensitive (optional)

# Check for match
if input_string.match?(regex)
  puts "The input matches 'School'"
else
  puts "The input does not match 'School'"
end
```

### Step 3: Make the script executable (optional)
Run this command in your terminal:
```bash
chmod +x school_checker.rb
```

### Step 4: Run the script
Execute the script with your test string:
```bash
./school_checker.rb School
```
or
```bash
ruby school_checker.rb School
```

### Step-by-step explanation:

1. The shebang line `#!/usr/bin/env ruby` tells the system this is a Ruby script
2. `ARGV` is an array that contains the command-line arguments
3. We first check if an argument was provided (`ARGV.empty?`)
4. We get the first argument with `ARGV[0]`
5. We define a regular expression that:
   - `\A` matches the start of the string
   - `School` is the literal text to match
   - `\z` matches the end of the string
   - The `i` modifier makes it case-insensitive (optional)
6. We use the `match?` method to check if the input matches the regex
7. We print the appropriate message based on whether it matches

### Variations:
- For exact case-sensitive match: `regex = /\ASchool\z/`
- To match "School" anywhere in the string (not the whole string): `regex = /School/`
- To match multiple occurrences: `regex = /School/i`

Would you like me to modify any part of this solution?
