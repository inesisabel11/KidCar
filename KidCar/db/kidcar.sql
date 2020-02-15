-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 28-Nov-2019 às 16:45
-- Versão do servidor: 10.4.10-MariaDB
-- versão do PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `kidcar`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cars`
--

DROP TABLE IF EXISTS `cars`;
CREATE TABLE IF NOT EXISTS `cars` (
  `car_id` int(11) NOT NULL AUTO_INCREMENT,
  `car_color` varchar(60) NOT NULL,
  `car_description` varchar(60) NOT NULL,
  `car_type_car_id` int(11) NOT NULL,
  PRIMARY KEY (`car_id`),
  KEY `cars_fk_type_cars` (`car_type_car_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cars`
--

INSERT INTO `cars` (`car_id`, `car_color`, `car_description`, `car_type_car_id`) VALUES
(1, 'azul', 'carro para um bebe', 1),
(2, 'vermelho', 'carro para dois bebes', 2),
(3, 'rosa', 'carro para um bebe', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_text` varchar(100) NOT NULL,
  `comment_user_id` int(11) NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `comments_fk_users` (`comment_user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `comments`
--

INSERT INTO `comments` (`comment_id`, `comment_text`, `comment_user_id`) VALUES
(1, 'Carrinho sujo, com maus tratamentos', 1),
(2, 'Carrinho em bons tratamentos', 2),
(3, 'Aplicação funcional', 3),
(4, 'Aplicação não funcional, com erros e bugs', 4),
(5, 'Aplicação de difícil uso e confusa', 1),
(6, 'Aplicação de fácil uso', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `comments_cars`
--

DROP TABLE IF EXISTS `comments_cars`;
CREATE TABLE IF NOT EXISTS `comments_cars` (
  `comment_car_id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_car_text` varchar(100) NOT NULL,
  `comment_car_user_id` int(11) NOT NULL,
  `comment_car_car_id` int(11) NOT NULL,
  PRIMARY KEY (`comment_car_id`),
  KEY `comments_cars_fk_users` (`comment_car_user_id`),
  KEY `comments_cars_fk_cars` (`comment_car_car_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `comments_cars`
--

INSERT INTO `comments_cars` (`comment_car_id`, `comment_car_text`, `comment_car_user_id`, `comment_car_car_id`) VALUES
(1, 'Carrinho sujo, com maus tratamentos', 1, 1),
(2, 'Carrinho em bons tratamentos', 2, 2),
(3, 'Carrinho difícil de desbloquear', 3, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `countries`
--

DROP TABLE IF EXISTS `countries`;
CREATE TABLE IF NOT EXISTS `countries` (
  `country_id` int(11) NOT NULL AUTO_INCREMENT,
  `country_name` varchar(50) NOT NULL,
  PRIMARY KEY (`country_id`)
) ENGINE=MyISAM AUTO_INCREMENT=253 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `countries`
--

INSERT INTO `countries` (`country_id`, `country_name`) VALUES
(1, 'AFEGANISTÃO'),
(2, 'ACROTÍRI E DECELIA'),
(3, 'ÁFRICA DO SUL'),
(4, 'ALBÂNIA'),
(5, 'ALEMANHA'),
(6, 'AMERICAN SAMOA'),
(7, 'ANDORRA'),
(8, 'ANGOLA'),
(9, 'ANGUILLA'),
(10, 'ANTÍGUA E BARBUDA'),
(11, 'ANTILHAS NEERLANDESAS'),
(12, 'ARÁBIA SAUDITA'),
(13, 'ARGÉLIA'),
(14, 'ARGENTINA'),
(15, 'ARMÉNIA'),
(16, 'ARUBA'),
(17, 'AUSTRÁLIA'),
(18, 'ÁUSTRIA'),
(19, 'AZERBAIJÃO'),
(20, 'BAHAMAS'),
(21, 'BANGLADECHE'),
(22, 'BARBADOS'),
(23, 'BARÉM'),
(24, 'BASSAS DA ÍNDIA'),
(25, 'BÉLGICA'),
(26, 'BELIZE'),
(27, 'BENIM'),
(28, 'BERMUDAS'),
(29, 'BIELORRÚSSIA'),
(30, 'BOLÍVIA'),
(31, 'BÓSNIA E HERZEGOVINA'),
(32, 'BOTSUANA'),
(33, 'BRASIL'),
(34, 'BRUNEI DARUSSALAM'),
(35, 'BULGÁRIA'),
(36, 'BURQUINA FASO'),
(37, 'BURUNDI'),
(38, 'BUTÃO'),
(39, 'CABO VERDE'),
(40, 'CAMARÕES'),
(41, 'CAMBOJA'),
(42, 'CANADÁ'),
(43, 'CATAR'),
(44, 'CAZAQUISTÃO'),
(45, 'CENTRO-AFRICANA REPÚBLICA'),
(46, 'CHADE'),
(47, 'CHILE'),
(48, 'CHINA'),
(49, 'CHIPRE'),
(50, 'COLÔMBIA'),
(51, 'COMORES'),
(52, 'CONGO'),
(53, 'CONGO REPÚBLICA DEMOCRÁTICA'),
(54, 'COREIA DO NORTE'),
(55, 'COREIA DO SUL'),
(56, 'COSTA DO MARFIM'),
(57, 'COSTA RICA'),
(58, 'CROÁCIA'),
(59, 'CUBA'),
(60, 'DINAMARCA'),
(61, 'DOMÍNICA'),
(62, 'EGIPTO'),
(63, 'EMIRADOS ÁRABES UNIDOS'),
(64, 'EQUADOR'),
(65, 'ERITREIA'),
(66, 'ESLOVÁQUIA'),
(67, 'ESLOVÉNIA'),
(68, 'ESPANHA'),
(69, 'ESTADOS UNIDOS'),
(70, 'ESTÓNIA'),
(71, 'ETIÓPIA'),
(72, 'FAIXA DE GAZA'),
(73, 'FIJI'),
(74, 'FILIPINAS'),
(75, 'FINLÂNDIA'),
(76, 'FRANÇA'),
(77, 'GABÃO'),
(78, 'GÂMBIA'),
(79, 'GANA'),
(80, 'GEÓRGIA'),
(81, 'GIBRALTAR'),
(82, 'GRANADA'),
(83, 'GRÉCIA'),
(84, 'GRONELÂNDIA'),
(85, 'GUADALUPE'),
(86, 'GUAM'),
(87, 'GUATEMALA'),
(88, 'GUERNSEY'),
(89, 'GUIANA'),
(90, 'GUIANA FRANCESA'),
(91, 'GUINÉ'),
(92, 'GUINÉ EQUATORIAL'),
(93, 'GUINÉ-BISSAU'),
(94, 'HAITI'),
(95, 'HONDURAS'),
(96, 'HONG KONG'),
(97, 'HUNGRIA'),
(98, 'IÉMEN'),
(99, 'ILHA BOUVET'),
(100, 'ILHA CHRISTMAS'),
(101, 'ILHA DE CLIPPERTON'),
(102, 'ILHA DE JOÃO DA NOVA'),
(103, 'ILHA DE MAN'),
(104, 'ILHA DE NAVASSA'),
(105, 'ILHA EUROPA'),
(106, 'ILHA NORFOLK'),
(107, 'ILHA TROMELIN'),
(108, 'ILHAS ASHMORE E CARTIER'),
(109, 'ILHAS CAIMAN'),
(110, 'ILHAS COCOS (KEELING)'),
(111, 'ILHAS COOK'),
(112, 'ILHAS DO MAR DE CORAL'),
(113, 'ILHAS FALKLANDS (ILHAS MALVINAS)'),
(114, 'ILHAS FEROE'),
(115, 'ILHAS GEÓRGIA DO SUL E SANDWICH DO SUL'),
(116, 'ILHAS MARIANAS DO NORTE'),
(117, 'ILHAS MARSHALL'),
(118, 'ILHAS PARACEL'),
(119, 'ILHAS PITCAIRN'),
(120, 'ILHAS SALOMÃO'),
(121, 'ILHAS SPRATLY'),
(122, 'ILHAS VIRGENS AMERICANAS'),
(123, 'ILHAS VIRGENS BRITÂNICAS'),
(124, 'ÍNDIA'),
(125, 'INDONÉSIA'),
(126, 'IRÃO'),
(127, 'IRAQUE'),
(128, 'IRLANDA'),
(129, 'ISLÂNDIA'),
(130, 'ISRAEL'),
(131, 'ITÁLIA'),
(132, 'JAMAICA'),
(133, 'JAN MAYEN'),
(134, 'JAPÃO'),
(135, 'JERSEY'),
(136, 'JIBUTI'),
(137, 'JORDÂNIA'),
(138, 'KIRIBATI'),
(139, 'KOWEIT'),
(140, 'LAOS'),
(141, 'LESOTO'),
(142, 'LETÓNIA'),
(143, 'LÍBANO'),
(144, 'LIBÉRIA'),
(145, 'LÍBIA'),
(146, 'LISTENSTAINE'),
(147, 'LITUÂNIA'),
(148, 'LUXEMBURGO'),
(149, 'MACAU'),
(150, 'MACEDÓNIA'),
(151, 'MADAGÁSCAR'),
(152, 'MALÁSIA'),
(153, 'MALAVI'),
(154, 'MALDIVAS'),
(155, 'MALI'),
(156, 'MALTA'),
(157, 'MARROCOS'),
(158, 'MARTINICA'),
(159, 'MAURÍCIA'),
(160, 'MAURITÂNIA'),
(161, 'MAYOTTE'),
(162, 'MÉXICO'),
(163, 'MIANMAR'),
(164, 'MICRONÉSIA'),
(165, 'MOÇAMBIQUE'),
(166, 'MOLDÁVIA'),
(167, 'MÓNACO'),
(168, 'MONGÓLIA'),
(169, 'MONTENEGRO'),
(170, 'MONTSERRAT'),
(171, 'NAMÍBIA'),
(172, 'NAURU'),
(173, 'NEPAL'),
(174, 'NICARÁGUA'),
(175, 'NÍGER'),
(176, 'NIGÉRIA'),
(177, 'NIUE'),
(178, 'NORUEGA'),
(179, 'NOVA CALEDÓNIA'),
(180, 'NOVA ZELÂNDIA'),
(181, 'OMÃ'),
(182, 'PAÍSES BAIXOS'),
(183, 'PALAU'),
(184, 'PALESTINA'),
(185, 'PANAMÁ'),
(186, 'PAPUÁSIA-NOVA GUINÉ'),
(187, 'PAQUISTÃO'),
(188, 'PARAGUAI'),
(189, 'PERU'),
(190, 'POLINÉSIA FRANCESA'),
(191, 'POLÓNIA'),
(192, 'PORTO RICO'),
(193, 'PORTUGAL'),
(194, 'QUÉNIA'),
(195, 'QUIRGUIZISTÃO'),
(196, 'REINO UNIDO'),
(197, 'REPÚBLICA CHECA'),
(198, 'REPÚBLICA DOMINICANA'),
(199, 'ROMÉNIA'),
(200, 'RUANDA'),
(201, 'RÚSSIA'),
(202, 'SAHARA OCCIDENTAL'),
(203, 'SALVADOR'),
(204, 'SAMOA'),
(205, 'SANTA HELENA'),
(206, 'SANTA LÚCIA'),
(207, 'SANTA SÉ'),
(208, 'SÃO CRISTÓVÃO E NEVES'),
(209, 'SÃO MARINO'),
(210, 'SÃO PEDRO E MIQUELÃO'),
(211, 'SÃO TOMÉ E PRÍNCIPE'),
(212, 'SÃO VICENTE E GRANADINAS'),
(213, 'SEICHELES'),
(214, 'SENEGAL'),
(215, 'SERRA LEOA'),
(216, 'SÉRVIA'),
(217, 'SINGAPURA'),
(218, 'SÍRIA'),
(219, 'SOMÁLIA'),
(220, 'SRI LANCA'),
(221, 'SUAZILÂNDIA'),
(222, 'SUDÃO'),
(223, 'SUÉCIA'),
(224, 'SUÍÇA'),
(225, 'SURINAME'),
(226, 'SVALBARD'),
(227, 'TAILÂNDIA'),
(228, 'TAIWAN'),
(229, 'TAJIQUISTÃO'),
(230, 'TANZÂNIA'),
(231, 'TERRITÓRIO BRITÂNICO DO OCEANO ÍNDICO'),
(232, 'TERRITÓRIO DAS ILHAS HEARD E MCDONALD'),
(233, 'TIMOR-LESTE'),
(234, 'TOGO'),
(235, 'TOKELAU'),
(236, 'TONGA'),
(237, 'TRINDADE E TOBAGO'),
(238, 'TUNÍSIA'),
(239, 'TURKS E CAICOS'),
(240, 'TURQUEMENISTÃO'),
(241, 'TURQUIA'),
(242, 'TUVALU'),
(243, 'UCRÂNIA'),
(244, 'UGANDA'),
(245, 'URUGUAI'),
(246, 'USBEQUISTÃO'),
(247, 'VANUATU'),
(248, 'VENEZUELA'),
(249, 'VIETNAME'),
(250, 'WALLIS E FUTUNA'),
(251, 'ZÂMBIA'),
(252, 'ZIMBABUÉ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `favorites`
--

DROP TABLE IF EXISTS `favorites`;
CREATE TABLE IF NOT EXISTS `favorites` (
  `favorite_id` int(11) NOT NULL AUTO_INCREMENT,
  `favorite_user_id` int(11) NOT NULL,
  `favorite_car_id` int(11) NOT NULL,
  PRIMARY KEY (`favorite_id`),
  KEY `favorites_fk_users` (`favorite_user_id`),
  KEY `favorites_fk_cars` (`favorite_car_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `favorites`
--

INSERT INTO `favorites` (`favorite_id`, `favorite_user_id`, `favorite_car_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 2, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `rents`
--

DROP TABLE IF EXISTS `rents`;
CREATE TABLE IF NOT EXISTS `rents` (
  `rent_id` int(11) NOT NULL AUTO_INCREMENT,
  `rent_date_start` datetime NOT NULL,
  `rent_date_end` datetime NOT NULL,
  PRIMARY KEY (`rent_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `rents`
--

INSERT INTO `rents` (`rent_id`, `rent_date_start`, `rent_date_end`) VALUES
(1, '2019-03-09 20:20:20', '2019-03-09 22:20:20'),
(2, '2019-11-28 20:20:20', '2019-11-28 17:18:00'),
(3, '2019-11-29 20:20:20', '2019-11-29 19:18:20');

-- --------------------------------------------------------

--
-- Estrutura da tabela `rents_cars`
--

DROP TABLE IF EXISTS `rents_cars`;
CREATE TABLE IF NOT EXISTS `rents_cars` (
  `rent_car_car_id` int(11) NOT NULL,
  `rent_car_rent_id` int(11) NOT NULL,
  KEY `rent_cars_fk_cars` (`rent_car_car_id`),
  KEY `rent_cars_fk_rent` (`rent_car_rent_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `rents_cars`
--

INSERT INTO `rents_cars` (`rent_car_car_id`, `rent_car_rent_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `rents_user`
--

DROP TABLE IF EXISTS `rents_user`;
CREATE TABLE IF NOT EXISTS `rents_user` (
  `rent_user_user_id` int(11) NOT NULL,
  `rent_user_rent_id` int(11) NOT NULL,
  KEY `rents_user_fk_rent` (`rent_user_user_id`),
  KEY `rent_user_fk_rent` (`rent_user_rent_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `rents_user`
--

INSERT INTO `rents_user` (`rent_user_user_id`, `rent_user_rent_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(3, 3),
(4, 1),
(4, 2),
(4, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `type_cars`
--

DROP TABLE IF EXISTS `type_cars`;
CREATE TABLE IF NOT EXISTS `type_cars` (
  `type_car_id` int(11) NOT NULL AUTO_INCREMENT,
  `type_car_description` varchar(60) NOT NULL,
  PRIMARY KEY (`type_car_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `type_cars`
--

INSERT INTO `type_cars` (`type_car_id`, `type_car_description`) VALUES
(1, 'carro para um bebe'),
(2, 'carro para dois bebes');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(60) NOT NULL,
  `user_email` varchar(60) NOT NULL,
  `user_phone` varchar(50) NOT NULL,
  `user_country_id` int(11) NOT NULL,
  `user_pass` varchar(10) NOT NULL,
  `user_nif` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `users_fk_countries` (`user_country_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_phone`, `user_country_id`, `user_pass`, `user_nif`) VALUES
(1, 'Marta Filipa Monteiro Ferreira', 'marta@gmail.com', '914567897', 193, 'marta123', '217896542'),
(2, 'Inês Martins', 'ines@gmail.com', '964785963', 193, 'ines456', '214785632'),
(3, 'André Boavida', 'andre@hotmail.com', '934759862', 33, 'andre789', '212347896'),
(4, 'Joana Almeida', 'joana@hotmail.com', '967596314', 68, 'joana234', '216547489');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
