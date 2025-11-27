import React from "react";
import BaseModal from "./BaseModal";

interface PrivacyModalProps {
  visible: boolean;
  onClose: () => void;
}

const privacyContent = `
Política de Privacidade – SIEDU

Projeto: SIEDU – Sistema Integrado Educacional (MVP)

Instituição responsável: Centro Educa Mais Viriato Corrêa (em parceria com UNDB)

1. Compromisso com a Privacidade

A sua privacidade é uma prioridade para o SIEDU.
Esta Política de Privacidade descreve, de forma clara e objetiva, como tratamos dados pessoais de alunos e professores, em conformidade com a Lei Geral de Proteção de Dados (LGPD) – Lei nº 13.709/2018.

O SIEDU trata dados exclusivamente para fins educacionais, pedagógicos e operacionais, garantindo segurança, confidencialidade e transparência em todas as etapas.

2. Dados Coletados

Durante o uso da plataforma (web e mobile), podemos coletar os seguintes dados:

2.1 Dados fornecidos pelo usuário

- Nome completo

- Email ou matrícula institucional

- Perfil de acesso (professor ou aluno)

- Informações enviadas em simulados, carômetro e materiais didáticos (apenas professores)

2.2 Dados gerados pelo uso da plataforma

- Respostas de simulados

- Desempenho e métricas de avaliação

- indicadores pedagógicos exibidos no carômetro

- Histórico de acesso e navegação dentro do sistema

2.3 Dados sensíveis?

Nenhum dado sensível (como saúde ou biometria) é coletado.
Os dados educacionais tratados são considerados dados pessoais não sensíveis, ainda que vinculados ao processo pedagógico.

3. Finalidades do Tratamento

Os dados são utilizados com as seguintes finalidades:

- Permitir login e autenticação de alunos e professores

- Gerenciar o banco de questões e gerar simulados

- Corrigir automaticamente atividades e fornecer feedback

- Exibir indicadores pedagógicos para professores

- Disponibilizar materiais didáticos na plataforma

- Melhorar a experiência e funcionamento do sistema durante o MVP

Nenhum dado é utilizado para fins comerciais, publicitários ou não relacionados ao contexto educacional.

4. Compartilhamento de Dados

- O SIEDU não compartilha dados pessoais com terceiros, exceto:

- Quando houver exigência legal

- Quando solicitado pela instituição de ensino responsável

- Quando houver consentimento explícito do usuário (se aplicável)

O projeto funciona em ambiente local durante o MVP, sem integração com plataformas externas de armazenamento.

5. Armazenamento e Segurança

O SIEDU adota medidas técnicas e administrativas para proteção dos dados, incluindo:

- Controle de acesso por login

- Armazenamento em base local protegida

- Limitação de privilégios por perfil (professor / aluno)

- Boas práticas de desenvolvimento seguro

Durante o MVP, não há hospedagem em nuvem. Todos os dados são armazenados localmente pela instituição.

6. Direitos do Usuário

O usuário pode, a qualquer momento:

- Solicitar confirmação de tratamento

- Acessar os dados armazenados em seu nome

- Solicitar correção ou atualização

- Solicitar exclusão de dados, quando aplicável

- Revogar consentimento (para operações que dependam dele)

Os pedidos podem ser feitos pelos canais institucionais.

7. Alterações desta Política

Esta Política poderá ser atualizada para refletir melhorias, novas funcionalidades ou exigências legais. A nova versão será disponibilizada na plataforma.

8. Contato

Para dúvidas ou solicitações relacionadas à privacidade e proteção de dados, contate:

Unidade de Ensino Superior Dom Bosco – Canal de Privacidade

Email: atendimento@undb.edu.br
`;

export default function PrivacyModal({ visible, onClose }: PrivacyModalProps) {
  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title="Política de Privacidade"
      content={privacyContent}
    />
  );
}
