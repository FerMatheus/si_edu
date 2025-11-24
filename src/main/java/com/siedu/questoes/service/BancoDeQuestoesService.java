package com.siedu.questoes.service;

import com.siedu.questoes.model.Questao;
import com.siedu.questoes.repository.QuestaoRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BancoDeQuestoesService {

    private final QuestaoRepository repo;

    public BancoDeQuestoesService(QuestaoRepository repo) {
        this.repo = repo;
    }

    public List<Questao> listarTodos() {
        return repo.findAll();
    }

    public Optional<Questao> buscarPorId(Long id) {
        return repo.findById(id);
    }

    public Questao salvar(Questao q) {
        return repo.save(q);
    }

    public void deletar(Long id) {
        repo.deleteById(id);
    }

    public List<Questao> listarPorMateria(String materia) {
        return repo.findByMateriaIgnoreCase(materia);
    }
}
