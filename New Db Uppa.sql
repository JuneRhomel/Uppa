-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for utility_wise_standard
CREATE DATABASE IF NOT EXISTS `utility_wise_standard` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `utility_wise_standard`;

-- Dumping structure for table utility_wise_standard.admin_users
CREATE TABLE IF NOT EXISTS `admin_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `profile_pic` text DEFAULT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` text NOT NULL,
  `contact_number` varchar(50) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `password` text NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`) USING HASH,
  KEY `role_id` (`role_id`),
  CONSTRAINT `FK_users_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table utility_wise_standard.admin_users: ~2 rows (approximately)
REPLACE INTO `admin_users` (`id`, `role_id`, `profile_pic`, `first_name`, `last_name`, `email`, `contact_number`, `is_active`, `password`, `created_at`, `updated_at`, `updated_by`, `deleted_by`, `created_by`) VALUES
	(1, 1, NULL, 'June Rhomel', 'Mandigma', 'junemandigma@gmail.com', NULL, NULL, '25f9e794323b453885f5181f1b624d0b', '0000-00-00', '2024-09-14', NULL, NULL, NULL),
	(5, 1, NULL, 'John', 'Doe', 'john.doe@example.com', '1234567890', 0, '7b907ea3515ac72cf0849ed1235bedb3', '2024-09-14', '2024-09-14', NULL, NULL, 1);

-- Dumping structure for table utility_wise_standard.news_and_announcements
CREATE TABLE IF NOT EXISTS `news_and_announcements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `created_at` date NOT NULL,
  `deleted_at` date NOT NULL,
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table utility_wise_standard.news_and_announcements: ~0 rows (approximately)

-- Dumping structure for table utility_wise_standard.permition
CREATE TABLE IF NOT EXISTS `permition` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `module` varchar(50) DEFAULT NULL,
  `action` varchar(50) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table utility_wise_standard.permition: ~0 rows (approximately)

-- Dumping structure for table utility_wise_standard.report_issue
CREATE TABLE IF NOT EXISTS `report_issue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subscriber_id` int(11) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `type_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `created_at` date NOT NULL,
  `deleted_at` date NOT NULL,
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `subscriber_id` (`subscriber_id`),
  KEY `status` (`status`),
  CONSTRAINT `FK_report_issue_utility_subscriber` FOREIGN KEY (`subscriber_id`) REFERENCES `subscriber` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table utility_wise_standard.report_issue: ~0 rows (approximately)

-- Dumping structure for table utility_wise_standard.role
CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `created_at` date NOT NULL,
  `deleted_at` date NOT NULL,
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table utility_wise_standard.role: ~0 rows (approximately)
REPLACE INTO `role` (`id`, `role_name`, `description`, `created_at`, `deleted_at`, `updated_at`, `updated_by`, `deleted_by`, `created_by`) VALUES
	(1, 'IT', '', '0000-00-00', '0000-00-00', '2024-09-14', NULL, NULL, NULL);

-- Dumping structure for table utility_wise_standard.subscriber
CREATE TABLE IF NOT EXISTS `subscriber` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL DEFAULT '',
  `last_name` varchar(50) NOT NULL DEFAULT '',
  `email` text NOT NULL,
  `password` text NOT NULL,
  `contact_number` varchar(50) NOT NULL DEFAULT '',
  `status` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `deleted_at` date NOT NULL,
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table utility_wise_standard.subscriber: ~0 rows (approximately)

-- Dumping structure for table utility_wise_standard.technician
CREATE TABLE IF NOT EXISTS `technician` (
  `id` int(11) NOT NULL,
  `preofile_pic` text NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` text NOT NULL,
  `contact_number` varchar(11) NOT NULL,
  `password` text DEFAULT NULL,
  `created_at` date NOT NULL,
  `deleted_at` date NOT NULL,
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table utility_wise_standard.technician: ~0 rows (approximately)

-- Dumping structure for table utility_wise_standard.utility
CREATE TABLE IF NOT EXISTS `utility` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subscriber_id` int(11) DEFAULT NULL,
  `accounts_num` text NOT NULL,
  `utility_type_id` int(11) NOT NULL,
  `created_at` date NOT NULL,
  `deleted_at` date NOT NULL,
  `updated_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `utility_subscriber_id` (`subscriber_id`) USING BTREE,
  CONSTRAINT `FK_utility_subscriber` FOREIGN KEY (`subscriber_id`) REFERENCES `subscriber` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table utility_wise_standard.utility: ~0 rows (approximately)

-- Dumping structure for table utility_wise_standard.utility_readings
CREATE TABLE IF NOT EXISTS `utility_readings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `utility_id` int(11) DEFAULT NULL,
  `technician_id` int(11) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `current_reading` int(11) DEFAULT NULL,
  `prev_reading` int(11) DEFAULT NULL,
  `consuption` decimal(20,6) DEFAULT NULL,
  `reading_date` date DEFAULT curdate(),
  PRIMARY KEY (`id`),
  KEY `utility_id` (`utility_id`),
  KEY `technician_id` (`technician_id`),
  CONSTRAINT `FK_utility_readings_technician` FOREIGN KEY (`technician_id`) REFERENCES `technician` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_utility_readings_utility` FOREIGN KEY (`utility_id`) REFERENCES `utility` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table utility_wise_standard.utility_readings: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
