package com.siedu.banco_de_questoes.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "questoes")
public class Questao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O enunciado não pode estar vazio")
    @Size(min = 5, message = "O enunciado deve ter pelo menos 5 caracteres")
    private String enunciado;

    @NotBlank(message = "A matéria é obrigatória")
    private String materia;

    @NotBlank(message = "A alternativa A é obrigatória")
    private String alternativaA;

    @NotBlank(message = "A alternativa B é obrigatória")
    private String alternativaB;

    @NotBlank(message = "A alternativa C é obrigatória")
    private String alternativaC;

    @NotBlank(message = "A alternativa D é obrigatória")
    private String alternativaD;

    @NotBlank(message = "A resposta correta é obrigatória")
    private String respostaCorreta;

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEnunciado() {
        return enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    public String getMateria() {
        return materia;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }

    public String getAlternativaA() {
        return alternativaA;
    }

    public void setAlternativaA(String alternativaA) {
        this.alternativaA = alternativaA;
    }

    public String getAlternativaB() {
        return alternativaB;
    }

    public void setAlternativaB(String alternativaB) {
        this.alternativaB = alternativaB;
    }

    public String getAlternativaC() {
        return alternativaC;
    }

    public void setAlternativaC(String alternativaC) {
        this.alternativaC = alternativaC;
    }

    public String getAlternativaD() {
        return alternativaD;
    }

    public void setAlternativaD(String alternativaD) {
        this.alternativaD = alternativaD;
    }

    public String getRespostaCorreta() {
        return respostaCorreta;
    }

    public void setRespostaCorreta(String respostaCorreta) {
        this.respostaCorreta = respostaCorreta;
    }
}
