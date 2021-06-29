/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Laptop from "./laptop.js";

const everydayLap = new Laptop(
  "Macbook",
  "Apple",
  "grey",
  15,
  "M1",
  false,
  20,
  20
);

console.log("The everydayPack object:", everydayLap);
console.log("The pocketNum value:", everydayLap.brand);
