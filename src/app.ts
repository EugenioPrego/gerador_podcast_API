
// arquivo usado para as configurações da aplicação

import * as http from "http";
import {get_list_episodes, get_filter_episodes} from "./controllers/podcasts_controller";
import { routes } from "./routes/routes";
import { HTTPMethod } from "./services/utils/http_modules";


export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

   // QueryString = consulta de texto//
  // http://localhost:3333/api/episodes?p=flow
  const [base_url, query_string] = req.url?.split("?") ?? ["", ""];

   // Listar Podcasts
        if(req.method === HTTPMethod.GET && base_url === routes.LIST){
           await get_list_episodes(req, res);
        }

        if(req.method === HTTPMethod.GET && base_url === routes.EPISODE){
           await get_filter_episodes(req, res);
        }
   }