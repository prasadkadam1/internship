import { useEffect, useState } from "react";

// Counter with Mouse Wheel: Increase/decrease counter when scrolling mouse wheel over a box.
let EventsTask8 = () => {
  let [scrollPos, setScrollPos] = useState();
  let [prevState, setPrevState] = useState();
  let [count, setCount] = useState(0);
  useEffect(() => {
    if (scrollPos > prevState) {
      console.log("increment");
    } else {
      console.log("decrement");
    }
    setPrevState(scrollPos);
  }, [scrollPos]);
  return (
    <div>
      <h1>Count : {count}</h1>
      <div
        onScroll={(e) => {
          setScrollPos(e.target.scrollTop);
        //   if (scrollPos < e.target.scrollTop) {
        //     setCount((count += 1));
        //   } else {
        //     setCount((count -= 1));
        //   }
        }}
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid",
          overflow: "auto",
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, sint
        expedita. Magnam inventore deleniti, soluta error magni in sunt sequi,
        molestias doloribus dicta perferendis itaque iste pariatur quidem eos
        neque et repellendus dolorem ea, ullam laborum quae? Dolorem nemo
        fugiat, animi reprehenderit iure similique maxime mollitia ducimus
        corporis porro sequi voluptatum eaque nisi at. Dicta provident enim
        cumque consequuntur ipsam facilis vitae perferendis obcaecati ab vel,
        fuga quos architecto explicabo voluptates laborum? Molestias, nobis ex.
        Quaerat, error! Possimus eum provident labore, ea aperiam voluptatibus.
        Velit nulla perferendis consequatur reprehenderit ipsa blanditiis
        repellendus aut delectus sequi rerum, aliquid iste tenetur quasi!
      </div>
    </div>
  );
};
export default EventsTask8;
