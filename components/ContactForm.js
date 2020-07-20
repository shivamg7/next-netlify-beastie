export default function ContactForm() {
    return <form name="contact" action="/success" method="POST" data-netlify="true">
        <p>
            <label htmlFor="yourEmail">Email !!</label>
            <input type="email" id="yourEmail"/>
            <button type="Submit">Submit</button>
        </p>
    </form>
}