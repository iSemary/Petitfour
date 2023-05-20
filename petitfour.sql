-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 21, 2023 at 01:40 AM
-- Server version: 8.0.33-0ubuntu0.22.04.2
-- PHP Version: 8.1.18

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
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `published_at` datetime DEFAULT NULL,
  `status` tinyint UNSIGNED DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_skills`
--

CREATE TABLE `blog_skills` (
  `id` int NOT NULL,
  `blog_id` int NOT NULL,
  `skill_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_views`
--

CREATE TABLE `blog_views` (
  `id` int NOT NULL,
  `blog_id` int NOT NULL,
  `ip` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_general_ci NOT NULL,
  `priority` tinyint NOT NULL DEFAULT '0',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
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
-- Table structure for table `design_config`
--

CREATE TABLE `design_config` (
  `id` int NOT NULL,
  `primary_color` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `secondary_color` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `experiences`
--

CREATE TABLE `experiences` (
  `id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `category_id` int DEFAULT NULL,
  `type` tinyint(1) NOT NULL DEFAULT '1',
  `priority` tinyint NOT NULL DEFAULT '0',
  `icon` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `start_date` date DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `name`, `category_id`, `type`, `priority`, `icon`, `start_date`, `updated_at`, `created_at`) VALUES
(1, 'React', 1, 1, 1, 'react.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(2, 'Bootstrap', 1, 0, 1, 'bootstrap.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(3, 'Material UI', 1, 0, 1, 'mui.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(4, 'Redux', 1, 0, 1, 'redux.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(5, 'Gulp', 1, 0, 1, 'gulp.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(6, 'Webpack', 1, 0, 1, 'webpack.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(7, 'jQuery', 1, 1, 1, 'jquery.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(8, 'Vue', 1, 1, 1, 'vue.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(9, 'HTML', 1, 0, 1, 'html.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(10, 'CSS', 1, 0, 1, 'css.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(11, 'Apllo', 1, 0, 1, 'apollo.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(12, 'Sass', 1, 0, 1, 'sass_outline.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(13, 'PHP', 2, 1, 1, 'php.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(14, 'Laravel', 2, 1, 1, 'laravel.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(15, 'MySQL', 2, 1, 1, 'mysql.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(16, 'MongoDB', 2, 0, 1, 'mongodb.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(17, 'NodeJS', 2, 0, 1, 'nodejs.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(18, 'Redis', 2, 0, 1, 'redis.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(19, 'RabbitMQ', 2, 0, 1, 'rabbitmq.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(20, 'Git', 3, 0, 1, 'git.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(21, 'Docker', 3, 0, 1, 'docker.webp', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(22, 'Apache', 3, 1, 1, 'apache.webp', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(23, 'Nginx', 3, 1, 1, 'nginx.webp', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(24, 'Linux', 3, 1, 1, 'linux.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(25, 'AWS', 2, 0, 1, 'aws.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(26, 'Azure', 2, 0, 1, 'azure.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(27, 'Oracle Cloud', 2, 0, 1, 'oracle_cloud.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(28, 'GraphQL', 2, 0, 1, 'graphql.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(29, 'JS', 1, 0, 1, 'js.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(30, 'Cloudflare', 3, 0, 1, 'cloudflare.png', NULL, '2023-03-12 16:15:13', '2023-03-12 16:15:13'),
(31, '50', 1, 0, 1, '646944cd71b9c.webp', NULL, '2023-05-20 22:08:13', '2023-05-20 22:08:13'),
(32, 'Len Barton', 1, 0, 5, '64694bf46be5d.webp', '1982-02-05', '2023-05-20 22:38:44', '2023-05-20 22:38:44');

-- --------------------------------------------------------

--
-- Table structure for table `social_links`
--

CREATE TABLE `social_links` (
  `id` int NOT NULL,
  `link` varchar(1024) COLLATE utf8mb4_general_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `updated_at`, `created_at`) VALUES
(1, 'Abdelrahman', 'abdelrahmansamirmostafa@gmail.com', '$2a$12$TTVSN5vlt1gG5zQU4LN/1ePA4vgrS024Ktzwl2Voc5eNwT0wAIAjm', '2023-05-19 02:35:47', '2023-05-19 02:35:47');

-- --------------------------------------------------------

--
-- Table structure for table `user_config`
--

CREATE TABLE `user_config` (
  `id` int NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone_number` int DEFAULT NULL,
  `country_code` tinyint DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `position` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `bio` varchar(1024) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `design_config`
--
ALTER TABLE `design_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experiences`
--
ALTER TABLE `experiences`
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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_config`
--
ALTER TABLE `user_config`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `design_config`
--
ALTER TABLE `design_config`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `experiences`
--
ALTER TABLE `experiences`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `social_links`
--
ALTER TABLE `social_links`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_config`
--
ALTER TABLE `user_config`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

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
