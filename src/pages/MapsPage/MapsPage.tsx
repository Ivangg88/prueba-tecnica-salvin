import LeafletMap from "../../components/LeafletMap/LeafleatMap";
import { Mark } from "../../types/interfaces";
import MapsPageStyled from "./MapsPageStyled";

const MapsPage = (): JSX.Element => {
  const marks: Array<Mark> = [
    {
      description: "Casita",
      coordenates: [36.848831, -2.44724],
    },

    {
      coordenates: [36.75191277034498, -2.219023739072095],
      description: "Iglesia cabo de gata",
    },

    {
      coordenates: [37.09781488321194, -2.2922576299716786],
      description: "Mis olivillo",
    },
  ];

  return (
    <MapsPageStyled>
      <LeafletMap marks={marks} />
    </MapsPageStyled>
  );
};

export default MapsPage;
