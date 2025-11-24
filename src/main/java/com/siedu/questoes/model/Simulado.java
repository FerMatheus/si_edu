package com.siedu.questoes.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "simulados")
public class Simulado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    @ManyToMany
    @JoinTable(
            name = "simulado_questoes",
            joinColumns = @JoinColumn(name = "simulado_id"),
            inverseJoinColumns = @JoinColumn(name = "questao_id")
    )
    private List<Questao> questoes;

    public Simulado() {}

    // getters e setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public List<Questao> getQuestoes() { return questoes; }
    public void setQuestoes(List<Questao> questoes) { this.questoes = questoes; }
}
