# projeto-teste
Projeto para teste de desenvolvedor junior.

## Instruções
### Subindo o container
`$ docker-composer up --build`

### Links 

[Requests](http://localhost:3000/api)
- Request API para testar os metódos

[Listar cachorros](http://localhost:3000/dogs/list)
- Listagem de todos os elementos

[Criar cachorro](http://localhost:3000/dogs/create)
- Criação de um novo objeto

[View principal](http://localhost:3000/dogs)
- Página principal do objeto, redirecionamento para cada função através de botões

[View update cachorros](http://localhost:3000/dogs/update/)
- Inserir o ID do cachorro após o update/

### Bibliotecas usadas
- TypeORM gerenciando a serialização de objetos
- Swagger para criação da documentação e execução de requests
- HandleBars para criação de templates