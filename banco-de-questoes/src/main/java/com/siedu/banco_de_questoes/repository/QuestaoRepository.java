package com.siedu.banco_de_questoes.repository;

import com.siedu.banco_de_questoes.model.Questao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestaoRepository extends JpaRepository<Questao, Long> {


    List<Questao> findByMateria(String materia);

}
