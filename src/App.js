import "./style/general.css";
import Header from "./components/Header";
import Jobs from "./Jobs"; 
import JobPosition from "./components/JobPosition";

const App = () => {
  const JobsList = Jobs.map(job => {
    return ( 
      <JobPosition 
        key={job.id} 
        company={job.company} 
        languages={job.languages} 
        tools={job.tools} 
        new_job={job.new} 
        featured={job.featured} 
        position={job.position} 
        postedAt={job.postedAt} 
        contract={job.contract} 
        location={job.location} 
        company_logo={job.logo} 
        role={job.role}
        level={job.level}
      />
    )  
  });

  return (
    <div>
      <Header/>
      <main className="jobs--container">
        {JobsList}
      </main>
    </div>
  )
}

export default App;