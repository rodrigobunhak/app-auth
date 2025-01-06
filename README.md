# App Auth

Este projeto é uma aplicação de autenticação configurada para rodar utilizando Docker Compose. Siga os passos abaixo para configurar e iniciar o projeto localmente.

## Pré-requisitos

Certifique-se de que os seguintes softwares estejam instalados em sua máquina:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone <endereco-do-repositorio>
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd app-auth
   ```

3. Inicie os containers com Docker Compose:
   ```bash
   docker-compose up -d
   ```

## Acesse o projeto

Depois de executar os passos acima, o projeto estará disponível. Verifique o arquivo `docker-compose.yml` para confirmar a porta configurada.

## Parando o projeto

Para parar os containers, execute o seguinte comando:
```bash
docker-compose down
```

