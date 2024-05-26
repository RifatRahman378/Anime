import { useState } from 'react';
import { ANIME } from '@consumet/extensions';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        const gogoanime = new ANIME.Gogoanime();
        gogoanime.search(searchQuery).then(data => {
            console.log(data);
        }).catch(error => {
            console.error('Error searching for anime:', error);
        });
        console.log(`Searching for: ${searchQuery}`);
        // You can add additional logic here to handle the search action
    };

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>

                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                    </div>
                    
                    <button onClick={handleSearch} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;
