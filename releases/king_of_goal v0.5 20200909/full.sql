CREATE DATABASE  IF NOT EXISTS `king_of_goal` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `king_of_goal`;
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
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,89,1000000,96,84,78,90,39,75,'Derecha',5,4,1,6,35,2,1),(2,94,5000000,99,92,88,95,45,84,'Derecha',5,5,28,6,35,2,1),(3,94,2000000,87,92,92,96,39,66,'Izquierda',4,4,1,3,8,11,2),(4,99,8000000,96,98,99,99,50,85,'Izquierda',4,4,23,3,8,11,2),(5,93,1800000,90,93,82,89,35,78,'Derecha',5,4,1,4,18,12,1),(6,95,2500000,94,94,85,91,39,82,'Izquierda',5,4,8,4,18,12,2),(7,89,500000,73,89,80,84,51,84,'Derecha',3,4,1,11,8,4,1),(8,90,1000000,77,90,81,86,53,85,'Derecha',3,4,9,11,8,4,1),(9,83,60000,84,82,77,85,39,61,'Derecha',4,5,1,12,24,2,1),(10,87,500000,88,88,83,89,44,67,'Derecha',4,5,2,12,24,2,1),(11,89,1100000,96,84,78,90,39,75,'Derecha',5,4,15,6,35,2,1),(12,98,7000000,99,96,93,98,55,90,'Derecha',5,4,23,6,35,2,1),(13,90,1500000,97,85,79,91,40,76,'Derecha',5,4,30,6,35,2,1),(14,90,1700000,97,86,80,91,40,76,'Derecha',5,4,9,6,35,2,3),(15,93,1,90,93,82,89,35,78,'Derecha',5,4,15,4,18,12,1),(16,94,1,91,94,84,90,36,80,'Derecha',5,4,9,4,18,12,3),(17,94,1,91,94,83,90,36,79,'Derecha',5,4,30,4,18,12,1),(18,99,1,97,99,92,98,45,95,'Derecha',5,4,23,4,18,12,1),(19,94,1,87,92,92,96,39,66,'Izquierda',4,4,15,3,8,11,2),(20,95,1,88,93,93,97,40,67,'Izquierda',4,4,30,3,8,11,2),(21,95,1,89,93,93,97,40,68,'Izquierda',4,4,9,3,8,11,2),(22,96,1,91,95,94,98,41,71,'Izquierda',4,4,8,3,8,11,6),(23,96,1,91,94,94,98,42,70,'Izquierda',4,4,18,3,8,11,2),(24,97,1,92,95,95,99,44,72,'Izquierda',4,4,22,3,8,11,7),(25,85,1,86,85,79,87,41,63,'Derecha',4,5,9,12,24,2,1),(26,87,1,88,88,83,89,44,67,'Derecha',4,5,9,12,24,2,1),(27,90,1,91,90,87,92,46,77,'Izquierda',4,5,8,12,24,2,2),(28,89,1,73,89,80,84,51,84,'Derecha',3,4,15,11,8,4,1),(29,88,1,85,89,72,87,48,85,'Izquierda',1,3,1,18,9,14,17),(30,88,1,85,89,72,87,48,85,'Izquierda',1,3,15,18,9,14,17),(31,93,1,92,95,78,92,53,92,'Izquierda',1,3,25,18,9,14,17),(32,90,1,88,85,88,90,43,88,'Derecha',1,4,1,7,8,9,17),(33,90,1,88,85,88,90,43,88,'Derecha',1,4,15,7,8,9,17),(34,91,1,89,86,89,91,44,89,'Derecha',1,4,30,7,8,9,17),(35,91,1,90,86,89,92,44,90,'Derecha',1,4,18,7,8,9,17),(36,92,1,92,88,90,93,45,91,'Derecha',1,4,22,7,8,9,17),(37,80,1,82,80,74,81,40,70,'Derecha',5,4,1,19,10,12,6),(38,80,1,82,80,74,81,40,70,'Derecha',5,4,15,19,10,12,6),(39,80,1,82,80,74,81,40,70,'Derecha',5,4,2,19,10,12,6),(40,92,1,90,92,87,92,49,81,'Derecha',5,4,12,19,10,12,1),(41,91,1,91,83,86,94,35,66,'Derecha',4,4,1,9,9,14,3),(42,91,1,91,83,86,94,35,66,'Derecha',4,4,15,9,9,14,3),(43,92,1,92,84,87,95,36,67,'Derecha',4,4,30,9,9,14,3),(44,92,1,92,85,88,95,36,67,'Derecha',4,4,9,9,9,14,11),(45,92,1,92,85,88,95,36,67,'Derecha',4,4,2,9,9,14,3),(46,94,1,93,90,90,96,38,70,'Derecha',5,4,28,9,9,14,1),(47,95,1,94,92,92,97,39,71,'Derecha',4,4,31,9,9,14,1),(48,92,1,91,85,87,95,32,58,'Derecha',5,5,1,5,35,10,3),(49,92,1,91,85,87,95,32,58,'Derecha',5,5,15,5,35,10,3),(50,93,1,92,86,88,96,33,59,'Derecha',5,5,30,5,35,10,3),(51,93,1,92,87,89,96,33,59,'Derecha',5,5,9,5,35,10,7),(52,95,1,94,90,93,98,35,62,'Derecha',5,5,11,5,35,10,7),(53,90,1,93,86,81,89,45,74,'Izquierda',4,3,1,8,36,7,2),(54,90,1,93,86,81,89,45,74,'Izquierda',4,3,15,8,36,7,2),(55,91,1,94,87,82,90,46,75,'Izquierda',4,3,30,8,36,7,2),(56,91,1,94,87,84,90,46,76,'Izquierda',4,3,18,8,36,7,2),(57,92,1,95,88,86,91,47,78,'Izquierda',4,3,9,8,36,7,1),(58,94,1,97,91,90,93,50,80,'Izquierda',4,3,11,8,36,7,2),(59,97,1,99,97,95,97,53,84,'Izquierda',4,3,25,8,36,7,2),(60,75,1,75,74,69,76,35,75,'Derecha',4,4,3,17,8,3,1),(61,75,1,75,74,69,76,35,75,'Derecha',4,4,14,17,8,3,1),(62,99,1,98,99,92,99,43,94,'Derecha',5,4,25,4,18,12,1),(63,99,1,98,99,99,99,44,80,'Izquierda',4,4,25,3,8,11,2),(64,98,1,99,97,92,98,55,90,'Derecha',5,4,25,6,35,2,1),(65,97,1,97,97,94,98,52,84,'Derecha',4,5,25,12,24,2,1),(66,98,1,98,96,98,99,38,67,'Derecha',5,5,25,5,35,10,3),(67,95,1,96,93,94,97,48,95,'Derecha',1,4,25,7,8,9,17),(68,78,700,62,53,66,65,79,83,'Derecha',2,3,3,31,76,2,9),(69,78,700,62,53,66,65,79,83,'Derecha',2,3,14,31,76,2,9),(70,82,15000,68,59,71,70,83,87,'Derecha',2,3,17,31,76,2,8),(71,76,500,56,78,55,67,38,77,'Derecha',3,4,3,30,70,9,1),(72,74,1,96,60,61,83,31,75,'Derecha',4,2,4,20,54,1,2),(73,77,1,96,64,64,84,36,78,'Derecha',4,2,1,20,54,1,2),(74,80,1,97,71,68,85,40,81,'Derecha',4,2,9,20,54,1,12),(75,83,1,98,78,75,87,42,83,'Derecha',4,2,9,20,54,1,2),(76,85,1,98,80,78,87,42,83,'Derecha',4,2,13,20,54,1,2),(77,85,1,99,80,80,89,43,85,'Derecha',4,2,11,20,54,1,2),(78,89,1,99,85,86,91,45,93,'Derecha',4,2,25,20,54,1,2),(79,97,1,91,99,93,96,59,95,'Derecha',3,4,25,11,8,4,1),(80,77,1,72,78,75,77,32,68,'Izquierda',4,4,3,26,43,1,1),(81,88,1,89,93,88,92,43,85,'Izquierda',4,4,25,26,43,1,1),(82,79,1,75,60,75,75,78,75,'Izquierda',3,3,3,24,70,9,15),(83,78,1,89,70,72,81,33,60,'Izquierda',4,4,1,23,80,2,7),(84,78,1,89,70,72,81,33,60,'Izquierda',4,4,15,23,80,2,7),(85,87,1,94,83,86,92,40,70,'Izquierda',4,4,12,23,80,2,7),(86,75,1,81,69,69,79,34,75,'Derecha',5,4,1,21,49,35,3),(87,75,1,81,69,69,79,34,75,'Derecha',5,4,1,21,113,35,3),(88,84,1,92,84,84,88,36,83,'Derecha',5,4,21,21,113,35,3),(89,82,1,80,72,77,87,51,58,'Derecha',4,3,1,28,30,1,7),(90,84,1,82,77,79,88,52,59,'Derecha',4,3,9,28,30,1,7),(91,86,1,85,80,81,90,54,62,'Derecha',4,3,10,28,30,1,7),(92,89,1,88,84,85,93,56,66,'Derecha',4,5,28,28,30,1,7),(93,75,1,79,73,75,79,69,74,'Izquierda',4,2,3,22,110,29,15),(94,75,1,79,73,75,79,69,74,'Izquierda',4,2,3,22,108,29,15),(95,88,1,90,82,89,91,84,88,'Izquierda',4,2,25,22,108,29,15),(96,80,1,59,59,67,66,83,79,'Derecha',2,3,1,32,67,2,9);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clubs`
--

LOCK TABLES `clubs` WRITE;
/*!40000 ALTER TABLE `clubs` DISABLE KEYS */;
INSERT INTO `clubs` VALUES (2,'admin fc','/storage/teams/2d6HApaYuRnFLqRzGBFK2rKcxdyZqw_5eac4426c7444.png',27415016,3),(3,'Acua F.C.','/storage/teams/PxB6TAGFunp1p3dkPyDrLD5eG6ZHMi_5ea2dd310d5b1.png',1000000,5);
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
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clubs_cards`
--

LOCK TABLES `clubs_cards` WRITE;
/*!40000 ALTER TABLE `clubs_cards` DISABLE KEYS */;
INSERT INTO `clubs_cards` VALUES (26,2,29),(28,2,55),(29,2,25),(31,2,11),(32,2,46),(33,2,6),(34,2,23),(35,2,48),(36,2,35),(37,2,4),(38,2,52),(39,2,60),(40,2,28),(41,2,7),(42,2,22),(44,2,34),(45,2,46),(46,2,53),(47,2,26),(48,2,41),(49,2,15),(50,2,8),(51,2,19),(52,2,76),(53,2,59),(54,2,58),(55,2,44),(56,2,71),(57,2,84),(58,2,89),(59,2,73),(60,2,1),(61,2,25),(62,2,83),(63,2,72),(64,2,26),(65,2,82),(66,2,68),(67,2,71),(68,2,75),(69,2,89),(70,2,70),(71,2,82);
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
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'España','/storage/countries/LKxpgENNP1T70O7Fp9YadalvZN4sUc_5e985871b7f47.png'),(2,'Francia','/storage/countries/ZS5cYtc2AkyYIaEVgxKihGw6xICL4H_5ea2dd57201c6.png'),(3,'Dinamarca','/storage/countries/0VnqKUhHmOgBl7HEXdHuNz3FTNdt0w_5eac3e0448f64.png'),(4,'Uruguay','/storage/countries/DXXL26h3EBnnkqAK7jNlcolra1jEzi_5eac3e24f224d.png'),(5,'Inglaterra','/storage/countries/JYBHkgg2BWuw6Lf3W9ZMjz1DFcuAp8_5eac3e4755c93.png'),(6,'Italia','/storage/countries/Wl3t6u6H8693S5TTkKD6jqwHaQRLjL_5eac3e62be647.png'),(7,'Egipto','/storage/countries/y4rRDXhq4xBVZXLlJgb7vHMS3a9dDo_5eac3e8084e2c.png'),(8,'Corea del Sur','/storage/countries/iD3l40MtRoJaNrTgdMOZEk0YEwlucg_5eac3ed2c29be.png'),(9,'Alemania','/storage/countries/AwDmtQLclSDmzLTt5vnqOlXaiisBM5_5eac3ef25e5fc.png'),(10,'Brasil','/storage/countries/dJbBeoKhidhQktWlA1WkgCvgpYYkTo_5eac3f0c00c3e.png'),(11,'Argentina','/storage/countries/kdCSjR4nbfsM8hMTzgnUnhcJTblGIv_5eac3f252112a.png'),(12,'Portugal','/storage/countries/aFGUQqZSHp3FFwI33pX52fOMWX9zoE_5eac3f4632520.png'),(13,'Gabón','/storage/countries/v1x85foq2nTHmaHAnrf4wmoAnh8xP2_5eac43ecad0a0.png'),(14,'Bélgica','/storage/countries/hLxjGwsDyPJEPQJ8ITjhVCJ1e3MSDc_5eada3c2cce93.png'),(15,'Bulgaria','/storage/countries/EOdi2uZXsZLZewzPSHzOLgpdf1rW6L_5f52073858b56.png'),(16,'Costa de Marfil','/storage/countries/GAV7JaljnfAkwAmFGw3d1dUavM6d8J_5f52078c67deb.png'),(17,'Estados Unidos','/storage/countries/iPjaRUHPKKOBMaCKmnUHpRJGYSjrIc_5f52079b49498.png'),(18,'Hungría','/storage/countries/jkiESpMGQWFN74useLZEb5KZ3nhEbn_5f5207ab3c645.png'),(19,'Rumanía','/storage/countries/kyzqOgBVloNWDJoxjGwFKMoVo8pxbk_5f5207baede2e.png'),(20,'Rusia','/storage/countries/IixSnCvot30LR5vCs7NOPrEpZ1AdbN_5f5207c479c90.png'),(21,'Venezuela','/storage/countries/AgEV6vokuUxsf7djSBVO1S72GKnHj1_5f5207d5de5ed.png'),(22,'Ghana','/storage/countries/F4guuQwgTAkWRRFqtrjMbL6OSXxarl_5f5207e35b89d.png'),(23,'Polonia','/storage/countries/Mexz63yFAXHnCM5gwAHdlmeoVfy9LQ_5f5207f179f8f.png'),(24,'Ucrania','/storage/countries/GyaG5fxFXFXtulueGHEpEHHcZMH2jC_5f520804a3b7e.png'),(25,'Senegal','/storage/countries/zk5CWjATlSmaXZ2810DctBD86MyYBv_5f52081c29db1.png'),(26,'Serbia','/storage/countries/AXYweAeZOw5Ta46I2KrV75vYOWWdnz_5f520827d46ba.png'),(27,'Suecia','/storage/countries/POItTLAanFhT4Rj7ZQFFwf9Oeu7WO3_5f52082d6e118.png'),(28,'Suiza','/storage/countries/l6M5VZxcfux3TKWwqVpmBqXv0CkfEm_5f52083400c6b.png'),(29,'Turquía','/storage/countries/WBw3O5e10ttvihF090Oc02Nvdk6HlZ_5f52084194d91.png'),(30,'República de Irlanda','/storage/countries/Zt3iiaxziQMpJ0xK5b7YHAbCVD6eCZ_5f5208589efb3.png'),(31,'Países Bajos','/storage/countries/mYRr5zCTVwpKEYV0YxkAjZQXBQsuQD_5f520894a4fc5.png'),(32,'Japón','/storage/countries/vxfq8B4hr4qWPG8TdF0AsSBVLabQa3_5f5208a40066d.png'),(33,'Noruega','/storage/countries/3146g1VRliM0lG7FmNmKKBkwnYZmEk_5f5208b5cecf0.png'),(34,'México','/storage/countries/gp430JlvrW1XHn6BD1XQAA9axQ2zlt_5f5208e656527.png'),(35,'República del Kongo','/storage/countries/CKjG6QigyhicgxqdbacDjVLCJu5LWD_5f5208eff41a4.png'),(36,'Finlandia','/storage/countries/sek6FwA7LtYJ5Ru1RewmlRE8ClhP1A_5f5209045e700.png'),(37,'Ecuador','/storage/countries/oyaxdFxWnnOPdlL37lDHoEiUrLNlHz_5f520913b97d6.png'),(38,'Camerún','/storage/countries/NgLn18IqzzEuHm6tVpXCU8EieXOJ2I_5f5209269b4b7.png'),(39,'Colombia','/storage/countries/rJV2M6Sn9HYFfwBuxjsJRoR0y3DGjE_5f52092d0cb65.png'),(40,'Chile','/storage/countries/zZTsWmOUo6FPJjUd1jaS40HQJEfAyo_5f520955e59c9.png'),(41,'Croacia','/storage/countries/Ft4iZAWHGpeeZ40P7kgcrfkJibH1Xm_5f520966ce864.png'),(42,'Escocia','/storage/countries/kax07Y78FdhiCn7MKcNj0X3vFxJ3h9_5f520977cf50e.png'),(43,'Eslovaquia','/storage/countries/6sxc7jUC7nJsbqKQa2CuN67UdfjJD0_5f52098701dea.png'),(44,'Eslovenia','/storage/countries/uG6qSX5LmDyMWO4eHE4FrDkvnPyAQJ_5f52098ecb104.png'),(45,'Irlanda del Norte','/storage/countries/3K24TW6NXpuWkoYiWpboAa09MFQfSH_5f5209f841106.png'),(46,'Perú','/storage/countries/fgaEyVU7V2HkrtPZhflIqHzcPLgNBk_5f520a1a50b38.png'),(47,'Kosovo','/storage/countries/ZbI3vnPBV04mqhOIv5gsKlFgAeieC4_5f520a5a2a7be.png');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leagues`
--

LOCK TABLES `leagues` WRITE;
/*!40000 ALTER TABLE `leagues` DISABLE KEYS */;
INSERT INTO `leagues` VALUES (1,'LaLiga Santander','/storage/leagues/pPc4vXtr6ANnDLVx2LZM3JYfRe44Ls_5e99fd1eaf483.png'),(2,'LaLiga SmartBank','/storage/leagues/U8ItuH4PyQHUsnKJXRZVl7EY83SCgW_5ea2dcf513c90.png'),(3,'Premier League','/storage/leagues/6XzTjo8hdiTwH0WfmP7KTKfNjtHNnU_5eac400b0e74a.png'),(4,'Serie A','/storage/leagues/Z9m8902NdXhCq4USgS7ebYFlCZf9Re_5eac4021b55df.png'),(5,'Iconos','/storage/leagues/b6T2rV5c1bNZ0qCor1e5dtSNPeOAPt_5eac406869276.png'),(6,'Ligue One Conforama','/storage/leagues/OP5Vod4IlP8dHIortCbtqaJtw6tuXG_5eac408c3192e.png'),(7,'Bundesliga','/storage/leagues/ESZGs2aIrkZCfFM9ldmmI4zgvpQHyl_5eac40a980e45.png'),(8,'Meiji Masuda J1 League','/storage/leagues/t5waD8AO0vr27wofPjvbMLkkXP4gad_5eac411dc296f.png'),(9,'Major League Soccer','/storage/leagues/rMbPECRHgU4qoHBYzgidoVE4DNJQaa_5eac41424fada.png'),(10,'Saudi Professional League','/storage/leagues/hhHWt1UWOz74QgKo52PqJsAHu27pM0_5eac41623e334.png'),(11,'Liga Bancomer MX','/storage/leagues/IdnTwdEIMDfQOg6IL0JDvELz5C13YB_5eac4197ec1ab.png'),(12,'Superliga Argentina Fútbol','/storage/leagues/37aKFprkfhCSGHATPRuPWJ1SVfwDb8_5eac41f6e063e.png'),(13,'EFL Championship','/storage/leagues/sMqlDncNBBmb0YKcnBNb80Qyd43WHq_5eac421bb9539.png'),(14,'Calcio B','/storage/leagues/0reEHPhnCM5PWM3kv1pOwZEhflDZt9_5eac46b136912.png'),(15,'Domino\'s Ligue 2','/storage/leagues/A1zeuE46lKcWS7YY3SGda4Lb27GPFu_5eac46f0c50e1.png'),(16,'Bundesliga 2','/storage/leagues/gU4zAYvZCN7OFiX3HyIuoQNWnbpQ8p_5eac470f25081.png'),(17,'Eredivise','/storage/leagues/CMyAOH6SZHhIlyXzn22xvA0QSA5DS3_5eac48099e2a6.png'),(19,'Süper Lig','/storage/leagues/8U0RU932rbDGHr3rcMTBJJOFmtn1Sd_5f5204b7a109c.png'),(20,'Liga NOS','/storage/leagues/FQ9eybrfHkPVAsXlyjHI663CoLIW50_5f52059c40717.png');
/*!40000 ALTER TABLE `leagues` ENABLE KEYS */;
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
INSERT INTO `model_has_roles` VALUES (1,'App\\User',1),(1,'App\\User',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packs`
--

LOCK TABLES `packs` WRITE;
/*!40000 ALTER TABLE `packs` DISABLE KEYS */;
INSERT INTO `packs` VALUES (1,'Sobre 2 jugadores','',2,5000,'/storage/packs/k907TL6PHpuhR2xdc2zm7Omj0qUqfn_5f4a25a8a7e31.png'),(3,'Sobre ultimate','',30,125000,'/storage/packs/eDJUqD6BquN8AlkI61ilJ5Fb6XrgOf_5f4e3b45d0853.png'),(4,'Mini sobre','',4,7500,'/storage/packs/lnoDJ3KG6fsHSRYyEjSfr32Cs2KWmE_5f50bc5723db3.png'),(5,'Sobre normal','',6,10000,'/storage/packs/MHj814thzIXxOKLjReVQvXDUjzhdZN_5f50bc73796b3.png'),(6,'Sobre premium','',12,20000,'/storage/packs/q3Mk7U5hFjDbFiJ43DA9eFbM4Cygvr_5f50bca02baa6.png'),(7,'Sobre jumbo','',24,100000,'/storage/packs/4wCQXRid6aHiHUlbZmQ6AYiweXvT1K_5f50bcb63d8a7.png');
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
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (41,'manage permissions','api'),(45,'manage players','api'),(46,'manage countries','api'),(47,'manage leagues','api'),(48,'manage cards types','api'),(49,'manage teams','api'),(50,'manage cards','api'),(51,'manage positions','api'),(52,'manage packs','api');
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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (2,'Kanté','N\'Golo Kanté','/storage/players/1b7tMSkw5s2BduOb5QRoOcoRu64RR1_5eac35b832ebb.png',168,'1991-03-29'),(3,'Messi','Lionel Messi','/storage/players/eYqhmYjE9M7H7WdriGkvJay39VnKBA_5eac36a48d3e9.png',170,'1987-06-24'),(4,'Cristiano Ronaldo','Cristiano Ronaldo dos Santos Aveiro','/storage/players/p8TRtS01DuXOVKMKWbeco0zGK7YzkX_5eac377e92a01.png',187,'1985-02-05'),(5,'Neymar','Neymar da Silva Santos Jr.','/storage/players/aflSwUKRBm4DiAzg7ArxCnA5MvVjNR_5eac38112680f.png',175,'1992-02-05'),(6,'Mbappé','Kylian Mbappé','/storage/players/sHqYbdzA4Ytu58qWLxuNTISsJGFDJc_5eac386953c20.png',178,'1998-12-20'),(7,'ter Stegen','Marc-André ter Stegen','/storage/players/Tn9DMnZ8YrnXoqnPJHIpuZd6jboYae_5eac38e8df8fc.png',187,'1992-04-30'),(8,'Salah','Mohamed Salah','/storage/players/UTOmenym31Et52udWJv47sBPQLeP3D_5eac394beba5b.png',185,'1992-06-15'),(9,'Hazard','Eden Hazard','/storage/players/jEpkZgg4Um43tVkWQCcesn8LCZH3WN_5eac39b453c1d.png',175,'1991-01-07'),(10,'Aubameyang','Pierre-Emerick Aubameyang','/storage/players/bPEXeC4l8I80GaJZ1yeuvmjM9HoUqW_5eac3a2db22ad.png',187,'1989-06-18'),(11,'Suárez','Luis Suárez','/storage/players/bGYowZFkXoUDRZXNQ46FFehUiD0ChU_5eac3a9cdd1a1.png',182,'1987-01-24'),(12,'Ben Yedder','Wissam Ben Yedder','/storage/players/r5IQomDTCSnIyDplN1kzhQSrXv7FCE_5eac3b3ed0514.png',170,'1990-08-12'),(13,'Son','Heung Min Son','/storage/players/ZQD90nQKac5cIcfcTFGeDDmBhGigu5_5eac3ba5f3d87.png',183,'1992-07-08'),(14,'Rashford','Marcus Rashford','/storage/players/gtwyocUOynnbaMABrh3xrYawFh59gI_5eac3c17df422.png',180,'1997-10-31'),(15,'Pelé','Edson Arantes Nascimento','/storage/players/9Zq0aCIIbZzo4ILCvV05CbCvfRDyXB_5eac3c91b298c.png',173,'1940-10-23'),(16,'Villa','David Villa Sánchez','/storage/players/ckwI7PMudJm4xCDkmqdarSVshFdr6f_5eac3d3235cd5.png',174,'1981-12-03'),(17,'Braithwaite','Martin Braithwaite','/storage/players/p4DtfYsCkoNQN24jFFehnbVw1ut9Dg_5eac3dbcdea6f.png',177,'1991-06-05'),(18,'Courtois','Thibaut Courtois','/storage/players/wVyHUOuuASUaJs4kDthGHjkPr9Qimz_5eada38ee6b31.png',199,'1992-05-11'),(19,'João Félix','João Félix Sequeira','/storage/players/g7QnmHt6siGQbzRNrFGdsyu5XCnzOW_5eada568e18fe.png',181,'1999-11-10'),(20,'Adama','Adama Traoré Diarra','/storage/players/odp0CnNMRVjPIokC0g25g2V7BCzO41_5f520ac2ecd23.png',178,'1996-01-25'),(21,'Bolasie','Yannick Bolasie','/storage/players/yZHGMvKRuRKkxjd6733sonOWek9pLq_5f520b02db941.png',188,'1989-05-24'),(22,'Erkin','Caner Erkin','/storage/players/O4iMF9UPegTCtckIvuHZ7Am7J5UU7P_5f520b2fccfb2.png',181,'1988-10-04'),(23,'Ikoné','Jonathan Ikoné','/storage/players/fRcq7IDR659EaXGM3COTo8aXpXOXKb_5f520b8976e63.png',175,'1998-05-02'),(24,'Jonas Hector','Jonas Hector','/storage/players/ZWeXEq417oIdfe9uwZaOsbsqzH2R8q_5f520bb8c306e.png',185,'1990-05-27'),(25,'Lala','Kenny Lala','/storage/players/sh6VuNflbR4wAY49HW427mWOFOYwMg_5f520be022930.png',178,'1991-10-03'),(26,'Lucas Pérez','Lucas Pérez Martínez','/storage/players/2v7V41bZN7zYnS5gplqR68jN9Kvili_5f520c4a7261f.png',180,'1988-09-10'),(27,'Dembélé','Moussa Dembélé','/storage/players/o1SUxNiGliuHZafWRj3cxNAnVhhS7v_5f520ce09c223.png',183,'1996-07-12'),(28,'Muniain','Iker Muniain Goñi','/storage/players/QHbothwmocQzeYl2LbfYI7SwtaNILZ_5f520d0ac6b35.png',170,'1992-12-19'),(29,'Rodrygo','Rodrygo Silva de Goes','/storage/players/oXRttXmQ8umWqcztJCZv78dlLRgd8h_5f520d471a13e.png',174,'2001-01-09'),(30,'Terodde','Simon Terodde','/storage/players/FelcVVHg93rf6hrUI1Wo9FXzympdAH_5f520d7175256.png',191,'1988-03-02'),(31,'Tousart','Lucas Tousart','/storage/players/wkKRF6azrT415uL7sMKpZvpGSvdaJQ_5f520daf4def4.png',185,'1997-04-29'),(32,'Guilavogui','Josuha Guilavogui','/storage/players/6Eta80YYjV9Qi9vz3iSrgvSi396fyO_5f522f0d190d1.png',188,'1990-09-19');
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `positions`
--

LOCK TABLES `positions` WRITE;
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;
INSERT INTO `positions` VALUES (1,'Delantero centro','dc'),(2,'Extremo derecho','ed'),(3,'Extremo izquierdo','ei'),(4,'Medio derecho','md'),(5,'Medio izquierdo','mi'),(6,'Segundo delantero','sd'),(7,'Mediocentro ofensivo','mco'),(8,'Mediocentro','mc'),(9,'Mediocentro defensivo','mcd'),(10,'Segundo delantero derecho','sdd'),(11,'Segundo delantero izquierdo','sdi'),(12,'Carrilero derecho','cad'),(13,'Carrilero izquierdo','cai'),(14,'Lateral derecho','ld'),(15,'Lateral izquierdo','li'),(16,'Defensa central','dfc'),(17,'Portero','por');
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
INSERT INTO `role_has_permissions` VALUES (41,1),(45,1),(46,1),(47,1),(48,1),(49,1),(50,1),(51,1),(52,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'super-admin','api');
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
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (2,'Betis','/storage/teams/NXhesBgkxl2CuvdAjTwQeMkwuiEytk_5e9dc32a002f4.png',1),(6,'Cádiz C.F.','/storage/teams/PxB6TAGFunp1p3dkPyDrLD5eG6ZHMi_5ea2dd310d5b1.png',1),(7,'Chelsea','/storage/teams/x6AM5916q55yrQR3fdHaky026dTa5K_5eac4271f1076.png',3),(8,'F.C. Barcelona','/storage/teams/010jtjJG00WAtpRK7k0Ca2msggGvzI_5eac4298ece51.png',1),(9,'Real Madrid C.F','/storage/teams/y94hWHJkYcllUKdKJQxS8eXej4IrVL_5eac42bebc87e.png',1),(10,'Atlético Madrid','/storage/teams/0YiprIotafYECGcAF05PHdEqV3Jkns_5eac42e433ff1.png',1),(11,'Vissel Kobe','/storage/teams/d9CvWW3lNO9XkUbH3bwkHE0f94P78t_5eac43112e3b9.png',8),(12,'Manchester United','/storage/teams/A24bzNXXT0s7NvNbgnPWJ3NWkrlsJD_5eac433922a92.png',3),(13,'Manchester City','/storage/teams/QzVDwPNfv4vctUg46V2lf3eNnrvYe2_5eac4355b652d.png',3),(14,'Tottenham Hotspur','/storage/teams/PbCFXfwxac4XVrnMB5zERkRXXHj7hi_5eac4388f3d8a.png',3),(15,'Arsenal','/storage/teams/a2lhTT5SQEPdPvGsHMxynsnbgfobS8_5eac43ac261fa.png',3),(16,'Iconos','/storage/teams/2d6HApaYuRnFLqRzGBFK2rKcxdyZqw_5eac4426c7444.png',5),(17,'Valencia C.F.','/storage/teams/imLIFYVxIo5HEau1kYbkSmIQzJ0TjL_5eac44740e02b.png',1),(18,'Juventus','/storage/teams/nEZsV6048D4d1jvq611FgZjii3EB7k_5eac44aee3fef.png',4),(19,'Sevilla F.C.','/storage/teams/cjc9di2qcaOzywaAYFqtmMlB5ZXFwY_5eac465a9c6db.png',1),(20,'Milan','/storage/teams/JK9ZWnmdkmwfLqpbWIJYUUMWCxzRFC_5eac468214b32.png',4),(21,'Inter de Milan','/storage/teams/ytQaw1PDVqfR9EENoXL0NHM2SMBfAr_5eac47621cd0e.png',4),(22,'Real Sociedad','/storage/teams/7dXAbVZM0uNAbJynMtbUJSwIOTlzIC_5eac477c55780.png',1),(23,'Atlanta United F.C.','/storage/teams/52bDCk3OMOo4Exkm14yzO0f09ZIDVI_5eac47b2c83c3.png',9),(24,'A.S. Monaco F.C.','/storage/teams/MKvGxCzWAfcdz5BUsnasI4GECFzoQG_5eac47ded6ffc.png',6),(25,'Ajax','/storage/teams/DnPmu1OrK5PNPfka1pRqsRz5zDEnx4_5eac482ad8c33.png',17),(26,'F.C. Bayern München','/storage/teams/PhQ6pJrnr01yQQdaZ4nQnTIyZy2Lbo_5eac488de30c1.png',7),(27,'Fiorentina','/storage/teams/M2XG6NlQVkFeZFvCe6WFTSxfposQks_5eac48b709837.png',4),(28,'Newcastle United','/storage/teams/xj7VOFr154zBkm8hyiTVf6H0EPy6nV_5eac48e31201a.png',3),(29,'Eintracht Frankfurt','/storage/teams/xg2w6IkvGSmPAKFy7SKAPcTxNA4kaQ_5eac4957e9eff.png',7),(30,'Athletic Club Bilbao','/storage/teams/cZZ5oqCfzGgF9lUoshkDBaOqONVrDJ_5eac497d66198.png',1),(31,'Club América','/storage/teams/K6EOWtk1JK3m7pEqBPDVqrKTrlwpcY_5eac499f5f1bc.png',11),(32,'Villarreal C.F.','/storage/teams/cvoroSg3R0RejM4peMf5ehEq1mWnVE_5eac49bb57bb9.png',1),(33,'Independiente','/storage/teams/eBY8WphoaLtxwKRg7pDOekeEa4lLSX_5eac49e40e000.png',12),(34,'S.S. Lazio','/storage/teams/DOtKEl6hibdBXrNekww434j1SGGPCW_5eac4a083a12b.png',4),(35,'Paris Saint-Germain','/storage/teams/bgIbARwnCH7Oa04xeTn3sgYFu0gR5p_5ead59adbfae4.png',6),(36,'Liverpool','/storage/teams/NtRkY7x9bdJlJKWtLaaT7xHYdCfhCU_5eada93658c23.png',3),(37,'Elche C.F.','/storage/teams/OEyeEdj4oQYlLDbHQYtem4nnvC1q1B_5f515c2acc0ca.png',1),(38,'S.D. Huesca','/storage/teams/jbLstSwFJTaYPThGWG3hz0MG5nRJ4O_5f515d0bc3687.png',1),(39,'Getafe C.F.','/storage/teams/Uaxnu0ZsMH0yBGuxa6Tqh62HBt7YAV_5f515db1a03c0.png',1),(40,'Levante U.D.','/storage/teams/etbho7JC5amnvrsaImmaUGEDQ6BQwJ_5f515ee3223a4.png',1),(41,'R.C. Celta','/storage/teams/J61BfE7UBuTq27RkcrASNta36isNVo_5f515f2a903c4.png',1),(42,'Granada C.F.','/storage/teams/KL7W9x73ZEywejegpn5anS1EgP64Zx_5f515f5e2b524.png',1),(43,'Deportivo Alavés','/storage/teams/twPop8a4k2ARvjuQs8cMTIKxBAxZud_5f515f8f8a14b.png',1),(44,'Real Valladolid C.F.','/storage/teams/ygYl6dhLe4mPMO8IlJ8tMMeWkVvYJ3_5f515fd12d9e3.png',1),(45,'C.A. Osasuna','/storage/teams/vR42OYzxKBh0cdSm2Tqzd66qzZpNHr_5f51603236967.png',1),(46,'S.D. Eibar','/storage/teams/qGzlU5IDA12sF92gcSonjqkjie314h_5f5160c019b9c.png',1),(47,'Southampton','/storage/teams/Gastqfy1SznRatbwj23jRVAIMo2TDZ_5f516116b5321.png',3),(48,'Leeds United','/storage/teams/sdD4EOAGpZqdkveCACueB1s91nwMeW_5f51618425087.png',3),(49,'Everton','/storage/teams/1VElmUKBcZEw90wvSGT6qtg2XJkgva_5f51621b15eb9.png',3),(50,'Burnley','/storage/teams/EVNGPxU6iJ7ZxjWcxqzJ0YcDHiur9B_5f51622f53300.png',3),(51,'West Ham United','/storage/teams/xt1GMbeA0bRoCo3QZmaKjgbxuXfmJU_5f51623e3bd3d.png',3),(52,'Aston Villa','/storage/teams/SDuSaDu6Q23CJIfdfDuNsAdmsYBNk7_5f516280c9919.png',3),(53,'Crystal Palace','/storage/teams/hHzGQQL9Q54pfnzQn5oix9Qw37Vjcl_5f516296a7afc.png',3),(54,'Wolverhampton Wanderers','/storage/teams/j8MV8GANS4s6MYZ1UD5O1hEJhiNOZr_5f5162bbc2d86.png',3),(55,'Leicester City','/storage/teams/2qjgLBcM62VZRHkzECinBplqYr2mrn_5f5162f8dc2f9.png',3),(56,'Brighton & Hove Albion','/storage/teams/hLiiQpBDX4nGvTtcTLF0UrtWnPySbj_5f51638452de5.png',3),(57,'Sheffield United','/storage/teams/5cEhcxKOUOlP7swYBQ2P4wbuALONJx_5f5163b9a5edc.png',3),(58,'Bournemouth','/storage/teams/NObLQZBir1hExK74OqGSWPT1BO5FWw_5f51fe291dec0.png',13),(59,'Norwich City','/storage/teams/bRZ1EpE25OYkurrzcBrRjfFMWo48MG_5f51fe5538ed5.png',13),(60,'Watford','/storage/teams/2WUkCnfTlekIDtlO56S4fvJrIJM2FR_5f51fe6e276bf.png',13),(61,'RB Leipzig','/storage/teams/b6D2SP3YbN9k823PnM5dMA7egEZTZF_5f51fec697bbb.png',7),(62,'Borussia Dortmund','/storage/teams/Rq6xAjUOttW5MnNpuGX275gQaBncCY_5f51fef88717a.png',7),(63,'Borussia Mönchengladbach','/storage/teams/mVDgbn3jojJPjMrEtns0wV39sEphtY_5f51ff142b662.png',7),(64,'Bayer 04 Leverkusen','/storage/teams/6dQaqa9FhW3B2CnWRzAc5Jl4Egve9r_5f51ff3930814.png',7),(65,'SV Werder Bremen','/storage/teams/4EQnOMvwFMbWNO4bppokVEmwR3vodb_5f51ff54cf7e6.png',16),(66,'Hertha BSC','/storage/teams/B6XiGkaujaEI7ysCCeELNqC0ppOFjg_5f51ff6eb8cd6.png',16),(67,'VfL Wolfsburg','/storage/teams/K6mJ4II9VaiOAJKW5W3pytlSCmI7SG_5f51ff8ea06b2.png',7),(68,'TSG 1899 Hoffenheim','/storage/teams/m4lBg1TKgy1wx7YSfJEXnqPJc4pBJN_5f51ffb62f88b.png',7),(69,'1. FC Union Berlin','/storage/teams/r0Efa0IbkyBKt2hcnLgbP0jz2mQD5N_5f51ffdc89d74.png',7),(70,'1. FC Köln','/storage/teams/run4ekH6SqgVXUi9t1C7tO4Veb2JJP_5f51fff901eca.png',7),(71,'FC Schalke 04','/storage/teams/SLOlMZsxbXcDCgLJmGoaxCmRyfkRcf_5f52001b8d09e.png',7),(72,'FC Augsburg','/storage/teams/FVtnAd5s8QE8CSBKvKdSiQ1j0ZcOG6_5f5200427ae50.png',7),(73,'1. FSV Mainz 05','/storage/teams/PWazqpEwi2VnwOHovOEFB4YPCKkhIu_5f52005c88582.png',7),(74,'Sport-Club Freiburg','/storage/teams/weVNOtd6PXIJAmhVgHDmeJFwqFtqup_5f52007547b0f.png',7),(75,'Fortuna Düsseldorf','/storage/teams/EGlg3Cfsf81XnY2cnEHdQFVWF8HeF6_5f520096dd19e.png',7),(76,'Olympique Lyonnais','/storage/teams/RwDR1PSFTaOO3lqt0EK8u7028nsLvB_5f5200e3e7fbe.png',6),(77,'AS Saint-Étienne','/storage/teams/6LPSWpD6Qk7kHEEPlKMPRxs3B6VtZu_5f5200fc97484.png',6),(78,'Olympique de Marseille','/storage/teams/PrgBXsj2pzr1uyhJ4rgle20KEq9AfE_5f520110640f3.png',6),(79,'FC Girondins de Bordeaux','/storage/teams/Uec8Cwt4ds25nv6DjXkELTf56rfR0T_5f52012412c6f.png',6),(80,'LOSC Lille','/storage/teams/pNVCpXIVYwCd6hp5641soXXIkR8YN6_5f52013769a42.png',6),(81,'Montpellier Hérault SC','/storage/teams/J7mlIW1OqBNR1KfySFIGTuklrJE5wr_5f52014b13517.png',6),(82,'OGC Nice','/storage/teams/kH3AOcyN2WoeJSmC9afWKiAQiWfgBK_5f52015d73eda.png',6),(83,'FC Nantes','/storage/teams/iRLGzweMklYxjuoDUsyBUPTa2OBNPe_5f52016fb0f0b.png',6),(84,'Stade Rennais FC','/storage/teams/ee5DugzC4PrjTCZ8Nv2j8ozrHjh60w_5f5201a1aa131.png',6),(85,'Toulouse Football Club','/storage/teams/WWDITKpp7hNGD0tV6UxJfkXKXOvxKP_5f5201b5b61e8.png',6),(86,'RC Strasbourg Alsace','/storage/teams/8XgSNRA7hP3mXVYWgZ51c2cfj1zJS6_5f5201c9d9159.png',6),(87,'Angers SCO','/storage/teams/Xb27acJ8aJK4fCxbtv4pucvIOtBFdO_5f5201e845713.png',6),(88,'Stade Brestois 29','/storage/teams/4WaUsHqaib0jeYkHaoqtu49siaXNpe_5f520200ef3a8.png',6),(89,'Amiens SC','/storage/teams/rwDdCon1Sj064Ia4uzBJlZ6ir9var1_5f5202139e3d1.png',6),(90,'Nîmes Olympique','/storage/teams/2GOteKYzZhcOpEIPZ6xVpwA98FGze1_5f5202261a43e.png',6),(91,'Stade de Reims','/storage/teams/pyoIS0B4HgFq9x0eGrNM5VAXtYDtlM_5f52024b9535a.png',6),(92,'Napoli','/storage/teams/fRnkFI7LDtdzp3fq5jLF3rfFUETuEb_5f5202b964868.png',4),(93,'Atalanta','/storage/teams/IwBW2X4vM2HUmJINuRkNphmS3c2WMr_5f5202cb3a41b.png',4),(94,'Torino','/storage/teams/KvDNi1O6sjJ4WeoGPL5cevLEK18oF3_5f5202d6d9381.png',4),(95,'Roma','/storage/teams/EXAl92QmWxfIZ0LL5yTRfAzNcAiTRm_5f5202e1c9c43.png',4),(96,'Sampdoria','/storage/teams/i2utS56aL8YFgGNwdz6HqA8gneQDnB_5f5202f1f16c0.png',4),(97,'Cagliari','/storage/teams/V3Sk8YyCAZkxEGKcrpDwdmRxATNr9j_5f5202feeb1cd.png',4),(98,'Brescia','/storage/teams/bkQCRBNBQTDC2ppzPYTCufueDAqPWj_5f52031115557.png',4),(99,'Genoa','/storage/teams/xf5gf7qxvzieNnWT5gXcAdhS5AFBRb_5f52032887138.png',4),(100,'Sassuolo','/storage/teams/HIN9N6szcGA5QENSnHrNZ7HWCohr1M_5f5203384dae6.png',4),(101,'Udinese','/storage/teams/cEr4E0nsqIp0sXsJ1n3xopIf8usvM7_5f52036036c87.png',4),(102,'SPAL','/storage/teams/af5I5gjF3fivO8qaH1UQKuVLoQtdkD_5f52037222dad.png',4),(103,'Parma','/storage/teams/a8Q2WWX6KlDdnbJoHq99MAKSXw3OP2_5f52038215356.png',4),(104,'Bologna','/storage/teams/GhGzQs91WpHOsWW9e9Cn05k2Mw41JM_5f5203acebfdc.png',4),(105,'Hellas Verona','/storage/teams/OH9tTtxVeXzIgSM96HlRMKwJNjyOjK_5f5203cf31a84.png',4),(106,'Lecce','/storage/teams/M2ol4SkiJ3IqOlgMHesVnCm8spJB9c_5f5203eda89dc.png',4),(107,'SD Almería','/storage/teams/9wW8z4GKwHk2F5VTGl1AEloqV8tvSU_5f520474b2923.png',2),(108,'Beşiktaş JK','/storage/teams/r4O6kMtRn7xOmqYHxmrlsi6KQRXJY2_5f5204dddbe33.png',19),(109,'Galatasaray SK','/storage/teams/UszoLlKzszLH8CABhQRLjHhMwjs85v_5f52053baadb3.png',19),(110,'Fenerbahçe SK','/storage/teams/ACeadGZrhRNEq1vcxSOaycORkSM5fd_5f52056a4d508.png',19),(111,'SL Benfica','/storage/teams/YNAUym8TqAOkJOyRl5x4GodttYqAbQ_5f5205b68beec.png',20),(112,'FC Porto','/storage/teams/T1ZgKpRrg9uRCX2QOPkIVLT3w9Eeiv_5f5205c9eb2e4.png',20),(113,'Sporting CP','/storage/teams/YWHixWgXukW3hYBw9VoYtisWD0nCz3_5f5205ec77094.png',20),(114,'Dijon','/storage/teams/Cwxj86PMrmljeHGNIoqxGBegMnB30i_5f52061683688.png',6),(115,'LA Galaxy','/storage/teams/i2q5qgTglWo9yp4aDeee8WznYN4FKA_5f52064257506.png',9),(116,'Medipol Başakşehir FK','/storage/teams/3UUS56fymCmBvZPA9i6iWLMCsXvFM4_5f52067f141be.png',19),(117,'Leganés','/storage/teams/67fBhGwSxnKhS4cYGC5sretdCj0AQO_5f5206ae05fe7.png',2),(118,'Mallorca','/storage/teams/rWuT5gQ9wAtiOwjKdYJppoKUg7kQ5k_5f5206b7dcea4.png',2),(119,'Espanyol','/storage/teams/ZfH5goBpSdn5Wbqp5j6p9qiWm9KR8g_5f5206bf43117.png',2),(120,'SC Paderborn','/storage/teams/yt83nhye2402eEOZEUqeTcCNCutrW1_5f5206e47475f.png',7);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'admin','admin','$2y$10$5yPW1eNxS.uOrsrvXVJdl.OMJFe9rRh11nSKdXY6PbeJZhaDo.GXi','nz6CMeqJCq8oUd5gBovD8AaQxgRhrO7qfXt6bAZjRrOS63x944mgXm2V8k8X5f53ad9164455',NULL,2),(4,'pepe','pepe@pepe.com','$2y$10$Crq1JrV8AvI/ypEW9uxZqeFtW7lUWkLq3zKVcv4LH8qQxp5ZMF8.y','0dbtRJZiS8CaHQJyBMvpwUM8RbKsKZt9xf41lGIaoZHeI6pH6lyqXNbJnxFz5e9325d18272b',NULL,NULL),(5,'acua01','ale.ap98@hotmail.com','$2y$10$V0hrNHj8rFgFA7F4MqljC.Mx7sQPbL4LXbio/Sy6cQ49ty1HTxl5i','jJNn1sVwAjXiTtpP4o1CpwVzJO3NxdoSK3LLFNRYTjmscS0Pkt5Y556rxHQS5f51fdda2dee4',NULL,3),(6,'aaaaaa','aaaa@aaaa.com','$2y$10$wwUAJ7NiFuZaib0z2blioe1mMWtaPqzrFzwxw0HcQE9cD.f0aqhEO','LhDqt9R8jbjoTYmbAPzd2Orc6xuLAtgXJUmlFbwOBjOmkyLIrz7LljLmsvU25ea853407fac1',NULL,NULL),(7,'juanito','juanito@juanito.com','$2y$10$4Tcn5CXvR9KGO7A76EmxP.PMyerTBlYvqbFo0YcJ7iaUMn4B2Hhna',NULL,NULL,NULL);
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

-- Dump completed on 2020-09-09 12:51:05
