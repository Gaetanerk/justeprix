import { Fragment, useState } from "react";

function JustePrix() {
  // je créer un state pour stocker le prix à trouver
  const [prix, setPrix] = useState(Math.round(Math.random() * 100));
  const [message, setMessage] = useState(null);

  const handleSubmit = (event) => {
    // empeche l'envoi du formulaire et le reload de la page
    event.preventDefault();
    // alert(event.target[0].value + "," + prix);
    // event.target[0] c'est input type text et event.target[1] c'est input type submit
    if (parseInt(event.target[0].value) === prix) {
      setMessage("gagné");
    } else {
      if (parseInt(event.target[0].value) > prix) {
        setMessage("Plus petit");
      } else {
        setMessage("Plus grand");
      }
    }
  };

  return (
    <Fragment>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" placeholder="Proposer un prix" />
        <input type="submit" value="Proposer" />
      </form>
      <div>{message}</div>
    </Fragment>
  );
}

export default JustePrix;
