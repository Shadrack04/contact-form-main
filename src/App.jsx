import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
    return (
        <div className="  flex items-center justify-center">
            <div className=" p-4 bg-white rounded-md w-[90%] h-[80%] m-auto">
                <div className=" mb-8">
                    <h1 className=" text-2xl font-bold">Contact Us</h1>
                </div>
                <Form />
            </div>
        </div>
    )
}

export default App
