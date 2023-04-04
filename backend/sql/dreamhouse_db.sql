-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-04-2023 a las 21:17:21
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dreamhouse_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add content type', 4, 'add_contenttype'),
(14, 'Can change content type', 4, 'change_contenttype'),
(15, 'Can delete content type', 4, 'delete_contenttype'),
(16, 'Can view content type', 4, 'view_contenttype'),
(17, 'Can add session', 5, 'add_session'),
(18, 'Can change session', 5, 'change_session'),
(19, 'Can delete session', 5, 'delete_session'),
(20, 'Can view session', 5, 'view_session'),
(21, 'Can add category', 6, 'add_category'),
(22, 'Can change category', 6, 'change_category'),
(23, 'Can delete category', 6, 'delete_category'),
(24, 'Can view category', 6, 'view_category'),
(25, 'Can add house', 7, 'add_house'),
(26, 'Can change house', 7, 'change_house'),
(27, 'Can delete house', 7, 'delete_house'),
(28, 'Can view house', 7, 'view_house'),
(29, 'Can add house services', 8, 'add_houseservices'),
(30, 'Can change house services', 8, 'change_houseservices'),
(31, 'Can delete house services', 8, 'delete_houseservices'),
(32, 'Can view house services', 8, 'view_houseservices'),
(33, 'Can add house images', 9, 'add_houseimages'),
(34, 'Can change house images', 9, 'change_houseimages'),
(35, 'Can delete house images', 9, 'delete_houseimages'),
(36, 'Can view house images', 9, 'view_houseimages'),
(37, 'Can add user', 10, 'add_user'),
(38, 'Can change user', 10, 'change_user'),
(39, 'Can delete user', 10, 'delete_user'),
(40, 'Can view user', 10, 'view_user'),
(41, 'Can add profile', 11, 'add_profile'),
(42, 'Can change profile', 11, 'change_profile'),
(43, 'Can delete profile', 11, 'delete_profile'),
(44, 'Can view profile', 11, 'view_profile');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'contenttypes', 'contenttype'),
(6, 'houses', 'category'),
(7, 'houses', 'house'),
(9, 'houses', 'houseimages'),
(8, 'houses', 'houseservices'),
(5, 'sessions', 'session'),
(11, 'users', 'profile'),
(10, 'users', 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'users', '0001_initial', '2023-04-03 18:50:41.439233'),
(2, 'contenttypes', '0001_initial', '2023-04-03 18:50:41.548219'),
(3, 'admin', '0001_initial', '2023-04-03 18:50:41.770240'),
(4, 'admin', '0002_logentry_remove_auto_add', '2023-04-03 18:50:41.787223'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2023-04-03 18:50:41.807247'),
(6, 'contenttypes', '0002_remove_content_type_name', '2023-04-03 18:50:41.966219'),
(7, 'auth', '0001_initial', '2023-04-03 18:50:42.418221'),
(8, 'auth', '0002_alter_permission_name_max_length', '2023-04-03 18:50:42.508218'),
(9, 'auth', '0003_alter_user_email_max_length', '2023-04-03 18:50:42.519222'),
(10, 'auth', '0004_alter_user_username_opts', '2023-04-03 18:50:42.532221'),
(11, 'auth', '0005_alter_user_last_login_null', '2023-04-03 18:50:42.545218'),
(12, 'auth', '0006_require_contenttypes_0002', '2023-04-03 18:50:42.551222'),
(13, 'auth', '0007_alter_validators_add_error_messages', '2023-04-03 18:50:42.565221'),
(14, 'auth', '0008_alter_user_username_max_length', '2023-04-03 18:50:42.582254'),
(15, 'auth', '0009_alter_user_last_name_max_length', '2023-04-03 18:50:42.595228'),
(16, 'auth', '0010_alter_group_name_max_length', '2023-04-03 18:50:42.629221'),
(17, 'auth', '0011_update_proxy_permissions', '2023-04-03 18:50:42.645220'),
(18, 'auth', '0012_alter_user_first_name_max_length', '2023-04-03 18:50:42.657231'),
(19, 'houses', '0001_initial', '2023-04-03 18:50:43.145228'),
(20, 'sessions', '0001_initial', '2023-04-03 18:50:43.216219'),
(21, 'users', '0002_user_groups_user_is_superuser_user_user_permissions', '2023-04-03 18:50:43.849010'),
(22, 'users', '0003_profile', '2023-04-03 18:50:43.984154'),
(23, 'users', '0004_alter_profile_biography', '2023-04-03 18:50:43.999160');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `houses_category`
--

CREATE TABLE `houses_category` (
  `id` bigint(20) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `houses_category`
--

INSERT INTO `houses_category` (`id`, `slug`, `name`, `image`) VALUES
(1, 'for_sale-v0xwom', 'for_sale', 'for_sale.jpg'),
(2, 'rent-kir8dl', 'rent', 'rent.jpg'),
(3, 'vacational_rent-hltss7', 'vacational_rent', 'vacational_rent.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `houses_house`
--

CREATE TABLE `houses_house` (
  `id` bigint(20) NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `latitude` decimal(30,20) NOT NULL,
  `longitude` decimal(30,20) NOT NULL,
  `category_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `houses_house`
--

INSERT INTO `houses_house` (`id`, `image`, `price`, `country`, `location`, `address`, `latitude`, `longitude`, `category_id`, `user_id`) VALUES
(1, 'main_image/a4ef5748-d982-413b-a473-2d61c8084a8d.jpg', '300', 'España', 'Ontinyent', 'C/ ....Ontinyent', '38.82241927517543400000', '-0.59856972113489200000', 3, 3),
(2, 'main_image/2e4037c7-417a-47a1-bfde-919e605706ee.jpg', '2500', 'España', 'Benidorm', 'C/ ...Benidorm', '38.54019120496513000000', '-0.11831413551159968000', 2, 3),
(3, 'main_image/0cd5ef66-8ce2-4453-956a-a5b9ce32a159.jpg', '135000', 'España', 'Barcelona', 'C/ ...Barcelona', '41.39443777006087000000', '2.17967891265510570000', 1, 3),
(4, 'main_image/ac967e1f-11a1-40e2-ac02-c1546244f649.jpg', '250', 'España', 'Madrid', 'C/ ...Madrid', '40.40299289922746000000', '-3.67386140993368800000', 3, 3),
(5, 'main_image/f1202d07-0792-4ef8-90d0-069ae458c097.jpg', '300', 'España', 'Bilbao', 'C/ ....Bilbao', '43.26358595458787400000', '-2.93125192023363500000', 3, 3),
(6, 'main_image/8ae46add-681c-4777-b871-5d3ebcd148f5.jpg', '1600', 'España', 'Sevilla', 'C/ ...Sevilla', '37.40296613333940000000', '-5.97425405883813600000', 2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `houses_houseimages`
--

CREATE TABLE `houses_houseimages` (
  `id` bigint(20) NOT NULL,
  `image` varchar(100) NOT NULL,
  `house_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `houses_houseimages`
--

INSERT INTO `houses_houseimages` (`id`, `image`, `house_id`) VALUES
(1, 'images/9a1152c6-c040-412d-997f-fcd5afe4c036.jpg', 1),
(2, 'images/a4ef5748-d982-413b-a473-2d61c8084a8d.jpg', 1),
(3, 'images/bc76c40f-ab08-4a25-a012-719d5a734433.jpg', 1),
(4, 'images/f3846e81-4e22-4a27-afa6-8de0e8e3dd36.jpg', 1),
(5, 'images/2a81543d-0a91-40e6-9e1c-d367f7024e27.jpg', 2),
(6, 'images/2e4037c7-417a-47a1-bfde-919e605706ee.jpg', 2),
(7, 'images/8745eb86-c6b9-4bef-a10b-9de223adf557.jpg', 2),
(8, 'images/ceb8a701-ccbb-4706-92ad-8e3531b69425.jpg', 2),
(9, 'images/0cd5ef66-8ce2-4453-956a-a5b9ce32a159.jpg', 3),
(10, 'images/aeae6128-1312-482f-92e1-16717e29234a.jpg', 3),
(11, 'images/b39df590-f7f1-41ce-a7e1-4be7f4e96d48.jpg', 3),
(12, 'images/e710fcff-7e13-43f0-9a26-3402b9ddd164.jpg', 3),
(13, 'images/911411a6-557a-4e30-957c-6c7ed70805e7.jpg', 4),
(14, 'images/ac967e1f-11a1-40e2-ac02-c1546244f649.jpg', 4),
(15, 'images/af0c8839-5aed-4d5c-9e02-b0062ff7c957.jpg', 4),
(16, 'images/b627642e-9456-4d41-a448-fb4aa8fa24a3.jpg', 4),
(17, 'images/d84add37-e3f1-48c6-aa5e-177b1bffe30f.jpg', 4),
(18, 'images/3522a48a-1f45-45a6-8d4a-86feddc9faec.jpg', 5),
(19, 'images/de3aa533-6ed8-48cd-b46e-e660e98ef2df.jpg', 5),
(20, 'images/e569dfcf-2395-45d6-b27d-6c1e8033fd01.jpg', 5),
(21, 'images/f1202d07-0792-4ef8-90d0-069ae458c097.jpg', 5),
(22, 'images/ff9068e1-76e5-4722-a7dd-bff3534ff9bb.jpg', 5),
(23, 'images/0a2108ae-c8a7-4e4d-9034-d583c35a3e2c.jpg', 6),
(24, 'images/8ae46add-681c-4777-b871-5d3ebcd148f5.jpg', 6),
(25, 'images/617dc953-fba5-4335-993c-473b8d951bed.jpg', 6),
(26, 'images/940cc94e-d5ce-4f02-aa77-94cccaca98b1.jpg', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `houses_houseservices`
--

CREATE TABLE `houses_houseservices` (
  `id` bigint(20) NOT NULL,
  `rooms` int(11) NOT NULL,
  `bathrooms` int(11) NOT NULL,
  `pool` tinyint(1) NOT NULL,
  `wifi` tinyint(1) NOT NULL,
  `parking` tinyint(1) NOT NULL,
  `house_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `houses_houseservices`
--

INSERT INTO `houses_houseservices` (`id`, `rooms`, `bathrooms`, `pool`, `wifi`, `parking`, `house_id`) VALUES
(1, 4, 2, 0, 1, 1, 1),
(2, 4, 2, 1, 1, 0, 2),
(3, 2, 1, 0, 1, 0, 3),
(4, 1, 1, 0, 1, 0, 4),
(5, 4, 3, 1, 1, 1, 5),
(6, 1, 2, 1, 1, 0, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_profile`
--

CREATE TABLE `users_profile` (
  `id` bigint(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surnames` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `biography` varchar(100) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users_profile`
--

INSERT INTO `users_profile` (`id`, `name`, `surnames`, `image`, `biography`, `user_id`) VALUES
(1, '', '', 'https://avatars.dicebear.com/api/adventurer/salmu10.svg', 'Hello, I\'m a dreamhouse user', 1),
(2, '', '', 'https://avatars.dicebear.com/api/adventurer/salvamu10.svg', 'Hello, I\'m a dreamhouse user', 2),
(3, '', '', 'https://avatars.dicebear.com/api/adventurer/salva.svg', 'Hello, I\'m a dreamhouse user', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_user`
--

CREATE TABLE `users_user` (
  `id` bigint(20) NOT NULL,
  `uuid` varchar(36) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(128) NOT NULL,
  `type` varchar(10) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users_user`
--

INSERT INTO `users_user` (`id`, `uuid`, `username`, `email`, `password`, `type`, `last_login`, `is_superuser`) VALUES
(1, '59257605-52a0-0fa8-42be-622fa9254781', 'salmu10', 'salmu10@gmail.com', 'pbkdf2_sha256$390000$XJFr4McSZEBmjmadqMezRr$KNb1hL/CZznhyvsUve1LrcVaBB4wygrkXN6GtYPcZ4M=', 'client', NULL, 0),
(2, '31c773de-d2e1-b461-0b30-1260294270ad', 'salvamu10', 'salvamu10@gmail.com', 'pbkdf2_sha256$390000$2KbUwEHc9n3ZRAmEjD6tnb$VV8xT21TArWAdf/Pe1EmXaohfqrn3Pkf1EMuQqW8nXs=', 'client', NULL, 0),
(3, 'f5d2062e-93bd-c55b-00ad-2fda8af32e11', 'salva', 'salva@gmail.com', 'pbkdf2_sha256$390000$7va7BxZHWQJAZzbDo4E75n$jIGI8BVd35G29459WJC/prh1KXlcNdzO4tej0v3s/vA=', 'admin', NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_user_groups`
--

CREATE TABLE `users_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_user_user_permissions`
--

CREATE TABLE `users_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_users_user_id` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `houses_category`
--
ALTER TABLE `houses_category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indices de la tabla `houses_house`
--
ALTER TABLE `houses_house`
  ADD PRIMARY KEY (`id`),
  ADD KEY `houses_house_category_id_fc04d434_fk_houses_category_id` (`category_id`),
  ADD KEY `houses_house_user_id_815191b4_fk_users_user_id` (`user_id`);

--
-- Indices de la tabla `houses_houseimages`
--
ALTER TABLE `houses_houseimages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `houses_houseimages_house_id_9cecbf4e_fk_houses_house_id` (`house_id`);

--
-- Indices de la tabla `houses_houseservices`
--
ALTER TABLE `houses_houseservices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `houses_houseservices_house_id_a1397d07_fk_houses_house_id` (`house_id`);

--
-- Indices de la tabla `users_profile`
--
ALTER TABLE `users_profile`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_profile_user_id_2112e78d_fk_users_user_id` (`user_id`);

--
-- Indices de la tabla `users_user`
--
ALTER TABLE `users_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uuid` (`uuid`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `users_user_groups`
--
ALTER TABLE `users_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_groups_user_id_group_id_b88eab82_uniq` (`user_id`,`group_id`),
  ADD KEY `users_user_groups_group_id_9afc8d0e_fk_auth_group_id` (`group_id`);

--
-- Indices de la tabla `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_user_permissions_user_id_permission_id_43338c45_uniq` (`user_id`,`permission_id`),
  ADD KEY `users_user_user_perm_permission_id_0b93982e_fk_auth_perm` (`permission_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `houses_category`
--
ALTER TABLE `houses_category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `houses_house`
--
ALTER TABLE `houses_house`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `houses_houseimages`
--
ALTER TABLE `houses_houseimages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `houses_houseservices`
--
ALTER TABLE `houses_houseservices`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users_profile`
--
ALTER TABLE `users_profile`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users_user`
--
ALTER TABLE `users_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users_user_groups`
--
ALTER TABLE `users_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `houses_house`
--
ALTER TABLE `houses_house`
  ADD CONSTRAINT `houses_house_category_id_fc04d434_fk_houses_category_id` FOREIGN KEY (`category_id`) REFERENCES `houses_category` (`id`),
  ADD CONSTRAINT `houses_house_user_id_815191b4_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `houses_houseimages`
--
ALTER TABLE `houses_houseimages`
  ADD CONSTRAINT `houses_houseimages_house_id_9cecbf4e_fk_houses_house_id` FOREIGN KEY (`house_id`) REFERENCES `houses_house` (`id`);

--
-- Filtros para la tabla `houses_houseservices`
--
ALTER TABLE `houses_houseservices`
  ADD CONSTRAINT `houses_houseservices_house_id_a1397d07_fk_houses_house_id` FOREIGN KEY (`house_id`) REFERENCES `houses_house` (`id`);

--
-- Filtros para la tabla `users_profile`
--
ALTER TABLE `users_profile`
  ADD CONSTRAINT `users_profile_user_id_2112e78d_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `users_user_groups`
--
ALTER TABLE `users_user_groups`
  ADD CONSTRAINT `users_user_groups_group_id_9afc8d0e_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `users_user_groups_user_id_5f6f5a90_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

--
-- Filtros para la tabla `users_user_user_permissions`
--
ALTER TABLE `users_user_user_permissions`
  ADD CONSTRAINT `users_user_user_perm_permission_id_0b93982e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `users_user_user_permissions_user_id_20aca447_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
