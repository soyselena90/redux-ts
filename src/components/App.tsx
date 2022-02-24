import { store } from "../state";
import { Provider } from "react-redux";
import RepositoriesList from "./RepositoriesList";
const App = () => {
   return (
      <Provider store={store}>
         <div className="container">
            <h1>Search For a Package</h1>
            <RepositoriesList />
         </div>
      </Provider>
   );
};

export default App;
