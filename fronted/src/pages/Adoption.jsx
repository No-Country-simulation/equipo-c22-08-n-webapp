import { useFetch } from "../hooks/useFetch"
import Card from "../components/ui/Card"
import DogIconButton from "../components/ui/DogIconButton"
import CatIconButton from "../components/ui/CatIconButton"
import { useEffect, useRef, useState } from "react"
import { Filter, FilterBy } from "../components/ui/Filter"
import Button from "../components/ui/Button"
import { Sliders, Stethoscope } from "lucide-react"
import FindForm from "@/components/ui/FindForm.jsx"
import { Link } from "react-router-dom"

const tamano = ["Pequeño", "Mediano", "Grande"]
const sexo = ["Hembra", "Macho"]

const Adoption = () => {

    const { data: pets, loading, error } = useFetch(`${import.meta.env.VITE_API_URL}/animales`);
    // const { data: pets, loading, error } = useFetch("https://huachitos.cl/api/animales");
    const [isActiveDog, setIsActiveDog] = useState(false);
    const [isActiveCat, setIsActiveCat] = useState(false);
    const [filteredPets, setFilteredPets] = useState([]);
    const [initialData, setInitialData] = useState([]);
    const [sexOption, setSexOption] = useState("")
    const [tamanoOption, setTamanoOption] = useState()
    const [isMoreFilters, setIsMoreFilters] = useState(false);


    //segundo useEffect, es necesario para poder setear el valor inicial de filtered(osea sin filtro)
    useEffect(() => {
        if (pets?.data) {
            setFilteredPets(pets?.data)
            setInitialData(pets?.data)
        }
    }, [pets?.data]);
    //revisar cualquier cambio por cualquier filtro aplicado
    useEffect(() => {
        console.log("sexo:", sexOption, "tamano:", tamanoOption)
        console.log("gato:", isActiveCat, "perro:", isActiveDog)
        applyFilters()
    }, [isActiveDog, isActiveCat, sexOption, tamanoOption]);

    const handleCatDogButton = (tipo) => {
        if (tipo === 'cat') {

            setIsActiveCat(prev => !prev);
            console.log("isActiveCat: ", isActiveCat)
            if (isActiveCat) {
                setIsActiveDog(false)
                // applyFilters()
            } else {
                // applyFilters()
            }

        }
        if (tipo === 'dog') {
            setIsActiveDog(prev => !prev);
            console.log("isActiveDog: ", isActiveDog)
            if (isActiveDog) {
                setIsActiveCat(false)
                // applyFilters()
            } else {
                // applyFilters()
            }

        }
    }
    const handleIsMoreFilters = () => {
        setIsMoreFilters(isMoreFilters => !isMoreFilters);
        if (!isMoreFilters) {
            applyFilters()
        }
    };

<<<<<<< HEAD
    const rep = (e) => {
        setQuery(e.target.value)
        const result = pets?.data.filter(pet => pet.nombre.toLowerCase().includes(e.target.value.toLowerCase()));
        setFiltered(result);
    }


    
 
=======
    const handleTamano = (e) => {
        console.log("sex option es: ", sexOption)
        setTamanoOption(e.target.value)
    }
    const handleSexo = (e) => {
        console.log("sexo es: ", e.target.value)
        setSexOption(e.target.value)
        // setFiltered(filtered.filter(pet => pet?.sexo.toLowerCase().includes(e.target.value.toLowerCase())))  
    }

    const applyFilters = () => {
        let filteredPets = initialData;
        if (isActiveDog && !isActiveCat) {
            filteredPets = (filteredPets.filter(pet => pet.tipo.toLowerCase().includes("perro")));
        }
        if (isActiveCat && !isActiveDog) {
            filteredPets = (filteredPets.filter(pet => pet.tipo.toLowerCase().includes("gato")));
        }
        if (sexOption.length > 0) {
            filteredPets = (filteredPets.filter(pet => pet.genero.includes(sexOption.toLowerCase())));
        }
        // if (selectedTamano.length > 0) {
        //     filteredPets = filteredPets.filter(pet => selectedTamano.includes(pet.tamano.toLowerCase()));
        // }
        console.log("filteredPets is:", filteredPets)
        setFilteredPets(filteredPets);
    }
>>>>>>> 75f7e8c0c1726adc30b8ebb15664ff3e51546ee0

    return (
        <>


            <main className="h-full bg-secondary min-w-52">

                 
                <div className="flex flex-row justify-center px-6 py-8">
                    <section className="w-full lg:3/4">
                        <article>
                            <div className="h-20 flex justify-center">
                                <button
                                    onClick={() => handleCatDogButton('dog')}
                                    className={`p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none ${isActiveDog ? "bg-gray-300" : ""
                                        }`}
                                    aria-label="Dog Icon Button"
                                    aria-pressed={isActiveDog}
                                >
                                    <DogIconButton isActive={isActiveDog} />
                                </button>
                                <button
                                    onClick={() => handleCatDogButton('cat')}
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
<<<<<<< HEAD
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

                          

                              
                          
=======
                            <section className="mr-2 lg:1/4 xl:block mt-3 ps-4 sticky top-0 flex flex-col sm:flex sm:flex-row justify-center">

                                <Filter isMoreFilters={isMoreFilters}>
                                    <FilterBy
                                        title="Tamaño"
                                        options={tamano}
                                        handleSelectedOption={handleTamano}
                                    />
                                </Filter>

                                <Filter isMoreFilters={isMoreFilters}>
                                    <FilterBy
                                        title="Sexo"
                                        options={sexo}
                                        handleSelectedOption={handleSexo}
                                    />
                                </Filter>

                            </section>


>>>>>>> 75f7e8c0c1726adc30b8ebb15664ff3e51546ee0
                        </article>
                        <article>
                            <div className="grid grid-cols-1 sm:py-0 sm:grid sm:grid-cols-2 2xl:grid-cols-3 gap-4" >
                                {filteredPets && filteredPets.map((e) => (
                                    <Link to={`/pet/${e?.id}`} key={e?.id}>
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
                                            c
                                        </Card >
                                    </Link>
                                ))}
                                {/* {filteredPets && filteredPets.map((e) => (
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

                                ))} */}
                            </div >
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Adoption