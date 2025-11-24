package com.siedu.questoes.service;

import com.siedu.questoes.model.Questao;
import com.siedu.questoes.model.Simulado;
import com.siedu.questoes.repository.QuestaoRepository;
import com.siedu.questoes.repository.SimuladoRepository;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class SimuladoService {

    private final QuestaoRepository questaoRepo;
    private final SimuladoRepository simuladoRepo;

    public SimuladoService(QuestaoRepository questaoRepo, SimuladoRepository simuladoRepo) {
        this.questaoRepo = questaoRepo;
        this.simuladoRepo = simuladoRepo;
    }

    public Simulado gerarSimuladoAleatorio(String titulo, int quantidade, String materia) {
        List<Questao> pool;
        if (materia == null || materia.isBlank()) {
            pool = questaoRepo.findAll();
        } else {
            pool = questaoRepo.findByMateriaIgnoreCase(materia);
        }

        Collections.shuffle(pool);
        List<Questao> selecionadas = pool.subList(0, Math.min(quantidade, pool.size()));

        Simulado s = new Simulado();
        s.setTitulo(titulo);
        s.setQuestoes(selecionadas);
        return simuladoRepo.save(s);
    }

    public List<Simulado> listar() {
        return simuladoRepo.findAll();
    }

    public Optional<Simulado> buscar(Long id) {
        return simuladoRepo.findById(id);
    }
}
