import './Donations.css';

const Donations = () => {
    return (
        <div className="donations-container">
            <section className="donations-container1">
                <h1>Donations</h1>
                <div className="donations-container1-content">
                    <h3>Help us teach you</h3>
                    <p>We are very happy to announce the opening of the project, which will be supported by subscribing to Patreon and with the help of voluntary donations from each of the people who want to support us and make this channel grow. Due to our current jobs, this initiative has started as a part-time job. However, our hope is that this project becomes our full-time job in the future with the aim of continuing to create exclusive content and thus help your learning process.</p>
                </div>
            </section>
            <section className="donations-container2">
                <h2>Easy donations</h2>
                <div className="donations-container2-paypal"> 
                    <p>To help us with paypal use this directs links</p>
                    <ul>
                        <li>5$</li>
                        <li>10$</li>
                        <li>20$</li>
                        <li>50$</li>
                    </ul>
                </div>
                <h2>Patreon subscription</h2>
                <div className="donations-container2-patreon">
                    <p>On Patreon, you can subscribe for additional content and exclusive perks, with tiers ranging from $3 to $10 per month. It starts with access to video transcripts, unreleased episodes, a word dictionary, and a Telegram group. As you level up, you'll receive more exclusive content, including podcasts with transcripts and PDF lessons with exercises. Click the button below to visit our Patreon page, where you can read the description of each level and choose the one that best suits your needs. Once you've selected your tier, you'll be able to create an account on Patreon and choose between PayPal or credit card as your payment method.</p>
                    <button>Patreon</button>
                </div>
            </section>
        </div>
    );
}
export default Donations;