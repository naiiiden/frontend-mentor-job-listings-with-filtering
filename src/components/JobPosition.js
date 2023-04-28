import { useFilterDispatch } from "../FilterContext";

const JobPosition = ({ company_logo, company, new_job, featured, position, postedAt, contract, location, languages, tools, role, level }) => {
    const dispatch = useFilterDispatch()

    const roleFilter = 
        <li>
            <button onClick={() => dispatch({ type: 'ADD_FILTER', filterItem: role })}>{role}</button>
        </li>

    const levelFilter = 
        <li>
            <button onClick={() => dispatch({ type: 'ADD_FILTER', filterItem: level })}>{level}</button>
        </li>

    const listLanguages = languages.map((language) => 
        <li>
            <button onClick={() => dispatch({ type: 'ADD_FILTER', filterItem: language })}>{language}</button>
        </li>
    );
    
    const listTools = tools.map((tool) => 
        <li>
            <button onClick={() => dispatch({ type: 'ADD_FILTER', filterItem: tool })}>{tool}</button>
        </li>
    );
    

    return (
        <article className={`${featured ? 'featured' : ''}`}> 
            <img src={company_logo} alt=""/>
            <div className="job--information">
                <div className="company--name--container">
                    <h3>{company}</h3>
                    {new_job && <span className="new--span">NEW!</span>}
                    {featured && <span className="featured--span">FEATURED</span>}
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