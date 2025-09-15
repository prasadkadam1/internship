import React from 'react'
import UseEffectTask1 from './tasks/UseEffectTask1'
import UseEffectTask2 from './tasks/UseEffectTask2'
import UseEffectTask3 from './UseEffectTask3'
import UseEffectTask4 from './UseEffectTask4'
import UseEffectTask5 from './UseEffectTask5';

const UseEffectIntro = () => {
  return (
    <div>
        {/* <UseEffectTask1></UseEffectTask1> */}
        {/* <UseEffectTask2></UseEffectTask2> */}
        {/* <UseEffectTask3></UseEffectTask3> */}
        {/* <UseEffectTask4></UseEffectTask4> */}
        <UseEffectTask5></UseEffectTask5>
    </div>
  )
}

export default UseEffectIntro


// Hello Logger

// Use useEffect to log "Hello, React!" in the console when the component first loads.

// Title Changer

// Change the browser tab title (document.title) to "Welcome User" when the component loads.

// Counter Watcher

// Create a counter with a button.

// Use useEffect to log "Counter updated" every time the counter value changes.

// Window Resizer

// Use useEffect to detect and log the current window width whenever the window is resized.

// Timer Starter

// Start a timer when the component mounts.

// Display how many seconds the component has been visible.

// Cleanup Example

// Use useEffect to start an interval that updates the counter every second.

// Use cleanup (return () => ...) to clear the interval when the component unmounts.

// Mouse Tracker

// Use useEffect to track mouse position (x, y) and display it on the screen.

// API Fetch (Basic)

// Use useEffect to fetch data from https://jsonplaceholder.typicode.com/posts and display the titles.

// Conditional Effect

// Have a toggle button (Show/Hide Text).

// Use useEffect to log "Text is visible" only when the text is shown.

// Form Auto-Save (Mock)

// Create an input field.

// Use useEffect to log "Auto-saving..." every time the input value changes.

// Dark Mode Detector

// Use useEffect to check the system theme (window.matchMedia('(prefers-color-scheme: dark)')).

// Show "Dark Mode Enabled" or "Light Mode Enabled".

// Key Press Listener

// Use useEffect to listen for key presses and display the last pressed key on the screen.

// Local Storage Saver

// Store input field value in local storage whenever it changes.

// On component load, fetch the saved value.

// Network Status Checker

// Use useEffect with window.addEventListener("online"/"offline").

// Show "You are online" or "You are offline".

// Scroll Detector

// Use useEffect to detect how far the user has scrolled on the page.

// Document Title Counter

// Every time the counter changes, update the document title to "Count: X".

// Unmount Alert

// Show a message in the console ("Component is removed") when the component unmounts.

// Fake Loading Screen

// Show "Loading..." for 3 seconds when the component mounts, then show "Content Loaded".

// Weather Fetcher (API)

// Use useEffect to fetch weather data from an API when the component mounts and display it.

// Multiple Effects

// Use two useEffects:

// One for logging when the component mounts.

// Another for logging whenever a counter changes.