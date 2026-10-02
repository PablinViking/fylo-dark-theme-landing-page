import stayProductiveImg from '../assets/images/illustration-stay-productive.png';
import arrowIcon from '../assets/images/icon-arrow.svg';


export const InformationSection02 = () => {
    return (
        <section className='info-section-02'>

            <img
                className='info-section-02__img'
                src={stayProductiveImg}
                alt=""
            />


            <div className='info-section-02__info-container'>

                <h2 className='info-section-02__title'>Stay productive, wherever you are</h2>

                <p className='info-section-02__text'>
                    Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                    storage needs.
                    <br /><br />
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email
                    attachments required.
                </p>


                <a
                    className='info-section-02__link'
                    href=""
                >
                    See how Fylo works
                    <img
                        className='info-section-02__arrow-icon'
                        src={arrowIcon}
                        alt=""
                    />
                </a>

            </div>
        </section>
    )
}
