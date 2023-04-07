from solcx import compile_standard, install_solc #solidity compiler
import json
from web3 import web3

install_solc("0.8.7")

with open("../src/contracts/Validation.sol", "r") as file:
    Validation_file = file.read()
    print(Validation_file)

#compile solidity
compiled_sol = compile_standard(
    {
        "language":"Solidity",
        "sources":{"./src/contracts/Validation.sol": {"content": Validation_file}},
        "settings":{
            "outputSelection":{
                "*":{"*":["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
            }
        },
    },
    solc_version="0.8.7"
)


with open("compiled_code.json", "w") as file:
    json.dump(compiled_sol, file)

#get bytecode
bytecode = compiled_sol["contracts"]["./src/contracts/Validation.sol"]["validation"]["evm"]["bytecode"]["object"]

#get abi
abi = compiled_sol["contracts"]["./src/contracts/Validation.sol"]["validation"]["abi"]

#connection to ganache
#w3 = Web3(Web3.HTTPProvider())