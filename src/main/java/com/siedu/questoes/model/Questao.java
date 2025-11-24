package com.siedu.questoes.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name = "questoes")
public class Questao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String materia;

    @NotBlank
    @Column(length = 2000)
    private String enunciado;

    // Alternativas simples (A,B,C,...)
    @ElementCollection
    @CollectionTable(name = "questao_alternativas", joinColumns = @JoinColumn(name = "questao_id"))
    @Column(name = "alternativa")
    private List<String> alternativas;

    @NotBlank
    private String respostaCorreta; // armazene o texto exato ou índice (ex: "4" ou "B")

    public Questao() {}

    // getters e setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getMateria() { return materia; }
    public void setMateria(String materia) { this.materia = materia; }

    public String getEnunciado() { return enunciado; }
    public void setEnunciado(String enunciado) { this.enunciado = enunciado; }

    public List<String> getAlternativas() { return alternativas; }
    public void setAlternativas(List<String> alternativas) { this.alternativas = alternativas; }

    public String getRespostaCorreta() { return respostaCorreta; }
    public void setRespostaCorreta(String respostaCorreta) { this.respostaCorreta = respostaCorreta; }
}
