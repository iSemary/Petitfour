-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2023 at 10:30 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petitfour`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` text DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `status` tinyint(3) UNSIGNED DEFAULT 0,
  `published_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_skills`
--

CREATE TABLE `blog_skills` (
  `id` int(11) NOT NULL,
  `blog_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_skills`
--

INSERT INTO `blog_skills` (`id`, `blog_id`, `skill_id`) VALUES
(1, 3, 1),
(2, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `blog_views`
--

CREATE TABLE `blog_views` (
  `id` int(11) NOT NULL,
  `blog_id` int(11) NOT NULL,
  `ip` varchar(255) NOT NULL,
  `agent` varchar(1024) DEFAULT NULL,
  `updated_at` datetime DEFAULT current_timestamp(),
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `priority` tinyint(4) NOT NULL DEFAULT 0,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `title`, `description`, `priority`, `updated_at`, `created_at`) VALUES
(1, 'Front End', 'Front', 'Front', 3, '2023-03-12 16:17:34', '2023-03-12 16:17:34'),
(2, 'Back End', 'Back', 'Back', 2, '2023-03-12 16:17:34', '2023-03-12 16:17:34'),
(3, 'Server Side', 'Server Side', 'Server Side', 1, '2023-03-12 16:17:34', '2023-03-12 16:17:34');

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` varchar(1820) DEFAULT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT 0,
  `updated_at` datetime DEFAULT current_timestamp(),
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_messages`
--

INSERT INTO `contact_messages` (`id`, `name`, `email`, `subject`, `message`, `seen`, `updated_at`, `created_at`) VALUES
(1, 'Abdelrahman Samir', 'abdelrahmansamirmostafa@gmail.com', 'New Candidate', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia\r\n', 0, '2023-05-25 00:21:26', '2023-05-25 00:21:26'),
(2, 'Abdelrahman Samir', 'abdelrahmansamirmostafa@gmail.com', '1', 'Hello Abdelrahman, I\'d like to contact with you about something really serious.', 0, '2023-05-27 01:19:59', '2023-05-27 01:19:59'),
(3, 'Abdelrahman Samir', 'abdelrahmansamirmostafa@gmail.com', '1', 'Hello Abdelrahman, I\'d like to contact with you about something really serious.', 0, '2023-05-27 20:43:06', '2023-05-27 20:43:06');

-- --------------------------------------------------------

--
-- Table structure for table `experiences`
--

CREATE TABLE `experiences` (
  `id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_logo` varchar(255) NOT NULL,
  `company_location` varchar(255) NOT NULL,
  `position_title` varchar(255) NOT NULL,
  `summary` text NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `updated_at` datetime DEFAULT current_timestamp(),
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `experience_skills`
--

CREATE TABLE `experience_skills` (
  `id` int(11) NOT NULL,
  `experience_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `experience_skills`
--

INSERT INTO `experience_skills` (`id`, `experience_id`, `skill_id`) VALUES
(1, 2, 1),
(2, 2, 6),
(14, 2, 27),
(15, 2, 29),
(16, 2, 30),
(17, 2, 32);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(1024) NOT NULL,
  `repository_link` varchar(255) DEFAULT NULL,
  `tags` varchar(1024) DEFAULT NULL,
  `type` tinyint(1) NOT NULL DEFAULT 0,
  `priority` tinyint(4) NOT NULL DEFAULT 1,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `updated_at` datetime DEFAULT current_timestamp(),
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_images`
--

CREATE TABLE `project_images` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `project_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `project_skills`
--

CREATE TABLE `project_skills` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_skills`
--

INSERT INTO `project_skills` (`id`, `project_id`, `skill_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 7),
(6, 1, 8),
(7, 1, 10),
(8, 1, 13),
(9, 1, 15),
(10, 1, 16),
(11, 1, 18),
(12, 1, 21),
(13, 1, 23),
(14, 1, 27),
(15, 1, 28),
(16, 1, 30),
(17, 1, 32),
(18, 2, 1),
(19, 2, 2),
(20, 2, 3),
(21, 2, 4),
(22, 2, 7),
(23, 2, 8),
(24, 2, 10),
(25, 2, 13),
(26, 2, 15),
(27, 2, 16),
(28, 2, 18),
(29, 2, 21),
(30, 2, 23),
(31, 2, 27),
(32, 2, 28),
(33, 2, 30),
(34, 2, 32),
(35, 3, 1),
(36, 3, 2),
(37, 3, 3),
(38, 3, 4),
(39, 3, 7),
(40, 3, 8),
(41, 3, 10),
(42, 3, 13),
(43, 3, 15),
(44, 3, 16),
(45, 3, 18),
(46, 3, 21),
(47, 3, 23),
(48, 3, 27),
(49, 3, 28),
(50, 3, 30),
(51, 3, 32),
(52, 4, 1),
(53, 4, 2),
(54, 4, 3),
(55, 4, 4),
(56, 4, 7),
(57, 4, 8),
(58, 4, 10),
(59, 4, 13),
(60, 4, 15),
(61, 4, 16),
(62, 4, 18),
(63, 4, 21),
(64, 4, 23),
(65, 4, 27),
(66, 4, 28),
(67, 4, 30),
(68, 4, 32),
(69, 5, 1),
(70, 5, 2),
(71, 5, 3),
(72, 5, 4),
(73, 5, 7),
(74, 5, 8),
(75, 5, 10),
(76, 5, 13),
(77, 5, 15),
(78, 5, 16),
(79, 5, 18),
(80, 5, 21),
(81, 5, 23),
(82, 5, 27),
(83, 5, 28),
(84, 5, 30),
(85, 5, 32),
(86, 6, 1),
(87, 6, 2),
(88, 6, 3),
(89, 6, 4),
(90, 6, 7),
(91, 6, 8),
(92, 6, 10),
(93, 6, 13),
(94, 6, 15),
(95, 6, 16),
(96, 6, 18),
(97, 6, 21),
(98, 6, 23),
(99, 6, 27),
(100, 6, 28),
(101, 6, 30),
(102, 6, 32),
(103, 7, 7),
(104, 7, 8),
(105, 7, 13),
(106, 7, 15),
(107, 7, 16),
(108, 7, 17),
(109, 7, 20),
(110, 7, 26),
(111, 7, 31),
(112, 8, 5),
(113, 8, 9),
(114, 8, 13),
(115, 8, 14),
(116, 8, 19),
(117, 8, 21),
(118, 9, 2),
(119, 9, 11),
(120, 9, 12),
(121, 9, 14),
(122, 9, 15),
(123, 9, 19),
(124, 9, 20),
(125, 9, 22),
(126, 9, 24),
(127, 9, 25),
(128, 9, 27),
(129, 9, 28),
(130, 9, 30),
(131, 10, 2),
(132, 10, 11),
(133, 10, 12),
(134, 10, 14),
(135, 10, 15),
(136, 10, 19),
(137, 10, 20),
(138, 10, 22),
(139, 10, 24),
(140, 10, 25),
(141, 10, 27),
(142, 10, 28),
(143, 10, 30),
(144, 11, 2),
(145, 11, 11),
(146, 11, 12),
(147, 11, 14),
(148, 11, 15),
(149, 11, 19),
(150, 11, 20),
(151, 11, 22),
(152, 11, 24),
(153, 11, 25),
(154, 11, 27),
(155, 11, 28),
(156, 11, 30),
(157, 12, 2),
(158, 12, 11),
(159, 12, 12),
(160, 12, 14),
(161, 12, 15),
(162, 12, 19),
(163, 12, 20),
(164, 12, 22),
(165, 12, 24),
(166, 12, 25),
(167, 12, 27),
(168, 12, 28),
(169, 12, 30),
(170, 13, 3),
(171, 13, 6),
(172, 13, 10),
(173, 13, 11),
(174, 13, 13),
(175, 13, 15),
(176, 13, 18),
(177, 13, 23),
(178, 13, 27),
(179, 13, 28),
(180, 14, 1),
(181, 14, 2),
(182, 14, 3),
(183, 14, 4),
(184, 14, 5),
(185, 14, 8),
(186, 14, 12),
(187, 14, 13),
(188, 14, 14),
(189, 14, 15),
(190, 14, 18),
(191, 14, 19),
(192, 14, 20),
(193, 14, 31),
(194, 15, 2),
(195, 15, 3),
(196, 15, 5),
(197, 15, 7),
(198, 15, 17),
(199, 15, 18),
(200, 15, 25),
(201, 15, 31),
(202, 16, 1),
(203, 16, 2),
(204, 16, 7),
(205, 16, 12),
(206, 16, 13),
(207, 16, 25),
(208, 16, 27),
(209, 16, 29),
(210, 16, 31),
(211, 17, 3),
(212, 17, 4),
(213, 17, 5),
(214, 17, 6),
(215, 17, 8),
(216, 17, 10),
(217, 17, 13),
(218, 17, 15),
(219, 17, 16),
(220, 17, 17),
(221, 17, 18),
(222, 17, 19),
(223, 17, 20),
(224, 17, 24),
(225, 17, 26),
(226, 17, 27),
(227, 17, 31),
(228, 18, 2),
(229, 18, 3),
(230, 18, 8),
(231, 18, 9),
(232, 18, 11),
(233, 18, 16),
(234, 18, 17),
(235, 18, 18),
(236, 18, 19),
(237, 18, 20),
(238, 18, 23),
(239, 18, 26),
(240, 18, 28),
(241, 18, 31),
(242, 18, 32);

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `type` tinyint(1) NOT NULL DEFAULT 1,
  `priority` tinyint(4) NOT NULL DEFAULT 0,
  `icon` varchar(255) NOT NULL,
  `theme_icon` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `name`, `category_id`, `type`, `priority`, `icon`, `theme_icon`, `start_date`, `updated_at`, `created_at`) VALUES
(1, 'React', 1, 1, 1, 'react.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(2, 'Bootstrap', 1, 0, 1, 'bootstrap.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(3, 'Material UI', 1, 0, 1, 'mui.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(4, 'Redux', 1, 0, 1, 'redux.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(5, 'Gulp', 1, 0, 1, 'gulp.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(6, 'Webpack', 1, 0, 1, 'webpack.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(7, 'jQuery', 1, 1, 1, 'jquery.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(8, 'Vue', 1, 1, 1, 'vue.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(9, 'HTML', 1, 0, 1, 'html.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(10, 'CSS', 1, 0, 1, 'css.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(11, 'Apllo', 1, 0, 1, 'apollo.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(12, 'Sass', 1, 0, 1, 'sass_outline.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(13, 'PHP', 2, 1, 1, 'php.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(14, 'Laravel', 2, 1, 1, 'laravel.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(15, 'MySQL', 2, 1, 1, 'mysql.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(16, 'MongoDB', 2, 0, 1, 'mongodb.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(17, 'NodeJS', 2, 0, 1, 'nodejs.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(18, 'Redis', 2, 0, 1, 'redis.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(19, 'RabbitMQ', 2, 0, 1, 'rabbitmq.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(20, 'Git', 3, 0, 1, 'git.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(21, 'Docker', 3, 0, 1, 'docker.webp', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(22, 'Apache', 3, 1, 1, 'apache.webp', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(23, 'Nginx', 3, 1, 1, 'nginx.webp', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(24, 'Linux', 3, 1, 1, 'linux.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(25, 'AWS', 2, 0, 1, 'aws.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(26, 'Azure', 2, 0, 1, 'azure.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(27, 'Oracle Cloud', 2, 0, 1, 'oracle_cloud.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(28, 'GraphQL', 2, 0, 1, 'graphql.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(29, 'JS', 1, 0, 1, 'js.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(30, 'Cloudflare', 3, 0, 1, 'cloudflare.png', NULL, NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13');

-- --------------------------------------------------------

--
-- Table structure for table `social_links`
--

CREATE TABLE `social_links` (
  `id` int(11) NOT NULL,
  `url` varchar(1024) NOT NULL,
  `type` varchar(255) NOT NULL,
  `priority` tinyint(4) NOT NULL DEFAULT 0,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `social_links`
--

INSERT INTO `social_links` (`id`, `url`, `type`, `priority`, `updated_at`, `created_at`) VALUES
(4, 'gitt', '2', 2, '2023-05-27 19:18:00', '2023-05-27 19:16:33'),
(7, 'new', '1', 1, '2023-05-27 19:18:00', '2023-05-27 19:18:00');

-- --------------------------------------------------------

--
-- Table structure for table `system_configs`
--

CREATE TABLE `system_configs` (
  `id` int(11) NOT NULL,
  `primary_color` varchar(255) DEFAULT NULL,
  `secondary_color` varchar(255) DEFAULT NULL,
  `contact_email` varchar(255) DEFAULT NULL,
  `openai_api_token` varchar(255) DEFAULT NULL,
  `google_analytics_id` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT current_timestamp(),
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `system_configs`
--

INSERT INTO `system_configs` (`id`, `primary_color`, `secondary_color`, `contact_email`, `openai_api_token`, `google_analytics_id`, `logo`, `updated_at`, `created_at`) VALUES
(1, '#79b56c', '#5ae01d', 'abdelrahmansamirmostafa@gmail.com', 'Corrupti qui eos c', 'G-GE1CCC88DK', '647267194026f.webp', '2023-05-27 20:24:57', '2023-05-26 03:52:52');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `updated_at`, `created_at`) VALUES
(1, 'Abdelrahman', 'abdelrahmansamirmostafa@gmail.com', '$2a$12$TTVSN5vlt1gG5zQU4LN/1ePA4vgrS024Ktzwl2Voc5eNwT0wAIAjm', '2023-05-19 02:35:47', '2023-05-19 02:35:47');

-- --------------------------------------------------------

--
-- Table structure for table `user_configs`
--

CREATE TABLE `user_configs` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `phone_number` int(11) DEFAULT NULL,
  `country_code` tinyint(4) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `bio` varchar(1024) DEFAULT NULL,
  `slogan` varchar(1024) DEFAULT NULL,
  `home_image` varchar(255) DEFAULT NULL,
  `theme_home_image` varchar(255) DEFAULT NULL,
  `resume` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT current_timestamp(),
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_configs`
--

INSERT INTO `user_configs` (`id`, `first_name`, `last_name`, `email`, `country`, `city`, `phone_number`, `country_code`, `address`, `position`, `bio`, `slogan`, `home_image`, `theme_home_image`, `resume`, `updated_at`, `created_at`) VALUES
(1, 'Abdelrahman', 'Samir', 'abdelrahmansamirmostafa@gmail.com', 'Egypt', 'Cairo', 1027012337, 1, NULL, 'Full stack engineer', NULL, NULL, '6470e678da5a4.webp', '6470e678ec078.webp', '647310cfca1fb.pdf', '2023-05-28 08:29:03', '2023-05-26 04:10:54');

-- --------------------------------------------------------

--
-- Table structure for table `views_type`
--

CREATE TABLE `views_type` (
  `id` int(11) NOT NULL,
  `type` tinyint(4) NOT NULL DEFAULT 0,
  `ip` varchar(255) NOT NULL,
  `agent` varchar(1024) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_skills`
--
ALTER TABLE `blog_skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experiences`
--
ALTER TABLE `experiences`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experience_skills`
--
ALTER TABLE `experience_skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_images`
--
ALTER TABLE `project_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_skills`
--
ALTER TABLE `project_skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `social_links`
--
ALTER TABLE `social_links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `system_configs`
--
ALTER TABLE `system_configs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_configs`
--
ALTER TABLE `user_configs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `views_type`
--
ALTER TABLE `views_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `blog_skills`
--
ALTER TABLE `blog_skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `experiences`
--
ALTER TABLE `experiences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `experience_skills`
--
ALTER TABLE `experience_skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `project_images`
--
ALTER TABLE `project_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `project_skills`
--
ALTER TABLE `project_skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=243;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `social_links`
--
ALTER TABLE `social_links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `system_configs`
--
ALTER TABLE `system_configs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_configs`
--
ALTER TABLE `user_configs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `views_type`
--
ALTER TABLE `views_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `skills`
--
ALTER TABLE `skills`
  ADD CONSTRAINT `skills_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
