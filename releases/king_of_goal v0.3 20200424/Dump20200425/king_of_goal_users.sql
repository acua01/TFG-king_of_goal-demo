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
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'admin','admin','$2y$10$5yPW1eNxS.uOrsrvXVJdl.OMJFe9rRh11nSKdXY6PbeJZhaDo.GXi','nfZg8ZKG1JDEI3lJ2xrxKRuuSVcpDT6wOBgTrnzkfdK9YEPxnwCpkFTX7MkC5ea31442648ea',NULL,NULL),(4,'pepe','pepe@pepe.com','$2y$10$Crq1JrV8AvI/ypEW9uxZqeFtW7lUWkLq3zKVcv4LH8qQxp5ZMF8.y','0dbtRJZiS8CaHQJyBMvpwUM8RbKsKZt9xf41lGIaoZHeI6pH6lyqXNbJnxFz5e9325d18272b',NULL,NULL),(5,'acua01','ale.ap98@hotmail.com','$2y$10$s/.6j/6ItyoaD6dhQRA9e.oj0klE7y1l8ROiM23uAwosv1Jx/hkuq','Sj8iNe2oYI4T0VbO8UIG5Gx1YFYT57rC6G2QMNOJZZh97SQBPrMJcqpuxVRw5e9af0816bd53',NULL,NULL);
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

-- Dump completed on 2020-04-25 13:53:45
