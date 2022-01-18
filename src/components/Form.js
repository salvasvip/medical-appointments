import {Fragment} from "react";

const Form = () => (
    <Fragment>
        <h2>New Date</h2>
        <form action="">
            <label htmlFor="">Pet's name</label>
            <input
                type="text"
                name="pet"
                className="u-full-width"
                placeholder="Teddy"
            />
            <label htmlFor="">Owner name</label>
            <input
                type="text"
                name="owner"
                className="u-full-width"
                placeholder="John Doe"
            />
            <label htmlFor="">Date</label>
            <input
                type="date"
                name="date"
                className="u-full-width"
            />
            <label htmlFor="">Time</label>
            <input
                type="time"
                name="time"
                className="u-full-width"
            />
            <label htmlFor="">Symptoms</label>
            <textarea
                name="symptoms"
                id="symptoms"
                className="u-full-width"
            />
            <button
                type="submit"
                className="u-full-width button-primary"
            >Add
            </button>
        </form>
    </Fragment>
)

export default Form