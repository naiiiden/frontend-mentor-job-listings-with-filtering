const JobPosition = ({company_logo, company, new_job, featured, position, postedAt, contract, location, languages}) => {
    const listLanguages = languages.map((language) => 
        <li><button>{language}</button></li>
    );
    
    return (
        <article>
            <img src={company_logo} alt=""/>
            <div className="job--information">
                <div class="company--name--container">
                    <h3>{company}</h3>
                    {new_job && <span className="new--span">{new_job}</span>}
                    {featured && <span className="featured--span">{featured}</span>}
                </div>
                <h2 className="job--position">{position}</h2>
                <div class="post--info">
                    <span className="postedAt">{postedAt}</span>
                    <span className="contract">{contract}</span>
                    <span className="location">{location}</span>
                </div>
            </div>
            <div className="languages--tools--container">
                <ul>{listLanguages}</ul>
            </div>
        </article>
    )
}

export default JobPosition;