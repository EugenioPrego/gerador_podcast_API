// services: trata dos dados, regra de negócio, verifcação, validação, etc. resumindo: regra de negócio

import { FilterPodCastModel } from "../models/filter_podcasts_model";
import {repo_pod} from "../repositories/podcasts_repositorie"
import { StatusCode } from "./utils/http_status_code";

export const service_list_episodes = async ():Promise<FilterPodCastModel> => {
    // define a interface de retorno
    let response_format:FilterPodCastModel = {
            StatusCode: 0,
            Body: []
    }

    const data = await repo_pod();

    response_format = {
        StatusCode: data.length !== 0 ? StatusCode.OK : StatusCode.no_content,
        Body: data,
    }
    

        // response_format.Body = data;
        
    return response_format;
};
