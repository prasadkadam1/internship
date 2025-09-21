import { useContext } from "react";
import ClassBasedCompIntro from "./components/ClassBasedComp/ClassBasedCompIntro";
import AppContext, { context } from "./components/ContextApi/AppContext";
import CrudIntro from "./components/crud/CrudIntro";
import EventsIntro from "./components/events/EventsIntro";
import PropsIntro from "./components/props/PropsIntro";
import StateIntro from "./components/state/StateIntro";
import Check from "./components/temp/Check";
import UseEffectIntro from "./components/useEffect/UseEffectIntro";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UseEffectTask4 from "./components/useEffect/UseEffectTask4";
import RoutingIntro from "./components/routing/RoutingIntro";
import UseMemoIntro from "./components/useMemo/UseMemoIntro";
import ReactMemoIntro from "./components/reactmemo/ReactMemoIntro";
import UseCBIntroComp from "./components/useCallback/UseCBIntroComp";
let router = createBrowserRouter([
  {
    path: "/",
    element: <UseEffectTask4></UseEffectTask4>,
  },
  {
    path: "/home",
    element: <Check></Check>,
  },
]);

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
      {/* 
      <div>
        <PropsIntro></PropsIntro>
      </div> */}

      {/*  <div>
        //! <ClassBasedCompIntro></ClassBasedCompIntro>
      </div> */}
      {/* //! context api */}
      {/* <div>
        <Check></Check>
      </div> */}

      {/*//! useEffect */}
      {/* <div>
        <UseEffectIntro></UseEffectIntro>
      </div> */}

      {/* <RouterProvider router={router}></RouterProvider> */}
      {/* //! routing */}
      {/* <div>
        <RoutingIntro></RoutingIntro>
      </div> */}
      {/*//! useMemo hook */}
      {/* <div>
        <UseMemoIntro></UseMemoIntro>
      </div> */}
      {/*//! react.memo for memoization */}
      {/* <ReactMemoIntro></ReactMemoIntro> */}
      {/* useCallback hook */}
      <UseCBIntroComp></UseCBIntroComp>
      {/* useRef hook */}

      {/* useReducer hook  */}

      {/* useParams */}

      {/* useSelector */}

      {/* useDispatch */}

      {/* redux Toolkit */}
    </div>
  );
};
export default App;
