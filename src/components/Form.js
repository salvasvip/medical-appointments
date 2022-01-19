import {Fragment, useState} from "react";
import {v4 as uuidv4} from 'uuid';

const Form = () => {
    const [appointment, upddateAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    })

    const [error, updateError] = useState(false)

    const handleChange = e => {
        upddateAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    const {pet, owner, date, time, symptoms} = appointment

    const submitAppointment = e => {
        e.preventDefault()
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
            updateError(true)
            return
        }
        updateError(false)
        appointment.id = uuidv4()
    }

    return (
        <Fragment>
            <h2>New Date</h2>
            {
                error ?
                    <p className="alerta-error">Complete all the information</p>
                    :
                    null
            }
            <form onSubmit={submitAppointment}>
                <label htmlFor="">Pet's name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Teddy"
                    onChange={handleChange}
                    value={pet}
                />
                <label htmlFor="">Owner name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="John Doe"
                    onChange={handleChange}
                    value={owner}
                />
                <label htmlFor="">Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                <label htmlFor="">Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                <label htmlFor="">Symptoms</label>
                <textarea
                    name="symptoms"
                    id="symptoms"
                    className="u-full-width"
                    onChange={handleChange}
                    value={symptoms}
                />
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add
                </button>
            </form>
        </Fragment>
    )
}

export default Form