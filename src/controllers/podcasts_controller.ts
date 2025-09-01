
//  controller: responsável por controlar as req e res, e mandar para o service, resumindo: segurança
import { IncomingMessage, ServerResponse } from "http";
import { service_list_episodes } from "../services/list_episodes_service";
import { service_filter_episodies } from "../services/filter_episodes";
import { StatusCode } from "../services/utils/http_status_code";
import { ContentType } from "../services/utils/content_type";
import { FilterPodCastModel } from "../models/filter_podcasts_model";

// primeira rota
export const get_list_episodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await service_list_episodes();

  res.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON });
  res.end(JSON.stringify(content));
};

// segunda rota
export const get_filter_episodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content: FilterPodCastModel = await service_filter_episodies(req.url);

  // garante número válido para status
  const statusCode = Number(content?.StatusCode) || StatusCode.OK;

  res.writeHead(statusCode, { "Content-Type": ContentType.JSON });
  res.end(JSON.stringify(content?.Body ?? {}));
};
