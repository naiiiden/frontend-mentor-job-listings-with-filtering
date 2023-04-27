import { useFilterDispatch } from "../FilterContext";

const JobPosition = ({ company_logo, company, new_job, featured, position, postedAt, contract, location, languages, tools, role, level }) => {
    const dispatch = useFilterDispatch()
    
    const listLanguages = languages.map((language) => 
        <li>
            {/* test reset button */}
            <button onClick={() => dispatch({ type:'CLEAR' })}>reset</button>
            <button data-language={language} onClick={() => dispatch({ type: 'ADD_FILTER', filterItem: language })}>{language}</button>
        </li>
    );
    
    const listTools = tools.map((tool) => 
        <li>
            {/* test reset button */}
            <button onClick={() => dispatch({ type:'CLEAR' })}>reset</button>
            <button data-tool={tool} onClick={() => dispatch({ type: 'ADD_FILTER', filterItem: tool })}>{tool}</button>
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
                <a href="/"><h2 className="job--position" data-role={role} data-level={level}>{position}</h2></a>
                <div className="post--info">
                    <span className="postedAt">{postedAt}</span>
                    <span className="contract">{contract}</span>
                    <span className="location">{location}</span>
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