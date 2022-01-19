import {Fragment, useState} from "react";
import Form from "./components/Form";

function App() {
    const [appointments, upddateAppointments] = useState([])
    const createAppointment = appointment => {
        upddateAppointments(
            [...appointments, appointment]
        )
    }
    return (
        <Fragment>
            <h1>Patient Manager</h1>
            <div className="container">
                <div className="one-half column">
                    <Form
                        createAppointment={createAppointment}
                    />
                </div>
                <div className="one-half column">
                </div>
            </div>
        </Fragment>
    );
}

export default App;
