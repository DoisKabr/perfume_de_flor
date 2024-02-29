/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link"
import Image from "next/image"

import style from "../style/NavBar.module.css"

export default function NavBar() {

    return (
        <>
            <ul className={style.ulClass}>
                <Link href="/" className={style.liClass} title="Inicio"><Image src="../../../imagens/icone/svg/inicio.svg" width={20} height={20} alt="inicio-sublime"/></Link>
                <Link href="/produtos" className={style.liClass} title="Produtos"><Image src="../../../imagens/icone/svg/produtos.svg" width={20} height={20} alt="produtos-sublime"/></Link>
            </ul>
        </>
    )
}