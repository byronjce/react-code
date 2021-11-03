import { useParams } from "react-router";

const Usuario = () => {
  let { username } = useParams();
  return (
    <div>
      <h3>Perfil usuario</h3>
      <p>
        Nombre del <b>{username}</b>
      </p>
    </div>
  );
};

export default Usuario;
