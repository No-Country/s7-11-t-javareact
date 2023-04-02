import React from 'react'

const Modal = ({ setOpenModal }) => {
    return (
        <>
            <div className='fixed inset-0 z-10 overflow-y-auto'>
                <div className='fixed inset-0 w-full h-full bg-black' onClick={() => setOpenModal(false)}></div>
                <div className='flex items-center min-h-screen px-4 py-8'>
                    <div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg'>
                            <div className='mt-2 text-center sm:ml-4 sm:text-left'>
                                <h4 className='text-lg font-medium text-gray-800'> Ingresa El nombre de la lista </h4>
                                <input type='text' name='' id='' placeholder='Frutas frescas' className='bg-slate-200 w-full rounded-lg p-1'/>
                                <div className='items-center gap-2 mt-3 sm:flex'>
                                    <button className='w-full mt-2 p-2.5 flex-1 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2' onClick={() => setOpenModal(false)}> Añadir </button>
                                    <button className='w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2' onClick={() => setOpenModal(false)}> Cancelar </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal