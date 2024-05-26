/* eslint-disable no-unused-vars */
import Main from "./layout/Main";
import ItemContextProvider from "./store/ItemContext";

function App() {
  return (
    <itemContextProvider>
      <Main />
    </itemContextProvider>
  );
}

export default App;
