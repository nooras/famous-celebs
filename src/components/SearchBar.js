function SearchBar(){
    return(
    <div className="searchBar d-flex container form-group has-search" style={{width: '43rem', paddingRight: '3rem'}}>
        <img style={{padding:'5px', position:'relative', left:'40px'}} src="https://img.icons8.com/ios/25/AEAEAE/search--v1.png" alt="search"/>
        <input type="text" className="form-control px-5" placeholder="Search" style={{border: '2px solid rgb(209, 208, 208)'}}/>
    </div>
    )
}
export default SearchBar;
