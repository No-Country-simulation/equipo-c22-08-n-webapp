import { Search } from "lucide-react"
import Input from "./Input"

export const FindForm = ({ onSubmitSearchForm,searchRef }) => {
    return (
        <form onSubmit={onSubmitSearchForm} className="mb-4">
            <div className="w-full flex justify-center">
                <Input type="text" className="w-3/4" ref={searchRef} />
                <button type="submit">
                    <Search />
                </button>
            </div>
        </form>
    )
}