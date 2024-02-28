// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EspejoToken is ERC20,  Ownable{
  constructor () ERC20("E$PEJO", "ESPJ") Ownable(msg.sender){
    _mint(msg.sender, 999666 * 10 ** decimals());
  }

  function decimals() public pure override returns (uint8) {
    return 0;
  }

}