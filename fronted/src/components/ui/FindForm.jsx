import { Search } from "lucide-react"
import Input from "./Input"
import Button from "./Button"

export const FindForm = ({ onSubmitHandlerForm }) => {
    return (
        <form onClick={onSubmitHandlerForm} className="mb-4">
            <div className="w-full flex justify-center">
                <Input type="text" className="w-3/4" />
                <Button>
                    <Search />
                </Button>
            </div>
        </form>
    )
}