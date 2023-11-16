import { productList } from "@/constants/productList"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <h1>Catálogo</h1>
      <div className="flex w-full justify-start gap-2 p-3">
      {productList.map((product, index)=> (
        <div key={product.id} className="bg-slate-50 text-black p-5 rounded-md">
          <h1 className="text-xl">{product.nome}</h1>
          {product.preco_promocional ? (
          <div>
            <p className="text-lg font-bold text-gray-400 line-through">
              {product.preco.toLocaleString("pt-br",{
                                            style: "currency",
                                            currency: "BRL"
                                          })}
            </p>
            <p className="text-xl font-bold text-orange-600">
              {product.preco_promocional.toLocaleString("pt-br",{
                                                        style: "currency",
                                                        currency: "BRL"
                                                      })}
            </p>
          </div>) : (
            <p className="text-lg font-bold text-blue-500">
              {product.preco.toLocaleString("pt-br",{
                                            style: "currency",
                                            currency: "BRL"
                                          })}
            </p>
          )}
        </div>
      ))}
      </div>
    </main>
  )
}