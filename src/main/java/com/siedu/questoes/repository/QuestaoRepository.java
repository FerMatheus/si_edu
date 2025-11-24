package com.siedu.questoes.repository;

import com.siedu.questoes.model.Questao;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface QuestaoRepository extends JpaRepository<Questao, Long> {
    List<Questao> findByMateriaIgnoreCase(String materia);
}
