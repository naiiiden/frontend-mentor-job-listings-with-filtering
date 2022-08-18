import "./style/general.css";
import Header from "./components/Header";
import JobPosition from "./components/JobPosition";

const App = () => {
  return (
    <div>
      <Header/>
      <p>hey</p>
      <JobPosition languages={languages}/>
    </div>
  )
}

export default App;