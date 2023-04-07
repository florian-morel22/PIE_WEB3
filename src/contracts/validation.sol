// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Importer smart contract general.col

//
//  !!!  HERE MSG.SENDER IS THE VALIDATOR, WE MUST CHANGE THIS IF WE CHANGE OF PARADIGME  noted with *
//
//
contract validation{
    address public owner;
    string public name = 'Validation';

    constructor()  {
        owner = msg.sender;
    }

    modifier restricted(){ //True only if msg.sender is the owner
        if(owner == msg.sender) _;  // "_" means : "continue with the function"
    }

    struct document {
        //uint256 hash;
        // prender le temps de création ?
        bytes32 hash; // ?
        string date; // Any date we think is useful
        uint timestamp; // we can find the days, hours, ...
        string subject;
        address[] Validate; //Addresses of those who had validated | Validate.length is equal to the number of validation 
    }

    mapping(bytes32=>address) public DocToReviewers;
    mapping(bytes32=>address[]) public DocToValidate; // list of the addresses having validated the document
    mapping(bytes32=>document) public HashToDoc;

// At the beggining of the global contract : validate = false


    //Return true if msg.sender is a validator, if not return false **
    function isReviewer(bytes32 hash_) public view returns(bool){ //True only if msg.sender is the owner
            if(DocToReviewers[hash_] == msg.sender){
                return true;
            }
        
        return false;
    }

    //Set a list of reviewers - OR AT LEAST make sure the list is made by reviewers
    //Who calls ? -> Smart contract, owner
    function BuildDocument(bytes32 hash, string memory the_date, string memory a_subject, address Reviewers) public  {
        //Set the document as non-verified
        address[] memory Validate;
        //Add the reviewers
        DocToReviewers[hash] = Reviewers;
        document memory the_document;
        the_document = document(hash, the_date, block.timestamp, a_subject, Validate);
        HashToDoc[hash] = the_document; //The document is added and associated with its hash
    }

    //Validate : add the address of the validator (peer reviewer)
    //Who calls ? -> A reviewer
    function Validation(bytes32 hash_) public  {
        require(isReviewer(hash_), "You must be a peer-reviewer.\n");
        DocToValidate[hash_].push(msg.sender);
        //call the final verification :?
        if(isValidated(hash_)){
            //
        }
    }

    //Return true if the document is fully validated :
    function isValidated(bytes32 hash_) public view returns(bool){
        if(DocToValidate[hash_].length == 1){
            return true;
        }
        return false;
    }
}


