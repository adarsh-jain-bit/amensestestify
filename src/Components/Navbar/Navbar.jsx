import "./Navbar.css";

function Navbar(){
    return(
        <div className="nav">
            <div className="navHalf1">
                <h1>TestGorilla</h1>
                <ul>
                    <li>My assessments</li>
                    <li>My candidates</li>
                    <li>Tests</li>
                </ul>
            </div>
            <div className="navHalf2">
                <button>Talk to us</button>
                <button>Upgrade</button>
                <button>Name</button>
            </div>
        </div>
    );
}

export default Navbar;