import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    function goPrevious() {
        navigate(-1);
    }

    return (
        <div className="App" style={{display:'flex', justifyContent:'center'}}>
            <div style={{width: '80%'}}>
                <h1>404 Page Not Found</h1>
                <hr/>
                <h2>Page Not Found</h2>
                <a href="#" onClick={goPrevious}>Previous Page</a>
            </div>
        </div>
    );
}