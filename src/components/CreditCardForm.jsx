
import { useState } from 'react';
import { formatCreditCardNumber } from '../utils';

export default function CreditCardForm({ formDataChanged, setConfirmed }) {
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardName: '',
        cardCVC: '',
        cardExpirationMonth: '',
        cardExpirationYear: '',
    });

    const updateState = (name, value) => {
        setFormData((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));

        if (typeof formDataChanged === 'function') {
            formDataChanged({
                [name]: value,
            });
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        let normalizedValue = value;

        if (name === 'cardExpirationYear' || name === 'cardCVC') {
            normalizedValue = value? value.replace(/\D/g, "") : value;
        }

        updateState(name, normalizedValue);
    };

    const handleCardNumberFieldChange = (e) => {
        const { name, value } = e.target;
        const formattedValue = value? formatCreditCardNumber(value.replace(/\D/g, "")) : value;

        updateState(name, formattedValue);
    }

    const handleMonthFieldChange = (e) => {
        const { name, value } = e.target;
        const numValue = parseInt(value.replace(/\D/g, ''), 10);
        let formattedValue;

        if (isNaN(numValue) || numValue < 1) {
            formattedValue = '';
        } else if (numValue > 12) {
            formattedValue = formData.cardExpirationMonth;
        } else {
            formattedValue = numValue < 10 ? '0' + numValue :  numValue.toFixed();
        }

        updateState(name, formattedValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmed(true);
    };

    return (
        <form className="pt-20 md:max-w-[450px]" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center text-dark-violet gap-4 uppercase">
                <div className="w-5/6">
                    <label className="block" htmlFor="cardName" >Cardholder Name</label>
                    <input 
                        className="form-input rounded-md w-full border-slate-400" 
                        id="cardName" 
                        name="cardName"
                        value={formData.cardName}
                        type="text" 
                        placeholder="e.g. Jane Appleseed" 
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="w-5/6">
                    <label className="block" htmlFor="cardNumber" >Card Number</label>
                    <input 
                        className="form-input rounded-md w-full border-slate-400"
                        name="cardNumber"
                        value={formData.cardNumber}
                        id="cardNumber" 
                        type="text" 
                        maxLength="19"
                        placeholder="e.g. 1234 5678 9123 0000" 
                        required
                        onChange={handleCardNumberFieldChange}
                    />
                </div>
                <div className="w-5/6 flex gap-3 pb-5 md:justify-between">
                    <div>
                        <label className="block w-max">Exp. Date (MM/YY)</label>
                        <div className="flex w-full gap-2">
                            <input 
                                className="form-input rounded-md border-slate-400"
                                name="cardExpirationMonth"
                                value={formData.cardExpirationMonth}
                                type="text"
                                size="3"
                                maxLength="3"
                                placeholder="MM"
                                required
                                pattern="\d*"
                                onChange={handleMonthFieldChange}
                            />
                            <input 
                                className="form-input rounded-md border-slate-400"
                                name="cardExpirationYear"
                                value={formData.cardExpirationYear}
                                type="text"
                                size="3"
                                maxLength="2"
                                placeholder="YY"
                                required
                                pattern="\d*"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block">CVC</label>
                        <input 
                            className="form-input rounded-md w-full border-slate-400"
                            name="cardCVC"
                            value={formData.cardCVC}
                            type="text"
                            maxLength="3"
                            placeholder="e.g. 123"
                            required
                            pattern="\d{3}"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button className="bg-dark-violet text-white rounded-md w-5/6 h-12" type="submit">Confirm</button>
            </div>
        </form>
    );
};
