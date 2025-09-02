
# 🎧 Gerenciador de Podcast

Um app ao estilo **Netflix**, onde é possível **centralizar diferentes episódios de podcasts** separados por categorias, permitindo fácil descoberta e organização.

---

## 📖 Descrição

Este projeto tem como objetivo criar uma aplicação para **consumir, listar e filtrar podcasts em vídeo**.  
O domínio principal do sistema são **podcasts em vídeo** (YouTube, etc).  

---

## 🚀 Funcionalidades

- 📂 **Listar episódios de podcasts por categorias** (ex.: Saúde, Bodybuilder, Mentalidade, Humor, Tecnologia).  
- 🔎 **Filtrar episódios por nome do podcast**.  
- 🖼️ Cada episódio possui **capa, título, link e ID do vídeo**.  

---

## 🛠️ Como funciona

### Endpoint: `GET /podcasts?name=<nome_do_podcast>`

Retorna uma lista de episódios filtrados pelo nome do podcast informado pelo cliente.

#### Exemplo de resposta:

```json
[
  {
    "podcast_name": "flow",
    "episodio": "CEO DO IFOOD REVELA BASTIDORES DO APP",
    "video_id": "mnnKv4sX3zI",
    "cover": "https://i.ytimg.com/vi/mnnKv4sX3zI/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=mnnKv4sX3zI",
    "categores": ["saúde", "tecnologia"]
  },
  {
    "podcast_name": "flow",
    "episodio": "Ramon Dino foi surpreendido e perdeu o título",
    "video_id": "CUdQTF-yueg",
    "cover": "https://i.ytimg.com/vi/CUdQTF-yueg/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=CUdQTF-yueg",
    "categores": ["saúde", "esportes", "bodybuilder"]
  }
]

