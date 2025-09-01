# "Podcast Manager"

### Description
Um app ao estilo Netflix, aonde possa centralizar
diferentes episódios podcasts separados por categoria.

### Domain
Podcast feitos em vídeos

### Feautures
1- Listar os episódios podcasts em sessões de categorias [saúde,bodybuilder,mentalidade,humor]
2- Filtrar episódios por nome de podcasts.

## Como

#### Feautures
1- Listar os episódios podcasts em sessões de categorias.

### Como vou implementar:
GET: Retorna lista de episódios baseado  em um parâmetro pelo cliente do nome do podcasts
response: 

```js
[
{
    podcast_name:"flow",
    episodio:"CEO DO IFOOD REVELA VASTIDORES DO APP",
    video_id:"mnnKv4sX3zI",
    cover:"https://i.ytimg.com/vi/mnnKv4sX3zI/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=mnnKv4sX3zI",
    categores:["saúde", "tecnologia"]
};
{
    podcast_name:"flow",
    episodio:"Ramon Dino foi surpreendido e perdeu o título",
    video_id:"CUdQTF-yueg",
    cover:"https://i.ytimg.com/vi/CUdQTF-yueg/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=CUdQTF-yueg",
    categores:["saúde", "esportes", "bodybuilder"]
};
]


```



