import React from "react";
import ShipSector from "./ShipSector";

const BattleShipSector = ({ position, sections }) => (
    <ShipSector 
        shipType="battleship"
        shipImage={'assets/images/BattleShip.png'}
        shipName="BattleShip"
        shipLength={5}
        position={position}
        sections={sections}
    />
);

const DestroyerSector = ({ position, sections }) => (
    <ShipSector 
        shipType="destroyer"
        shipImage={'assets/images/Destroyer.png'}
        shipName="Destroyer"
        shipLength={4}
        position={position}
        sections={sections}
    />
);

export { BattleShipSector, DestroyerSector };

