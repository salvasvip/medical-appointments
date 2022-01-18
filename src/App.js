import {Fragment} from "react";
import Form from "./components/Form";

function App() {
    return (
        <Fragment>
            <h1>Patient Manager</h1>
            <div className="container">
                <div className="one-half column">
                    <Form/>
                </div>
                <div className="one-half column">
                </div>
            </div>
        </Fragment>
    );
}

export default App;
