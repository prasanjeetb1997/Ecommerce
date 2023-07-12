

function SearchBar() {
    return (
        <form className="container d-flex justify-content-center mt-5 px-5" role="search">
            <input
                style={{fontSize:"19px"}}
                className="form-control border-secondary me-3 ps-3 py-2 w-75"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <button className="btn btn-outline-success" style={{"--bs-btn-padding-y": ".15rem", "--bs-btn-padding-x": "1.5rem","--bs-btn-font-size":" 1.1rem"}} type="submit">
                Search
            </button>
        </form>
    )
}

export default SearchBar