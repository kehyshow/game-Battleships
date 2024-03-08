import React from "react";
import ShipSector from "./ShipSector";
import BattleShip from "../images/BattleShip.png";
import Destroyer from "../images/Destroyer.png";

const BattleShipSector = ({ position, sections }) => (
    <ShipSector 
        shipType="battleship"
        shipImage={BattleShip}
        shipName="BattleShip"
        shipLength={5}
        position={position}
        sections={sections}
    />
);

const DestroyerSector = ({ position, sections }) => (
    <ShipSector 
        shipType="destroyer"
        shipImage={Destroyer}
        shipName="Destroyer"
        shipLength={4}
        position={position}
        sections={sections}
    />
);

export { BattleShipSector, DestroyerSector };

