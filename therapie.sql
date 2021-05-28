-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Maio-2021 às 17:44
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `therapie`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `materiais`
--

CREATE TABLE `materiais` (
  `id` int(11) NOT NULL,
  `url_imagem` text DEFAULT NULL,
  `video_id` text DEFAULT NULL,
  `txt_motivacional` text DEFAULT NULL,
  `profissional_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `materiais`
--

INSERT INTO `materiais` (`id`, `url_imagem`, `video_id`, `txt_motivacional`, `profissional_id`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, 'Lembre-se de que você mesmo é o melhor secretário de sua tarefa, o mais eficiente propagandista de seus ideais, a mais clara demonstração de seus princípios, o mais alto padrão do ensino superior que seu espírito abraça e a mensagem viva das elevadas noções que você transmite aos outros. Não se esqueça, igualmente, de que o maior inimigo de suas realizações mais nobres, a completa ou incompleta negação do idealismo sublime que você apregoa.', 1, '2021-05-07 18:13:11', '2021-05-21 16:34:32'),
(2, NULL, 'vTpiGYB-vdU', NULL, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, NULL, 'dJZPai5XbAk', NULL, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, NULL, 'QNDizjxzzcc', NULL, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, NULL, 'gR8etTe-ST0', NULL, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, NULL, NULL, 'Podemos acreditar que tudo que a vida nos oferecerá no futuro é repetir o que fizemos ontem e hoje. Mas, se prestarmos atenção, vamos nos dar conta de que nenhum dia é igual a outro. Cada manhã traz uma bênção escondida; uma bênção que só serve para esse dia e que não se pode guardar nem desaproveitar. Se não usamos este milagre hoje, ele vai se perder. Este milagre está nos detalhes do cotidiano; é preciso viver cada minuto porque ali encontramos a saída de nossas confusões.', 1, '2021-05-21 16:35:35', '2021-05-21 16:35:35'),
(8, NULL, NULL, 'Você vai se decepcionar, se iludir, se machucar e afundar. Não importa o quanto você lute, isso vai consumir 90% de suas forças, e o que sobra, você gasta chorando por ter sido consumido. Não existe aquilo de muitos amigos. Ou você tem poucos e bons, ou muitos e falsos. Aliás, quem muito quer, tudo perde. Hoje, conto em cinco dedos, quantas pessoas ainda arrisco confiar.', 1, '2021-05-21 16:35:57', '2021-05-21 16:35:57'),
(9, NULL, NULL, 'Qualquer indivíduo que realmente acredite que seres supra-humanos concederam à nossa raça informações sobre os objetivos de sua existência e do mundo ainda está em sua infância. Não há outra revelação senão os pensamentos dos sábios — e mesmo esses pensamentos estão sujeitos a erros, como é a sina de tudo o que é humano.', 1, '2021-05-21 16:36:05', '2021-05-21 16:36:05'),
(10, 'https://postcron.com/pt/blog/wp-content/uploads/2016/12/frase-motivacional-1.jpg', NULL, NULL, 1, '2021-05-21 17:34:43', '2021-05-21 17:34:43'),
(11, 'https://www.blogvidadecasada.com/wp-content/uploads/2017/12/frases-motivacionais-para-alcancar-seus-sonhos.jpg', NULL, NULL, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'https://corredoresanonimos.pt/wp-content/uploads/2018/04/facil-2.png', NULL, NULL, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `profissionais`
--

CREATE TABLE `profissionais` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `crp` varchar(255) NOT NULL,
  `cnpj` varchar(255) DEFAULT NULL,
  `bio` text NOT NULL,
  `senha` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `endereco` text NOT NULL,
  `numero` int(11) NOT NULL,
  `url` text DEFAULT NULL,
  `cep` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `reset_token` text DEFAULT NULL,
  `reset_token_expires` text DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `profissionais`
--

INSERT INTO `profissionais` (`id`, `nome`, `email`, `crp`, `cnpj`, `bio`, `senha`, `telefone`, `endereco`, `numero`, `url`, `cep`, `cidade`, `estado`, `reset_token`, `reset_token_expires`, `created_at`, `updated_at`) VALUES
(1, 'Manuel Henrique', 'manoel@gmail.com', '2473647', '98624880000171', 'Manuel Henrique (CRP 26/74841) é neuropsicólogo (Cepsic-HC/FMUSP) e psicoterapeuta especialista em terapia cognitivo-comportamental. Mestrando em Neurologia na FMUSP. É pesquisador de neuroestimulação elétrica transcraniana com pacientes que sofreram traumatismo craniano. Atua desde 2007 com atendimento clínico para adultos, adolescentes e crianças. Além disso é pós-graduado em Gestão de Pessoas e experiência com treinamento e desenvolvimento de colaboradores de diversas empresas, abordando temas variados.', '$2a$08$UZZk08k/ZsA3vL.f/HlxdOMCsJ3bGSL0/EWgAQomQyFvOA/b8h.LG', '(66) 2628-2515', 'Rua Ademar tavares', 130, 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', '09850180', 'Santo Andre', 'SP', '50985215d3d1df4dd963001213146a8a1e7ab33f', '1621627787364', '2021-05-06 18:40:20', '2021-05-21 19:09:47'),
(2, 'Clinica Ventura', 'clina@ventura.com', '2567458', '94632398000122', 'A Ventura é uma clínica de psicologia fundada há 35 anos pela psicóloga Maria Aparecida Magro Ventura, no bairro de Pinheiros em São Paulo. Nossa missão é prestar atendimento psicoterápico junto a uma equipe de profissionais qualificada para promover o bem-estar do cliente.', '$2a$12$S4hyMcJtgRs62CvdKmXvuu1wxNs5cMYAqUQH.hzhKF0KzS4iQXTOi', '(11) 47019454', 'Rua Teodoro Sampaio', 2341, 'https://images.unsplash.com/photo-1562500230-e45f5a83a0f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', '05405250', 'São Paulo', 'SP', NULL, NULL, '2021-05-07 18:00:50', '2021-05-07 18:00:50'),
(3, 'Therapia da Mente', 'theramente@gmail.com', '3440996', '74575154000148', 'A Clínica Therapia da Mente nasceu a partir da união de duas psicólogas que, de acordo com as suas experiências profissionais, acreditam na importância em oferecer aos seus pacientes um tratamento de qualidade seguindo os princípios éticos, teóricos e científicos da profissão, buscando atender as demandas da população no que se refere aos atendimentos das queixas  psicológicas e psicopedagógicas.', '$2a$12$9PjkOE.dHCwJ2IX00h.hsuHRVthI6iuwBmBv1qzHHuSisW5x8xxae', '(63) 98781-8291', 'Rua Sampaio Viana', 454, 'https://images.unsplash.com/photo-1554173058-1ff7bcff4beb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', '77818748', 'São Paulo', 'SP', NULL, NULL, '2021-05-13 16:51:46', '2021-05-13 16:51:46'),
(4, 'Ester Gabrielly', 'gabrielly@gmail.com', '2674841', '', 'Ester Gabrielly (CRP 26/74841) é neuropsicóloga (Cepsic-HC/FMUSP) e psicoterapeuta especialista em terapia cognitivo-comportamental. Mestrando em Neurologia na FMUSP. É pesquisadora de neuroestimulação elétrica transcraniana com pacientes que sofreram traumatismo craniano. Atua desde 2007 com atendimento clínico para adultos, adolescentes e crianças. Além disso é pós-graduado em Gestão de Pessoas e experiência com treinamento e desenvolvimento de colaboradores de diversas empresas, abordando temas variados.', '$2a$12$OxYUyh5EiJils2LaYBMuPuSmwq7gYEtrTbMrztK/kA6TSdbp16g6W', '(69) 2886-2303', 'Rua Maria Figueiredo', 329, 'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=484&q=80', '04002002', 'São Paulo', 'SP', NULL, NULL, '2021-05-13 18:12:11', '2021-05-13 18:12:11'),
(5, 'Camila Rakin', 'rakimila@gmail.com', '6521457', NULL, 'Camila Rakin (CRP 65/21457) é neuropsicóloga (Cepsic-HC/FMUSP) e psicoterapeuta especialista em terapia cognitivo-comportamental. Mestrando em Neurologia na FMUSP. É pesquisadora de neuroestimulação elétrica transcraniana com pacientes que sofreram traumatismo craniano. Atua desde 2007 com atendimento clínico para adultos, adolescentes e crianças. Além disso é pós-graduada em Gestão de Pessoas e experiência com treinamento e desenvolvimento de colaboradores de diversas empresas, abordando temas variados.', '$2a$12$qyQKi0EOQ9nj.9ThVGEFCOEN5K5X78uOEawUQX3njrSu2oKLwshbG', '(11) 5468-8563', 'Rua Paulo Bregaro', 423, 'https://images.unsplash.com/photo-1604804531906-3c65b52e0681?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', '04261000', 'São Paulo', 'SP', NULL, NULL, '2021-05-18 14:41:00', '0000-00-00 00:00:00'),
(6, 'Ana Julia', 'anaju@gmail.com', '9657484', NULL, 'Ana Julia (CRP 96/57484) é neuropsicóloga (Cepsic-HC/FMUSP) e psicoterapeuta especialista em terapia cognitivo-comportamental. Mestrando em Neurologia na FMUSP. É pesquisadora de neuroestimulação elétrica transcraniana com pacientes que sofreram traumatismo craniano. Atua desde 2007 com atendimento clínico para adultos, adolescentes e crianças. Além disso é pós-graduado em Gestão de Pessoas e experiência com treinamento e desenvolvimento de colaboradores de diversas empresas, abordando temas variados.', '$2a$12$OxYUyh5EiJils2LaYBMuPuSmwq7gYEtrTbMrztK/kA6TSdbp16g6W', '(11) 6534-8564', 'Alameda Franca', 1313, 'https://images.unsplash.com/photo-1591569033002-d49b7f05338f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80', '01422005', 'São Paulo', 'SP', NULL, NULL, '2021-05-10 14:58:03', '0000-00-00 00:00:00'),
(7, 'Rafaella Niak', 'raffaniak@gmail.com', '9685472', NULL, 'Rafaella Niak (CRP 96/85472) é neuropsicóloga (Cepsic-HC/FMUSP) e psicoterapeuta especialista em terapia cognitivo-comportamental. Mestrando em Neurologia na FMUSP. É pesquisadora de neuroestimulação elétrica transcraniana com pacientes que sofreram traumatismo craniano. Atua desde 2007 com atendimento clínico para adultos, adolescentes e crianças. Além disso é pós-graduado em Gestão de Pessoas e experiência com treinamento e desenvolvimento de colaboradores de diversas empresas, abordando temas variados.', '$2a$12$OxYUyh5EiJils2LaYBMuPuSmwq7gYEtrTbMrztK/kA6TSdbp16g6W', '(85) 2165-4759', 'Rua General Clarindo de Queiroz', 244, 'https://images.unsplash.com/photo-1602339859268-26eaa489a06a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=510&q=80', '60035130', 'Fortaleza', 'CE', NULL, NULL, '2021-05-12 15:16:08', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20201117110845-create-session.js'),
('20201123170436-create-profissionais.js'),
('20201128142502-create-materiais.js');

-- --------------------------------------------------------

--
-- Estrutura da tabela `session`
--

CREATE TABLE `session` (
  `id` int(11) NOT NULL,
  `sid` text NOT NULL,
  `data` text NOT NULL,
  `expires` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `session`
--

INSERT INTO `session` (`id`, `sid`, `data`, `expires`, `created_at`, `updated_at`) VALUES
(4, '2xrT8WGUim-C3BxI5RGSKQXFSnyIxnKJ', '{\"cookie\":{\"originalMaxAge\":2592000000,\"expires\":\"2021-06-20T18:36:33.247Z\",\"httpOnly\":true,\"path\":\"/\"},\"profissionalId\":1}', '2021-06-20 18:36:52', '2021-05-21 18:36:33', '2021-05-21 18:36:52');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `materiais`
--
ALTER TABLE `materiais`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profissional_id` (`profissional_id`);

--
-- Índices para tabela `profissionais`
--
ALTER TABLE `profissionais`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Índices para tabela `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `materiais`
--
ALTER TABLE `materiais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `profissionais`
--
ALTER TABLE `profissionais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `session`
--
ALTER TABLE `session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `materiais`
--
ALTER TABLE `materiais`
  ADD CONSTRAINT `materiais_ibfk_1` FOREIGN KEY (`profissional_id`) REFERENCES `profissionais` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
