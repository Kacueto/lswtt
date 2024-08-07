import './Donations.css';

const Donations = () => {
    return (
        <div className="donations-container">
            <section className="donations-container1">
                <h1>Donaciones</h1>
                <div className="donations-container1-content">
                    
                    <p>Estamos muy felices de anunciar la apertura del proyecto, el cual se sustentará por medio de la suscripción al Patreon y con la ayuda de las donaciones voluntarias de cada uno de las personas que quieran apoyarnos y hacer crecer este canal. Debido a nuestros oficios actuales, esta iniciativa ha comenzado como un trabajo de medio tiempo. Sin embargo, nuestro deseo es que este proyecto en el futuro se convierta en nuestro trabajo a tiempo completo con el objetivo seguir montando contenido exclusivo y así ayudar su proceso de aprendizaje.</p>
                </div>
            </section>
            <section className="donations-container2">
                <h1> ¿Como puedo ayudar a crecer este canal? </h1>

                <div className="donations-container2-paypal">
                    <h3>Aportes Voluntarios</h3>
                    <p> Si haz encontado el contenido de este canal de mucha utilidad, te dejamos el link de paypal para que realices una donacion voluntaria.</p>
                    <ul>
                        <li>5$</li>
                        <li>10$</li>
                        <li>20$</li>
                        <li>Other</li>
                    </ul>
                </div>

                <div className="donations-container2-patreon">
                    <h3>Hacerte miembro de nuestro patreon</h3>
                    <p>Por ser miembro de nuestro patreon, no solo recibiras contenido de nuestras lecciones, podcasts y videos, sino que tambien haras parte del crecimiento y desarrollo de esta increible iniciativa</p>
                    <button>Patreon</button>
                </div>
            </section>
        </div>
    );
}
export default Donations;