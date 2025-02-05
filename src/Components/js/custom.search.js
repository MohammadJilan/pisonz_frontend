class Search{
    static check(value, search_term) {
        const lowerValue = value.toLowerCase();
        const lowerTerm = search_term.toLowerCase();
        
        return lowerValue.includes(lowerTerm);
    }
}

export default Search;