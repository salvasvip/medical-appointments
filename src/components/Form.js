import {Fragment, useState} from "react";

const Form = () => {
    const [appointment, upddateAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    })

    const handleChange = e => {
        upddateAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    const {pet, owner, date, time, symptoms} = appointment

    return (
        <Fragment>
            <h2>New Date</h2>
            <form action="">
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