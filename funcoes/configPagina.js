"use client"

import { useEffect } from "react"

export default function ConfigPagina() {
    useEffect(()=>{
        const corpo = document.body
        const tempo = setTimeout(()=>{
            corpo.style.opacity = 1
        }, 500)
    }, [])
    return (<></>)
}