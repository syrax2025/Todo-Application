import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NavBar, SignUp, Signin, TodoList } from "./components";
import { store } from "./redux";
function App() {
  return (
    <>

    <Provider store={store}>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route element={<SignUp/>} path="/signup"/>
      <Route element={<Signin/>} path="/signin"/>
      <Route element={<TodoList/>} path="/todos"/>
      <Route element={<Home/>} path="/"/>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
