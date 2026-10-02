import heroImg from '../assets/images/illustration-intro.png';

export const Main = ({focusRef}) => {

    const handleClick = () => {
        focusRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
        focusRef.current.focus({preventScroll: true});
        
    }
    return (
        <main className='main'>
            <img
                className='main__hero'
                src={heroImg} 
                alt="Hero Image" 
            />
            <h1 className='main__title'>All your files in one secure location, accessible anywhere.</h1>
            <p className='main__description'>
                Fylo stores all your most important files in one secure location. Access them wherever
                you need, share and collaborate with friends family, and co-workers.
            </p>
            <button 
                onClick={handleClick} 
                className='main__button button-g'
            >Get Started</button>
        </main>
    )
}
