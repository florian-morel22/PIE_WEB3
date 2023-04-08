# PIE WEB3 - ENSTA Paris

## Solidity Code :
**Amodifier : pour le moment les fonctions font appel à msg.sender, on part du principe que c'est le validateur qui interragit avec le smart contract. PEUT ETRE qu'une autre approche serait : nous interragissons avec le smart contract en leur nom ou NOUS donnons le feu vert (par exemple si le contract est en maintenance)**


Le code Solidity permet de mettre en place un smart contract. Le smart contract "Validation" fonctionne de la manière suivante :

- Le pocesseur du contract (owner) peut construire un objet **_document_** et le stocker dans un _mapping_, associé à son hash. On peut alors à tout moment retrouver ce document.

Lors de la création d'un document, on renseigne une liste de validateurs en renseignant leurs adresses.

- Un validateur peut valider un document. 



Liste des mapping :

| Mapping          |       clé           |           Valeur     |
| :--------------- |:-------------------:| --------------------:|
| DocToReviewers   | hash du document    |  Liste des reviewers |
| DocToValidate    | hash du document    |   Liste des validateurs ayant validé |
| HashToDoc  | hash du document              |    Document |