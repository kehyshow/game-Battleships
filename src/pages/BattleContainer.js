import { useEffect, useState } from "react";
import ShipSector from "../components/ShipSector";
import { generateShips, hasGameFinished, initShots, isShipHit, isShipShunk } from "../utils/util";

const BattleContainer = () => {
    const [sections, setSections] = useState(initShots());
    const [status, setStatus] = useState("");
    const [step, setStep] = useState(0);
    const [isFinish, setFinish] = useState(false);
    const [ships, setShips] = useState();
    useEffect(() => {
        setShips(generateShips());
    }, []);

    const Reset = () => {
        setSections(initShots());
        setStatus("");
        setFinish(false);
        setStep(0);
    }

    const shot = (position) => {
        let cur = [...sections];
        if (isFinish || sections[position] === "O") return;
        setStep(prev => prev + 1);
        ships.map((ship) => {
            if (isShipHit(ship, position)) {
                cur[position] = "O";
                if (hasGameFinished(ships, cur)) {
                    setFinish(true);
                }
                if (isShipShunk(ship, cur)) {
                    setStatus(`${ship.type} Shunk`);
                } else {
                    setStatus("hit");
                }
            }
        });
        if (cur[position] === '~') {
            setStatus("misses");
            cur[position] = "X";
        }
        setSections(cur);
    }

    return (
        <div className="container mx-auto py-2 flex flex-col items-center">
            <p className="text-2xl">Battle Ship</p>
            <p className="text-xl">{isFinish ? "Finished" : ""}</p>
            <p data-testid="status" className="text-md">{status}</p>
            <p data-testid="steps" className="text-md">Steps: {step}</p>
            <button
                data-testid="reset_btn"
                onClick={Reset}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-fit my-4"
            >
                Restart
            </button>
            <div className="grid items-center grid-cols-10 w-fit">
                {sections.map((section, index) => (
                    <div onClick={() => shot(index)} key={index} className="border" role="gridcell">
                        <ShipSector value={section} />
                    </div>
                ))}
            </div>
            <div>
                <p className="text-sm">X: misses</p>
                <p className="text-sm">O: hit</p>
            </div>
        </div>
    )
}

export default BattleContainer;