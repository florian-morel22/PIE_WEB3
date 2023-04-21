import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import ModalPub from "./ModalPub";

const fileTypes = ["PDF"];

const PubliForm = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="pub-form-container">
            <form>
                <label>
                    Nom de l'article <input type="text" />
                </label>

                <label>
                    Abstract <textarea type="text" />
                </label>

                <label>
                    Auteurs
                    <input type="text" placeholder="auteur 1" />
                    <input type="text" placeholder="auteur 2" />
                    <input type="text" placeholder="auteur 3" />
                </label>

                <label>
                    Mot clés
                    <input type="text" placeholder="mot clé 1" />
                    <input type="text" placeholder="mot clé 2" />
                    <input type="text" placeholder="mot clé 2" />
                </label>

                <label>
                    <div className="dragAndDrop">
                        <FileUploader
                            /*handleChange={handleChange}*/
                            className="publi-form-file-uploader"
                            name="file"
                            types={fileTypes}
                            multiple={false}
                            maxSize={1}
                            minSize={1}
                            label="déposez votre publication ici."
                            onDrop={() => console.log("fichier déposé")}
                            onTypeError={() =>
                                console.log("type de fichier non autorisé")
                            }
                            dropMessageStyle={{
                                backgroundColor: "rgb(3, 20, 76)",
                            }}
                        />
                    </div>
                </label>
            </form>

            <button
                className="pub-form-submit"
                onClick={() => setShowModal(true)}
            >
                Publier
            </button>

            {showModal && <ModalPub setShowModal={setShowModal} />}
        </div>
    );
};

export default PubliForm;
