import PropTypes from 'prop-types';
import './Content.css'; // Add a separate CSS file for styling if you want

function Content({ searchTerm }) {
    // Items for dynamic content
    const items = [
        {
            id: 1,
            title: "Scrolling grid",
            content: `
                1. height: 100%; /* Ensure the content takes up all available space */ {</br>}
                2. display: grid;
                3. grid-template-columns: repeat(3, 1fr); /* Create 3 equal columns */
                4. grid-auto-rows: 600px; /* Set a fixed height for each row */
                5. grid-gap: 10px; /* Space between grid items */
                6. overflow-y: auto; /* Enable vertical scrolling */
                7. padding: 10px; /* Optional: add padding inside content area */
                8. white-space: nowrap; /* Prevent wrapping of items */
                9. optional: if you want to scroll horizontally, change overflow-y to overflow-x
            `,
            Value: 'CSS',
        },
        {
            id: 2,
            title: "Centering stuff",
            content: `
                1. align-items: center; /* Centers elements horizontally */
                2. justify-content: center; /* Centers elements vertically */
            `,
            Value: 'CSS',
        },
        {
            id: 3,
            title: "Text decoration",
            content: `
                1. font-size: 16px; /* Increases the size of the text */
                2. font-family: monospace; /* Changes the style of the text */
                3. color: white; /* Changes the text color */
            `,
            Value: 'CSS',
        },
        {
            id: 4,
            title: ""
        }
    ];

    // Filter the content based on the search term
    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="content">
            {filteredItems.map(item => (
                <div key={item.id} className="grid-item">
                    <h1>{item.title}</h1>
                    <pre>
                        <code>{item.content}</code> {/* Display the content as preformatted text */}
                    </pre>
                </div>
            ))}
        </div>
    );
}

Content.propTypes = {
    searchTerm: PropTypes.string.isRequired,
};

export default Content;
