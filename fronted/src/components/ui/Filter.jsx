

export const Filter = ({children}) => {
    return <>
        <div className="flex flex-col">
            {children}
        </div>
    </>
}

export const FilterBy =(props)=>{
    return (
    <div className=" w-full h-[150px] flex flex-col justify-evenly border-t">
        <h2>{props.title}</h2>
        <div className="flex flex-col align-baseline items-start gap-y-2">
            {props.type.map((e, index) => (<div key={index} className="flex justify-evenly"><input className="mr-2" type="checkbox" /> <p>{e}</p></div>))}
        </div>
    </div>
    )
}