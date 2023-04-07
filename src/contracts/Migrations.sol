// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Migrations{
    address public owner;
    uint last_completed_migration;

    constructor() {
        owner = msg.sender;
    }

    modifier restricted(){
        if(msg.sender==owner)_; //if true : continue
    }

    //Set the complition for each contract
    function setCompleted(uint completed_) public restricted{
        last_completed_migration = completed_;
    }

    function upgrade(address new_address_) public restricted{
        Migrations upgraded = Migrations(new_address_);
        upgraded.setCompleted(last_completed_migration);
    }
}