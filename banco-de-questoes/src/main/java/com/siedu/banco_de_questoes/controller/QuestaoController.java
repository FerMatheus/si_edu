package com.siedu.banco_de_questoes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.siedu.banco_de_questoes.model.Questao;
import com.siedu.banco_de_questoes.repository.QuestaoRepository;

import java.util.List;

@RestController
@RequestMapping("/api/questoes")
public class QuestaoController {

    @Autowired
    private QuestaoRepository questaoRepository;

    @GetMapping
    public List<Questao> listar() {
        return questaoRepository.findAll();
    }

    @PostMapping
    public Questao adicionar(@RequestBody Questao questao) {
        return questaoRepository.save(questao);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        questaoRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Questao atualizar(@PathVariable Long id, @RequestBody Questao novaQuestao) {
        return questaoRepository.findById(id).map(questao -> {
            questao.setEnunciado(novaQuestao.getEnunciado());
            questao.setMateria(novaQuestao.getMateria());
            questao.setAlternativaA(novaQuestao.getAlternativaA());
            questao.setAlternativaB(novaQuestao.getAlternativaB());
            questao.setAlternativaC(novaQuestao.getAlternativaC());
            questao.setAlternativaD(novaQuestao.getAlternativaD());
            questao.setRespostaCorreta(novaQuestao.getRespostaCorreta());
            return questaoRepository.save(questao);
        }).orElseThrow(() -> new RuntimeException("Questão não encontrada"));
    }

    @GetMapping("/materia/{materia}")
    public List<Questao> buscarPorMateria(@PathVariable String materia) {
        return questaoRepository.findByMateria(materia);
    }
}
