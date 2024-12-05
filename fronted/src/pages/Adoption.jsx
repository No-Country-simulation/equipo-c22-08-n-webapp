import { useFetch } from "../hooks/useFetch"
import Card from "../components/ui/Card.jsx"
import DogIconButton from "../components/ui/DogIconButton.jsx"
import CatIconButton from "../components/ui/CatIconButton.jsx"
import { useEffect, useState } from "react"
import { Filter, FilterBy } from "../components/ui/Filter.jsx"
import { Sliders } from "lucide-react"
import { Link } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Female from "@/assets/female.png"
import Male from "@/assets/male.png"
import 'react-toastify/dist/ReactToastify.css';

const sexo = [{type:"Macho",image:Male,alt:"An image of male gender"},{type:"Hembra",image:Female,alt:"An image of female gender"}] 

const Adoption = () => {
    const { data: pets, loading, error } = useFetch(`${import.meta.env.VITE_API_URL}/animales`);
    const [isActiveDog, setIsActiveDog] = useState(false);
    const [isActiveCat, setIsActiveCat] = useState(false);
    const [filteredPets, setFilteredPets] = useState([]);
    const [initialData, setInitialData] = useState([]);
    const [sexOption, setSexOption] = useState("")
    const [tamanoOption, setTamanoOption] = useState()
    const [isMoreFilters, setIsMoreFilters] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        if (pets?.data) {
            setFilteredPets(pets?.data)
            setInitialData(pets?.data)
        }
    }, [pets?.data]);

    useEffect(() => {
        applyFilters()
        setCurrentPage(1)
    }, [isActiveDog, isActiveCat, sexOption, tamanoOption]);

    const handleCatDogButton = (tipo) => {
        if (tipo === 'cat') {
            setIsActiveCat(prev => !prev);
            if (isActiveDog) {
                setIsActiveDog(false)
            }
        }
        if (tipo === 'dog') {
            setIsActiveDog(prev => !prev);
            if (isActiveCat) {
                setIsActiveCat(false)
            }
        }
    }

    const handleIsMoreFilters = () => {
        setIsMoreFilters(isMoreFilters => !isMoreFilters);
        if (!isMoreFilters) {
            applyFilters()
        }
    };




    const handleTamano = (e) => {
        setTamanoOption(e.target.value)
    }

    const handleSexo = (e) => {
        setSexOption(e.target.value)
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
        if (tamanoOption) {
            filteredPets = (filteredPets.filter(pet => pet.tamano.toLowerCase() === tamanoOption.toLowerCase()));
        }
        setFilteredPets(filteredPets);
    }

    const totalPages = Math.ceil(filteredPets.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentPets = filteredPets.slice(startIndex, endIndex);

    const renderPaginationButtons = () => {
        const buttons = [];

        buttons.push(
            <button
                key={1}
                onClick={() => setCurrentPage(1)}
                className={`bg-beige-light hover:bg-beige text-gray-800 font-bold py-2 px-4 mx-1 border rounded-md ${currentPage === 1 ? 'bg-brown font-bold' : ''
                    }`}
            >
                1
            </button>
        );

        if (totalPages > 5 && currentPage > 3) {
            buttons.push(
                <span key="start-ellipsis" className="mx-2 text-white-2">
                    ...
                </span>
            );
        }

        const startMiddle = Math.max(2, currentPage - 1);
        const endMiddle = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startMiddle; i <= endMiddle; i++) {
            if (i > 1 && i < totalPages) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`bg-beige-light hover:bg-beige text-gray-800 font-bold py-2 px-4 mx-1 border rounded-md ${currentPage === i ? 'bg-brown font-bold' : ''
                            }`}
                    >
                        {i}
                    </button>
                );
            }
        }

        if (totalPages > 5 && currentPage < totalPages - 2) {
            buttons.push(
                <span key="end-ellipsis" className="mx-2 text-white-2">
                    ...
                </span>
            );
        }

        if (totalPages > 1) {
            buttons.push(
                <button
                    key={totalPages}
                    onClick={() => setCurrentPage(totalPages)}
                    className={`bg-beige-light hover:bg-beige text-gray-800 font-bold py-2 px-4 mx-1 border rounded-md ${currentPage === totalPages ? 'bg-brown font-bold' : ''
                        }`}
                >
                    {totalPages}
                </button>
            );
        }

        return buttons;
    };

    if (loading) return <div className="text-center font-bold h-64 flex justify-center items-center">Cargando...</div>;
    if (error) return <div className="text-center font-bold h-64 flex justify-center items-center"><img src="@/assets/gif.gif" alt="error" /></div>;

    return (
        <>


            <main className="h-full bg-secondary min-w-52">


                <div className="flex flex-row justify-center px-6 py-8">
                    <ToastContainer />
                    <section className="w-full lg:3/4">
                        <article>
                            <h2 className="text-center text-green-lila font-bold font-serif text-2xl">ENCONTRAR PATITAS POR:</h2>
                            <div className="h-22 flex justify-center align-center">
                                <button
                                    onClick={() => handleCatDogButton('dog')}
                                    className={`p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none ${isActiveDog ? "bg-gray-300" : ""}`}
                                    aria-label="Dog Icon Button"
                                    aria-pressed={isActiveDog}
                                >

                                    <DogIconButton isActive={isActiveDog} />
                                </button>

                                <button
                                    onClick={() => handleCatDogButton('cat')}
                                    className={`p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none ${isActiveCat ? "bg-gray-300" : ""}`}
                                    aria-label="Cat Icon Button"
                                    aria-pressed={isActiveCat}
                                >
                                    <CatIconButton isActive={isActiveCat} />
                                </button>

                                <button
                                    onClick={handleIsMoreFilters}
                                    className={`p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none ${isMoreFilters ? "bg-gray-300 scale-150" : ""}`}
                                    aria-label="Filters Button"
                                    aria-pressed={isMoreFilters}
                                >
                                    <Sliders size={52} color={"#D3A87C"} />
                                </button>
                            </div>
                        </article>
                        <section className="mr-2 lg:1/4 xl:block mt-3 ps-4 sticky top-0 flex flex-col sm:flex sm:flex-row justify-center">
                            <Filter isMoreFilters={isMoreFilters}>
                                <FilterBy
                                    title="Sexo"
                                    options={sexo}
                                    handleSelectedOption={handleSexo}
                                />
                            </Filter>
                        </section>
                        <article className="mt-5">
                            <div className="grid grid-cols-1 sm:py-0 sm:grid sm:grid-cols-2 2xl:grid-cols-3 gap-4 mt-10">
                                {currentPets.map((e) => (
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
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center mt-4">
                                    {renderPaginationButtons()}
                                </div>
                            )}
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Adoption