
import { fazerLogin } from '../src/gerenciadorDeUsuarios.js';
import assert from 'assert';

describe('Testes da função fazerLogin', function()  {

    // Teste 1: Sucesso
    it('Validar se retornar a mensagem "Login realizado com sucesso" quando email e senha estão corretos',function()  {
        const resultado = fazerLogin('joao@gmail.com', 'senha123');
        assert.strictEqual(resultado, 'Login realizado com sucesso');
    });

    // Teste 2: Credencial expirada
    it('Validar se retornar a mensagem "Renove suas credenciais" quando o usuário está expirado', function()  {
        const resultado = fazerLogin('maria@gmail.com', 'senha456');
        assert.strictEqual(resultado, 'Renove suas credenciais');
    });

    // Teste 3: Usuário não encontrado
    it('Validar se retornar a mensagem "Credenciais incorretas" quando o email não existe', function()  {
        const resultado = fazerLogin('inexistente@gmail.com', 'qualquersenha');
        assert.strictEqual(resultado, 'Credenciais incorretas');
    });

    // Teste 4: Senha incorreta
    it('Validar se retornar a mensagem "Credenciais incorretas" quando a senha está incorreta para o usuário encontrado', function()  {
        const resultado = fazerLogin('joao@gmail.com', 'senhaerrada');
        assert.strictEqual(resultado, 'Credenciais incorretas');
    });
});
