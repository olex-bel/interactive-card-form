import { useState } from 'react';
import Card from './components/Card';
import CreditCardForm from './components/CreditCardForm';
import Confirmation from './components/Confirmation';

function App() {

  const initialCardDataState = {
    cardNumber: null,
    cardName: null,
    cardCVC: null,
    cardExpirationMonth: null,
    cardExpirationYear: null,
  };

  const [cardData, setCardData] = useState(initialCardDataState);
  const [isConfirmed, setConfirmed] = useState(false);

  const handleFormDataChange = (changedData) => {
    setCardData((prevValue) => ({
      ...prevValue,
      ...changedData,
    }))
  };

  const resetForm = () => {
    setConfirmed(false);
    setCardData({
      ...initialCardDataState,
    });
  }

  return (
    <>
      <div className="w-full md:grid md:h-screen md:grid-cols-[minmax(350px,_1fr)_2fr] lg:grid-cols-[minmax(450px,_1fr)_2fr] md:grid-rows-1">
          <div className="background-cover flex justify-center md:items-center md:justify-end">
            <Card  {...cardData}/>
          </div>
          <div className='w-full flex justify-center items-center'>
            {
              isConfirmed? 
                <Confirmation resetForm={resetForm} /> 
                :
                <CreditCardForm 
                  formDataChanged={handleFormDataChange}
                  setConfirmed={setConfirmed}
                />
            }
            
          </div>
      </div>
    </>
  )
}

export default App
