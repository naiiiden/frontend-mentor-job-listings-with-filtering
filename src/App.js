import "./style/general.css";
import Header from "./components/Header";
import Jobs from "./Jobs"; 
import JobPosition from "./components/JobPosition";



const App = () => {
  const JobsList = Jobs.map(job => {
    return <JobPosition key={job.id} company={job.company} languages={job.languages} tools={job.tools}/>
  });



  return (
    <div>
      <Header/>
      <p>hey</p>
      {JobsList}
    </div>
  )
}

export default App;