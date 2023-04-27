import { useFilterDispatch } from "../FilterContext";

const JobPosition = ({ company_logo, company, new_job, featured, position, postedAt, contract, location, languages, tools, role, level }) => {
    const dispatch = useFilterDispatch()
    
    const listLanguages = languages.map((language) => 
        <li>
            {/* test reset button */}
            <button onClick={() => dispatch({ type: 'CLEAR' })}>reset</button>
            <button onClick={() => dispatch({ type: 'ADD_FILTER', filterItem: language })}>{language}</button>
        </li>
    );
    
    const listTools = tools.map((tool) => 
        <li>
            {/* test reset button */}
            <button onClick={() => dispatch({ type: 'CLEAR' })}>reset</button>
            <button onClick={() => dispatch({ type: 'REMOVE_FILTER', filterItem: tool })}>remove {tool}</button>
            <button onClick={() => dispatch({ type: 'ADD_FILTER', filterItem: tool })}>{tool}</button>
        </li>
    );
    

    return (
        <article>
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
                    {listLanguages}
                    {listTools}    
                </ul>
            </div>
        </article>
    )
}

export default JobPosition;