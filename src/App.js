import {Fragment, useEffect, useState} from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
    let savedAppointments = JSON.parse(localStorage.getItem('appointments'))

    if (!savedAppointments) {
        savedAppointments = []
    }

    const [appointments, upddateAppointments] = useState(savedAppointments)

    useEffect(() => {
        if (savedAppointments) {
            localStorage.setItem('appointments', JSON.stringify(appointments))
        } else {
            localStorage.setItem('appointments', JSON.stringify([]))
        }
    }, [appointments])

    const createAppointment = appointment => {
        upddateAppointments(
            [...appointments, appointment]
        )
    }

    const deleteAppointment = id => {
        const newAppointments = appointments.filter(appointment => appointment.id !== id)
        upddateAppointments(newAppointments)
    }

    const secondTitle = appointments.length === 0 ? 'nothing scheduled yet' : 'scheduled appointments'

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
                    <h2>{secondTitle}</h2>
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
