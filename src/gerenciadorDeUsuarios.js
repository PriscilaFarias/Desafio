



// Testes:
// Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

// Exemplo:
// fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
// fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais


// Declare um vetor contendo informações sobre usuários de um site, 
// contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false).
//  Adicione ao menos um dos usuarios como expirado sendo true.

const usuarios = [
    {
        id: 1,
        nome: 'João',
        email: 'joao@gmail.com',
        senha: 'senha123',
        expirado: false
    },
    {
        id: 2,
        nome: 'Maria',
        email: 'maria@gmail.com',
        senha: 'senha456',
        expirado: true  
    }

]


// Desafio:
// Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login 
// foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. 
// A função deve dizer que as credenciais expiraram caso expirado for true. 
// A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou 
// a senha esteja incorreta para aquele email.

export function fazerLogin(email, senha) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email) {
            if (usuarios[i].expirado) {
                return 'Renove suas credenciais';
            } else if (usuarios[i].senha == senha) {
                return 'Login realizado com sucesso';
            } else {
                return 'Credenciais incorretas';
            }   
        }
    }
    return 'Credenciais incorretas';
}