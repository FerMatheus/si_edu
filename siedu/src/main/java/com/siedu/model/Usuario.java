package com.siedu.model;

public class Usuario {
    private String login;
    private String senha;
    private PerfilUsuario perfil;

    public Usuario(String login, String senha, PerfilUsuario perfil) {
        this.login = login;
        this.senha = senha;
        this.perfil = perfil;
    }

    public String getLogin() { return login; }
    public String getSenha() { return senha; }
    public PerfilUsuario getPerfil() { return perfil; }
}
