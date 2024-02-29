import style from "./style/homeStyle/home.module.css"

import ModuloSlider from "./modulos/modulosPaginaHome/ModuloSlide"
import ModuloSquize from "./modulos/modulosPaginaHome/ModuloSquize"
import ModuloMenu from "./modulos/modulosPaginaHome/ModuloMenu"
import ModuloCaneca from "./modulos/modulosPaginaHome/ModuloCaneca"
import ModuloChopp from "./modulos/modulosPaginaHome/ModuloChopp"
import ModuloMaisProdutos from "./modulos/modulosPaginaHome/ModuloMaisProdutos"

import urlSite from "../../funcoes/urlSite"

export const metadata = {
  title: "Perfume de Flor | Inicio",
  description: "Aqui na Perfume de Flor tem tudo o que você procura em personalizados do jeito que você gosta !",
  alternates: {
    canonical: urlSite
  },
  keywords: "Inicio, perfume, de, flor, personalizados, brasil, tudo, para, sublimação, canecas, caneca, squize, copos, chopp"
}

export default function Home() {
  return (
    <main className={style.mainStyle}>
      <ModuloSlider />
      <ModuloMenu />
      <ModuloCaneca />
      <ModuloChopp />
      <ModuloSquize />
      <ModuloMaisProdutos />
    </main>
  )
}