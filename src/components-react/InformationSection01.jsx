// Icons to use inside section
import accessImg from '../assets/images/icon-access-anywhere.svg';
import securityImg from '../assets/images/icon-security.svg';
import collaborationImg from '../assets/images/icon-collaboration.svg';
import storeImg from '../assets/images/icon-any-file.svg';

export const InformationSection01 = () => {
    return (
        <section className='info-section-01'>
            <div className='info-section-01__wrapper'>
                <div className='info-section-01__card'>
                    <img
                        className='info-section-01__img info-section-01__img--access'
                        src={accessImg}
                        alt=""
                    />
                    <h2 className='info-section-01__title'>Access your files, anywhere</h2>
                    <p className='info-section-01__text'>
                        The ability to use a smartphone, tablet, or computer to access your account means your
                        files follow you everywhere.
                    </p>
                </div>
                <div className='info-section-01__card'>
                    <img
                        className='info-section-01__img info-section-01__img--security'
                        src={securityImg}
                        alt=""
                    />
                    <h2 className='info-section-01__title'>Security you can trust</h2>
                    <p className='info-section-01__text'>
                        2-factor authentication and user-controlled encryption are just a couple of the security
                        features we allow to help secure your files.
                    </p>
                </div>
            </div>

            <div className='info-section-01__wrapper'>
                <div className='info-section-01__card'>
                    <img
                        className='info-section-01__img info-section-01__img--collaboration'
                        src={collaborationImg}
                        alt=""
                    />
                    <h2 className='info-section-01__title'>Real-time collaboration</h2>
                    <p className='info-section-01__text'>
                        Securely share files and folders with friends, family and colleagues for live collaboration.
                        No email attachments required.
                    </p>
                </div>
                <div className='info-section-01__card'>
                    <img
                        className='info-section-01__img info-section-01__img--store'
                        src={storeImg}
                        alt=""
                    />
                    <h2 className='info-section-01__title'>Store any type of file</h2>
                    <p className='info-section-01__text'>
                        Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
                    </p>
                </div>
            </div>
        </section>
    )
}
