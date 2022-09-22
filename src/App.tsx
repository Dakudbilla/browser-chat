import { Route, Routes } from "react-router-dom";
import Chat from "./features/Chat/Chat";
import JoinChat from "./features/JoinChat/JoinChat";
import NotFound from "./pages/NotFound";
import "./App.css";
const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Chat />} />
        <Route path='/join' element={<JoinChat />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
