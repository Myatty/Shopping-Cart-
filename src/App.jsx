/* eslint-disable no-unused-vars */
import Main from "./layout/Main";
import ItemContextProvider from "./store/ItemContextTwo";

function App() {
  return (
    <ItemContextProvider>
      <Main />
    </ItemContextProvider>
  );
}

export default App;
