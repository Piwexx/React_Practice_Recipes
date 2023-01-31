import { Pages } from "./pages/Pages";
import {Categories} from  './components/Categories'
import {BrowserRouter} from  'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Categories/>
      <Pages/>
     </BrowserRouter>
    </>
  );
}

export default App;
