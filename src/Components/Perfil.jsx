import {
  PdadosPerfil,
  ContainerDadosPerfil,
  ContainerGeral,
  ContainerIcon,
} from "../Styles/dadosPerfil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "../Styles/Icon.js";

function Perfil({ foto, ra, nome, intinerario, email }) {
  return (
    <ContainerGeral>
      <ContainerIcon>
        <FontAwesomeIcon
          icon={faUser}
          style={{ fontSize: "260px", color: "#fff" }}
        />
      </ContainerIcon>

      <ContainerDadosPerfil>
        <PdadosPerfil>RA: {ra}</PdadosPerfil>
        <PdadosPerfil>{nome}</PdadosPerfil>
        <PdadosPerfil>{intinerario}</PdadosPerfil>
        <PdadosPerfil>Email: {email}</PdadosPerfil>
      </ContainerDadosPerfil>
    </ContainerGeral>
  );
}

export default Perfil;
