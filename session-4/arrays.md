# A bit about arrays

Hello all! On our last session, I had to skip the slide with the exercise about arrays due to time constraints. I said I would instead explain it here on Slack, so here I am.

First, the reference materials at the end of your slides do contain some useful examples of using arrays (see the very last slide). So have a look at that too.

## Errata (ordered vs unordered)

That last slide has one error though. It says that arrays are "unordered lists". They are not "unordered": they are very much "ordered".

By "ordered", we mean that there's a first, a second, a third, etc element. For each element, it's clear which other elements come before or after.

This is in opposition to other data structures that are not ordered. For example, in session 6 we'll cover Objects. Objects can also hold many other pieces of data, but normally do not have a concept of "order".

Whether a data structure has order or not may or may not be important for what you are going to use it. For now, don't worry too much about it.

## First contact with arrays

I recommend that you run the code on the last slide on the browser, one line at a time. Remember that in the console you don't need `console.log(...)` to see print out a value. You can just type the value and press enter.

To open the console, remember:

Right click on any website (even an empty browser tab).
Click "Inspect".
On the inspector that opens, click on the "Console" tab.

Play with the exercise on the slide and try different things with the example lists `list` and `fruit`. Also try creating a new, different list.

You can also create empty arrays, and this is in fact very common:

```js
var todoList = [];
```

There's nothing in the list, but it will probably be populated during the run of the program.

## Exercise 4.8

This is the exercise I had to skip. Do it in a JS file (linked to an HTML file), instead of on the console. I'll go step by step here.

**Step 1.** Create an **array** called **countries** with two countries as strings.

```js
var countries = ["Spain", "Portugal"];
```

**Step 2.** **console.log()** countries to see if it worked.

```js
console.log(countries);
```

One note here. These statements that use the round brackets, such as `console.log()`, `alert()`, and `prompt()`, are called "functions". When explaining something that involves functions, it's common to type them as just the name followed by open/close round brackets (just as I'm doing in this paragraph). This allows you to talk in more generic terms, without the detail of what exactly goes inside the brackets. This exercise does this when it says "`console.log()` countries to see if it worked".

When you do use the functions in your code though, you have to put the right stuff inside the round brackets. (Although sometimes the right stuff is nothing at all).

**Step 3.** Add a country to the end of the array

```js
countries.push("France");
```

**Step 4.** Remove the first country from the array

```js
countries.shift();
```

Try a console.log() after this line to check that it's doing the right thing.

**Step 5.** Insert a country into the middle of the array

I'm going to skip this one, for two reasons:

 * It's more complicated than it's worth.
 * It's rarely done in real life.

**Step 6.** Finally, create a variable called **countryList** and join all the countries together, separated by commas.

It's not clear from the question, but it's asking us to create a string. This string will be the country names separated by commas.

By the way, I don't like the name **countryList**, because it communicates that the variable is a list, when it's a string! I'm going to call it **countriesString** instead.

We could do this in at least two ways. One would be this:

```js
var countriesString = countries[0] + ", " + countries[1];
```

This works because we know that there are exactly two countries. However, when working with lists, it's rarely the case that we know how big a string is. We need code that can work with two elements or with two thousand. Here's a better way to do it:

```js
var countriesString = countries.join(", ");
```

This is what's going on:

  * The dot `.` is common with objects, which we'll see in future sessions. For now, just think that it allows us to find the function `join`, which lives inside `countries`.
  * So we say: "there's `countries`, inside there's `join`, and that's a function I can use".
  * This function creates a new string from the elements of the array, and adds the given string (`", "`) in between each consecutive pair.

Here's another example, try it on the console:

```js
["uno", "dos", "tres", "cuatro"].join(", ")
```

And why am I talking about objects? Because arrays are actually a type of object. And actually so are strings! But don't worry about that for now. All you need to know is that the `.` allows you to reach inside stuff and use more features.

**Step 7.** `console.log()` the countryList variable

I called it `countriesString`, but apart from that I'm sure you know what to do here :-)

Happy coding!
