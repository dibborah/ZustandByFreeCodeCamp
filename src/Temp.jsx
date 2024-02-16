import { useStore } from "./store";
// import { useMemo } from "react";
import {shallow} from "zustand/shallow"

// eslint-disable-next-line react/prop-types
export default function Temp({ state }) {
//   const tasks = useStore((store) => {
//     store.tasks; //.filter((state) => tasks.state === state)
//   });
//   const filtered = useMemo(
//     () => tasks.filter((state) => tasks.state === state),
//     [tasks, state]
//   );
const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    // Below code is a Custom version of shallow copy which is may be deprecated , seemslike. I am not that sure
    // Let's say the below code is not depreated:
    // The code runs whenever any state in the store is updated
    // Donot make the comparision too complex orelse the below code will run too often
    // That can decrease the performance of the Application creating an performance issue
    // #Note: Always run filter , map or what ever inside a selector
    // (prev, next) => {
    //     const longest = prev.length > next.length ? prev.length : next.length;
    //     for(let i = 0 ; i< longest; i++){
    //         if(!prev[i] || !next[i]) return false;
    //         if(prev[i] !== next[i]) return false;
    //     }
    //     return true;
    // }
    shallow// This is a build in selector given by zustand
)
  return <div>Temp</div>;
}


// That are many states managed by a zustand store.

// Let's say we want to select and change or update only a specific part of a state.
// Selector functions helps us achieve that
// Selectors are functions which helps selector and update only a specific part of a states managed by 
// Zustand store