import {Fragment, useState} from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
    const [appointments, upddateAppointments] = useState([])
    const createAppointment = appointment => {
        upddateAppointments(
            [...appointments, appointment]
        )
    }

    const deleteAppointment = id => {
        const newAppointments = appointments.filter(appointment => appointment.id !== id)
        upddateAppointments(newAppointments)
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
                    <h2>Scheduled Appointments</h2>
                    {appointments.map(appointment => (
                        <Appointment
                            key={appointment.id}
                            appointment={appointment}
                            deleteAppointment={deleteAppointment}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default App;
