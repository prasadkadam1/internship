import CrudIntro from "./components/crud/CrudIntro";
import EventsIntro from "./components/events/EventsIntro";
import PropsIntro from "./components/props/PropsIntro";
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
      {/* //! crud operation */}
      {/* <div>
        <CrudIntro></CrudIntro>
      </div> */}

      <div>
        <PropsIntro></PropsIntro>
      </div>
    </div>
  );
};
export default App;
