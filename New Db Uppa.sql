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


-- Dumping database structure for mang_kanor_rent
DROP DATABASE IF EXISTS `mang_kanor_rent`;
CREATE DATABASE IF NOT EXISTS `mang_kanor_rent` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `mang_kanor_rent`;

-- Dumping structure for table mang_kanor_rent.list_unit_status
DROP TABLE IF EXISTS `list_unit_status`;
CREATE TABLE IF NOT EXISTS `list_unit_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `unit_status_name` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unit_status_name` (`unit_status_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mang_kanor_rent.list_unit_status: ~5 rows (approximately)
REPLACE INTO `list_unit_status` (`id`, `unit_status_name`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `deleted_by`, `updated_by`) VALUES
	(1, 'Available', NULL, '2024-08-24 12:48:02', NULL, NULL, NULL, 6),
	(2, 'Not For Rent', NULL, '2024-08-16 15:03:11', NULL, NULL, NULL, 6),
	(3, 'For Rent', NULL, '2024-08-16 15:03:16', NULL, NULL, NULL, 6),
	(4, 'Occupied', NULL, '2024-08-16 15:03:34', NULL, NULL, NULL, 6),
	(5, 'For Sale', NULL, '2024-08-16 15:03:44', NULL, NULL, NULL, 6);

-- Dumping structure for table mang_kanor_rent.list_unit_type
DROP TABLE IF EXISTS `list_unit_type`;
CREATE TABLE IF NOT EXISTS `list_unit_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `unit_type_name` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unit_type_name` (`unit_type_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mang_kanor_rent.list_unit_type: ~5 rows (approximately)
REPLACE INTO `list_unit_type` (`id`, `unit_type_name`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `deleted_by`, `updated_by`) VALUES
	(1, 'Condo ', NULL, '2024-08-24 12:52:33', NULL, NULL, NULL, 6),
	(2, 'House', NULL, '2024-08-16 15:04:07', NULL, NULL, NULL, 6),
	(3, 'Lot', NULL, '2024-08-16 15:04:13', NULL, NULL, NULL, 6),
	(4, 'Appartment', NULL, '2024-08-16 15:04:25', NULL, NULL, NULL, 6),
	(5, 'Room', NULL, '2024-08-16 15:04:39', NULL, NULL, NULL, 6);

-- Dumping structure for table mang_kanor_rent.mother_meter_electricity
DROP TABLE IF EXISTS `mother_meter_electricity`;
CREATE TABLE IF NOT EXISTS `mother_meter_electricity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serial_number` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `serial_number` (`serial_number`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mang_kanor_rent.mother_meter_electricity: ~21 rows (approximately)
REPLACE INTO `mother_meter_electricity` (`id`, `serial_number`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `deleted_by`, `updated_by`) VALUES
	(1, 'HDFA 9348 A934', NULL, NULL, NULL, NULL, NULL, NULL),
	(2, 'EMD001', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(3, 'EMD002', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(4, 'EMD003', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(5, 'EMD004', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(6, 'EMD005', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(7, 'EMD006', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(8, 'EMD007', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(9, 'EMD008', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(10, 'EMD009', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(11, 'EMD010', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(12, 'EMD011', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(13, 'EMD012', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(14, 'EMD013', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(15, 'EMD014', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(16, 'EMD015', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(17, 'EMD016', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(18, 'EMD017', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(19, 'EMD018', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(20, 'EMD019', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(21, 'EMD020', '2024-08-04 19:48:17', '2024-08-04 19:48:17', NULL, 1, NULL, 1),
	(22, 'Test-3434-3434', '2024-08-08 00:09:46', NULL, NULL, 6, NULL, NULL),
	(23, 'MME-34554656', '2024-08-14 09:35:03', NULL, NULL, 6, NULL, NULL);

-- Dumping structure for table mang_kanor_rent.mother_meter_reading_electicity
DROP TABLE IF EXISTS `mother_meter_reading_electicity`;
CREATE TABLE IF NOT EXISTS `mother_meter_reading_electicity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mother_meter_electricity_id` int(11) DEFAULT NULL,
  `meter_reading` decimal(20,6) DEFAULT NULL,
  `consuption` decimal(20,6) DEFAULT NULL,
  `rate` decimal(20,6) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mother_meter_electricity_id` (`mother_meter_electricity_id`),
  CONSTRAINT `FK_mother_meter_reading_electicity_mother_meter_electricity` FOREIGN KEY (`mother_meter_electricity_id`) REFERENCES `mother_meter_electricity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mang_kanor_rent.mother_meter_reading_electicity: ~0 rows (approximately)

-- Dumping structure for table mang_kanor_rent.mother_meter_reading_water
DROP TABLE IF EXISTS `mother_meter_reading_water`;
CREATE TABLE IF NOT EXISTS `mother_meter_reading_water` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mother_meter_water_id` int(11) DEFAULT NULL,
  `meter_reading` decimal(20,6) DEFAULT NULL,
  `consuption` decimal(20,6) DEFAULT NULL,
  `rate` decimal(20,6) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mother_meter_id` (`mother_meter_water_id`),
  CONSTRAINT `FK_mother_meter_reading_water_mother_meter_water` FOREIGN KEY (`mother_meter_water_id`) REFERENCES `mother_meter_water` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mang_kanor_rent.mother_meter_reading_water: ~0 rows (approximately)
REPLACE INTO `mother_meter_reading_water` (`id`, `mother_meter_water_id`, `meter_reading`, `consuption`, `rate`, `created_at`, `created_by`, `deleted_at`, `updated_at`, `deleted_by`, `updated_by`) VALUES
	(1, 1, 4545.000000, 4554.000000, 453.000000, NULL, 0, NULL, NULL, NULL, NULL);

-- Dumping structure for table mang_kanor_rent.mother_meter_water
DROP TABLE IF EXISTS `mother_meter_water`;
CREATE TABLE IF NOT EXISTS `mother_meter_water` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serial_number` text NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `serial_number` (`serial_number`(768))
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mang_kanor_rent.mother_meter_water: ~44 rows (approximately)
REPLACE INTO `mother_meter_water` (`id`, `serial_number`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `deleted_by`, `updated_by`) VALUES
	(1, 'HDFA 9348 A934', '2024-08-04 02:10:15', NULL, NULL, NULL, NULL, NULL),
	(2, 'SN000001', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(3, 'SN000002', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(4, 'SN000003', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(5, 'SN000004', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(6, 'SN000005', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(7, 'SN000006', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(8, 'SN000007', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(9, 'SN000008', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(10, 'SN000009', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(11, 'SN000010', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(12, 'SN000011', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(13, 'SN000012', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(14, 'SN000013', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(15, 'SN000014', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(16, 'SN000015', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(17, 'SN000016', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(18, 'SN000017', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(19, 'SN000018', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(20, 'SN000019', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(21, 'SN000020', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(22, 'SN000021', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(23, 'SN000022', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(24, 'SN000023', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(25, 'SN000024', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(26, 'SN000025', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(27, 'SN000026', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(28, 'SN000027', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(29, 'SN000028', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(30, 'SN000029', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(31, 'SN000030', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(32, 'SN000031', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(33, 'SN000032', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(34, 'SN000033', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(35, 'SN000034', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(36, 'SN000035', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(37, 'SN000036', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(38, 'SN000037', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(39, 'SN000038', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(40, 'SN000039', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(41, 'SN000040', '2024-08-04 02:14:55', '2024-08-04 02:14:55', NULL, 1, NULL, 1),
	(42, 'WMWWW45353454535', '2024-08-05 23:02:42', NULL, NULL, 6, NULL, NULL),
	(43, 'Test-3434-3434-23', '2024-08-05 23:02:56', '2024-08-17 20:48:16', NULL, 6, NULL, 6),
	(44, 'WMWWW453531', '2024-08-05 23:03:10', '2024-08-17 20:47:29', NULL, 6, NULL, 6);

-- Dumping structure for table mang_kanor_rent.tenant
DROP TABLE IF EXISTS `tenant`;
CREATE TABLE IF NOT EXISTS `tenant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `status_id` varchar(50) DEFAULT NULL,
  `contact_number` varchar(50) DEFAULT 'approved',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table mang_kanor_rent.tenant: ~0 rows (approximately)
REPLACE INTO `tenant` (`id`, `first_name`, `last_name`, `email`, `status_id`, `contact_number`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `deleted_by`, `updated_by`) VALUES
	(63, 'June Rhomel G', 'Mandigma', 'junemandigma@gmail.com', '2', '09266210532', NULL, NULL, NULL, NULL, NULL, NULL);

-- Dumping structure for table mang_kanor_rent.tenant_profile
DROP TABLE IF EXISTS `tenant_profile`;
CREATE TABLE IF NOT EXISTS `tenant_profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tenant_id` int(11) NOT NULL DEFAULT 0,
  `profile_pic` text DEFAULT NULL,
  `dir` int(11) DEFAULT NULL,
  `file_name` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tenant_id` (`tenant_id`),
  CONSTRAINT `FK__tenant` FOREIGN KEY (`tenant_id`) REFERENCES `tenant` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mang_kanor_rent.tenant_profile: ~0 rows (approximately)
REPLACE INTO `tenant_profile` (`id`, `tenant_id`, `profile_pic`, `dir`, `file_name`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `deleted_by`, `updated_by`) VALUES
	(1, 126, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- Dumping structure for table mang_kanor_rent.unit
DROP TABLE IF EXISTS `unit`;
CREATE TABLE IF NOT EXISTS `unit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `unit_name` varchar(100) DEFAULT NULL,
  `unit_type_id` int(11) DEFAULT NULL,
  `unit_status_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `unit_type_id` (`unit_type_id`,`unit_status_id`),
  KEY `unit_status_id` (`unit_status_id`),
  CONSTRAINT `unit_ibfk_1` FOREIGN KEY (`unit_type_id`) REFERENCES `list_unit_type` (`id`),
  CONSTRAINT `unit_ibfk_2` FOREIGN KEY (`unit_status_id`) REFERENCES `list_unit_status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=391 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table mang_kanor_rent.unit: ~149 rows (approximately)
REPLACE INTO `unit` (`id`, `unit_name`, `unit_type_id`, `unit_status_id`, `created_at`, `updated_at`, `deleted_at`, `created_by`, `deleted_by`, `updated_by`) VALUES
	(1, 'Unit 1', 1, 1, NULL, NULL, '2024-07-13 13:38:56', 1, 6, NULL),
	(2, 'Edited Unit', 1, 1, NULL, '2024-06-25 13:01:51', '2024-07-13 13:38:49', 1, 6, 1),
	(3, 'Unit 3', 2, 2, '2024-06-25 00:00:00', NULL, '2024-06-25 13:33:09', 1, 1, NULL),
	(4, 'Unit 10', 1, 4, '2024-06-25 01:13:51', '2024-07-13 13:31:40', '2024-07-13 13:38:25', 1, 6, 6),
	(5, 'Unit 5', 2, 6, '2024-06-24 17:13:42', '2024-07-14 08:04:01', NULL, 1, NULL, 6),
	(6, 'Unit 101', 2, 4, '2024-07-13 13:44:39', '2024-07-24 12:23:29', '2024-07-24 12:25:17', 6, 1, 1),
	(7, 'New', 1, 3, '2024-07-13 13:45:41', '2024-07-13 16:46:00', '2024-07-24 12:16:32', 6, 1, 6),
	(8, 'Green Field', 2, 4, '2024-07-13 16:43:42', '2024-07-14 08:23:37', NULL, 6, NULL, 6),
	(9, 'New Area', 1, 1, '2024-07-13 16:44:22', '2024-07-24 12:16:22', '2024-07-24 12:22:23', 6, 1, 1),
	(10, 'Wow Galing', 2, 2, '2024-07-13 16:44:50', '2024-07-14 08:01:53', '2024-08-10 07:43:59', 6, 6, 6),
	(11, 'New', 2, 3, '2024-07-24 12:28:42', NULL, NULL, 1, NULL, NULL),
	(12, 'Grand Line Cafe', 1, 2, '2024-07-24 12:29:53', '2024-08-12 12:53:23', NULL, 1, NULL, 6),
	(13, 'Bw', 1, 3, '2024-07-24 12:38:31', NULL, '2024-07-24 13:02:41', 1, 1, NULL),
	(14, NULL, 1, 4, '2024-07-24 12:43:38', NULL, '2024-07-24 12:43:47', 1, 1, NULL),
	(253, 'Unit 1', 1, 1, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(254, 'Unit 2', 2, 2, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(255, 'Unit 3', 3, 3, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(256, 'Unit 4', 1, 4, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(257, 'Unit 5', 2, 5, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(258, 'Unit 6', 3, 1, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(259, 'Unit 7', 1, 2, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(260, 'Unit 8', 2, 3, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(261, 'Unit 9', 3, 4, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(262, 'Unit 10', 1, 5, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(263, 'Unit 11', 2, 1, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(264, 'Unit 12', 3, 2, '2024-07-27 01:38:40', NULL, '2024-08-21 07:35:25', 3, 6, NULL),
	(265, 'Unit 13', 1, 3, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(266, 'Unit 14', 2, 4, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(267, 'Unit 15', 3, 5, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(268, 'Unit 16', 1, 1, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(269, 'Unit 17', 2, 2, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(270, 'Unit 18', 3, 3, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(271, 'Unit 19', 1, 4, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(272, 'Unit 20', 2, 5, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(273, 'Unit 21', 3, 1, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(274, 'Unit 22', 1, 2, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(275, 'Unit 23', 2, 3, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(276, 'Unit 24', 3, 4, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(277, 'Unit 25', 1, 5, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(278, 'Unit 26', 2, 1, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(279, 'Unit 27', 3, 2, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(280, 'Unit 28', 1, 3, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(281, 'Unit 29', 2, 4, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(282, 'Unit 30', 3, 5, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(283, 'Unit 31', 1, 1, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(284, 'Unit 32', 2, 2, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(285, 'Unit 33', 3, 3, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(286, 'Unit 34', 1, 4, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(287, 'Unit 35', 2, 5, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(288, 'Unit 36', 3, 1, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(289, 'Unit 37', 1, 2, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(290, 'Unit 38', 2, 3, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(291, 'Unit 39', 3, 4, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(292, 'Unit 40', 1, 5, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(293, 'Unit 41', 2, 1, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(294, 'Unit 42', 3, 2, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(295, 'Unit 43', 1, 3, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(296, 'Unit 44', 2, 4, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(297, 'Unit 45', 3, 5, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(298, 'Unit 46', 1, 1, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(299, 'Unit 47', 2, 2, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(300, 'Unit 48', 3, 3, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(301, 'Unit 49', 1, 4, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(302, 'Unit 50', 2, 5, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(303, 'Unit 51', 3, 1, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(304, 'Unit 52', 1, 2, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(305, 'Unit 53', 2, 3, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(306, 'Unit 54', 3, 4, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(307, 'Unit 55', 1, 5, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(308, 'Unit 56', 2, 1, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(309, 'Unit 57', 3, 2, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(310, 'Unit 58', 1, 3, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(311, 'Unit 59', 2, 4, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(312, 'Unit 60', 3, 5, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(313, 'Unit 61', 1, 1, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(314, 'Unit 62', 2, 2, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(315, 'Unit 63', 3, 3, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(316, 'Unit 64', 1, 4, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(317, 'Unit 65', 2, 5, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(318, 'Unit 66', 3, 1, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(319, 'Unit 67', 1, 2, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(320, 'Unit 68', 2, 3, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(321, 'Unit 69', 3, 4, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(322, 'Unit 70', 1, 5, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(323, 'Unit 71', 2, 1, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(324, 'Unit 72', 3, 2, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(325, 'Unit 73', 1, 3, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(326, 'Unit 74', 2, 4, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(327, 'Unit 75', 3, 5, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(328, 'Unit 76', 1, 1, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(329, 'Unit 77', 2, 2, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(330, 'Unit 78', 3, 3, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(331, 'Unit 79', 1, 4, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(332, 'Unit 80', 2, 5, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(333, 'Unit 81', 3, 1, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(334, 'Unit 82', 1, 2, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(335, 'Unit 83', 2, 3, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(336, 'Unit 84', 3, 4, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(337, 'Unit 85', 1, 5, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(338, 'Unit 86', 2, 1, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(339, 'Unit 87', 3, 2, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(340, 'Unit 88', 1, 3, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(341, 'Unit 89', 2, 4, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(342, 'Unit 90', 3, 5, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(343, 'Unit 91', 1, 1, '2024-07-27 01:38:40', NULL, '2024-08-21 07:34:25', 1, 6, NULL),
	(344, 'Unit 92', 2, 2, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(345, 'Unit 93', 3, 3, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(346, 'Unit 94', 1, 4, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(347, 'Unit 95', 2, 5, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(348, 'Test 101 Edit', 3, 4, '2024-07-27 01:38:40', '2024-08-12 12:50:31', NULL, 3, NULL, 6),
	(349, 'Unit 97', 1, 2, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(350, 'Unit 98', 2, 3, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(351, 'Unit 99', 3, 4, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(352, 'Unit 100', 1, 5, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(353, 'Unit 101', 2, 1, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(354, 'Unit 102', 3, 2, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(355, 'Unit 103', 1, 3, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(356, 'Unit 104', 2, 4, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(357, 'Unit 105', 3, 5, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(358, 'Unit 106', 1, 1, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(359, 'Unit 107', 2, 2, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(360, 'Unit 108 edit', 3, 3, '2024-07-27 01:38:40', '2024-08-14 02:26:02', '2024-08-14 02:26:06', 3, 6, 6),
	(361, 'Unit 109', 1, 4, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(362, 'Unit 110', 2, 5, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(363, 'Unit 111', 3, 5, '2024-07-27 01:38:40', '2024-08-12 12:34:32', NULL, 3, NULL, 6),
	(364, 'Unit 112', 1, 2, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(365, 'Unit 113', 2, 3, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(366, 'Unit 114', 3, 4, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(367, 'Unit 115', 1, 5, '2024-07-27 01:38:40', NULL, NULL, 1, NULL, NULL),
	(368, 'Unit 116', 2, 4, '2024-07-27 01:38:40', '2024-08-12 12:34:24', NULL, 2, NULL, 6),
	(369, 'Unit 117', 3, 2, '2024-07-27 01:38:40', NULL, NULL, 3, NULL, NULL),
	(370, 'Unit 118', 1, 3, '2024-07-27 01:38:40', NULL, '2024-08-14 16:55:51', 1, 6, NULL),
	(371, 'Unit 119', 2, 4, '2024-07-27 01:38:40', NULL, NULL, 2, NULL, NULL),
	(372, 'Test 101', 4, 5, '2024-07-29 13:54:37', NULL, '2024-08-10 07:57:55', 6, 6, NULL),
	(373, 'Test 11', 4, 5, '2024-07-29 13:55:02', NULL, '2024-08-12 12:36:56', 6, 6, NULL),
	(374, 'Test 101', 1, 1, '2024-07-29 13:56:32', NULL, '2024-08-10 07:57:46', 6, 6, NULL),
	(375, 'Test 200', 3, 4, '2024-07-29 13:57:32', NULL, NULL, 6, NULL, NULL),
	(376, 'Test 2001', 3, 4, '2024-07-29 14:00:11', NULL, '2024-08-10 07:42:47', 6, 6, NULL),
	(377, 'Test 20011', 1, 1, '2024-07-29 14:00:39', NULL, '2024-08-10 07:42:40', 6, 6, NULL),
	(378, 'New', 1, 1, '2024-07-29 14:00:50', NULL, '2024-08-10 07:57:37', 6, 6, NULL),
	(379, 'New Unit 1', 3, 5, '2024-07-29 14:01:27', '2024-08-17 17:51:35', NULL, 6, NULL, 6),
	(380, 'New Unit 121', 3, 3, '2024-07-29 16:42:45', NULL, '2024-08-10 07:43:42', 6, 6, NULL),
	(381, 'Bahay ko sa Tagaytay', 2, 4, '2024-07-29 17:00:53', NULL, '2024-08-10 07:42:57', 6, 6, NULL),
	(382, 'Main Office 1', 1, 5, '2024-07-30 17:40:24', '2024-08-17 17:31:23', '2024-08-17 17:43:58', 6, 6, 6),
	(383, 'Test 20011', 1, 1, '2024-07-31 14:36:54', NULL, '2024-08-10 07:43:27', 6, 6, NULL),
	(384, 'Test 2001', 1, 1, '2024-07-31 14:38:15', NULL, '2024-08-11 03:12:51', 6, 6, NULL),
	(385, 'New', 1, 1, '2024-07-31 14:39:14', NULL, '2024-08-10 07:57:33', 6, 6, NULL),
	(386, 'Test 2001', 1, 1, '2024-07-31 14:42:00', NULL, '2024-08-10 07:43:46', 6, 6, NULL),
	(387, 'Test 101', 1, 1, '2024-07-31 14:42:28', NULL, '2024-08-11 03:12:47', 6, 6, NULL),
	(388, 'Unit 101 edit', 1, 3, '2024-08-14 01:29:47', '2024-08-14 01:30:15', '2024-08-14 01:30:24', 6, 6, 6),
	(389, 'Test 20011', 3, 4, '2024-08-24 12:35:56', NULL, NULL, 6, NULL, NULL),
	(390, 'Test 20011 New', 3, 3, '2024-08-24 12:36:34', NULL, NULL, 6, NULL, NULL);


-- Dumping database structure for uppa_accounts
DROP DATABASE IF EXISTS `uppa_accounts`;
CREATE DATABASE IF NOT EXISTS `uppa_accounts` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `uppa_accounts`;

-- Dumping structure for table uppa_accounts.account
DROP TABLE IF EXISTS `account`;
CREATE TABLE IF NOT EXISTS `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(60) DEFAULT NULL,
  `lastname` varchar(60) DEFAULT NULL,
  `is_active` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `token` varchar(100) NOT NULL,
  `account_code` varchar(100) NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_at` datetime DEFAULT NULL,
  `delated_at` datetime DEFAULT NULL,
  `updated_by` int(11) NOT NULL,
  `delated_by` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table uppa_accounts.account: ~5 rows (approximately)
REPLACE INTO `account` (`id`, `firstname`, `lastname`, `is_active`, `email`, `password`, `token`, `account_code`, `updated_at`, `created_at`, `delated_at`, `updated_by`, `delated_by`) VALUES
	(1, 'June Rhomel', 'Mandigma', 1, 'junemandigma@gmail.com', '6a1e5acd79abc6be06be217bb4c9fc37', '', 'mang_kanor_rent', '2024-06-21 22:38:16', NULL, '2024-06-21 14:59:57', 0, 0),
	(2, 'June asd', 'Mandigmae', 1, '', '12345678', '', '', '2024-06-21 16:20:36', '2024-06-21 14:51:52', NULL, 0, 0),
	(4, 'June Jhon Mark', 'Mandigma hon', 1, 'mark22@gmail.com', '6a1e5acd79abc6be06be217bb4c9fc37', '', 'uppa_accounts', '2024-06-21 23:01:51', '2024-06-21 15:01:51', NULL, 0, 0),
	(5, 'Test', 'Account', 1, 'testemail@gmail.com', '6a1e5acd79abc6be06be217bb4c9fc37', '', '', '2024-06-22 13:14:56', '2024-06-22 05:14:56', NULL, 0, 0),
	(6, 'June', 'Madnigma', 1, 'june@inventi.ph', '6a1e5acd79abc6be06be217bb4c9fc37', '', 'mang_kanor_rent', '2024-06-26 22:39:21', '2024-06-26 22:39:40', NULL, 0, 0);


-- Dumping database structure for uppa_core
DROP DATABASE IF EXISTS `uppa_core`;
CREATE DATABASE IF NOT EXISTS `uppa_core` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `uppa_core`;

-- Dumping structure for table uppa_core.tenant_status_list
DROP TABLE IF EXISTS `tenant_status_list`;
CREATE TABLE IF NOT EXISTS `tenant_status_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table uppa_core.tenant_status_list: ~3 rows (approximately)
REPLACE INTO `tenant_status_list` (`id`, `status_name`) VALUES
	(1, 'Active'),
	(2, 'Inactive'),
	(3, 'Deactivated');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
