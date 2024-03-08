import Destroyer from "../images/Destroyer.png";
import SunkImage from "../images/Sunk.png";

const DestroyerSector = ({ position, sections }) => {
    const hitCount = position?.reduce((acc, cur) => {
        if (sections[cur] === 'O') acc += 1;
        return acc;
    }, 0);
    return (
        <div className="w-full flex flex-col items-center">
            <p className="text-xl self-start">Destroyer</p>
            <div className="flex flex-col justify-center w-fit relative">
                <img src={Destroyer} />
                <div className="flex gap-3 justify-center">
                    {new Array(4).fill(0).map((val, index) => (
                        <div className={`w-4 h-4 ${hitCount > index ? "bg-slate-700" : "bg-slate-300"}`} key={`destroyer-health-${index}`}> </div>
                    ))}
                </div>
                {hitCount === 4 ? <img className="absolute w-10 h-10 left-8 top-0" src={SunkImage} /> : ""}
            </div>
        </div>
    )
}

export default DestroyerSector;