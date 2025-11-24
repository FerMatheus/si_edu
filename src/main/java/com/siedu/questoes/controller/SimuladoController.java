package com.siedu.questoes.controller;

import com.siedu.questoes.model.Simulado;
import com.siedu.questoes.service.SimuladoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/simulados")
@CrossOrigin(origins = "*")
public class SimuladoController {

    private final SimuladoService service;

    public SimuladoController(SimuladoService service) {
        this.service = service;
    }

    @PostMapping("/gerar")
    public ResponseEntity<Simulado> gerar(
            @RequestParam String titulo,
            @RequestParam int quantidade,
            @RequestParam(required = false) String materia
    ) {
        Simulado s = service.gerarSimuladoAleatorio(titulo, quantidade, materia);
        return ResponseEntity.ok(s);
    }

    @GetMapping
    public List<Simulado> listar() {
        return service.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Simulado> buscar(@PathVariable Long id) {
        return service.buscar(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
