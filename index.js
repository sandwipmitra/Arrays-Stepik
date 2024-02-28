/*
1. First of all, let's consider in general - what is an array?

An array is a set of values ​​accessed by their ordinal number. The value in the array is called the "array element" and refers to them by their ordinal number, called the "index".

Arrays in JavaScript are untyped - allow elements of different types to be stored inside a single array. It can be not only elementary types - strings, numbers or symbols, but also objects and arrays, and even arrays of arrays.

Arrays in JavaScript start index counting from zero, for indexes 32-bit values ​​are used.

Arrays in JavaScript are dynamic, meaning they can grow or shrink in size. Announce the pre-fixed sizes when creating them, and also reallocate memory when resizing, as is done in some other languages ​​- it is not necessary.

Arrays in JavaScript are objects!*/


/*
To create an array, you can use three methods:

The usual way is to create an array by calling the Array() constructor:*/

var myArray = new Array (); // declaration of the array
myArray [0] = "Ivanov";     // adding an element
myArray [1] = "Petrov";
myArray [2] = "Sidorov";
myArray [3] = "Kuznetsov";

/*You can also call a constructor with a numeric argument indicating the number of elements.*/
var myArray = new Array (10); // create an array of 10 elements

//The same operation can be performed in a shorter way:
var myArray = new Array ("Ivanov", "Petrov", "Sidorov", "Kuznetsov");

//And the third option is literal:
var myArray = ["Ivanov", "Petrov", "Sidorov", "Kuznetsov"];




/*
2. Reading and writing, adding and removing elements of an array.

To access the elements of the array, use the [ ] operator (square brackets).
To the left of the parentheses there must be a reference to the array itself, inside the parentheses there must be an expression that returns a non-negative integer value.

How to write to the array we already saw in the previous step:*/

myArray [0] = "Ivanov"; // write the 0th element to the array myArray

/*Reading from array is the same:

x = myArray [0]; // As a result, the value of the first cell of the array in the variable x is the string value "Ivanov".
*/



/*
3. Adding the elements of an array.

As we have seen, the easiest way to add an element to an array is simply to assign a value to the new indexes. For example :*/

myArray [4] = "Petrov";

/*But we also have a special method - push ().
For example:*/

myArray.push ("Sidorov");

/*Add a value to the end of the array, and the command*/

myArray.push ("Sidorov", 2);

/*adds two elements at once to the end of the array - the string "Sidorov" and the number "2". The value returned by the method will contain the length (number of elements) of the resulting array.

Add elements to the end of the array can also be simply changing the property of the array length:*/

myArray.length = 5;

// In this case, the number of elements in the array will increase, at the end of the array empty elements will be added.

// Add elements to the beginning of the array using the unshift() method. For example:

myArray.unshift ("Sergeev", "Dmitriev")

// will add two elements with the values ​​"Sergeev" and "Dmitriev" to the beginning of our array, the remaining elements will be moved to positions with higher indices. The unshift () method also returns the length of the resulting array. Thus the expression

x = myArray.unshift ("Sergeev", "Dmitriev")

/*puts two new elements at the beginning of the array myArray and assigns the value of x to 7 (Because the previous command, we set the size of the array - 5)
*/




/*
4. Delete the elements of the array.

You can delete an element of an array using the delete operator, as a normal property. This operator was considered in the lesson about objects. As a result of the action delete myArray [2]; the value of the third element of the array will be set to undefined, but the number of elements in the array does not change, all other elements remain in their places.

To delete elements at the end of the array, you can perfectly use the array length setting command - changing the length property, for example - myArray.length = 4;

You can also delete an element at the end of the array using the pop() method (opposite to the push method), which reduces the length of the array by 1 and returns the value of the deleted element.

Also there is a method shift() (opposite to the unshift method) which deletes the element at the beginning of the array and shifts all the elements 1 position to the beginning.
*/


/*
5. Some other methods of the Array class.

Array.join() - turns all the elements of the array into strings, combines them and returns the resulting string.
For example, if you look at the example from the previous step - an array of surnames, the command myString = myArray.join(); will put the value "Ivanov, Petrov, Sidorov" in the string variable myString. By default, commas are used for the separation.
In an optional argument, you can specify a substring to be used to separate the values. For example: the command

myString = myArray.join("_");
will put in the string variable myString the value "Ivanov_Petrov_Sidorov"


Array.reverse() - changes the order of the elements in the array to the inverse and returns the already rearranged array.
For example, if you consider the previously declared array:

var myArray = new Array ("Ivanov", "Petrov", "Sidorov", "Kuznetsov");

then the command

console.log (myArray.reverse ());
will print to the console values ​​["Kuznetsov", "Sidorov", "Petrov", "Ivanov"].

Array.sort() - sorts the elements in the source array and returns the sorted array. If the method is used without an argument (sorting function), the result will be sorted alphabetically (in the order of the characters in Unicode), by converting everything that is possible to a string type. All that impossible convert to string - is placed at the end of the array. For example, using this method on an array from the previous example

var myArray = new Array ("Ivanov", "Petrov", "Sidorov", "Kuznetsov");

will print an array of this kind to the console: [Ivanov, Kuznetsov, Petrov, Sidorov].

As an argument to the sort() method, you can pass a comparison function. If the result returned by the comparison function is less than 0, then the sorting will put a before b, and vice versa. For example, to display values ​​sorted in reverse alphabetical order, we can use this command:

console.log (myArray.sort (function (a, b) {return b - a;}));

However, it should be noted that such a comparison function will only work if the elements of our array consist of digits. If we want to change the direction of sorting for string elements, the comparison function should look slightly different, for example like this:

console.log (myArray.sort (function (a, b) {return b.localeCompare (a);}));

In this case, we used the localeCompare() method of the String object, which allows us to compare objects of type String or string literals.

Array.concat() - returns (without changing the source) a new array with the addition of the elements passed to the method as an argument. For example,

console.log (myArray.concat("Smith"));

will print to the console values ​​["Ivanov", "Kuznetsov", "Petrov", "Sidorov", "Smith"].

Array.slice() - returns the subarray from the array, from the first to the second arguments (but not including it).



For example

console.log (myArray.slice (1,3));

will print to the console output values ​​["Kuznetsov", "Petrov"], i.e. elements with indices 1 and 2.


*/

/*
6. Array.splice() is a universal function that allows you to remove elements from an array and insert new ones.

The following data can be passed as an argument to this method:
1 argument is the position of the element from which the method action begins
2 argument - the number of elements to be deleted, starting from the starting position specified in the previous argument. (If the second value is not specified, all elements will be deleted, starting with the first argument).
3 argument and subsequent (any number) are the elements of the array that will be added starting from the position specified in the first argument.

An important point is that the method changes the original array, but returns an array of deleted elements. If no items are deleted, an empty value is returned.

As an example, let's consider the work of this method on an array
var myArray = ["Ivanov", "Petrov", "Sidorov", "Kuznetsov"];

We obtain the following results:

// returns ["Sidorov", "Kuznetsov"], the original array will be equal to ["Ivanov", "Petrov"]
myArray.splice (2, 2);
// return ["Petrov", "Sidorov", "Kuznetsov"], the original array will turn into ["Ivanov"]
myArray.splice (1);
 // returns an empty value [], the element ["Ivanov", "Petrov", "Smith", "Sidorov", "Kuznetsov"] will be added to myArray
myArray.splice (2, 0, "Smith");

*/

/*
The only method that allows you to add elements to the middle of an array is the splice()

The push() method adds an element to the end of the array
The pop() method removes one element from the array - the last one

The numbering of elements in the array begins with 0
*/