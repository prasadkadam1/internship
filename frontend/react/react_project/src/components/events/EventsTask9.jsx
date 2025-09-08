// Drag Event: Create a draggable div and log when dragging starts and ends.

let EventsTask9 = () => {
  return (
    <div>
      <div
        onDragStart={() => {
          console.log("drag started");
        }}
        onDragEnd={() => {
          console.log("drag ended");
        }}
        draggable
        style={{ width: "50px", height: "50px", border: "1px solid" }}
      ></div>
    </div>
  );
};
export default EventsTask9;
