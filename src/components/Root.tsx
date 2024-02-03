import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <h1>Hello World!</h1>
            <Link to="/blog">Blog</Link>
            <br/>
            <Link to="/game">Web Game</Link>
            <br/>
            <Link to="/tool">Tool</Link>
            <br/>
            <Link to="/bot">Bot</Link>
        </div>
    );
}





function Blog() {
    return (
        <div className="App">
            <h1>Web Game</h1>
            <Link to="/home">Home</Link>
        </div>
    );
}




function Game() {
    return (
        <div className="App">
            <h1>Web Game</h1>
            <Link to="/home">Home</Link>
        </div>
    );
}





function Tool() {
    return (
        <div className="App">
            <h1>Tool</h1>
            <Link to="/home">Home</Link>
        </div>
    );
}





function Bot() {
    return (
        <div className="App">
            <h1>Bot</h1>
            <Link to="/home">Home</Link>
        </div>
    );
}





// export all
export {Home, Blog, Game, Tool, Bot};