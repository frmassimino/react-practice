import React from "react";




export default function WindowTracker(props) {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up")
            setWindowWidth(this.window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)
        
        return () => {
            /* Cleaning side effects */
            console.log("Cleaning up")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return(
        <p>Window Width: {windowWidth}</p>
    )
}