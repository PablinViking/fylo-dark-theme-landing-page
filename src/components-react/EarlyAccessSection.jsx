import { useState } from "react";


export const EarlyAccessSection = ({focusRef}) => {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if(!regExp.test(email)){
            setError(true);
            console.log("Invalid email");
            
        } else {
            console.log("Succes");
            setError(false);
            setEmail("");
        }
    }



    return (
        <section className="early-acc-sect">

            <h2 className="early-acc-sect__title">Get early access today</h2>

            <p className="early-acc-sect__text">
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions, our support team would be happy to help you.
            </p>

            <form
                onSubmit={handleSubmit}
                className="early-acc-sect__form" 
                action=""
            >

                <input 
                    ref={focusRef}
                    className="early-acc-sect__text-input" 
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="email@example.com"
                />

                <input 
                    className="early-acc-sect__submit-input button-g" 
                    type="submit" 
                    value="Get Started For Free" 
                />

            </form>

            <p className={`early-acc-sect__error ${error ? "early-acc-sect__error--visibility" : ""}`}>
                Please enter a valid email address
            </p>
        </section>
    )
}
