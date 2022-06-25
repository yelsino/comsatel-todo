import React, { useState } from 'react'

export const InputText = () => {
    const [text, setText] = useState("")
    return (
        <div className="w-full">
            <input type="text" placeholder="Dijite su nueva tarea" className="px-5 py-3 outline-none rounded-lg w-full" />
            {text && <button className="text-text-100 self-end px-3 bg-secondary-200 py-2 rounded-xl">Guardar</button>}
        </div>
    )
}
