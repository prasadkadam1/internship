// Color Mood Swing: Change the background color randomly whenever you right-click.
let EventsTask7 = () => {
  let colors = ['red', 'orange', 'yellow', 'green', 'purple', 'pink', 'gray']
    return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        console.log(Math.floor(Math.random()*7));          
        e.target.style.background = colors[Math.floor(Math.random()*7)]
      }}
      style={{ width: "300px", height: "300px", border: "1px solid" }}
    ></div>
  );
};
export default EventsTask7;
