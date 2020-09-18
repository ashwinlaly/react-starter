import React, { useState } from 'react';
import Input from '../../components/Input';

const SearchBar = () => {
    const [search, setSearch] = useState('')

    const _handleSubmit = () => {
        console.log(search)
    }

    return (
        <>
            <Input value={search} onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={_handleSubmit}>Search</button>
        </>
    )
}

export default SearchBar;