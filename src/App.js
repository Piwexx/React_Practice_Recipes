import { Pages } from "./pages/Pages";
import {Categories} from  './components/Categories'
import {BrowserRouter} from  'react-router-dom'
import { Search } from "./components/Search";
function App() {
  return (
    <>
    <BrowserRouter>
      <Search/>
      <Categories/>
      <Pages/>
     </BrowserRouter>
    </>
  );
}

export default App;
