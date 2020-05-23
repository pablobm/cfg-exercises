Hello all! The student materials for lesson 5 include _Exercise 5.5_, which can look a bit scary when you are looking into arrays and loops for the first time. I'm going to explain it here step by step, and try make the landing a bit smoother for all of you.

The exercise can be found in slide 13, and reads mostly like follows (I have changed a couple of sentences):

Quick reminder: I use the words "parameter" and "argument" interchangeably. There's an academic technicality by which they are different things, but it's not important here. Don't worry about that. Very few people care.

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

As discussed during the course, all that text is comments: lines that start with the double slash `//`. The computer ignores them, and they are useful to provide guidance. In this case, it's used to describe the exercise.

Let's go onto the first exercise.

## 1. Write a function that reverses a string

By "reversing", the exercise means that the function should be able to take a string, and produce a new string with all letters (and spaces) in reverse order.

So for example, if the function receives the string `"hello this is a string"`, then the result of the function should be `"gnirts a si siht olleh"`.

### Step 1: naming the function

When writing a function, the first thing we must do is think of a name for it. It should be descriptive of what the function does, so that the resulting code is easier to read.

Since this one reverses a string, we could call it `reverseString`, or perhaps `reverseAString`. Or `reverse_a_string`. Or `stringInversion`. There's no right or wrong. The important thing is that its intent is clear, and the style (whether to use underscores or capitals) is consistent across the project.

Note that we could also call it simply `reverse`. This is convenient because it's shorter, but it could be a problem if later we want a function that reverses something else that is not a string, such an array. This creates new questions as to whether the function should be changed to allow reversing other things, or if new, separate functions should be created for those tasks. Again: no right or wrong. Your context, your experience, and the conventions within your team will guide you.

Programmers do not joke when we say that one of the most difficult things in programming is _naming things_.

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

If you save this and load the HTML file in your browser, you should be able to see the string in the console. Check that this works before moving on.

### Step 3: reversing the string

This is the meat of the function. Like many things in computing, there are many ways to do it. This solution is the first one that came to my mind, but it's not necessarily the "best". Rarely any solution is "best" in software!

We are going to use three functions that already exist in JavaScript. Together, they are going to allow us to reverse the string. At each step, we'll use `console.log()` to check what's going on.

First we are going to use the function `split()`. It takes a string and returns an array. Here are some examples:

```js
var example = "a.b.c@d.e.f";
example.split('')
example.split('.')
example.split('@')
```

Run the code above in the console, line by line. Each time we use `split`, it will split the original string in a different way. Can you tell what the difference is?

The function `split` lives inside strings. That's why we use the `.` to "look into" the string and reach for `split`. Then it receives one argument: what character should be understood as "divider".

So if we give it a dot `'.'`, it will give us an array listing each one of the in between dots: `["a", "b", "c@d", "e", "f"]`. See the dots are not in the resulting array, and

```js
```
