import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
// import { useContext, useEffect, useState } from "react"
import Image from "../components/ui/Image"
import { useFetch } from "../hooks/useFetch"
import Card from "../components/ui/Card.jsx"
import { useState } from "react"
// import { Context } from "../store/appContext"

const filterby = {
    activity: ["Bajo", "Medio", "Alto"],
    peso: ["0 - 13 kg", " 14 - 27 kg", "28 - 41 kg"],
    tamano: ["Pequeño", "Mediano", "Grande"],
    sexo: ["Hembra", "Macho"],
    edad: ["6 meses - 1 año", "1 - 3 años", "4 - 7 años", "7 + años"]
}

export const Adoption = () => {
    // const {store,actions} = useContext(Context);
    const { data: pets, loading, error } = useFetch("https://huachitos.cl/api/animales");
    // const [selected, setSelected] = useState(false);

    // const selectHandler = (value)=>{
    //     setSelected(prev=>prev===value ? '')
    // }

    // console.log(pets?.data)
    // console.log(pets?.data[0]?.imagen)

    return <>
        <main className="flex content-center h-full bg-secondary">
            <section className="w-full h-full m-9 flex-row">
                <div className="w-full flex">
                    <section className="mr-2">
                        <h1>FILTRAR POR:</h1>
                        <div className="flex flex-col">
                            <hr />
                            <div className=" w-full h-[150px] flex flex-col justify-evenly border-t">
                                <h2>Actividad</h2>
                                <div className="flex flex-col align-baseline items-start gap-y-2">
                                    {filterby.activity.map(e => (<div className="flex justify-evenly" onClick={()=>{}}><input type="checkbox" /> <p>{e}</p></div>))}
                                </div>
                            </div>
                            
                            <div className=" w-full h-[150px] flex flex-col justify-evenly border-t">
                                <h2>Peso</h2>
                                <div className="flex flex-col align-baseline items-start gap-y-2">
                                    {filterby.peso.map(e => (<div className="flex justify-evenly"><input type="checkbox" /> <p>{e}</p></div>))}
                                </div>
                            </div>
                            
                            <div className=" w-full h-[150px] flex flex-col justify-evenly border-t">
                                <h2>Tamaño</h2>
                                <div className="flex flex-col align-baseline items-start gap-y-2">
                                    {filterby.tamano.map(e => (<div className="flex justify-evenly"><input type="checkbox" /> <p>{e}</p></div>))}
                                </div>
                            </div>
                            
                            <div className=" w-full h-[150px] flex flex-col justify-evenly border-t">
                                <h2>Sexo</h2>
                                <div className="flex flex-col align-baseline items-start gap-y-2">
                                    {filterby.sexo.map(e => (<div className="flex justify-evenly"><input type="checkbox" /> <p>{e}</p></div>))}
                                </div>
                            </div>
                            
                            <div className=" w-full h-[150px] flex flex-col justify-evenly border-t">
                                <h2>Edad</h2>
                                <div className="flex flex-col align-baseline items-start gap-y-2">
                                    {filterby.edad.map(e => (<div className="flex justify-evenly"><input type="checkbox" /> <p>{e}</p></div>))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full content-center">
                        <article>
                            <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                                {pets?.data && pets?.data.map(e => (
                                    // <div className="w-full h-64 overflow-hidden">
                                    //     {/* <Image

                                    //         src={e.imagen}
                                    //         alt="imagen de mascota"
                                    //         objectFit="scale-down"
                                    //     /> */}
                                    //     <img src={e?.imagen} alt="" />
                                    // </div>

                                    <Card
                                        image={e?.imagen}
                                        setAnimation={true}
                                        selectedCard={false}
                                        heightNoImage="40"
                                        className="bg-secondary min-w-28 min-h-28"
                                    />

                                ))}
                            </div>
                        </article>
                    </section>
                </div>
            </section>
        </main>
    </>
}