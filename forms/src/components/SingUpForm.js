import React from "react";


export default function SignUpForm () {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        newsletter: false,
    })

    /* console.log(formData) */

    function handleChange (event) {
        const {name, value, type, checked} = event.target
        
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit (event) {
        event.preventDefault()
        if (formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
            if (formData.newsletter) {
                console.log("Thanks for signing up for our newsletter!")
            }
        } else {
            console.log("Passwords do not match")
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <input 
                type="email" 
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <br />
            <input 
                type="password" 
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
            <br />
            <input 
                type="password" 
                name="passwordConfirm"
                placeholder="Confirm password"
                value={formData.passwordConfirm}
                onChange={handleChange}
            />
            <br />
            <input 
                id="newsletter" 
                type="checkbox" 
                name="newsletter"
                value={formData.newsletter}
                onChange={handleChange}
            />
            <label htmlFor="newsletter">
                I want to join the newsletter
            </label>
            <br />
            <button>Sign up</button>
        </form>
    )
}