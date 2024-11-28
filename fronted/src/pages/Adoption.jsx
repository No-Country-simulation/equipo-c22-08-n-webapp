import { useFetch } from "../hooks/useFetch"
import Card from "../components/ui/Card"
import DogIconButton from "../components/ui/DogIconButton"
import CatIconButton from "../components/ui/CatIconButton"
import { useEffect, useRef, useState } from "react"
import { Filter, FilterBy } from "../components/ui/Filter"
import Button from "../components/ui/Button"
import { Sliders, Stethoscope } from "lucide-react"
import FindForm from "@/components/ui/FindForm"

const tamano = ["Pequeño", "Mediano", "Grande"]
const sexo = ["Hembra", "Macho"]

const Adoption = () => {

    const { data: pets, loading, error } = useFetch(`${import.meta.env.VITE_API_URL}/animales`);
    // const { data: pets, loading, error } = useFetch("https://huachitos.cl/api/animales");
    const [isActiveDog, setIsActiveDog] = useState(false);
    const [isActiveCat, setIsActiveCat] = useState(false);
    const [filtered, setFiltered] = useState([]);
    const [selectedTamano, setSelectedTamano] = useState(null);
    const [selectedSexo, setSelectedSexo] = useState(null);
    const [isMoreFilters, setIsMoreFilters] = useState(false);
    const [query, setQuery] = useState("")

    //segundo useEffect, es necesario para poder setear el valor inicial de filtered(osea sin filtro)
    useEffect(() => {
        if (pets?.data) {
            setFiltered(pets.data);
        }
    }, [pets]);

    const handleCatButton = () => {
        //cuando filtro tipo gato esta con valor true
        if (isActiveCat) {
            setIsActiveCat(false);
            setFiltered(pets?.data);
        } else {
            //cuando tiene valor false
            setIsActiveCat(true);
            setIsActiveDog(false);
            const gatos = pets?.data.filter(pet => pet.tipo.toLowerCase().includes("gato"));
            setFiltered(gatos);
        }
    };

    const handleDogButton = () => {
        //cuando filtro tipo perro esta true
        if (isActiveDog) {
            setIsActiveDog(false);
            setFiltered(pets?.data);
        } else {
            //cuando filtro tipo gato esta false
            setIsActiveDog(true);
            setIsActiveCat(false);
            const perros = pets?.data.filter(pet => pet.tipo.toLowerCase().includes("perro"));
            setFiltered(perros);
        }
    };

    const handleIsMoreFilters = () => {
        setIsMoreFilters(state =>!state);
    };

    const rep = (e) => {
        setQuery(e.target.value)
        const result = pets?.data.filter(pet => pet.nombre.toLowerCase().includes(e.target.value.toLowerCase()));
        setFiltered(result);
    }


    
 

    return (
        <>


            <main className="h-full bg-secondary min-w-52">

                 
                <div className="flex flex-row justify-center px-6 py-8">
                    <section className="w-full lg:3/4">
                        <article>
                            <div className="h-20 flex justify-center">
                                <button
                                    onClick={handleDogButton}
                                    className={`p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none ${isActiveDog ? "bg-gray-300" : ""
                                        }`}
                                    aria-label="Dog Icon Button"
                                    aria-pressed={isActiveDog}
                                >
                                    <DogIconButton isActive={isActiveDog} />
                                </button>
                                <button
                                    onClick={handleCatButton}
                                    className={`p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none ${isActiveCat ? "bg-gray-300" : ""
                                        }`}
                                    aria-label="Cat Icon Button"
                                    aria-pressed={isActiveCat}
                                >
                                    <CatIconButton isActive={isActiveCat} />
                                </button>
                                <button
                                    onClick={handleIsMoreFilters}
                                    className={`p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none ${isMoreFilters ? "bg-gray-300" : ""
                                        }`}
                                    aria-label="Dog Icon Button"
                                    aria-pressed={isMoreFilters}
                                >
                                    <Sliders />
                                </button>
                            </div>
                             <Filter isMoreFilters={isMoreFilters}>
                                <FilterBy
                                    title="Tamaño"
                                    options={tamano}
                                    selectedOption={selectedTamano}
                                    setSelectedOption={setSelectedTamano}
                                />

                                <FilterBy
                                    title="Sexo"
                                    options={sexo}
                                    selectedOption={selectedSexo}
                                    setSelectedOption={setSelectedSexo}
                                /> 
                                 </Filter>

                          

                              
                          
                        </article>
                        <article>
                            <div className="grid grid-cols-1 sm:py-0 sm:grid sm:grid-cols-2 2xl:grid-cols-3 gap-4" >
                                {filtered && filtered.map((e) => (
                                    <Card
                                        key={e?.id}
                                        id={e?.id}
                                        image={e?.imagen}
                                        selectedCard={false}
                                        setAnimation={true}
                                        title={e?.nombre}
                                        edad={e?.edad}
                                        className="bg-beige min-h-28 text-secondary"
                                        sectionDetails={true}
                                        description={""}
                                        vacunas={e?.vacunas}
                                        sexo={e?.genero}
                                    >
                                        l
                                    </Card >

                                ))}
                            </div >
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Adoption