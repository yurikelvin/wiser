Desafio proposto pelo time da Wiser Educação

## Começando

Primeiro, para rodar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu browser para ver o resultado.

O usuário será redirecionado para a tela de login

Logins válidos aceito pelo sistema:

```
Email: flavio.augusto@gmail.com
Senha: flavioaugusto

Email: paulo.dias@gmail.com
Senha: paulodias

Email: melissa.castro@gmail.com
Senha: melissacastro
```

## Testes

Para rodar os testes basta rodar o comando:

```bash
  yarn test
  # ou
  npm test
```

## Redux/Redux Saga

Foi aplicado o redux e o redux saga para gerenciar a sessão do usuário logado.

O código pode ser encontrado em src/store