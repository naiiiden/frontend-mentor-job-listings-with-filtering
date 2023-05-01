import FilterButton from "./FilterButton";

const JobPosition = ({ company_logo, company, new_job, featured, position, postedAt, contract, location, languages, tools, role, level }) => {

    const roleFilter = <FilterButton type='ADD_FILTER' filterItem={role} text={role}/>

    const levelFilter = <FilterButton type='ADD_FILTER' filterItem={level} text={level}/> 

    const listLanguages = languages.map((language, index) => <FilterButton key={index} type='ADD_FILTER' filterItem={language} text={language}/>);
    
    const listTools = tools.map((tool, index) => <FilterButton key={index} type='ADD_FILTER' filterItem={tool} text={tool}/>);

    return (
        <article className={`${featured ? 'featured' : ''}`}> 
            <img src={company_logo} alt=""/>
            <div className="job--information">
                <div className="company--name--container">
                    <h3>{company}</h3>
                    {new_job && <span className="new--span uppercase">New!</span>}
                    {featured && <span className="featured--span uppercase">Featured</span>}
                </div>
                <a href="/"><h2 className="job--position">{position}</h2></a>
                <div className="post--info">
                    <p className="postedAt">
                        <span className="sr-only">Posted:</span>
                        {postedAt}
                    </p>
                    <p className="contract">
                        <span className="sr-only">Contract:</span>
                        {contract}
                    </p>
                    <p className="location">    
                        <span className="sr-only">Location:</span>
                        {location}
                    </p>
                </div>
            </div>
            <div className="languages--tools--container">
                <ul>
                    {roleFilter}
                    {levelFilter}
                    {listLanguages}
                    {listTools}    
                </ul>
            </div>
        </article>
    )
}

export default JobPosition;