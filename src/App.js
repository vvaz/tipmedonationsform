import React from 'react';

function App() {
  return (


    <div className="bg-white p-6 rounded-lg w-full max-w-md mx-auto ">
      <div className="text-center text-2xl font-bold mb-4">
        {/* o valor do placeholder ou do value, é suposto atualizar quando se mexe no slider
            tem de ser possível também suportar input direto

            todo: consegues colocar o € ao lado do número?

          */}
        <input type="text" placeholder='2€' className="text-center w-32 focus:outline-none" />
      </div>
      <div className="mb-4">
        <input type="range" min="1" max="100" defaultValue="2" className="w-full" />
        <div className="text-xs text-gray-500 select-none">Pode inserir o valor manualmente ou arrastar o circulo para selecionar o valor pretendido. Doação mínima de 1€</div>
      </div>

      <div className="my-12">
        <h2 className='text-center pb-8 font-bold'>Escolha o método de pagamento</h2>
        <div className="flex justify-around">
          <button className="bg-gray-200 px-6 py-3 rounded-full">
            <img src="./img/Logo_MBWay.svg" alt="MB Way" className="h-8" />
          </button>
          <button className="bg-gray-50 px-6 py-3 rounded-full">
            <img src="paypal_logo_placeholder.png" alt="PayPal" className="h-8" />
          </button>
          <button className="bg-gray-50 px-6 py-3 rounded-full">
            <img src="paysafecard_logo_placeholder.png" alt="paysafecard" className="h-8" />
          </button>
        </div>


        <div className="mt-8 mb-4 flex items-center">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:outline-none dark:peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-500 dark:text-gray-500">Quero suportar as taxas de transação</span>
          </label>
        </div>

        <div className="mb-4 flex w-2/3 mx-auto">
          <div className='flex-5 pt-1'><span className='font-bold'>streamer</span> vai receber</div>
          <div className="flex-1 font-bold text-right text-xl">1,77€</div>
        </div>


      </div>





      <div className="mb-4 flex items-center border rounded-lg px-3 py-2">
        <span className="mr-2 text-green-600">🇵🇹 +351</span>
        <input type="text" placeholder="915 066 308" className="flex-grow focus:outline-none" />
      </div>
      <div className="mb-4">
        <textarea placeholder="Mensagem" rows="3" className="w-full border rounded-lg p-2 focus:outline-none"></textarea>
        <div className="text-xs text-right text-gray-500">70 caracteres restantes</div>
      </div>
      <div className="mb-4 flex items-center">
        <input type="checkbox" id="acceptPrivacy" className="mr-2" />
        <label htmlFor="acceptPrivacy" className="text-xs">Aceito a política de privacidade e concordo que não há reembolso da doação</label>
      </div>
      <div className="mb-4 flex items-center">
        <input type="checkbox" id="acceptMarketing" className="mr-2" />
        <label htmlFor="acceptMarketing" className="text-xs">Aceito que ........ marketing</label>
      </div>
      <button className="w-full bg-green-500 text-white py-2 rounded-lg">Doar 2€</button>
    </div>

  );
}

export default App;
