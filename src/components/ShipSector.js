import React from 'react';

const ShipSector = ({ shipType, shipImage, shipName, shipLength, position, sections }) => {
    const hitCount = position?.reduce((acc, cur) => {
        if (sections[cur] === 'O') acc += 1;
        return acc;
    }, 0);

    return (
        <div className="w-full flex flex-col items-center">
            <p className="text-xl self-start">{shipName}</p>
            <div className="flex flex-col justify-center w-fit relative">
                <img src={shipImage} alt='shipImage'/>
                <div className="flex gap-3 justify-center">
                    {new Array(shipLength).fill(0).map((val, index) => (
                        <div className={`w-4 h-4 ${hitCount > index ? "bg-slate-700" : "bg-slate-300"}`} key={`${shipType}-health-${index}`}> </div>
                    ))}
                </div>
                {hitCount === shipLength ? <img className={`absolute w-10 h-10 ${shipType === "battleship" ? "left-14" : "left-8"} top-0`} src={'assets/images/Sunk.png'} alt='SunkImage' /> : ""}
            </div>
        </div>
    )
}

export default ShipSector;