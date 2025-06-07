# GS-Mobile-AppFugas

# AppFugas - Aplicativo de Rotas de Fuga (React Native + Expo + .NET API)

Este é o projeto desenvolvido em React Native com Expo Router para o aplicativo de Rotas de Fuga — **AppFugas** — integrado com backend em .NET, com cadastro, edição e exclusão de rotas.

---

## Tecnologias Utilizadas

- **React Native (Expo Router)**
- **Expo SDK 49+**
- **Firebase Authentication**
- **.NET 8 Web API (API Backend)**

---

## Configuração e Execução do Projeto

###  Pré-requisitos:

- Ter o **Node.js** e **npm** instalados
- Ter o **Expo CLI** instalado globalmente:

```bash
npm install -g expo-cli
```

- Ter o **Android Studio** instalado (necessário para rodar o emulador Android)
- Ter uma conta no **Google Firebase** (já configurada para este projeto)

---

###  Clonar o projeto

Clone o repositório do app mobile normalmente.

### Instalar dependências do projeto:

Dentro da pasta do projeto, execute:

```bash
npm install
```

---

### Executar o projeto no emulador Android:

Abra o **Android Studio**, inicie um dispositivo virtual (AVD) com o Android em funcionamento.

Agora, rode o seguinte comando:

```bash
npx expo start
```

- Ao abrir a interface do Expo DevTools, selecione a opção `Run on Android emulator`.

---

##  Login de Teste

Utilize o seguinte login de teste:

- **Email:** `kenzo@email.com`
- **Senha:** `123123`

Esse login já está registrado e funcional para acesso à aplicação.

---

## Funcionalidades implementadas até o momento:

-  Tela de instruções ao abrir o app
-  Tela de login 
-  Tela de cadastro de rotas de fuga:
  - Campos: ID, Nome da Rota, Descrição, Ponto de Partida e Ponto de Chegada
-  Tela de listagem de rotas (completo CRUD):
  - Visualizar rotas
  - Editar informações
  - Excluir rotas

---

##  Repositório da API Backend (C# .NET)

A API já está pronta e disponível no seguinte repositório:

 [https://github.com/enzo-roch4/GS-.NET-AppFugas.git](https://github.com/enzo-roch4/GS-.NET-AppFugas.git)


##  Desenvolvido por:

- Enzo Franco Rocha RM: 553643
- João Pedro Pereira RM: 553698
- Hebert Santos de Sousa RM: 553227

---

 **gravação de vídeo demonstrativo!**
[Video Apresentação](https://youtu.be/C9cXGAeb2g4?si=r5m_1EEW1ZJ6Vq57)
