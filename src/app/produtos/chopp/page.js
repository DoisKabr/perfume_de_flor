import urlSite1 from "../../../../funcoes/urlSite"

import style from "../../style/produtos.module.css"

import ColocarProdutosCategoria from "./ColocarProdutosCategoria"

export const metadata = {
  title: "Perfume de Flor - Canecas de Chopp",
  description: "Encontre os melhores produtos personalizados para você ou para a sua marca !",
  alternates: {
    canonical: `${urlSite1}produtos/chopp`
  },
  keywords: "produtos, perfume, de, flor, personalizados, brasil, canecas, squize, caneca, chopp"
}

export default function Categorias() {

  return (
    <main>
      <h1 className="tituloInicial"> Canecas de Chopp </h1>
      <section className={style.secImg1}>
        {
          <ColocarProdutosCategoria />
        }
      </section>
    </main>
  )
}
