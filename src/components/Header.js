const Header = () => {
    return (
        <header>
            <form className="header--form">
                <label htmlFor="search" className="form--label">
                    <span className="label--invisible">Search</span>
                    <input id="search" type="text" className="text--input"/>
                    <input type="reset" value="Clear" className="clear--button"/>
                </label>
            </form>
        </header>
    )
}

export default Header;