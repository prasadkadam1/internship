import CrudIntro from "./components/crud/CrudIntro";
import EventsIntro from "./components/events/EventsIntro";
import StateIntro from "./components/state/StateIntro";

const App = () => {
  return (
    <div>
      {/* //! useState hook. total 8 tasks  */}
      {/* <div>
        <StateIntro></StateIntro>
      </div> */}

      {/* //! events in react. total  12 tasks */}
      {/* <div>
        <EventsIntro></EventsIntro>
      </div> */}

      <div>
        <CrudIntro></CrudIntro>
      </div>
    </div>
  );
};
export default App;
