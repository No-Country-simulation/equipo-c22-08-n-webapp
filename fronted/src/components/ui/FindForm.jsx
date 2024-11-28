
export const FindForm = ({ onChangeHandler, query }) => {
   

    return (
        <div className="mb-4">
            <input
                type="search"
                placeholder="Buscar por nombre"
                value={query}
                onChange={onChangeHandler}
                className="w-full p-2 border rounded"
            />
        </div>
    )
}

export default FindForm