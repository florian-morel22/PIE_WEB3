import React, { useEffect } from "react";
import "../styles/ConnectionMetaMask.css";

import Web3 from "web3";

const ConnectionMetamask = () => {

    async function loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.enable();
            } catch (error) {
                console.log("error in connection to metamask");
            }
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert(
                "Non-Ethereum browser detected. You should consider trying MetaMask!"
            );
        }
    }

    async function loadBlockchainData() {
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        console.log("ACCOUNT :",accounts[0]);
        const networkId = await web3.eth.net.getId();
        console.log("Network ID :",networkId);
        const networkData = await web3.eth.net.getNetworkType();
        console.log("Network Data :",networkData);
        const balance = await web3.eth.getBalance(accounts[0]);
        console.log("Balances :",balance);
        const blockNumber = await web3.eth.getBlockNumber();
        console.log("Block Number :",blockNumber);
        const block = await web3.eth.getBlock(blockNumber);
        console.log("Block :",block);
    }

    async function LoadAccount(){
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        return accounts[0];
    }

    
    return (
        <div className="connectionMetamask-container">
            <button
                onClick={async () => {
                    await loadWeb3();
                    await loadBlockchainData();
                }}
                >
                Connection to MetaMask
            </button>
        </div>
    );
};

export default ConnectionMetamask;
