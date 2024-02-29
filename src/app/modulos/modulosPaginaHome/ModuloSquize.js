/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import styleHome from "../../style/homeStyle/home.module.css"
import styleSquize from "../../style/homeStyle/produtosHomeCategoria.module.css"

import { useState, useEffect, useRef } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

import itens from "../../../../public/JSON/arquivoFotos.json"
import Link from "next/link"

export default function ModuloSquize(props) {

    const secSquize = useRef(null)

    let [largura, setLargura] = useState()

    useEffect(() => {
        setLargura(secSquize.current.offsetWidth)
    }, [])
    return (
        <>
            <section className={styleHome.squize} ref={secSquize}>
                <h3 className={styleHome.textoPadrao}>Squize</h3>
                <Swiper
                    modules={[Pagination, Navigation]}
                    slidesPerView={
                        largura <= 500 ? 2 :
                            largura <= 1200 ? 3 : 4
                    }
                    navigation
                >
                    {
                        itens.map(el => {
                            if (el.id <= 10) {
                                if (el.categoria == "Squize") {
                                    return <SwiperSlide key={el.id}>
                                        <Link href={`/produtos/${el.categoria.toLowerCase()}/` + el.categoria + el.id} className={styleSquize.div}>
                                            <img src={el.url} className={styleSquize.img} />
                                            <h5 className={styleSquize.texto}>{el.nome}</h5>
                                            <h3 className={styleSquize.preco}>Por apenas: <span>R$ {el.preco}</span></h3>
                                            <div className={styleSquize.link}>Ver Mais...</div>
                                        </Link>
                                    </SwiperSlide>
                                }
                            }
                        })
                    }
                    <SwiperSlide>
                        <Link href={"/produtos/squize/"} className={styleSquize.div} style={{ display: "flex", justifyContent: "center", backgroundColor: "var(--cor-secundaria)" }}>
                            <div className={styleSquize.link}>Ver Mais...</div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}