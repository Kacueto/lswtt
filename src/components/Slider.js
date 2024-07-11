
import './Slider.css';


const Slider = () => {


    return (

        <div className="container__slider">

            <div className="container-slider">
                <input type="radio" name="slider" id="item-1" checked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />

                <div className="cards">
                    <label className="card" htmlFor="item-1" id="selector-1">
                        <div className="card-item card-1">
                            <div className="card__text">
                                <h2>Free Ebook</h2>
                                <h1>1000 COMMON SPANISH WORDS</h1>
                                <p>This 60-page ebook will be your guide to learning new vocabulary in Spanish!  You will learn the 1000 most commonly used words in
                                    Spanish, organized by grammatical class and lexical group, with explanations of important grammatical concepts so you know when and how to use these words.</p>
                                <button>DOWNLOAD PDF</button>
                            </div>
                        </div>
                    </label>
                    <label className="card" htmlFor="item-2" id="selector-2">
                        <div className="card-item card-2">
                            <div className="card__text">
                                <h2>Free Ebook</h2>
                                <h1>SPANISH GRAMMAR GUIDE</h1>
                                <p>This 60-page ebook will be your guide to learning Spanish grammar! You'll learn how the Spanish language works in a practical way, following the 80/20 Principle, so that you can apply your grammar knowledge to everyday conversations.</p>
                                <button>DOWNLOAD PDF</button>
                            </div>
                        </div>
                    </label>
                    <label className="card" htmlFor="item-3" id="selector-3">
                        <div className="card-item card-3">
                            <div className="card__text">
                                <h2>Free Ebook</h2>
                                <h1>SPANISH PHONETICS GUIDE</h1>
                                <p>This interactive 12-page ebook will be your guide to learning all the sounds in Latin American Spanish! You'll be able to hear every single vowel and consonant sound, see how they’re represented in the International Phonetic Alphabet, and learn how to spell them with the Spanish alphabet.</p>
                                <button>DOWNLOAD PDF</button>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}
export default Slider;