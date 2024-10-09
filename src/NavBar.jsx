
function NavBar() {
    return (
    <div className="NavBar">
        <button onClick={() => onselect('Input')}>Input</button>
        <button onClick={() => onselect('Output')}>Output</button>
        <button onClick={() => onselect('Hooks')}>Hooks</button>
        <button onClick={() => onselect('CSS')}>CSS</button>
    </div>
    )
  }
  
  export default NavBar;