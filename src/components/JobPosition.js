const JobPosition = ({company_logo, company, new_job, featured, position, postedAt, contract, location, languages, tools}) => {
    const listLanguages = languages.map((language) => 
        <li><button>{language}</button></li>
    );

    const listTools = tools.map((tool) => 
        <li><button>{tool}</button></li>
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
                <h2 className="job--position">{position}</h2>
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