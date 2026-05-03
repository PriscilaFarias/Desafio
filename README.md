# 📌 Projeto: Sistema de Login com Validação de Credenciais

Este projeto tem como objetivo simular um sistema simples de login, validando usuários com base em informações previamente cadastradas.

---

## 📋 Estrutura do Projeto

Foi declarado um vetor (array) de usuários contendo as seguintes propriedades:

* `id`: identificador único do usuário
* `nome`: nome do usuário
* `email`: email utilizado para login
* `senha`: senha do usuário
* `expirado`: indica se a credencial está expirada (`true` ou `false`)

Pelo menos um usuário possui a propriedade `expirado` como `true`, simulando uma credencial vencida.

---

## 🚀 Funcionalidade Principal

### 🔐 Função de Login

A função `fazerLogin(email, senha)` realiza a validação das credenciais e retorna uma mensagem de acordo com o cenário:

### Possíveis retornos:

* ✅ **Login realizado com sucesso**
  Quando o email e a senha estão corretos e a credencial é válida.

* ⚠️ **Renove suas credenciais**
  Quando o usuário existe, a senha está correta, mas a credencial está expirada.

* ❌ **Credenciais incorretas**
  Quando:

  * O email não existe, ou
  * A senha está incorreta para o usuário informado

---

## 🧪 Testes Implementados

Foram criados 4 testes para validar os principais cenários:

1. **Sucesso**

   ```js
   fazerLogin('email@existente.com', 'senhaCerta123');
   // Retorno: 'Login realizado com sucesso'
   ```

2. **Credencial expirada**

   ```js
   fazerLogin('credencial@expirada.com', 'senhaCerta123');
   // Retorno: 'Renove suas credenciais'
   ```

3. **Usuário não encontrado**

   ```js
   fazerLogin('naoexiste@email.com', 'qualquerSenha');
   // Retorno: 'Credenciais incorretas'
   ```

4. **Senha incorreta**

   ```js
   fazerLogin('email@existente.com', 'senhaErrada');
   // Retorno: 'Credenciais incorretas'
   ```

---

## 💡 Objetivo do Desafio

Este exercício tem como foco:

* Manipulação de arrays e objetos
* Estruturas condicionais
* Criação de funções
* Simulação de regras reais de autenticação

---

## 🛠️ Tecnologias

* JavaScript

---

## 📎 Observação

Este projeto é apenas uma simulação didática e **não deve ser utilizado em produção**, pois não possui práticas de segurança como criptografia de senha.

---

✨ Projeto desenvolvido para fins de aprendizado.
