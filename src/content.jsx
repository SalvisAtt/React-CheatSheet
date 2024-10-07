import PropTypes from 'prop-types';

function Content ({ searchTerm }){
    const items = [
        {
            id: 1,
            title: "Scrolling grid",
            content: `
                1.height: 100%; /* Ensure the content takes up all available space */
                2.display: grid;
                3.grid-template-columns: repeat(3, 1fr); /* Create 3 equal columns */
                4.grid-auto-rows: 600px; /* Set a fixed height for each row */
                5.grid-gap: 10px; /* Space between grid items */
                6.overflow-y: auto; /* Enable vertical scrolling */
                7.padding: 10px; /* Optional: add padding inside content area */
                8.white-space: nowrap; /* Prevent wrapping of items */
                9.optional if want to scroll horizontal change overflow-y to overflow-x
            `,
        },
        {
            id: 2,
            title: "Centering stuff",
            content: `
                1.align-items: center; /* Centers elements horizontally */
                2.justify-content: center; /* Centers elements vertically */
            `,
        },
        {
            id: 3,
            title: "Text decoration",
            content: `
                1.font-size: 16px; /* Increases the size of the text */
                2.font-family: monospace; /* Changes the style of the text */
                3.color: white; /* Changes the text color */
            `,
        },
        { id: 4, title: "Search bar", 
        content: "In search bar components create an constan of ( const [searchTerm, setSearchTerm] = useState('');), " +
            "Then will need to handle input changes in the same component where the search bar is for me it is Search.jsx, and the code part is const handleInputChange = (e) => { const value = e.target.value; " +
            "setSearchTerm(value);  onSearch(value); // Pass the value to the parent component and lastly update input fields things to have placeholder; value{searchTerm}; onChange{[handleInputChange]} " + 
            "Also needed to import import React, { useState } from 'react'; for useState and import PropTypes from 'prop-types';  to make onSearch a required function Search.propTypes = { onSearch: PropTypes.func.isRequired, // onSearch should be a required function };"
        
        
        },
        { id: 5, title: "Search bar 2", content: "second part is to add in app.jsx  const [searchTerm, setSearchTerm] = useState(''); , also need  to add a function that handles the search cost handleSearch (term)=>"+ 
            " { setsearchTerm (term.toLowercase()); and to search component{handleSearch} and to content component{searchTerm}" },
        { id: 6, title: "Search bar 3", content: "So and the last part is to change the content component and start by adding import PropTypes from 'prop-types'; and creating const items " +
            "[{ id: 1, title: Scrolling grid , and content}, if more ] after that is needed const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchTerm); to update the conntent"+
        "and lastly add to the div element key = {item.id} and <h1>{item.title}</h1> <p>{item.content}</p> {/* Display the content as preformatted text */} also not to forget Content.propTypes = {searchTerm: PropTypes.string.isRequired,}; " },

    ];

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
    );

    return (
        <div className = "content">
            {filteredItems.map(item => (
                <div key={item.id} className="grid-item">
                    <h1>{item.title}</h1>
                    <p>{item.content}</p> {/* Display the content as preformatted text */}
                </div>
            ))}
        </div>
    );
}

Content.propTypes = {
    searchTerm: PropTypes.string.isRequired,
};
export default Content;