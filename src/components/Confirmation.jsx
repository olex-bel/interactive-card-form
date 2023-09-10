
import iconComplete from '../assets/images/icon-complete.svg';

export default function Confirmation({ resetForm}) {
    return (
        <div className="pt-20 w-[300px] text-center">
            <img src={iconComplete} className="mx-auto" alt='icont complete' />
            <p className="uppercase text-xl tracking-widest font-semibold pt-6">Thank you!</p>
            <p className="text-slate-400 pt-3 pb-6">We've added your card details</p>
            <button className="bg-dark-violet text-white rounded-md w-full h-12" type="button" onClick={resetForm}>Continue</button>
        </div>
    )
};