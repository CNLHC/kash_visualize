import React , {useEffect, useRef} from "react"
import MainLayout from "../../components/MainLayoout/PageLayout"
import Neovis from "neovis-ts/dist/neovis";

export default function PageOverview() {
  
  const visRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(()=>{
    const config = {
      container_id: "viz",
        server_url: "bolt://123.57.0.181:7687",
        server_user: "neo4j",
        server_password: "123456",
        labels: {
            "Event":{
              "caption":"location"
              
            }
        },
       relationships: {
            "travelTo":{
              "caption":true
            }
        },
        initial_cypher: "MATCH (n) RETURN n LIMIT 25"
    }
    const vis = new Neovis(config);
    vis.render();
    console.log(vis);

  })
  return <MainLayout>

   <div id="viz" ref ={visRef}></div>
   

  </MainLayout>
}