# 🧠 TEAacolhe: aplicativo inteligente de rotinas, regulação emocional e inclusão para adolescentes e jovens com TEA

**TEAacolhe** é um aplicativo inteligente de **rotinas**, **regulação emocional** e **inclusão** para adolescentes e jovens com **Transtorno do Espectro Autista (TEA)**.

Desenvolvido com **React Native (Bare Workflow)**, o app combina acessibilidade, inteligência artificial e funcionalidades offline para oferecer suporte diário de forma simples e eficaz e se destaca dos demais apps já existentes por acompanhar todo o desenvolvimento da pessoa autista e não focar só na infância.

---

## 📱 Funcionalidades 

- ✅ Criação e gerenciamento de rotinas personalizadas
- 💬 Recursos de apoio emocional e sugestões de autorregulação
- 📊 Relatórios automáticos para responsáveis, professores e terapeutas
- 📴 Funciona offline e em dispositivos de baixo custo
---


## ⚙️ Tecnologias Utilizadas

- [React Native (Bare Workflow)](https://reactnative.dev/)
- [JavaScript](https://www.javascript.com/)
- [Expo Modules](https://docs.expo.dev/bare/exploring-bare-workflow/)
- [React Navigation](https://reactnavigation.org/)
- [Firebase](https://firebase.google.com/?hl=pt-br)


---
# Documentação do fluxograma
![Captura de tela 2025-06-24 145842](https://github.com/user-attachments/assets/12bf93ae-a748-46ac-a4fb-5c864218a55b)
A imagem apresenta o fluxo de uso e as principais funcionalidades do TEAacolhe, um aplicativo voltado à inclusão de adolescentes autistas. No primeiro acesso, o usuário responde um teste de triagem de sinais .
Depois do cadastro e da configuração inicial, o usuário tem acesso às funcionalidades principais do app. Entre elas estão:  rotinas, o botão SOS Crise (direciona o usuário em momentos de crise para exercícios de regulação emocional), a área de configurações, o suporte a TalkBack , o acompanhamento do desenvolvimento e a comunicação adaptada para pessoas não verbais.

![Captura de tela 2025-06-24 145857](https://github.com/user-attachments/assets/e5b17114-e609-485c-82e9-785a10d69acd)

No uso cotidiano, o aplicativo não exige login diário, mantendo o acesso direto às funcionalidades. Além disso, o app oferece opções de personalização conforme o perfil do usuário mostrado no diagrama. A família ,terapeutas ou professores podem fazer login no app e acompanhar o desempenho dos jovens no app.
O próprio adolescente pode customizar templates, notificações, sua rotina (adicionando ou removendo itens), utilizar o TalkBack e ajustar o tamanho da fonte para facilitar a leitura.
A família, por sua vez, pode adaptar notificações,TalkBack,ajustar o tamanho da fonte para facilitar a leitura, selecionar se cada elemento da rotina "ajuda" ou "não ajuda" e deixar feedbacks no app. 
Já os profissionais que acompanham o jovem têm acesso à funcionalidade de sugestões vinculadas às consultas e relatórios.


# 
# 📱 Instalação e Execução

## 🔀 Branch principal

`master`

## 📦 Instalação e Execução

### **1️⃣ Pré-requisitos**
Antes de começar, certifique-se de ter instalado:
- **Node.js** (Recomendado: versão LTS) → [Baixar aqui](https://nodejs.org/)
- **Expo CLI** → Instale com:
  ```sh
  npm install -g expo-cli
  ```
- **Git** → [Baixar aqui](https://git-scm.com/)

### **2️⃣ Clonar o repositório**
```sh
 git clone https://github.com/JefersonNSoares/teaacolheapp
```

### **3️⃣ Instalar as dependências**
```sh
npm install
```
Ou, se estiver usando Yarn:
```sh
yarn install
```

### **4️⃣ Executar o projeto**
Para rodar o app no Expo:
```sh
npx expo start
```
Ou se estiver usando Yarn:
```sh
yarn expo start
```
Isso abrirá o Expo Developer Tools no navegador.

---

## 📱 Rodando no Emulador ou Dispositivo Físico

### **Android**
- Para rodar no emulador, primeiro abra o **Android Studio**, inicie um **emulador** e execute:
  ```sh
  npx expo run:android
  ```
- Para rodar no celular, conecte via **USB** e ative a **Depuração USB** nas opções do desenvolvedor.

### **iOS** (Apenas Mac)
- Certifique-se de ter o **Xcode** instalado.
- Execute:
  ```sh
  npx expo run:ios
  ```

## 📲 Rodar no Expo Go
Instale o app Expo Go no seu celular (disponível na Play Store ou App Store).

Conecte o celular e o computador à mesma rede Wi-Fi.

Após rodar npx expo start, um QR Code será exibido no terminal ou navegador.

Abra o Expo Go no celular e escaneie o QR Code.

O aplicativo será carregado no seu dispositivo.

