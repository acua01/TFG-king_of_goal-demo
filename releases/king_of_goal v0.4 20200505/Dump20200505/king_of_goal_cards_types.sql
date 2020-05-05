-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: king_of_goal
-- ------------------------------------------------------
-- Server version	5.7.26

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
-- Dumping data for table `cards_types`
--

LOCK TABLES `cards_types` WRITE;
/*!40000 ALTER TABLE `cards_types` DISABLE KEYS */;
INSERT INTO `cards_types` VALUES (1,'Oro Único','/storage/cards_types/TBrEAw8KcbGcVFSkHNk84nWOiPxuul_5ea2f556af9f7.png','/storage/cards_types_mini/kQBkArcijMhuhTZuLID3UjXTvYT34W_5ea2f556b0f19.png','#4d331f',1,0),(2,'OTW','/storage/cards_types/ATrsMqBXokgVQjtNQtRGSn795UCuIh_5ea2f9411a696.png','/storage/cards_types_mini/yiQjYMhqVkEcnuuL2H9yzFjt6eECBH_5ea2f9411d9f7.png','#fc5461',1,1),(3,'Oro','/storage/cards_types/qnGMGa5LDbFNUzOrPn1PfesMMqzMsW_5ead50c000651.png','/storage/cards_types_mini/KfpoE8VcozuMguatVBJBObtesWPlKh_5ead50c001896.png','#4d331f',0,0),(4,'Plata Único','/storage/cards_types/lu3q2ABGub2nasMNX22IEYluoXHboe_5ead5132b2ce3.png','/storage/cards_types_mini/xX5yrwqE90JEWHmKau7wsmjQHuBIoV_5ead5132b399b.png','#3b3d41',1,0),(5,'Plata','/storage/cards_types/L8AGyAROzjYyn8qnWe4Z6Sn1vllYUV_5ead5161cd774.png','/storage/cards_types_mini/qpnAXVb0oSyMDQ9PXqGzP9y4qcbdoI_5ead5161ce997.png','#3b3d41',0,0),(6,'Bronce Único','/storage/cards_types/yuiqXAQEm7AkK1NxTzFahUnMbTf8pR_5ead51afd34e1.png','/storage/cards_types_mini/WgzhFBVIdDiJnyGbD1XgGtgAFhb2yi_5ead51afd428b.png','#4d331f',1,0),(7,'Bronce','/storage/cards_types/HfTS2bWzKDg1Z7tU5TLHrmk9TpyVYV_5ead51bded567.png','/storage/cards_types_mini/zrMGCK1hLCXTwY33OceIp3RSyC4qwo_5ead51bdee7f4.png','#4d331f',0,0),(8,'Shapeshifter','/storage/cards_types/O2IfxvD2hJU0SfIVSFrAkLcuSdObhF_5ead5227b4b73.png','/storage/cards_types_mini/GzljQTwwBqjX5slRTxnWi4dgtx1qHn_5ead5227b6b52.png','#ffffff',1,1),(9,'TOTW','/storage/cards_types/NivHm2FtyHmORsIrfhkvfqGLeSYrTa_5ead52724d8ad.png','/storage/cards_types_mini/2DD6SeIM4JkccbZ810XJszcJZEgl0e_5ead52724e9db.png','#e1c775',1,1),(10,'MOTM','/storage/cards_types/UZpwrAGoSUYdz1Hr5aAcSqgrcvIs9F_5ead52bd6fc37.png','/storage/cards_types_mini/74Z82e7AB49zTIYMPvK84Ay3QRDnlu_5ead52bd71219.png','#e6e6e6',1,1),(11,'Headliner','/storage/cards_types/jscF5iqWtzUXSuLVXNPg459Mwbf3bL_5ead52f01e1d1.png','/storage/cards_types_mini/89IJz7lsLVOEkIGawku0LCafCrQt7d_5ead52f020620.png','#ffffff',1,1),(12,'Future Star','/storage/cards_types/YgYl2p3L1zTbbMaFd8syib8Ri6NBv5_5ead533aa0951.png','/storage/cards_types_mini/jJpd3jFo0oSTtgIzFp2fbaGYT8fn3E_5ead533aadc51.png','#fAfa20',1,1),(13,'Scream','/storage/cards_types/78aMsNndS9oCDXRUe68knZOgj2j90J_5ead53749ad22.png','/storage/cards_types_mini/WYemlIA9goYbAR6t5AUX9BsboHmqUg_5ead53749c843.png','#f98131',1,1),(14,'Champions','/storage/cards_types/cUiJf9bTlggdtI4qzn46NYIuek32Qv_5ead544377679.png','/storage/cards_types_mini/8zEhkYO2HtckZvQgYi8ojXsDLkrvJw_5ead544378ab5.png','#ffffff',0,0),(15,'Champions Único','/storage/cards_types/wjAWCNF4WCBYmchQU6inuUYjUUW5AB_5ead545595e75.png','/storage/cards_types_mini/bon9hJLrVSjV7adAz3YMtoihtvgemR_5ead545596c77.png','#ffffff',1,0),(16,'Champions Live','/storage/cards_types/MPdkqtsgZGCW8JCjmvZ7hLLQAnMAKF_5ead5498b2baa.png','/storage/cards_types_mini/0V8xaTpuhT6BESF8G6nWciG8VJFP6A_5ead5498b7471.png','#88f3dd',1,1),(17,'Champions MOTM','/storage/cards_types/NXPSuYTFIhDzwoBgvPJJG6UXd60vde_5ead54ce6e79d.png','/storage/cards_types_mini/Vtan1HrcH8LxpsoTaWLRB7lYkbiOnC_5ead54ce703fd.png','#f5f5f5',1,1),(18,'Champions TOTT','/storage/cards_types/dgV3W4MPtq1ZgteevkieyoyQeTQLqK_5ead5523afb2d.png','/storage/cards_types_mini/LePHPdrHbY6ihbjG9MTXS4hVpcrY1i_5ead5523b27f9.png','#f5f5f5',1,1),(19,'Europa TOTT','/storage/cards_types/4E9ek38Q8pZxPCMG8iZ4S7VICQ4qHX_5ead5549b6d72.png','/storage/cards_types_mini/SuUna3q7HIg4adtUvZdEFkztieBqsE_5ead5549b7dc9.png','#f5f5f5',1,1),(20,'Winter Refresh','/storage/cards_types/T3n77lz88oLbx6RUvnWUDaVjMS5WJo_5ead558465098.png','/storage/cards_types_mini/xhlWAMV8GdmfuMcnrxfLc4G2gAIjCn_5ead5584665b1.png','#42ff94',1,1),(21,'Europa Live','/storage/cards_types/zxAHXpGiXwx59KC3lQY4yHlq2fdR8Q_5ead55b78b65d.png','/storage/cards_types_mini/DpSbsJfUNcs9Qcg4DnFFebApgDdQaK_5ead55b78c6c8.png','#030303',1,1),(22,'TOTW Moments','/storage/cards_types/dXZdjpoYs8SIKDN8zQCwQWToG3OK9O_5ead55fd1286e.png','/storage/cards_types_mini/egzrMHeYntmhgKeL2SymFyvNPsiXAn_5ead55fd151ac.png','#eedc82',1,1),(23,'TOTY','/storage/cards_types/lTkPpiB0oKRXSstuPcTgp1zbmuMTqM_5ead562c0ddb6.png','/storage/cards_types_mini/ANsfikk7URjiA5BJsE10cMELSYwk6l_5ead562c15e76.png','#efd668',1,1),(25,'TOTS','/storage/cards_types/ohj6wZF4Tcgry8IIo8Zt0AfR1fuUlH_5ead5669cdec6.png','/storage/cards_types_mini/Fk5nig9V7f2003dpNAJD7YJazW1HmO_5ead5669d37f8.png','#eedc82',1,1),(26,'Futmas','/storage/cards_types/u4fRqz8d8aTYoW7A74LUtaKsUEXTRp_5ead573458b26.png','/storage/cards_types_mini/SShioYT73Bst7OqU65Y2wicgQnlvuF_5ead57345a1bf.png','#ffffff',1,1),(28,'FUT Birthday','/storage/cards_types/vw1dy69BhfNd2xTl70x5Rvx0D505Yp_5ead57a109934.png','/storage/cards_types_mini/hHEAAw15qT1Kb7bLz6c0vh4q9RW7v2_5ead57a10d230.png','#ffffff',1,1),(29,'Icono','/storage/cards_types/3LdSC9jqU1gY5olDJRlJDu3JVQAMRM_5ead59ef51107.png','/storage/cards_types_mini/mniO58mguMY00VQ95CFhJxduglSn0U_5ead59ef528d3.png','#625217',1,1),(30,'TOTY Nominee','/storage/cards_types/bwzY1SKjBsgHTV0vZ1Xp9yqiNzzfzX_5ead9f1b31e78.png','/storage/cards_types_mini/O0F2d5msfC31dCoacHbQ2l5V28TD7X_5ead9f1b34012.png','#efd668',1,1),(31,'Player Moments','/storage/cards_types/6cTmb4JJC9FxzUBtFAKodRarovVeHX_5eada7c991232.png','/storage/cards_types_mini/IUYwHNzMKAAv2m3EikpMJntU4OWC5X_5eada7c9938d8.png','#ffd801',1,1);
/*!40000 ALTER TABLE `cards_types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-05 16:17:51
