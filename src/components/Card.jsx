
import cardLogo from '../assets/images/card-logo.svg';

export default function Card(props) {
    let { 
        cardNumber, 
        cardName, 
        cardCVC, 
        cardExpirationMonth, 
        cardExpirationYear,
    } = props;

    cardNumber ||= '0000 0000 0000 0000';
    cardName ||= 'Jane Appleseed';
    cardCVC ||= '000';
    cardExpirationMonth ||= '00';
    cardExpirationYear ||= '00';

    return (
        <div className="card-container relative text-white flex flex-col mx-4 mt-6 md:mt-0 md:mx-0 md:flex-col-reverse md:gap-6">
            <div className="card-back card self-end lg:card-larg md:self-end relative">
                <div className='absolute top-[41%] left-[76%] xs:top-[42%] 2xs:top-[43%] md:top-[41%] lg:text-xl lg:top-[42%]'>{cardCVC}</div>
            </div>
            <div className="card-front card self-start md:card-small lg:card-larg md:mr-10 pt-4 px-4">
                <img className="block self-start scale-60 xs:scale-75 2xs:scale-80 md:scale-75 lg:scale-90 origin-top-left" src={cardLogo} alt="card logo" />
                <div className="card-number tracking-widest mt-5 lg:mt-10">{cardNumber}</div>
                <div className="card-details flex mt-2 justify-between">
                  <div className='uppercase'>{cardName}</div><div>{`${cardExpirationMonth}/${cardExpirationYear}`}</div>
                </div>
            </div>
        </div>
    )
}
