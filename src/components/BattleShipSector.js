import BattleShip from "../images/BattleShip.png";
import SunkImage from "../images/Sunk.png";

const BattleShipSector = ({ position, sections }) => {
    const hitCount = position?.reduce((acc, cur) => {
        if (sections[cur] === 'O') acc += 1;
        return acc;
    }, 0);
    return (
        <div className="w-full flex flex-col items-center">
            <p className="text-xl self-start">BattleShip</p>
            <div className="flex flex-col justify-center relative">
                <img src={BattleShip} />
                <div className="flex gap-3 justify-center">
                    {new Array(5).fill(0).map((val, index) => (
                        <div className={`w-4 h-4 ${hitCount > index ? "bg-slate-700" : "bg-slate-300"}`} key={`battleship-health-${index}`}> </div>
                    ))}
                </div>
                {hitCount === 5 ? <img className="absolute w-10 h-10 left-14 top-0" src={SunkImage} /> : ""}
            </div>
        </div>
    )
}

export default BattleShipSector;