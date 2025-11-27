package com.siedu.controller;

import com.siedu.model.Usuario;
import com.siedu.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping
    public ResponseEntity<?> login(@RequestParam String login, @RequestParam String senha) {
        Usuario usuario = loginService.autenticar(login, senha);

        if (usuario != null) {
            // Retorna um JSON mais limpo e pronto pra o front usar
            return ResponseEntity.ok(Map.of(
                    "login", usuario.getLogin(),
                    "perfil", usuario.getPerfil().toString()
            ));
        } else {
            return ResponseEntity.status(401).body("Login ou senha incorretos.");
        }
    }
}
