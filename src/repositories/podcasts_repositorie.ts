
// usados para ler e escrever os arquivos txc, json e associar no banco de dados

import fs from "fs";
import path from "path";
import { podacasts_model} from "../models/podacasts_model";

const path_data = path.join(__dirname, "podcasts.json");

export const repo_pod = async (podcast_name?: string): Promise<podacasts_model[]> => {
    const language = "utf-8";
    const data = fs.readFileSync(path_data, language);
    let json_file = JSON.parse(data);

    if(podcast_name){
        json_file = json_file.filter((podcasts: podacasts_model) => podcasts.podcast_name === podcast_name ,{

        })
    }
    
    return json_file;
}
