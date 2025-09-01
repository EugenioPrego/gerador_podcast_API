
import { IncomingMessage } from "http";
import { repo_pod } from "../repositories/podcasts_repositorie";
import { FilterPodCastModel } from "../models/filter_podcasts_model";
import { StatusCode } from "./utils/http_status_code";
import { podacasts_model } from "../models/podacasts_model";

export const service_filter_episodies = async (podcast_name: string | undefined):Promise<FilterPodCastModel> => {
    //http://localhost:3333/api/episodes?p=flow

    // define a interface de retorno
    let response_format:FilterPodCastModel = {
            StatusCode: 0,
            Body: []
    }
    // buscando os dados
    const query_string = podcast_name?.split("?p=")[1] || "";
    const data = await repo_pod(query_string);


    // verifico se tem conteúdo
    if(data.length !== 0){
        response_format.StatusCode = StatusCode.OK;

    } else {
        response_format.StatusCode = StatusCode.no_content;
    }
    response_format.Body = data;

    return response_format;
}