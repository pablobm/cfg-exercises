The student materials for lesson 5 include _Exercise 5.5_, which requires knowledge of stuff that hasn't been covered in the course. I'm going to try cover it here, and this will remain a completely optional part of the course. Remember: your final project doesn't need to have any JavaScript. But if you do want to learn a bit more about JavaScript, read on! :-)

Quick reminder: we use the words "parameter" and "argument" interchangeably. There's an academic technicality by which they are different things, but it's not important here. Don't worry about that. Very few people care.

## Functions: standalone vs. "inside" other things

In lesson 5 we covered how to create your own functions. Additionally, JavaScript comes with a number of functions that simplify a number of tasks that otherwise will be very complex, or simply impossible. You have already used some of them, such as `alert()`, `prompt()`, or `console.log()`. There are many more.

You may also have noticed that there are two types of functions: some work standalone, whereas other live "inside" other things.

Example of "standalone" functions are `alert()` and `prompt()`. Example of functions that live "inside" other things are `console.log()` and `array.push()`.

The function `console.log()` is actually the function `log()`, which lives inside the object `console`. The object `console` represents the browser console that appears when we use the inspector, and which we have been using in our course so far.

The function `array.push()` is actually the function `push()`, which lives inside **any** array. In the previous lesson we saw that we can use `push()` to add an item to an array. For example:

```js
var shopping = [];
shopping.push("bananas"); // Adds "bananas"
shopping.push("tea"); // Adds "tea"
console.log(shopping); // Should print ["bananas", "tea"]
```

### Giving information to a function

The above examples show two different ways of giving information to a function. For example, when we use `prompt()`, we give one piece of information to the function, the text to show:

```js
prompt("What is your name?");
```

Here's another example. In lesson 5, we saw how to create the following function (slide 10, I have added a missing curly brace here):

```js
function verifyDiscount(name, age) {
  if (age < 18) {
    return “Child discount applied for ” + name;
  } else {
    return name + “ is not eligible for discount”;
  }
}
```

This function takes two pieces of information: a string representing a name, and a number representing age in years. You'd use it like this:

```js
verifyDiscount("Jimmy", 13);
```

So that's one way. Another way is common with functions that live inside objects, like `array.push()`. Have another look at this line from above:

```js
shopping.push("bananas");
```

This adds `"bananas"` to the list `shopping`. The function `push()` works with two pieces of information: the item to add (bananas) and the list where we are adding the item.

In this case, the list doesn't need to be inside the brackets because it's already implied. The function `push` lives inside `shopping`, so it already knows that it will add items to `shopping`. The only other bit of information it needs is what item to add.

It's possible to create functions that act in either way. However, once created, a function only works in that specific way. Don't worry about that too much. The only thing you need to know is that those two styles exist.

If that's clear, now we can learn about some other functions that will be helpful in the exercise.

## `string.split()`

You can use `split()` to produce arrays from strings. Here's a first example:

```js
var listWithCommas = "milk,oranges,bread";
var shopping = listWithCommas.split(",")
console.log(shopping); // Should print ["milk", "oranges", "bread"]
```

We say that the function `split` is a _applied to a string_ (`listWithCommas`), and receives one argument (`","`).

The argument (the comma) tells what piece inside the string can be understood as "separator". We said "take this string, separate the bits in between commas, and make an array witht them".

Try specifying a separator different than the comma. For example, letter "r". Try other applying it to other strings.

One more thing, you can split by an empty string, and it will simply give you all the characters in the string. Try out yourself:

```js
var listWithCommas = "milk,oranges,bread";
var shopping = listWithCommas.split("") // Empty string: text, but no text
console.log(shopping); // Try see what you get here
```


## `array.reverse()`

You can use `reverse()`, applied to any array, to produce an array with the same elements, but reversed:

```js
var shopping = ["milk", "carrots", "bread"];
var reverseShopping = shopping.reverse();
console.log(reverseShopping); // Should print ["bread", "carrots", "milk"]
```

Try with other lists! :-)

## `array.join()`

You can apply `join()` to any array to turn it into a string:

```js
var shopping = ["coffee", "tofu", "spinach"];
var shoppingString = shopping.join(" - ");
console.log(shoppingString); // Should print "coffee - tofu - spinach"
```

Here I'm telling it to join the elements with hyphens. I could use other separators. Try yourself!

You can also not specify a separator. In this case, it will use a comma. We say that it uses a comma _by default_:

```js
console.log(shopping.join()) // Should print "coffe,tofu,spinash"
```

Finally, similarly as how `split` could split by nothing (by empty text), we can join by nothing. Try the following: what do you get?

```js
console.log(shopping.join(""));
```

## Back to exercise 5.5!

OK, this took a lot of context, but we can finally get started with the exercise.

The exercise can be found in slide 13, and reads mostly like follows (I have changed a couple of sentences):

> **Exercise 5.5**
>
> Find the folder: `exercise 5.5-starter-code` in the student materials.
>
> Download the code, unzip and move it to a folder where you keep your course projects.
>
> Open the entire folder (not individual files) in VSCode
>
> Go through the code and follow along with the instructions in app.js

OK, start and do just that first! :-)

Once you have the **folder** open in VSCode (it should appear on the left-hand side, with the files/folders in it), and open the file `app.js`, you should have these contents:

```js
// FUNCTIONS EXERCISE

// 1. Write a function that reverses a string


// 2. Write a function that sorts a string in alphabetical order


// 3. Write a function that loops over an array or Strings and capitalises each one before returning the array


// 4. Write a function that console logs the data type of the arguments


// 5. Write a function that returns the length of the longest word in a sentence
```

Let's go onto the first part of the exercise.

## Part 1: write a function that reverses a string

By "reversing", the exercise means that the function should be able to take a string, and produce a new string with all letters (and spaces) in reverse order.

So for example, if the function receives the string `"hello this is a string"`, then the result of the function should be `"gnirts a si siht olleh"`.

### Step 1: naming the function

When writing a function, the first thing we must do is think of a name for it. It should be descriptive of what the function does, so that the resulting code is easier to read.

Since this one reverses a string, we could call it `reverseString`, or perhaps `reverseAString`. Or `reverse_a_string`. Or `stringInversion`. There's no right or wrong. The important thing is that its intent is clear, and the style (whether to use underscores or capitals) is consistent across the project.

For my example, I'll say `reverseString`. Start by declaring the function, empty:

```js
function reverseString() {
  // Empty for now...
}
```

### Step 2: arguments

This function takes one piece of data: the string that we want to reverse. Therefore it takes **one argument**.

What should be the name of the argument? I could go into another digression about names here. I'm just going to call it `input`.

```js
function reverseString(input) {
  // Empty for now...
}
```

I could call it `string`, but that word has a special meaning in JavaScript, so I'm going to avoid that to avoid potential problems.

But anyway, so far we have a function `reverseString` which takes one argument `input`. This argument will be the string that we will reverse to produce the result.

Actually, check that this works: use `console.log()` to check that the function is indeed receiving the string. The code can be like this:

```js
function reverseString(input) {
  console.log(input);
}

reverseString("hello this is a string");
```

Remember that when the computer finds a function, it doesn't run its code immediately: instead it stores it in memory for later use. Later in the program we'll ask it to actually run it. This is why we are adding the last line, which actually runs the code. If we didn't have this last line, the function would not run, and we'd see nothing on the console.

### Step 3: run the code to check all is ok

If you save this and load the HTML file in your browser, you should be able to see the string in the console. Check that this works before moving on.

Now we move on to the meat of the function. Like many things in computing, there are many ways to write this code. This solution is the first one that came to my mind, but it's not necessarily the "best". Rarely any solution is "best" in software!

We are going to use the three functions explained above. Together, they are going to allow us to reverse the string. At each step, we'll use `console.log()` to check what's going on.

### Step 4: extracting the characters of the string

First we are going to use the function `string.split()`. Do you remember what it does and how to use it?

We'll apply it to `input`, and then we'll use `console.log` to check that it's working as expected:

```js
function reverseString(input) {
  var letters = input.split("");
  console.log(input);
}

reverseString("hello this is a string");
```

Run the code again (by reloading the HTML). What to you see printed in the console?

### Step 5: reverse the list of characters

At this point, we have a list of characters, as an array. Turns out that we have a way to reverse arrays. Remember how?

Let's do it:

```js
function reverseString(input) {
  var letters = input.split("");
  var reversedLetters = letters.reverse();
  console.log(reversedLetters);
}

reverseString("hello this is a string");
```

Re-run the code again. What do you see printed?

### Step 6: join the characters back into a string

After the previous step, we have the characters of the input string, reversed. However they are in memory in the form of an array, and we want a string. Let's create that string out of the array!

```js
function reverseString(input) {
  var letters = input.split("");
  var reversedLetters = letters.reverse();
  var reversedInput = reversedLetters.join("");
  console.log(reversedInput);
}

reverseString("hello this is a string");
```

What do you get when you run this?

### Step 7: actually return a result!

It may look like our work `reverseString` function is complete. It takes a string and reverses it, right? What else can you want?

The problem is that the result is only being printed. This may seem like enough, but typically you'd want the result **returned**. This means that you can put the result into a new variable, and use it later in the program. Like this:

```js
var greeting = "hello";
var antigreeting = reverseString(greeting);
// Now you can do stuff with `antigreeting`, like for example:
console.log(antigreeting);
```

At the moment, this code doesn't quite work (try), because the function doesn't specify that there's a result, beyond printing something out. To specify the result we have to use the special word `return`:

```js
function reverseString(input) {
  var letters = input.split("");
  var reversedLetters = letters.reverse();
  var reversedInput = reversedLetters.join("");
  return reversedInput;
}
```

Now try running the code that `antigreeting` code again. Does it work now?

Finally, it's good to know that we can write the body of the function (the part between the braces) in a single line. Instead of doing one step at a time and storing intermediate results in variables, we can do all at once:

```js
function reverseString(input) {
  return input.split("").reverse().join("");
}
```

This can look a bit weird. If you got this far, and want to know more, ask your instructors! We are here to help :-)

And with that, we have completed part 1 of exercise 5.5. Let's do part 2.

## Part 2: write a function that sorts a string in alphabetical order

I'm going to do much less explaining here. Instead, I'll explain one new function: `array.sort()`. It creates an array out of another array. The new array will have the same elements as the first, but ordered alphabetically:

```js
var words = ["temporary", "link", "stove"];
var orderedWords = words.sort();
console.log(orderedWords)
```

So with this new tool, and looking at our work on `reverseString()`, would you be able to create a function `orderString()`?

Give it a go! Ask your instructors if you are stuck. Or show them your solution if you crack it!
