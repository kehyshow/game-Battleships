const ShootPoint = ({ value }) => {

    return (
        <div
            className={`
                ship-sector
                border cursor-pointer 
                flex items-center justify-center
                ${value === '~' ? "blur-sm" : value === 'O' ? "bg-green-300" : ""}
                ${value === 'O' ? "text-red-700" : value === 'X' ? "text-blue-700" : ""}`}
        >
            {value}
        </div>
    )
}

export default ShootPoint;