-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-05-2023 a las 16:41:48
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
(44, 'Can view profile', 11, 'view_profile'),
(45, 'Can add reserve', 12, 'add_reserve'),
(46, 'Can change reserve', 12, 'change_reserve'),
(47, 'Can delete reserve', 12, 'delete_reserve'),
(48, 'Can view reserve', 12, 'view_reserve');

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
(12, 'reserves', 'reserve'),
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
(23, 'users', '0004_alter_profile_biography', '2023-04-03 18:50:43.999160'),
(24, 'reserves', '0001_initial', '2023-04-18 15:20:34.046734');

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
  `price` int(11) NOT NULL,
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
(1, 'main_image/a4ef5748-d982-413b-a473-2d61c8084a8d.jpg', 62, 'España', 'Ontinyent', 'C/ ...., Ontinyent', '38.82241927517543400000', '-0.59856972113489200000', 3, 1),
(2, 'main_image/2e4037c7-417a-47a1-bfde-919e605706ee.jpg', 1500, 'España', 'Benidorm', 'C/ ..., Benidorm', '38.54019120496513000000', '-0.11831413551159968000', 2, 1),
(3, 'main_image/0cd5ef66-8ce2-4453-956a-a5b9ce32a159.jpg', 185000, 'España', 'Barcelona', 'C/ ..., Barcelona', '41.39443777006087000000', '2.17967891265510570000', 1, 2),
(4, 'main_image/ac967e1f-11a1-40e2-ac02-c1546244f649.jpg', 150, 'España', 'Madrid', 'C/ ..., Madrid', '40.40299289922746000000', '-3.67386140993368800000', 3, 2),
(5, 'main_image/f1202d07-0792-4ef8-90d0-069ae458c097.jpg', 250, 'España', 'Bilbao', 'C/ ...., Bilbao', '43.26358595458787400000', '-2.93125192023363500000', 3, 3),
(6, 'main_image/8ae46add-681c-4777-b871-5d3ebcd148f5.jpg', 650, 'España', 'Sevilla', 'C/ ..., Sevilla', '37.40296613333940000000', '-5.97425405883813600000', 2, 3),
(7, 'main_image/202bd0fb-ec49-4b05-ab07-a9b42795aff8.jpg', 155000, 'España', 'Vallecas', 'C/ ..., Vallecas', '40.36967677860670000000', '-3.60913315168547300000', 1, 6),
(8, 'main_image/5ba6942e-4b33-4ccb-acef-15de5df7dbb0.jpg', 500, 'España', 'Almería', 'C/ ..., Almería', '36.83177171540484000000', '-2.45205278276883650000', 2, 4),
(9, 'main_image/f6377692-bdaf-4247-8372-b395b88bfa62.jpg', 135000, 'España', 'Cáceres', 'C/ ..., Cáceres', '39.47528159866358000000', '-6.37671710725142600000', 1, 5),
(10, 'main_image/6c0619f9-6750-42bd-b888-75d4d8febb7d.jpg', 550, 'España', 'Gijón', 'C/ ..., Gijón', '43.53522360265870400000', '-5.65461587112577300000', 2, 5),
(11, 'main_image/6bf7070d-a0bb-4462-b673-45b0b01ebd76.jpg', 224, 'España', 'Toledo', 'C/ ..., Toledo', '39.87318196636538000000', '-4.03694804367211800000', 3, 6),
(12, 'main_image/c79304ec-d1d4-4bda-b09a-b42dca5b0920.jpg', 178, 'España', 'Peñíscola', 'C/ ..., Peñíscola', '40.35925502406559000000', '0.40280070333467510000', 3, 4),
(13, 'main_image/aa954fc2-4ca3-4574-87a1-9301d2ce6264.jpg', 125000, 'España', 'Murcia', 'C/ ..., Murcia', '37.98678104372349000000', '-1.12553500467094450000', 1, 2),
(14, 'main_image/73a41371-b26f-4fe2-998a-70ed37df241d.jpg', 900, 'España', 'Málaga', 'C/ ..., Málaga', '36.71350302230922000000', '-4.42837528456390500000', 2, 3),
(15, 'main_image/b177272d-541e-4279-b880-c26d58ce6719.jpg', 115000, 'España', 'Úbeda', 'C/ ..., Úbeda', '38.01640705310704000000', '-3.37228056660019800000', 1, 7),
(16, 'main_image/6f92fc0c-7fea-4300-8fd4-52e764e2dcec.jpg', 350, 'España', 'Vigo', 'C/ ..., Vigo', '42.22718222256093400000', '-8.72213896355205200000', 2, 7),
(17, 'main_image/9a363c11-5b79-474c-a7c8-c304dac9dcac.jpg', 140000, 'España', 'Zaragoza', 'C/ ..., Zaragoza', '41.64471341067550000000', '-0.88754765093766200000', 1, 7),
(18, 'main_image/ddc6b740-2fda-4e38-9d39-71150f5fbf20.jpg', 185, 'España', 'Lleida', 'C/ ..., Lleida', '41.60908609986701000000', '0.61746864718529320000', 3, 6),
(19, 'main_image/d63d2ba8-3137-44c1-9d39-71b4dc7ee188.jpg', 420, 'España', 'Valdepeñas', 'C/ ..., Valdepeñas', '38.77823885867097400000', '-3.38605920994987500000', 2, 3);

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
(26, 'images/940cc94e-d5ce-4f02-aa77-94cccaca98b1.jpg', 6),
(27, 'images/3ea9c570-94da-4912-9e82-3e074de974da.jpg', 7),
(28, 'images/183af558-10ce-491a-89ca-7e631bcf36c3.jpg', 7),
(29, 'images/202bd0fb-ec49-4b05-ab07-a9b42795aff8.jpg', 7),
(30, 'images/3696a837-dd78-44fd-9753-6c51ee428087.jpg', 7),
(31, 'images/e62f9076-4a7c-4813-bc95-7cff82a86f23.jpg', 7),
(32, 'images/0abd8cfe-9c4d-4dd2-84dd-e8dc49556c37.jpg', 8),
(33, 'images/5ba6942e-4b33-4ccb-acef-15de5df7dbb0.jpg', 8),
(34, 'images/8f85f7f1-37dd-4d45-bb45-6c7bb306d21f.jpg', 8),
(35, 'images/0464dafa-2b7b-4557-b0b9-ef067d7a3b9e.jpg', 8),
(36, 'images/51a2cbd8-c3d2-498b-9193-71260bd1e1cd.jpg', 9),
(37, 'images/740683ea-b201-4906-b567-fba28ee659e1.jpg', 9),
(38, 'images/f6377692-bdaf-4247-8372-b395b88bfa62.jpg', 9),
(39, 'images/fa1c070e-ea66-4eb7-97c2-3cbcd53fdb4a.jpg', 9),
(40, 'images/6c0619f9-6750-42bd-b888-75d4d8febb7d.jpg', 10),
(41, 'images/b18f0f4d-3048-4780-a75e-69e56763ceee.jpg', 10),
(42, 'images/e4789f13-1d03-496a-8df3-1f97081f3fa2.jpg', 10),
(43, 'images/f83eaa18-1d81-4bf0-972d-7bc4ed670278.jpg', 10),
(44, 'images/0bb2ce45-cca2-41a7-ad1c-a6744eec38c2.jpg', 11),
(45, 'images/4f6e6e2e-ed9e-4b47-88f6-340683c62fe7.jpg', 11),
(46, 'images/6bf7070d-a0bb-4462-b673-45b0b01ebd76.jpg', 11),
(47, 'images/277fe1e7-4f63-4adf-95a0-c0e74717880f.jpg', 11),
(48, 'images/af2cefef-87a1-4849-a41e-72651ab02dcf.jpg', 11),
(49, 'images/dd2e6298-6421-4532-83af-0bed117aae01.jpg', 11),
(50, 'images/3bd03af4-e058-4cb2-90be-bceaafd94ed6.jpg', 12),
(51, 'images/71658d67-9473-4232-a7ca-17ad7131f81a.jpg', 12),
(52, 'images/6891383a-7f0a-4536-8993-f567e6f0ad17.jpg', 12),
(53, 'images/c79304ec-d1d4-4bda-b09a-b42dca5b0920.jpg', 12),
(54, 'images/e39652dc-dfd6-4118-9ad8-2660ea4d55fc.jpg', 12),
(55, 'images/255cb8a1-3745-4881-88df-1e89ad20b709.jpg', 13),
(56, 'images/aa954fc2-4ca3-4574-87a1-9301d2ce6264.jpg', 13),
(57, 'images/d4dc3c35-f119-4d28-82a9-7577386e2bce.jpg', 13),
(58, 'images/e2932c37-0ced-4f9a-8465-1036f1c3d317.jpg', 13),
(59, 'images/1dd4892f-3a17-46e8-af7b-5892e149ded3.jpg', 14),
(60, 'images/9fc125d0-6b70-4bbe-a808-413da3daa03c.jpg', 14),
(61, 'images/73a41371-b26f-4fe2-998a-70ed37df241d.jpg', 14),
(62, 'images/de6e2139-4b6f-411c-9a29-8dbe771fa551.jpg', 14),
(63, 'images/f466467f-bd80-4351-ba74-1d69d9116603.jpg', 14),
(64, 'images/7b40871f-7695-449f-9ed9-e0bcb101cc56.jpg', 15),
(65, 'images/2955ffe3-619c-4866-aae4-3920dc0493a2.jpg', 15),
(66, 'images/b177272d-541e-4279-b880-c26d58ce6719.jpg', 15),
(67, 'images/efdd08e1-83e9-49a6-b828-b1d017c44923.jpg', 15),
(68, 'images/0b73feae-fa6c-4a4d-a4df-80f7e7c80f9a.jpg', 16),
(69, 'images/6f92fc0c-7fea-4300-8fd4-52e764e2dcec.jpg', 16),
(70, 'images/32d9bd8e-8857-49ab-b5b7-64dd72268820.jpg', 16),
(71, 'images/b8541c3f-59ef-49d5-be51-8a73019f9f47.jpg', 16),
(72, 'images/c3b75a28-8294-4f70-94e7-280469b2502c.jpg', 16),
(73, 'images/4e14cf75-78e0-493a-8d5d-0dfb354a0c11.jpg', 17),
(74, 'images/9a363c11-5b79-474c-a7c8-c304dac9dcac.jpg', 17),
(75, 'images/3715f4f7-1d41-4627-a311-2c0d99303989.jpg', 17),
(76, 'images/bc24bcb5-3d56-4b0d-b9d3-53db0ebca099.jpg', 17),
(77, 'images/c71f5f00-1c03-4bfe-9d01-cd08adc0ba2a.jpg', 18),
(78, 'images/c939b692-18e3-4b43-a142-e709d022c855.jpg', 18),
(79, 'images/c8564a73-2f4e-4f67-941b-a883233fde53.jpg', 18),
(80, 'images/d99d35ec-c4f5-43a4-9d5d-5c7340196c25.jpg', 18),
(81, 'images/ddc6b740-2fda-4e38-9d39-71150f5fbf20.jpg', 18),
(82, 'images/565c115f-ab6e-40f6-9419-a4c2fa946ef5.jpg', 19),
(83, 'images/14434834-b237-428a-b138-ccd4e1bd5d5f.jpg', 19),
(84, 'images/b3666486-f534-40a6-9601-9bb828125d6e.jpg', 19),
(85, 'images/d63d2ba8-3137-44c1-9d39-71b4dc7ee188.jpg', 19),
(86, 'images/f695ca98-e7c1-4d80-96f6-2f6cad2dcf8f.jpg', 19);

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
(1, 4, 2, 1, 1, 1, 1),
(2, 4, 2, 1, 1, 0, 2),
(3, 2, 1, 0, 1, 0, 3),
(4, 1, 1, 0, 1, 0, 4),
(5, 4, 3, 1, 1, 1, 5),
(6, 1, 2, 1, 1, 0, 6),
(7, 2, 1, 0, 0, 0, 7),
(8, 2, 1, 0, 1, 0, 8),
(9, 1, 1, 0, 0, 0, 9),
(10, 2, 1, 0, 1, 1, 10),
(11, 5, 1, 1, 1, 1, 11),
(12, 2, 2, 1, 1, 1, 12),
(13, 2, 1, 0, 0, 0, 13),
(14, 3, 2, 0, 1, 1, 14),
(15, 2, 1, 0, 0, 0, 15),
(16, 2, 1, 0, 1, 1, 16),
(17, 2, 2, 0, 0, 1, 17),
(18, 4, 2, 1, 1, 1, 18),
(19, 2, 1, 0, 1, 1, 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserves_reserve`
--

CREATE TABLE `reserves_reserve` (
  `id` bigint(20) NOT NULL,
  `initial_date` date NOT NULL,
  `end_date` date NOT NULL,
  `total_price` int(11) NOT NULL,
  `house_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reserves_reserve`
--

INSERT INTO `reserves_reserve` (`id`, `initial_date`, `end_date`, `total_price`, `house_id`, `user_id`) VALUES
(1, '2023-04-19', '2023-04-22', 900, 1, 1),
(2, '2023-04-26', '2023-04-29', 900, 1, 1),
(3, '2023-06-20', '2023-06-23', 900, 1, 1),
(4, '2023-04-19', '2023-04-21', 500, 4, 1),
(5, '2023-06-07', '2023-06-09', 600, 1, 3),
(6, '2023-05-18', '2023-05-20', 600, 1, 1),
(7, '2023-05-30', '2023-05-31', 300, 1, 1);

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
(1, 'Salva', '', 'https://avatars.dicebear.com/api/adventurer/salmu10.svg', 'Hello, I\'m a dreamhouse user', 1),
(2, '', '', 'https://avatars.dicebear.com/api/adventurer/salvamu10.svg', 'Hello, I\'m a dreamhouse user', 2),
(3, '', '', 'https://avatars.dicebear.com/api/adventurer/salva.svg', 'Hello, I\'m a dreamhouse user', 3),
(4, '', '', 'https://avatars.dicebear.com/api/adventurer/pedro.svg', 'Hello, I\'m a dreamhouse user', 4),
(5, '', '', 'https://avatars.dicebear.com/api/adventurer/Maria.svg', 'Hello, I\'m a dreamhouse user', 5),
(6, 'Andrea', '', 'https://avatars.dicebear.com/api/adventurer/Andrea.svg', 'Hello, I\'m a dreamhouse user', 6),
(7, '', '', 'https://avatars.dicebear.com/api/adventurer/Sergio.svg', 'Hello, I\'m a dreamhouse user', 7);

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
(1, '59257605-52a0-0fa8-42be-622fa9254781', 'salmu10', 'salmu10@gmail.com', 'pbkdf2_sha256$600000$W2Je8ViDc9DR59ACytGttR$NFjGlT7y8f5biI1WK4vvI1ywXmbPvMgilWRaTERHCkg=', 'admin', NULL, 0),
(2, '31c773de-d2e1-b461-0b30-1260294270ad', 'salvamu10', 'salvamu10@gmail.com', 'pbkdf2_sha256$390000$2KbUwEHc9n3ZRAmEjD6tnb$VV8xT21TArWAdf/Pe1EmXaohfqrn3Pkf1EMuQqW8nXs=', 'client', NULL, 0),
(3, 'f5d2062e-93bd-c55b-00ad-2fda8af32e11', 'salva', 'salmu1997@gmail.com', 'pbkdf2_sha256$600000$vDGaJ9b9vXe6zAUIfqcW2F$RGBC1GvhO92c6rHAseBBSZx8UhSub+NqadrgTYI2dTU=', 'client', NULL, 0),
(4, '0f90427a-317f-a0e5-7a93-89b5e6b46992', 'pedro', 'pedrohm@gmail.com', 'pbkdf2_sha256$600000$nQ1uKcqgng01VfCJZX27Wq$qwmQKSPy4N6STKuhczUirGzUL3Nx/Jg47I9h5c8P0TU=', 'client', NULL, 0),
(5, '8e245934-1d8c-628c-edce-723c1c092c0e', 'Maria', 'MariaGarcia@gmail.com', 'pbkdf2_sha256$600000$a6emsLcvAt0ElPSo8LNZWV$NEcWUMPscJVrGn9SYFEs3sEaMzTdLi8PrB7c8zPzxdk=', 'client', NULL, 0),
(6, 'db0f309e-6b42-225b-566d-f2ab8872a1e2', 'Andrea', 'andrea@gmail.com', 'pbkdf2_sha256$600000$BJO7OnBq8XjGPtbRY7eGp3$7Xd9q+AbVyN1wtvlUNTdi3SjcxHpN7YyBSqp4d6yeb8=', 'client', NULL, 0),
(7, 'aa8eb961-ba9d-939f-22d7-dc635ad5c37f', 'Sergio', 'sergio@gmail.com', 'pbkdf2_sha256$600000$8XLxksF9MKcGwyjr7iNVJm$MyQ2UjRGSk3HPgOR48E9wuEyOYHHLRspdaL2TiVwhYU=', 'client', NULL, 0);

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
-- Indices de la tabla `reserves_reserve`
--
ALTER TABLE `reserves_reserve`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reserves_reserve_house_id_07704eb0_fk_houses_house_id` (`house_id`),
  ADD KEY `reserves_reserve_user_id_1af3e36f_fk_users_user_id` (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `houses_category`
--
ALTER TABLE `houses_category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `houses_house`
--
ALTER TABLE `houses_house`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `houses_houseimages`
--
ALTER TABLE `houses_houseimages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT de la tabla `houses_houseservices`
--
ALTER TABLE `houses_houseservices`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `reserves_reserve`
--
ALTER TABLE `reserves_reserve`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users_profile`
--
ALTER TABLE `users_profile`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `users_user`
--
ALTER TABLE `users_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
-- Filtros para la tabla `reserves_reserve`
--
ALTER TABLE `reserves_reserve`
  ADD CONSTRAINT `reserves_reserve_house_id_07704eb0_fk_houses_house_id` FOREIGN KEY (`house_id`) REFERENCES `houses_house` (`id`),
  ADD CONSTRAINT `reserves_reserve_user_id_1af3e36f_fk_users_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_user` (`id`);

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
