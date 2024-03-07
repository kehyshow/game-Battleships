const ShipSector = ({ value }) => {

    return (
        <div
            className={`
                ship-sector
                border cursor-pointer 
                flex items-center justify-center
                ${(value === 'S' || value === '~') ? "blur-sm" : value === 'O' ? "border-red-300" : ""}`}
        >
            {value === 'S' ? "~" : value}
        </div>
    )
}

export default ShipSector;