package com.siedu.banco_de_questoes.service;

import com.siedu.banco_de_questoes.model.Questao;
import com.siedu.banco_de_questoes.repository.QuestaoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class QuestaoService {

    private final QuestaoRepository repository;

    public QuestaoService(QuestaoRepository repository) {
        this.repository = repository;
    }

    public List<Questao> listar() {
        return repository.findAll();
    }

    public Questao salvar(Questao questao) {
        return repository.save(questao);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
