import "./style/general.css";
import Header from "./components/Header";
import Jobs from "./Jobs"; 
import JobPosition from "./components/JobPosition";
import { useFilterValue } from "./FilterContext";

const App = () => {
  const filter = useFilterValue()
  console.log(1, filter)

  const JobsListFiltered = filter.length === 0 ? Jobs.map(job => {
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
  }) : Jobs.filter(job => {
    // Check if the job's role or level matches any of the filter values
    return filter.some(filterValue => job.role === filterValue || job.level === filterValue || job.tools.includes(filterValue) || job.languages.includes(filterValue))
  }).map(job => {
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
        {JobsListFiltered}
      </main>
    </div>
  )
}

export default App;