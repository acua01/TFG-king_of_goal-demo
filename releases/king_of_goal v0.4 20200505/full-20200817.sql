-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: king_of_goal
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `rating` int NOT NULL,
  `value` int NOT NULL,
  `pace` int NOT NULL,
  `shooting` int NOT NULL,
  `passing` int NOT NULL,
  `dribbling` int NOT NULL,
  `defending` int NOT NULL,
  `physicality` int NOT NULL,
  `good_leg` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skills` int NOT NULL,
  `bad_leg` int NOT NULL,
  `id_type` bigint unsigned NOT NULL,
  `id_player` bigint unsigned NOT NULL,
  `id_team` bigint unsigned NOT NULL,
  `id_country` bigint unsigned NOT NULL,
  `id_position` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cards_id_type_foreign` (`id_type`),
  KEY `cards_id_player_foreign` (`id_player`),
  KEY `cards_id_team_foreign` (`id_team`),
  KEY `cards_id_country_foreign` (`id_country`),
  KEY `cards_id_position_foreign` (`id_position`),
  CONSTRAINT `cards_id_country_foreign` FOREIGN KEY (`id_country`) REFERENCES `countries` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cards_id_player_foreign` FOREIGN KEY (`id_player`) REFERENCES `players` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cards_id_position_foreign` FOREIGN KEY (`id_position`) REFERENCES `positions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cards_id_team_foreign` FOREIGN KEY (`id_team`) REFERENCES `teams` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cards_id_type_foreign` FOREIGN KEY (`id_type`) REFERENCES `cards_types` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,89,1000000,96,84,78,90,39,75,'Derecha',5,4,1,6,35,2,1),(2,94,5000000,99,92,88,95,45,84,'Derecha',5,5,28,6,35,2,1),(3,94,2000000,87,92,92,96,39,66,'Izquierda',4,4,1,3,8,11,2),(4,99,8000000,96,98,99,99,50,85,'Izquierda',4,4,23,3,8,11,2),(5,93,1800000,90,93,82,89,35,78,'Derecha',5,4,1,4,18,12,1),(6,95,2500000,94,94,85,91,39,82,'Izquierda',5,4,8,4,18,12,2),(7,89,500000,73,89,80,84,51,84,'Derecha',3,4,1,11,8,4,1),(8,90,1000000,77,90,81,86,53,85,'Derecha',3,4,9,11,8,4,1),(9,83,60000,84,82,77,85,39,61,'Derecha',4,5,1,12,24,2,1),(10,87,500000,88,88,83,89,44,67,'Derecha',4,5,2,12,24,2,1),(11,89,1100000,96,84,78,90,39,75,'Derecha',5,4,15,6,35,2,1),(12,98,7000000,99,96,93,98,55,90,'Derecha',5,4,23,6,35,2,1),(13,90,1500000,97,85,79,91,40,76,'Derecha',5,4,30,6,35,2,1),(14,90,1700000,97,86,80,91,40,76,'Derecha',5,4,9,6,35,2,3),(15,93,1,90,93,82,89,35,78,'Derecha',5,4,15,4,18,12,1),(16,94,1,91,94,84,90,36,80,'Derecha',5,4,9,4,18,12,3),(17,94,1,91,94,83,90,36,79,'Derecha',5,4,30,4,18,12,1),(18,99,1,97,99,92,98,45,95,'Derecha',5,4,23,4,18,12,1),(19,94,1,87,92,92,96,39,66,'Izquierda',4,4,15,3,8,11,2),(20,95,1,88,93,93,97,40,67,'Izquierda',4,4,30,3,8,11,2),(21,95,1,89,93,93,97,40,68,'Izquierda',4,4,9,3,8,11,2),(22,96,1,91,95,94,98,41,71,'Izquierda',4,4,8,3,8,11,6),(23,96,1,91,94,94,98,42,70,'Izquierda',4,4,18,3,8,11,2),(24,97,1,92,95,95,99,44,72,'Izquierda',4,4,22,3,8,11,7),(25,85,1,86,85,79,87,41,63,'Derecha',4,5,9,12,24,2,1),(26,87,1,88,88,83,89,44,67,'Derecha',4,5,9,12,24,2,1),(27,90,1,91,90,87,92,46,77,'Izquierda',4,5,8,12,24,2,2),(28,89,1,73,89,80,84,51,84,'Derecha',3,4,15,11,8,4,1),(29,88,1,85,89,72,87,48,85,'Izquierda',1,3,1,18,9,14,17),(30,88,1,85,89,72,87,48,85,'Izquierda',1,3,15,18,9,14,17),(31,93,1,92,95,78,92,53,92,'Izquierda',1,3,25,18,9,14,17),(32,90,1,88,85,88,90,43,88,'Derecha',1,4,1,7,8,9,17),(33,90,1,88,85,88,90,43,88,'Derecha',1,4,15,7,8,9,17),(34,91,1,89,86,89,91,44,89,'Derecha',1,4,30,7,8,9,17),(35,91,1,90,86,89,92,44,90,'Derecha',1,4,18,7,8,9,17),(36,92,1,92,88,90,93,45,91,'Derecha',1,4,22,7,8,9,17),(37,80,1,82,80,74,81,40,70,'Derecha',5,4,1,19,10,12,6),(38,80,1,82,80,74,81,40,70,'Derecha',5,4,15,19,10,12,6),(39,80,1,82,80,74,81,40,70,'Derecha',5,4,2,19,10,12,6),(40,92,1,90,92,87,92,49,81,'Derecha',5,4,12,19,10,12,1),(41,91,1,91,83,86,94,35,66,'Derecha',4,4,1,9,9,14,3),(42,91,1,91,83,86,94,35,66,'Derecha',4,4,15,9,9,14,3),(43,92,1,92,84,87,95,36,67,'Derecha',4,4,30,9,9,14,3),(44,92,1,92,85,88,95,36,67,'Derecha',4,4,9,9,9,14,11),(45,92,1,92,85,88,95,36,67,'Derecha',4,4,2,9,9,14,3),(46,94,1,93,90,90,96,38,70,'Derecha',5,4,28,9,9,14,1),(47,95,1,94,92,92,97,39,71,'Derecha',4,4,31,9,9,14,1),(48,92,1,91,85,87,95,32,58,'Derecha',5,5,1,5,35,10,3),(49,92,1,91,85,87,95,32,58,'Derecha',5,5,15,5,35,10,3),(50,93,1,92,86,88,96,33,59,'Derecha',5,5,30,5,35,10,3),(51,93,1,92,87,89,96,33,59,'Derecha',5,5,9,5,35,10,7),(52,95,1,94,90,93,98,35,62,'Derecha',5,5,11,5,35,10,7),(53,90,1,93,86,81,89,45,74,'Izquierda',4,3,1,8,36,7,2),(54,90,1,93,86,81,89,45,74,'Izquierda',4,3,15,8,36,7,2),(55,91,1,94,87,82,90,46,75,'Izquierda',4,3,30,8,36,7,2),(56,91,1,94,87,84,90,46,76,'Izquierda',4,3,18,8,36,7,2),(57,92,1,95,88,86,91,47,78,'Izquierda',4,3,9,8,36,7,1),(58,94,1,97,91,90,93,50,80,'Izquierda',4,3,11,8,36,7,2),(59,97,1,99,97,95,97,53,84,'Izquierda',4,3,25,8,36,7,2),(60,75,1,75,74,69,76,35,75,'Derecha',4,4,3,17,8,3,1),(61,75,1,75,74,69,76,35,75,'Derecha',4,4,14,17,8,3,1);
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cards_types`
--

DROP TABLE IF EXISTS `cards_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards_types` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_mini` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text_color` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rare` tinyint(1) NOT NULL,
  `special` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards_types`
--

LOCK TABLES `cards_types` WRITE;
/*!40000 ALTER TABLE `cards_types` DISABLE KEYS */;
INSERT INTO `cards_types` VALUES (1,'Oro Único','/storage/cards_types/TBrEAw8KcbGcVFSkHNk84nWOiPxuul_5ea2f556af9f7.png','/storage/cards_types_mini/kQBkArcijMhuhTZuLID3UjXTvYT34W_5ea2f556b0f19.png','#4d331f',1,0),(2,'OTW','/storage/cards_types/ATrsMqBXokgVQjtNQtRGSn795UCuIh_5ea2f9411a696.png','/storage/cards_types_mini/yiQjYMhqVkEcnuuL2H9yzFjt6eECBH_5ea2f9411d9f7.png','#fc5461',1,1),(3,'Oro','/storage/cards_types/qnGMGa5LDbFNUzOrPn1PfesMMqzMsW_5ead50c000651.png','/storage/cards_types_mini/KfpoE8VcozuMguatVBJBObtesWPlKh_5ead50c001896.png','#4d331f',0,0),(4,'Plata Único','/storage/cards_types/lu3q2ABGub2nasMNX22IEYluoXHboe_5ead5132b2ce3.png','/storage/cards_types_mini/xX5yrwqE90JEWHmKau7wsmjQHuBIoV_5ead5132b399b.png','#3b3d41',1,0),(5,'Plata','/storage/cards_types/L8AGyAROzjYyn8qnWe4Z6Sn1vllYUV_5ead5161cd774.png','/storage/cards_types_mini/qpnAXVb0oSyMDQ9PXqGzP9y4qcbdoI_5ead5161ce997.png','#3b3d41',0,0),(6,'Bronce Único','/storage/cards_types/yuiqXAQEm7AkK1NxTzFahUnMbTf8pR_5ead51afd34e1.png','/storage/cards_types_mini/WgzhFBVIdDiJnyGbD1XgGtgAFhb2yi_5ead51afd428b.png','#4d331f',1,0),(7,'Bronce','/storage/cards_types/HfTS2bWzKDg1Z7tU5TLHrmk9TpyVYV_5ead51bded567.png','/storage/cards_types_mini/zrMGCK1hLCXTwY33OceIp3RSyC4qwo_5ead51bdee7f4.png','#4d331f',0,0),(8,'Shapeshifter','/storage/cards_types/O2IfxvD2hJU0SfIVSFrAkLcuSdObhF_5ead5227b4b73.png','/storage/cards_types_mini/GzljQTwwBqjX5slRTxnWi4dgtx1qHn_5ead5227b6b52.png','#ffffff',1,1),(9,'TOTW','/storage/cards_types/NivHm2FtyHmORsIrfhkvfqGLeSYrTa_5ead52724d8ad.png','/storage/cards_types_mini/2DD6SeIM4JkccbZ810XJszcJZEgl0e_5ead52724e9db.png','#e1c775',1,1),(10,'MOTM','/storage/cards_types/UZpwrAGoSUYdz1Hr5aAcSqgrcvIs9F_5ead52bd6fc37.png','/storage/cards_types_mini/74Z82e7AB49zTIYMPvK84Ay3QRDnlu_5ead52bd71219.png','#e6e6e6',1,1),(11,'Headliner','/storage/cards_types/jscF5iqWtzUXSuLVXNPg459Mwbf3bL_5ead52f01e1d1.png','/storage/cards_types_mini/89IJz7lsLVOEkIGawku0LCafCrQt7d_5ead52f020620.png','#ffffff',1,1),(12,'Future Star','/storage/cards_types/YgYl2p3L1zTbbMaFd8syib8Ri6NBv5_5ead533aa0951.png','/storage/cards_types_mini/jJpd3jFo0oSTtgIzFp2fbaGYT8fn3E_5ead533aadc51.png','#fAfa20',1,1),(13,'Scream','/storage/cards_types/78aMsNndS9oCDXRUe68knZOgj2j90J_5ead53749ad22.png','/storage/cards_types_mini/WYemlIA9goYbAR6t5AUX9BsboHmqUg_5ead53749c843.png','#f98131',1,1),(14,'Champions','/storage/cards_types/cUiJf9bTlggdtI4qzn46NYIuek32Qv_5ead544377679.png','/storage/cards_types_mini/8zEhkYO2HtckZvQgYi8ojXsDLkrvJw_5ead544378ab5.png','#ffffff',0,0),(15,'Champions Único','/storage/cards_types/wjAWCNF4WCBYmchQU6inuUYjUUW5AB_5ead545595e75.png','/storage/cards_types_mini/bon9hJLrVSjV7adAz3YMtoihtvgemR_5ead545596c77.png','#ffffff',1,0),(16,'Champions Live','/storage/cards_types/MPdkqtsgZGCW8JCjmvZ7hLLQAnMAKF_5ead5498b2baa.png','/storage/cards_types_mini/0V8xaTpuhT6BESF8G6nWciG8VJFP6A_5ead5498b7471.png','#88f3dd',1,1),(17,'Champions MOTM','/storage/cards_types/NXPSuYTFIhDzwoBgvPJJG6UXd60vde_5ead54ce6e79d.png','/storage/cards_types_mini/Vtan1HrcH8LxpsoTaWLRB7lYkbiOnC_5ead54ce703fd.png','#f5f5f5',1,1),(18,'Champions TOTT','/storage/cards_types/dgV3W4MPtq1ZgteevkieyoyQeTQLqK_5ead5523afb2d.png','/storage/cards_types_mini/LePHPdrHbY6ihbjG9MTXS4hVpcrY1i_5ead5523b27f9.png','#f5f5f5',1,1),(19,'Europa TOTT','/storage/cards_types/4E9ek38Q8pZxPCMG8iZ4S7VICQ4qHX_5ead5549b6d72.png','/storage/cards_types_mini/SuUna3q7HIg4adtUvZdEFkztieBqsE_5ead5549b7dc9.png','#f5f5f5',1,1),(20,'Winter Refresh','/storage/cards_types/T3n77lz88oLbx6RUvnWUDaVjMS5WJo_5ead558465098.png','/storage/cards_types_mini/xhlWAMV8GdmfuMcnrxfLc4G2gAIjCn_5ead5584665b1.png','#42ff94',1,1),(21,'Europa Live','/storage/cards_types/zxAHXpGiXwx59KC3lQY4yHlq2fdR8Q_5ead55b78b65d.png','/storage/cards_types_mini/DpSbsJfUNcs9Qcg4DnFFebApgDdQaK_5ead55b78c6c8.png','#030303',1,1),(22,'TOTW Moments','/storage/cards_types/dXZdjpoYs8SIKDN8zQCwQWToG3OK9O_5ead55fd1286e.png','/storage/cards_types_mini/egzrMHeYntmhgKeL2SymFyvNPsiXAn_5ead55fd151ac.png','#eedc82',1,1),(23,'TOTY','/storage/cards_types/lTkPpiB0oKRXSstuPcTgp1zbmuMTqM_5ead562c0ddb6.png','/storage/cards_types_mini/ANsfikk7URjiA5BJsE10cMELSYwk6l_5ead562c15e76.png','#efd668',1,1),(25,'TOTS','/storage/cards_types/ohj6wZF4Tcgry8IIo8Zt0AfR1fuUlH_5ead5669cdec6.png','/storage/cards_types_mini/Fk5nig9V7f2003dpNAJD7YJazW1HmO_5ead5669d37f8.png','#eedc82',1,1),(26,'Futmas','/storage/cards_types/u4fRqz8d8aTYoW7A74LUtaKsUEXTRp_5ead573458b26.png','/storage/cards_types_mini/SShioYT73Bst7OqU65Y2wicgQnlvuF_5ead57345a1bf.png','#ffffff',1,1),(28,'FUT Birthday','/storage/cards_types/vw1dy69BhfNd2xTl70x5Rvx0D505Yp_5ead57a109934.png','/storage/cards_types_mini/hHEAAw15qT1Kb7bLz6c0vh4q9RW7v2_5ead57a10d230.png','#ffffff',1,1),(29,'Icono','/storage/cards_types/3LdSC9jqU1gY5olDJRlJDu3JVQAMRM_5ead59ef51107.png','/storage/cards_types_mini/mniO58mguMY00VQ95CFhJxduglSn0U_5ead59ef528d3.png','#625217',1,1),(30,'TOTY Nominee','/storage/cards_types/bwzY1SKjBsgHTV0vZ1Xp9yqiNzzfzX_5ead9f1b31e78.png','/storage/cards_types_mini/O0F2d5msfC31dCoacHbQ2l5V28TD7X_5ead9f1b34012.png','#efd668',1,1),(31,'Player Moments','/storage/cards_types/6cTmb4JJC9FxzUBtFAKodRarovVeHX_5eada7c991232.png','/storage/cards_types_mini/IUYwHNzMKAAv2m3EikpMJntU4OWC5X_5eada7c9938d8.png','#ffd801',1,1);
/*!40000 ALTER TABLE `cards_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clubs`
--

DROP TABLE IF EXISTS `clubs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clubs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `coins` bigint NOT NULL,
  `id_user` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `clubs_id_user_foreign` (`id_user`),
  CONSTRAINT `clubs_id_user_foreign` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clubs`
--

LOCK TABLES `clubs` WRITE;
/*!40000 ALTER TABLE `clubs` DISABLE KEYS */;
INSERT INTO `clubs` VALUES (2,'admin fc','/storage/teams/2d6HApaYuRnFLqRzGBFK2rKcxdyZqw_5eac4426c7444.png',8000000,3);
/*!40000 ALTER TABLE `clubs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clubs_cards`
--

DROP TABLE IF EXISTS `clubs_cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clubs_cards` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_club` bigint unsigned NOT NULL,
  `id_card` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `clubs_cards_id_club_foreign` (`id_club`),
  KEY `clubs_cards_id_card_foreign` (`id_card`),
  CONSTRAINT `clubs_cards_id_card_foreign` FOREIGN KEY (`id_card`) REFERENCES `cards` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `clubs_cards_id_club_foreign` FOREIGN KEY (`id_club`) REFERENCES `clubs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clubs_cards`
--

LOCK TABLES `clubs_cards` WRITE;
/*!40000 ALTER TABLE `clubs_cards` DISABLE KEYS */;
INSERT INTO `clubs_cards` VALUES (2,2,2),(3,2,3),(4,2,4),(6,2,10);
/*!40000 ALTER TABLE `clubs_cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `countries_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'España','/storage/countries/LKxpgENNP1T70O7Fp9YadalvZN4sUc_5e985871b7f47.png'),(2,'Francia','/storage/countries/ZS5cYtc2AkyYIaEVgxKihGw6xICL4H_5ea2dd57201c6.png'),(3,'Dinamarca','/storage/countries/0VnqKUhHmOgBl7HEXdHuNz3FTNdt0w_5eac3e0448f64.png'),(4,'Uruguay','/storage/countries/DXXL26h3EBnnkqAK7jNlcolra1jEzi_5eac3e24f224d.png'),(5,'Inglaterra','/storage/countries/JYBHkgg2BWuw6Lf3W9ZMjz1DFcuAp8_5eac3e4755c93.png'),(6,'Italia','/storage/countries/Wl3t6u6H8693S5TTkKD6jqwHaQRLjL_5eac3e62be647.png'),(7,'Egipto','/storage/countries/y4rRDXhq4xBVZXLlJgb7vHMS3a9dDo_5eac3e8084e2c.png'),(8,'Corea del Sur','/storage/countries/iD3l40MtRoJaNrTgdMOZEk0YEwlucg_5eac3ed2c29be.png'),(9,'Alemania','/storage/countries/AwDmtQLclSDmzLTt5vnqOlXaiisBM5_5eac3ef25e5fc.png'),(10,'Brasil','/storage/countries/dJbBeoKhidhQktWlA1WkgCvgpYYkTo_5eac3f0c00c3e.png'),(11,'Argentina','/storage/countries/kdCSjR4nbfsM8hMTzgnUnhcJTblGIv_5eac3f252112a.png'),(12,'Portugal','/storage/countries/aFGUQqZSHp3FFwI33pX52fOMWX9zoE_5eac3f4632520.png'),(13,'Gabón','/storage/countries/v1x85foq2nTHmaHAnrf4wmoAnh8xP2_5eac43ecad0a0.png'),(14,'Bélgica','/storage/countries/hLxjGwsDyPJEPQJ8ITjhVCJ1e3MSDc_5eada3c2cce93.png');
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leagues`
--

DROP TABLE IF EXISTS `leagues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leagues` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `leagues_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leagues`
--

LOCK TABLES `leagues` WRITE;
/*!40000 ALTER TABLE `leagues` DISABLE KEYS */;
INSERT INTO `leagues` VALUES (1,'LaLiga Santander','/storage/leagues/pPc4vXtr6ANnDLVx2LZM3JYfRe44Ls_5e99fd1eaf483.png'),(2,'LaLiga SmartBank','/storage/leagues/U8ItuH4PyQHUsnKJXRZVl7EY83SCgW_5ea2dcf513c90.png'),(3,'Premier League','/storage/leagues/6XzTjo8hdiTwH0WfmP7KTKfNjtHNnU_5eac400b0e74a.png'),(4,'Serie A','/storage/leagues/Z9m8902NdXhCq4USgS7ebYFlCZf9Re_5eac4021b55df.png'),(5,'Iconos','/storage/leagues/b6T2rV5c1bNZ0qCor1e5dtSNPeOAPt_5eac406869276.png'),(6,'Ligue One Conforama','/storage/leagues/OP5Vod4IlP8dHIortCbtqaJtw6tuXG_5eac408c3192e.png'),(7,'Bundesliga','/storage/leagues/ESZGs2aIrkZCfFM9ldmmI4zgvpQHyl_5eac40a980e45.png'),(8,'Meiji Masuda J1 League','/storage/leagues/t5waD8AO0vr27wofPjvbMLkkXP4gad_5eac411dc296f.png'),(9,'Major League Soccer','/storage/leagues/rMbPECRHgU4qoHBYzgidoVE4DNJQaa_5eac41424fada.png'),(10,'Saudi Professional League','/storage/leagues/hhHWt1UWOz74QgKo52PqJsAHu27pM0_5eac41623e334.png'),(11,'Liga Bancomer MX','/storage/leagues/IdnTwdEIMDfQOg6IL0JDvELz5C13YB_5eac4197ec1ab.png'),(12,'Superliga Argentina Fútbol','/storage/leagues/37aKFprkfhCSGHATPRuPWJ1SVfwDb8_5eac41f6e063e.png'),(13,'EFL Championship','/storage/leagues/sMqlDncNBBmb0YKcnBNb80Qyd43WHq_5eac421bb9539.png'),(14,'Calcio B','/storage/leagues/0reEHPhnCM5PWM3kv1pOwZEhflDZt9_5eac46b136912.png'),(15,'Domino\'s Ligue 2','/storage/leagues/A1zeuE46lKcWS7YY3SGda4Lb27GPFu_5eac46f0c50e1.png'),(16,'Bundesliga 2','/storage/leagues/gU4zAYvZCN7OFiX3HyIuoQNWnbpQ8p_5eac470f25081.png'),(17,'Eredivise','/storage/leagues/CMyAOH6SZHhIlyXzn22xvA0QSA5DS3_5eac48099e2a6.png');
/*!40000 ALTER TABLE `leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2020_01_01_000000_create_permission_tables',1),(2,'2020_03_22_173829_create_table_users',1),(3,'2020_03_31_162850_create_table_clubs',1),(4,'2020_03_31_163113_add_relationships_to_clubs',1),(5,'2020_03_31_163413_add_relationships_to_users',1),(6,'2020_04_13_190839_create_table_players',1),(7,'2020_04_16_121614_create_table_countries',1),(8,'2020_04_17_120425_create_table_leagues',1),(9,'2020_04_18_102512_create_table_cards_types',1),(10,'2020_04_19_113221_create_table_teams',1),(11,'2020_04_19_113745_add_relationships_to_teams',1),(12,'2020_04_21_123617_create_table_positions',1),(13,'2020_04_21_124044_create_table_cards',1),(14,'2020_04_21_124155_add_relationships_to_cards',1),(15,'2020_05_01_103353_create_table_clubs_cards',1),(16,'2020_05_01_104134_add_relationships_to_clubs_cards',1),(17,'2020_05_06_110034_create_table_packs',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_permissions`
--

DROP TABLE IF EXISTS `model_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_perm_type` (`model_id`,`model_type`),
  CONSTRAINT `fk_model_perm` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_permissions`
--

LOCK TABLES `model_has_permissions` WRITE;
/*!40000 ALTER TABLE `model_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `model_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_roles`
--

DROP TABLE IF EXISTS `model_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_roles` (
  `role_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `mod_rol_index` (`model_id`,`model_type`),
  CONSTRAINT `fk_model_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_roles`
--

LOCK TABLES `model_has_roles` WRITE;
/*!40000 ALTER TABLE `model_has_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `model_has_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packs`
--

DROP TABLE IF EXISTS `packs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `number_players` int NOT NULL,
  `price` bigint NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packs`
--

LOCK TABLES `packs` WRITE;
/*!40000 ALTER TABLE `packs` DISABLE KEYS */;
/*!40000 ALTER TABLE `packs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `full_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `height` int NOT NULL,
  `birth` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `positions`
--

DROP TABLE IF EXISTS `positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `positions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abbreviation` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `positions`
--

LOCK TABLES `positions` WRITE;
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;
/*!40000 ALTER TABLE `positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_has_permissions`
--

DROP TABLE IF EXISTS `role_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `fk_rol_perm` (`role_id`),
  CONSTRAINT `fk_perm_rol` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_rol_perm` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_has_permissions`
--

LOCK TABLES `role_has_permissions` WRITE;
/*!40000 ALTER TABLE `role_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_league` bigint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teams_id_league_foreign` (`id_league`),
  CONSTRAINT `teams_id_league_foreign` FOREIGN KEY (`id_league`) REFERENCES `leagues` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `api_token` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `api_token_expiration_date` timestamp NULL DEFAULT NULL,
  `id_club` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_id_club_unique` (`id_club`),
  CONSTRAINT `users_id_club_foreign` FOREIGN KEY (`id_club`) REFERENCES `clubs` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-17 13:11:43
