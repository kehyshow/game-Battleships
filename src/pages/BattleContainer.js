import { useEffect, useState } from "react";
import ShootPoint from "../components/ShootPoint";
import { generateShips, hasGameFinished, initShots, isShipHit } from "../utils/util";
import { BattleShipSector, DestroyerSector } from "../components/BattleShipAndDestroySectors";

const BattleContainer = () => {
    const [sections, setSections] = useState(initShots());
    const [step, setStep] = useState(0);
    const [isFinish, setFinish] = useState(false);
    const [ships, setShips] = useState();
    
    useEffect(() => {
        setShips(generateShips());
    }, []);

    useEffect(() => {
        if (isFinish) {
            setTimeout(() => {
                alert(`Game Finished! steps: ${step}`);
            }, 1000)
        }
    })

    const Reset = () => {
        setSections(initShots());
        setShips(generateShips());
        setFinish(false);
        setStep(0);
    }

    const shot = (position) => {
        if (isFinish || sections[position] === "O" || sections[position] === "X") return;

        const cur = [...sections];
        setStep(step + 1);

        ships.forEach((ship) => {
            if (isShipHit(ship, position)) {
                cur[position] = "O";
                if (hasGameFinished(ships, cur)) {
                    setFinish(true);
                }
            }
        });

        if (cur[position] === '~') {
            cur[position] = "X";
        }
        setSections(cur);
    }

    return (
        <div className="container mx-auto py-5 flex flex-col items-center">
            <div className="flex items-center self-start">
                <img className="w-12 h-12 mr-2" src="logo192.png" />
                <p className="text-4xl text-left w-full">Battleship</p>
            </div>
            <div className="flex gap-24 mt-20 self-start pl-48">
                <div data-testid="gridcell" className="flex">
                    <div className="grid grid-cols-1 w-fit">
                        {(new Array(11).fill(0)).map((value, index) => (
                            <div className="w-10 h-10 flex items-center justify-center" key={`col-id-${index}`}>
                                {index === 0 ? "" : String.fromCharCode(('A'.charCodeAt() + index - 1))}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <div className="grid items-center grid-cols-10 w-full">
                            {(new Array(10).fill(0)).map((_, index) => (
                                <div className="ship-sector flex items-center justify-center" key={`row-id-${index}`}>
                                    {index + 1}
                                </div>
                            ))}
                        </div>
                        <div className="grid items-center grid-cols-10 w-fit">
                            {sections.map((section, index) => (
                                <div onClick={() => shot(index)} key={`sector-${index}`} className="border" role="gridcell">
                                    <ShootPoint value={section} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 pt-12">
                    {ships?.map((ship, index) => (
                        ship.type === "Battleship" ? <BattleShipSector position={ship.positions} sections={sections} key={`battleship-${index}`} />
                            : <DestroyerSector position={ship.positions} sections={sections} key={`destroyer-${index}`} />
                    ))}
                    <div className="self-start mt-12">
                        <p className="text-xl font-bold text-red-600 mb-4">O: Hit</p>
                        <p className="text-xl font-bold text-blue-600">X: Miss</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                    <p data-testid="steps" className="text-md">Steps: {step}</p>
                    <button
                        data-testid="reset_btn"
                        onClick={Reset}
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-fit my-4"
                    >
                        Restart
                    </button>
                </div>
            </div>
            <div data-testid="finish" className="hidden">{isFinish ? "finish" : "not"}</div>
        </div>
    )
}

export default BattleContainer;