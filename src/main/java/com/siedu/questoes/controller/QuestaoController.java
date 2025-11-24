package com.siedu.questoes.controller;

import com.siedu.questoes.model.Questao;
import com.siedu.questoes.service.BancoDeQuestoesService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/questoes")
@CrossOrigin(origins = "*")
public class QuestaoController {

    private final BancoDeQuestoesService service;

    public QuestaoController(BancoDeQuestoesService service) {
        this.service = service;
    }

    @GetMapping
    public List<Questao> listar(@RequestParam(required = false) String materia) {
        if (materia != null && !materia.isBlank()) {
            return service.listarPorMateria(materia);
        }
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Questao> buscar(@PathVariable Long id) {
        return service.buscarPorId(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Questao> criar(@Valid @RequestBody Questao questao) {
        Questao salvo = service.salvar(questao);
        return ResponseEntity.ok(salvo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Questao> atualizar(@PathVariable Long id, @Valid @RequestBody Questao questao) {
        return service.buscarPorId(id).map(existing -> {
            questao.setId(id);
            Questao updated = service.salvar(questao);
            return ResponseEntity.ok(updated);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
