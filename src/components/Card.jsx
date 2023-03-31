import React, { useEffect, useState } from "react";

import "../styles/Card.css";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["PDF"];

const Card = (props) => {
    const [classNameContainer, setClassNameContainer] =
        useState("containerClosed");

    const clickOpenCard = () => {
        setClassNameContainer("containerOpened");
        props.onClick(props.title);
    };

    const clickCloseCard = () => {
        setClassNameContainer("containerClosed");
        props.onClick("close");
    };

    useEffect(() => {
        if (props.opened) {
            setClassNameContainer("containerOpened");
        } else {
            setClassNameContainer("containerClosed");
        }
    }, [props.opened]);

    return (
        <div className={classNameContainer}>
            {props.opened ? (
                <ContentCardOpened
                    onClick={clickCloseCard}
                    title={props.title}
                />
            ) : (
                <ContentCardClosed
                    onClick={clickOpenCard}
                    title={props.title}
                />
            )}
        </div>
    );
};

const ContentCardClosed = (props) => {
    const clickOpen = () => {
        props.onClick(props.title);
    };

    return (
        <>
            <h1 className="titleClose">{props.title}</h1>

            <p className="text">
                {props.title === "Upload"
                    ? "Vous pouvez ici déposer votre article scientifique pour que celui-ci soit graver pour toujours dans la blockchain."
                    : "Vous pouvez ici vérifier un article scientifique qui a été déposé sur la blockchain."}
            </p>

            <button className="Openbutton" onClick={clickOpen}>
                {props.title === "Upload" ? "Upload" : "Check"}
            </button>
        </>
    );
};

const ContentCardOpened = (props) => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    function handleFileUpload(event) {
        const selectedFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
            const binaryString = event.target.result;
            setFile(binaryString);
        };
        reader.readAsBinaryString(selectedFile);
        console.log(file);
    }
    return (
        <>
            <h1 className="titleOpen">
                {props.title === "Check"
                    ? "Recherchez une publication à valider"
                    : "Déposez votre publication"}
            </h1>
            <div className="dragAndDrop">
                <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    multiple={false}
                    label="déposez votre publication ici."
                    onDrop={() => console.log("fichier déposé")}
                />
            </div>
            <div>
                <input type="file" onChange={handleFileUpload} />
                {file && <p>{file}</p>}
            </div>
            <button
                className="CloseButton"
                onClick={() => props.onClick("close")}
            >
                Fermer
            </button>
        </>
    );
};

export default Card;
