import React from "react";
import BaseModal from "./BaseModal";

interface TermsModalProps {
  visible: boolean;
  onClose: () => void;
}

const termsContent = `
Bem-vindo(a) ao SIEDU!

Estes Termos de Uso (“Termos”) regulam o acesso e utilização do sistema SIEDU – Sistema Integrado Educacional (MVP), desenvolvido em parceria entre o Centro Educa Mais Viriato Corrêa e a UNDB, destinado ao apoio pedagógico, realização de simulados, gestão de materiais e acompanhamento de alunos.

Ao acessar qualquer funcionalidade da plataforma, você concorda com estes Termos. Caso não concorde, recomendamos não utilizar o sistema.

Por favor, leia atentamente: este documento resume os direitos e responsabilidades dos usuários durante o uso do SIEDU.

1. CONDIÇÕES GERAIS

1.1 Usuário: Aluno ou professor autorizado pela instituição.
1.2 Plataforma: Sistema web e mobile disponibilizado em versão MVP.
1.3 Finalidade: Apoio pedagógico por meio de simulados, materiais didáticos e avaliação.

2. FUNCIONALIDADES DO MVP

O SIEDU oferece, de acordo com o perfil do usuário:

Para Alunos:

- Acesso aos simulados;

- Visualização do próprio desempenho;

- Acesso a materiais didáticos.

Para Professores:

- Criação de questões;

- Acompanhamento de desempenho;

- Avaliação pelo carômetro;

- Upload de materiais didáticos.

3. ACEITAÇÃO E ATUALIZAÇÕES

3.1 O uso contínuo da plataforma representa concordância com estes Termos.
3.2 Os Termos podem ser atualizados a qualquer momento, com publicação da nova versão no sistema.
3.3 Algumas funcionalidades futuras poderão ter regras específicas.

4. RESPONSABILIDADES DO USUÁRIO

- O usuário compromete-se a:

- Utilizar o sistema somente para fins pedagógicos;

- Não compartilhar informações de login;

- Não acessar dados ou perfis de outros usuários;

- Manter informações corretas no sistema.

O professor é responsável pelo conteúdo que cadastra (questões, avaliações e materiais).

5. LIMITAÇÕES DO MVP

Durante esta fase inicial, o SIEDU:

- Opera com base de dados local, sem armazenamento em nuvem;

- Pode apresentar instabilidades ou limitações funcionais;

- Não possui notificações detalhadas de erros de login;

- Pode ter atualizações ou interrupções para manutenção.

6. PRIVACIDADE E DADOS

O uso do sistema é regido pela Política de Privacidade.
Ao utilizar o SIEDU, o usuário concorda com o tratamento de seus dados educacionais para fins pedagógicos e acadêmicos.

7. Contato

Para dúvidas ou solicitações relacionadas à privacidade e proteção de dados, contate:

Unidade de Ensino Superior Dom Bosco – Canal de Privacidade

Email: atendimento@undb.edu.br
`;

export default function TermsModal({ visible, onClose }: TermsModalProps) {
  return (
    <BaseModal
      visible={visible}
      onClose={onClose}
      title="Termos de Uso"
      content={termsContent}
    />
  );
}
