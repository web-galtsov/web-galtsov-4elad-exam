export const bouncingBall = {
  id: "BouncingBall",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "TODO",
  headline: "Bouncing ball ",
  description: [
       <p>■ Create a responsive container</p>,
       <p>■ Create a perfect circle ( let's call it a ball ) in the middle of the container.</p>,
       <p>■ Create button that make the ball bounce and stop. </p>,
       <h3>○ Bonus</h3>,
       <p> ■ Make the container also keep his aspect ratio on screen resizing.</p>,
       <p>■ Use css for the bouncing animation</p>
     ],
  buttonLabel: "Get Started",
  imgStart: false,
  img: "",
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true
};

export const fillThatBall = {
  id: "FillThatBall",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "TODO",
  headline: "Fill that ball",
  description:[
    <p>■ Create 3 color pickers.</p>,
    <p>■ Create one more button.</p>,
    <p>■ On single button click event make the ball change color by the 3 color pickers. </p>,
    <h3>○ Bonus</h3>,
    <p> ■ Make the ball coloring go forever in a loop.</p>,
    <p>■ Second click on the button will stop the animation and the current color should stay.</p>,
    <p>■ Make smooth transitions between colors.</p>,
    <p>■ Make the animation dynamic i.e. if you change the color after the animation started running the animation will update, and the new color will show.</p>
    ],
  buttonLabel: "Learn More",
  imgStart: true,
  img: '',
  alt: "",
  dark: false,
  primary: false,
  darkText: true
};


export const stringsAndCalls = {
  id: "StringsAndCalls",
  lightBg: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "TODO",
  headline: "Fill that ball",
  description:[
    <p>■ Create ajax call to “http://jsonplaceholder.typicode.com/todos ”, you will get a JSON that represent list of todo items.</p>,
    <p>■ Append only the item which the first letter of the title is “s” to the DOM.Append only the item which the first letter of the title is “s” to the DOM.</p>,
    <p>■ Fill the background of the items which the last letter of the title is “e”.</p>,
    <h3>○ Bonus</h3>,
    <p> ■ Use css selector and html attributes for the background coloring.</p>,
    <p>■ Sort the items before inserting them.</p>,
    <p>● The one for the back of your brain</p>,
    <p>○ What is the disadventage of the MVC pattern and offer a solution.</p>
  ],
  buttonLabel: "Learn More",
  imgStart: true,
  img: '',
  alt: "",
  dark: false,
  primary: false,
  darkText: true,
  description1:"Benefits of the MVC architecture:\n" +
      "Application development becomes fast.\n" +
      "Easy for multiple developers to collaborate and work together.\n" +
      "Easier to update the application.\n" +
      "Easier to debug because we have multiple layers written correctly in the application.\n" +
      "\n" +
      "Disadvantages of MVC architecture:\n" +
      "It's hard to understand the MVC architecture.\n" +
      "There must be strict rules about methods."
};