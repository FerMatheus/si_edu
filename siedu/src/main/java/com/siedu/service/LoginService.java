package com.siedu.service;

import com.siedu.model.PerfilUsuario;
import com.siedu.model.Usuario;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class LoginService {

    // "Banco" em memória (simulação)
    private final Map<String, Usuario> usuarios = new HashMap<>();

    public LoginService() {
        // Logins fixos (apenas para testes)
        usuarios.put("aluno", new Usuario("Felipinho Rei Delas", "1234", PerfilUsuario.ALUNO));
        usuarios.put("professor", new Usuario("Alberto Carrara", "1234", PerfilUsuario.PROFESSOR));
    }

    public Usuario autenticar(String login, String senha) {
        Usuario usuario = usuarios.get(login);
        if (usuario != null && usuario.getSenha().equals(senha)) {
            return usuario;
        }
        return null;
    }
}
