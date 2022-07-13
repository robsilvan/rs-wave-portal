// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    address[] direcciones;

    constructor() {
        console.log("Yo yo, Soy un contrato y soy inteligente");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s ha saludado!",msg.sender);
        direcciones.push(msg.sender);
        //console.log("Address",direcciones[totalWaves-1]);
    }

    function getTotalWaves () public view returns (uint256){
        console.log("Tenemos un total de %d saludos", totalWaves);
        return totalWaves;
    }

    function getAdressMoreWaves () public view returns(uint){
        uint SaludosRepetidos = 0;
        for(uint i=0; i<direcciones.length; i++){
            if (i+1 < direcciones.length ) {
                if(direcciones[i+1]==direcciones[i])
                SaludosRepetidos ++;
            }     
        } 
        console.log("La mayor cantidad de saludos de una sola cuenta fue de:  %d",SaludosRepetidos);
        return SaludosRepetidos;
    

    }
        
   
}