function Content (){
    return (
    <div className = "content">
        <div className="grid-item">
            <h1>Scrolling grid</h1>
            <p>height: 100%; /* Ensure the content takes up all available space */</p>
            <p>display: grid;</p>
            <p>grid-template-columns: repeat(3, 1fr); /* Create 3 equal columns */</p>
            <p>grid-auto-rows: 600px; /* Set a fixed height for each row */</p>
            <p>grid-gap: 10px; /* Space between grid items */</p>
            <p>overflow-y: auto; /* Enable vertical scrolling */</p>
            <p>padding: 10px; /* Optional: add padding inside content area */</p>
            <p>white-space: nowrap; /* Prevent wrapping of items */</p>
            <p>optional if want to scroll horizontal change overflow-y to overflow-x</p>
        </div>
        <div className="grid-item">
            <h1>Centeriing stuff</h1>
            <p>align-items: center; /* centers elements horizontal */</p>
            <p>justify-content: center; /* centers elements vertical */</p>
        </div>
        <div className="grid-item">
            <h1>Text decoration</h1>
            <p>font-size:16px; /* is to increase size of the text */</p>
            <p>font-family:monospace; /* is to change the style of the text */</p>
            <p>color:white;/*  is to change the text color */</p>
        </div>
        <div className="grid-item">
            4
        </div>
        <div className="grid-item">
            5
        </div>
        <div className="grid-item">
            6
        </div>
        <div className="grid-item">
            7
        </div>
        <div className="grid-item">
            8
        </div>
        <div className="grid-item">
            9
        </div>
        <div className="grid-item">
            10
        </div>
        <div className="grid-item">
            11
        </div>
        <div className="grid-item">
            12
        </div>
    </div>
    );
}

export default Content;