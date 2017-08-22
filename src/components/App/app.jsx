import { Link } from 'react-router'
import bender from '../../assets/images/bender.png'

const App = ({children}) => {
    return (
        <div>
            <div>
                <img src={bender} style={{display: "inline", height: "50px"}}/>
                <Link to="/">
                    <div style={{display: "inline", marginRight: "10px",}}>Counter</div>
                </Link>
                <Link to="/hello-world">
                    <div style={{display: "inline", marginRight: "10px"}}>Hello World</div>
                </Link>
                <Link to="/not-existing-route">
                    <div style={{display: "inline"}}>Not-existing-route</div>
                </Link>
            </div>
            {children}

        </div>
    )
}

export default App