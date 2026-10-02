import quotesImg from '../assets/images/bg-quotes.png';
import satishImg from '../assets/images/profile-1.jpg';
import bruceImg from '../assets/images/profile-2.jpg';
import ivaImg from '../assets/images/profile-3.jpg';

export const CommentsSection = () => {
    return (
        <section className='comment-sect'>

            <img 
                className='comment-sect__quotes' 
                src={quotesImg} 
                alt="" 
            />

            <div className='comment-sect__card'>
                <p className='comment-sect__comment'>
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.
                </p>

                <div className='comment-sect__prof-container'>
                    <img
                        className='comment-sect__prof-pic' 
                        src={satishImg} 
                        alt="" 
                    />
                    <div className='comment-sect__prof-info'>
                        <p className='comment-sect__name'>Satish Patel</p>
                        <p className='comment-sect__role'>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>

            <div className='comment-sect__card'>
                <p className='comment-sect__comment'>
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.
                </p>

                <div className='comment-sect__prof-container'>
                    <img
                        className='comment-sect__prof-pic' 
                        src={bruceImg} 
                        alt="" 
                    />
                    <div className='comment-sect__prof-info'>
                        <p className='comment-sect__name'>Bruce McKenzie</p>
                        <p className='comment-sect__role'>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>

            <div className='comment-sect__card'>
                <p className='comment-sect__comment'>
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                    become a well-oiled collaboration machine.
                </p>

                <div className='comment-sect__prof-container'>
                    <img
                        className='comment-sect__prof-pic' 
                        src={ivaImg} 
                        alt="" 
                    />
                    <div className='comment-sect__prof-info'>
                        <p className='comment-sect__name'>Iva Boyd</p>
                        <p className='comment-sect__role'>Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
