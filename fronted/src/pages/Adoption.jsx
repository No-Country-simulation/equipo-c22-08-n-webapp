import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
// import { useContext, useEffect, useState } from "react"
// import Image from "../components/ui/Image"
import { useFetch } from "../hooks/useFetch"
import Card from "../components/ui/Card.jsx"
// import { useContext } from "react"
import DogIconButton from "../components/ui/DogIconButton.jsx"
import CatIconButton from "../components/ui/CatIconButton.jsx"
import { CirclePlus, Stethoscope } from "lucide-react"
import { useState } from "react"
import { Filter, FilterBy } from "../components/ui/Filter.jsx"
//  import { Context } from "../store/appContext"
const tamano= ["Pequeño", "Mediano", "Grande"]
const sexo = ["Hembra", "Macho"]



export const Adoption = () => {
    // const {store,actions} = useContext(Context);
    const { data: pets, loading, error } = useFetch("https://huachitos.cl/api/animales");
    const [isActive, setIsActive] = useState(false);
    const [isActiveDog,setIsActiveDog] = useState(false);

    const handlePetButton = () => {
        setIsActive(!isActive);
    };

    // const [selected, setSelected] = useState(false);

    // const selectHandler = (value)=>{
    //     setSelected(prev=>prev===value ? '')
    // }

    console.log(pets?.data)


    return <>
        <main className="h-full bg-secondary min-w-52">
            <div className="flex flex-row justify-center px-6 py-8">
                <section className="mr-2 lg:1/4 hidden xl:block mt-20 ps-4">
                <h2>Filtrar por:</h2>
                    <Filter>
                        <FilterBy title="Tamaño" type={tamano}/>
                        <FilterBy title="Sexo" type={sexo}/>
                    </Filter>
                </section>
                <section className="w-full lg:3/4">
                    <article>
                        <div className="h-20 flex justify-center" onClick={() => { }}>
                            <button
                                onClick={handlePetButton}
                                className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none"
                                aria-label="Dog Icon Button"
                                aria-pressed={isActive}
                            >
                                <DogIconButton isActive={isActive} />
                            </button>
                            <button
                                onClick={handlePetButton}
                                className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none"
                                aria-label="Cat Icon Button"
                                aria-pressed={isActive}
                            >
                                <CatIconButton isActive={isActive} />
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:py-0 sm:grid sm:grid-cols-2 2xl:grid-cols-3 gap-4">
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
                                    selectedCard={false}
                                    setAnimation={true}
                                    heightNoImage="40"
                                    title={e?.nombre}
                                    edad={e?.edad}
                                    className="bg-beige min-h-28 text-secondary"
                                    sectionDetails={true}
                                    vacunas={e?.vacunas}
                                />
                            ))}
                        </div>
                    </article>
                </section>
            </div>

        </main>
    </>
}