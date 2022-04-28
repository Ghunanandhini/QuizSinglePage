import {  useParams } from "react-router-dom";
import { getAptitud } from "../data";

export default function Aptitud() {
  let Params = useParams();
  let aptitud = getAptitud(parseInt(Params.aptitudId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>{aptitud.title}: {aptitud.questions}</h2>
      <p>
        Questions: {aptitud.questions}
      </p>
      <p>
        Duration: {aptitud.duration}
      </p>
    
    </main>
  );
} 