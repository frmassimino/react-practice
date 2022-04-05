import React from "react";



export default function Form() {
    /* const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("") */

    const [formData, setFormData] = React.useState(
        {firstName: "", 
        lastName: "", 
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })

    /* console.log(formData.favColor) */

    const handleChange = (event) => {
        /* event.target.attributes.placeholder.value === 'First Name' ? 
        setFirstName(event.target.value) :
        setLastName(event.target.value) */

        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit (event) {
        event.preventDefault() /* To not re-render the page on submission */

        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit} >
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName} /* Used to show the actual state handled by react in the input */
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"   
            />
            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFiendly" >Are you friendly?</label>

            <fieldset>
                <legend>Current employment status</legend>

                <input 
                    type={"radio"}
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unenployed">Unenployed</label>
                <br />

                <input 
                    type={"radio"}
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input 
                    type={"radio"}
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />

            </fieldset>

            <br />
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />

            <button>Submit</button>

        </form>
    )
}