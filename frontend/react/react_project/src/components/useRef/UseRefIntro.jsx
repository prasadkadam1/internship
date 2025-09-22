import React from 'react'
import UseRefTask1 from './tasks/UseRefTask1'
import UseRefTask2 from './tasks/UseRefTask2'
import UseRefTask3 from './tasks/UseRefTask3';
import UseRefTask4 from './tasks/UseRefTask4';

const UseRefIntro = () => {
  return (
    <div>
        {/* <UseRefTask1></UseRefTask1> */}
        {/* <UseRefTask2></UseRefTask2> */}
        {/* <UseRefTask3></UseRefTask3> */}
        {/* <UseRefTask4></UseRefTask4> */}
    </div>
  )
}

export default UseRefIntro


// 🔹 DOM References

// Focus Input
// Create a text input and a button. When the button is clicked, the input should get focused using useRef.

// Change Input Border Color
// Use useRef to directly change the input’s border color to red when a button is clicked.

// Scroll to Div
// Create a long page with multiple sections. Add a button that scrolls to a particular section using useRef.

// Count Clicks Without Re-rendering
// Track the number of button clicks using useRef instead of useState and display the count in the console.

// Change Image Size
// Have an image on the page and use useRef to increase/decrease its size when clicking buttons.

// 🔹 Storing Values (without causing re-renders)

// Stopwatch
// Make a stopwatch where useRef stores the timer ID from setInterval, so you can start/stop it without re-renders.

// Previous Value Tracker
// Display the previous value of an input field using useRef.

// Track Render Count
// Show how many times the component has re-rendered using a useRef counter.

// Store Random Number
// On the first render, generate a random number and store it in useRef. Make sure it doesn’t change even after re-renders.

// Last Clicked Button
// Have multiple buttons. Use useRef to remember which button was clicked last and log it.

// 🔹 Fun & Interactive

// Shake Button
// When a button is clicked, use useRef to apply a CSS animation class temporarily (like shaking effect).

// Focus Next Input
// Create 3 input fields. When pressing Enter in the first input, focus should move to the next input using useRef.

// Auto Scroll Chat Box
// Make a fake chat box that auto-scrolls to the bottom whenever a new message is added, using useRef.

// Hide/Show Password
// Use useRef to toggle the type attribute of an input between password and text.

// Video Controls
// Add a video player and control play/pause/mute using useRef.