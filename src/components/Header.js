const Header = () => {
    return (
        <header>
            <form className="header--form">
                <label for="search" className="form--label">
                    <span clas="label--invisible">Search</span>
                    <input id="search" type="text" class="text--input"/>
                    <input type="reset" value="Clear" class="clear--button"/>
                </label>
            </form>
        </header>
    )
}

export default Header;