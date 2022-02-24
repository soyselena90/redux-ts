import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
   const [term, setTerm] = useState("");
   const { searchRepositories } = useActions();
   const { data, error, loading } = useTypedSelector(
      (state) => state.repositories
   );

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      searchRepositories(term);
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
         </form>
         {error && <h3 className="error">{error}😱</h3>}
         {loading && <h3 className="loading">Loading...🧐</h3>}
         <div className="datalist">
            {!error &&
               !loading &&
               data.map((name, i) => <div key={i}>{name}</div>)}
         </div>
      </div>
   );
};

export default RepositoriesList;
