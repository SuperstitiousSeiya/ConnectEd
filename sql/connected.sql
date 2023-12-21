-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 17, 2023 at 09:27 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `connected`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

DROP TABLE IF EXISTS `announcements`;
CREATE TABLE IF NOT EXISTS `announcements` (
  `announcement_id` int NOT NULL AUTO_INCREMENT,
  `announcement_title` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `announcement_description` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`announcement_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`announcement_id`, `announcement_title`, `announcement_description`, `user_id`, `created_at`) VALUES
(1, 'asdasd', 'aasdsadsadsadsad', 5, '2023-12-17 02:04:03'),
(2, 'Announcements', 'LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem ', 2, '2023-12-17 07:33:17');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
CREATE TABLE IF NOT EXISTS `courses` (
  `course_id` int NOT NULL AUTO_INCREMENT,
  `course_name` varchar(100) NOT NULL,
  `slots` int NOT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `course_name`, `slots`) VALUES
(1, 'Bachelor of Science in Computer Science', 50),
(2, 'Bachelor of Arts in English Literature', 40),
(3, 'Bachelor of Business Administration', 60),
(4, 'Bachelor of Science in Electrical Engineering', 45),
(5, 'Bachelor of Science in Nursing', 55),
(6, 'Bachelor of Arts in Psychology', 35),
(7, 'Bachelor of Science in Mechanical Engineering', 40),
(8, 'Bachelor of Science in Environmental Science', 30),
(9, 'Bachelor of Fine Arts in Graphic Design', 25),
(10, 'Bachelor of Science in Chemistry', 30),
(11, 'Bachelor of Arts in History', 40),
(12, 'Bachelor of Science in Civil Engineering', 50),
(13, 'Bachelor of Science in Mathematics', 35),
(14, 'Bachelor of Arts in Political Science', 45),
(15, 'Bachelor of Business in Marketing', 55),
(16, 'Bachelor of Science in Physics', 30),
(17, 'Bachelor of Arts in Sociology', 40),
(18, 'Bachelor of Science in Biotechnology', 25),
(19, 'Bachelor of Business in Finance', 50),
(20, 'Bachelor of Arts in Communication Studies', 35);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `event_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `event_description` text COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int NOT NULL,
  `event_date` date NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `event_title`, `event_description`, `user_id`, `event_date`, `created_at`) VALUES
(1, 'sadsadsad', 'Naibog ko niya', 5, '2023-12-20', '2023-12-17 02:05:03');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `news_id` int NOT NULL AUTO_INCREMENT,
  `news_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `news_description` text COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`news_id`, `news_title`, `news_description`, `user_id`, `created_at`) VALUES
(1, 'news', 'laksdjlsakdjlaksdjlksadjaslkdjsaldjalsdsad', 5, '2023-12-17 02:05:52');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `is_setup` tinyint(1) NOT NULL,
  `status` enum('none','pending','enrolled') NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `user_id`, `is_setup`, `status`) VALUES
(1, 1, 0, 'enrolled'),
(2, 4, 0, 'enrolled'),
(3, 7, 0, 'enrolled'),
(5, 9, 0, 'enrolled'),
(6, 10, 0, 'enrolled'),
(7, 11, 0, 'enrolled'),
(8, 12, 0, 'enrolled'),
(9, 13, 0, 'enrolled'),
(10, 15, 0, 'enrolled');

-- --------------------------------------------------------

--
-- Table structure for table `student_contact_info`
--

DROP TABLE IF EXISTS `student_contact_info`;
CREATE TABLE IF NOT EXISTS `student_contact_info` (
  `student_id` int NOT NULL,
  `father_name` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `father_age` int NOT NULL,
  `father_education_attainment` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `father_occupation` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `father_contact_number` int NOT NULL,
  `mother_name` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mother_age` int NOT NULL,
  `mother_education_attainment` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mother_occupation` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `mother_contact_number` int NOT NULL,
  `guardian_name` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `guardian_age` int NOT NULL,
  `guardian_education_attainment` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `guardian_occupation` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `guardian_contact_number` int NOT NULL,
  `spouse_name` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `spouse_age` int NOT NULL,
  `spouse_education_attainment` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `spouse_occupation` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `spouse_contact_number` int NOT NULL,
  `email_address` int NOT NULL,
  `cell_num` int NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_educational_background`
--

DROP TABLE IF EXISTS `student_educational_background`;
CREATE TABLE IF NOT EXISTS `student_educational_background` (
  `student_id` int NOT NULL,
  `elem_school_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `elem_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `elem_inclusive_date` date NOT NULL,
  `hs_school_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `hs_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `hs_inclusive_date` date NOT NULL,
  `sh_school_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `sh_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `sh_inclusive_date` date NOT NULL,
  `sh_strand` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `college_school_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `college_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `college_inclusive_date` date NOT NULL,
  `college_course` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_personal_info`
--

DROP TABLE IF EXISTS `student_personal_info`;
CREATE TABLE IF NOT EXISTS `student_personal_info` (
  `student_personal_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `student_type` enum('freshmen','transferee','continuing student','old returnee') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `course` varchar(50) NOT NULL,
  `lrn` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sex` enum('female','male') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `middle_name` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date_of_birth` date NOT NULL,
  `religion` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `permanent_address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `postal_code` int NOT NULL,
  `current_address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `civil_status` enum('single','married','widow') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`student_personal_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `student_personal_info`
--

INSERT INTO `student_personal_info` (`student_personal_id`, `user_id`, `student_type`, `course`, `lrn`, `sex`, `last_name`, `first_name`, `middle_name`, `date_of_birth`, `religion`, `permanent_address`, `postal_code`, `current_address`, `civil_status`) VALUES
(1, 1, 'freshmen', 'BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY', '119964090002', 'male', 'Abellanosa', 'Reyver ', 'Pascual', '2003-09-17', 'Christiansd', 'Zone ', 6015, 'asdasdasdsa', 'single'),
(2, 4, 'freshmen', 'Bachelor of Science in Computer Science', '119964090005', 'male', 'asdasd', 'asdsadsad', 'assdasdsad', '2023-12-21', 'asdsadsad', 'asdsadsad', 3232, 'sadasdsadsa', 'single'),
(3, 7, 'freshmen', 'Bachelor of Science in Computer Science', '119964090002', 'male', 'Desuyo', 'Cyril', 'Manabat', '2023-12-14', 'Manggagamot', 'asdsadasdassad', 123123, 'asdadasd', 'single'),
(4, 8, 'transferee', 'Bachelor of Science in Computer Science', '1923821938', 'male', 'adasd', 'dasdsadsad', 'asdsad', '2023-12-13', 'asdasdsadsad', 'asdasdsad', 213213, 'adsadasdsad', 'single'),
(5, 9, 'freshmen', 'Bachelor of Science in Computer Science', 'asdasdsad', 'male', 'sadsad', 'asdasdsad', 'asdasdsad', '2023-12-21', 'asdasdsad', 'asdasdsad', 23423, 'asdasdsad', 'single'),
(6, 10, 'freshmen', 'Bachelor of Science in Civil Engineering', '119964123123', 'male', 'Alcover', 'Bryan ', 'Cadavis', '2004-04-07', 'Roman Catholic', 'Talamban', 6033, 'Talamban', 'single'),
(7, 11, 'freshmen', 'Bachelor of Science in Physics', '11921322323', 'female', 'De Luna', 'Anna Mae', 'Mae', '2003-06-26', 'Santos', 'New Era', 6034, 'New Era', 'married'),
(8, 12, 'freshmen', 'Bachelor of Arts in History', '123123213', 'male', 'asdasd', 'asdasdasda', 'dasdsad', '2023-11-29', 'asdasdasd', 'asdasdasdasd', 2343, 'sadsadsaasdsad', 'single'),
(9, 13, 'freshmen', 'Bachelor of Science in Civil Engineering', '19129321938', 'male', 'Chaves', 'Kenji', 'Tao', '2020-06-17', 'Abu sayap', 'Biringan City', 404, 'Mars', ''),
(10, 15, 'freshmen', 'Bachelor of Arts in Psychology', '119237232322', 'male', 'Alcov', 'Bryan', 'Cadavix', '2023-12-13', 'Catholic', 'New Era Talamban', 6000, 'New Era Talamban', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(60) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `user_type` enum('admin','teacher','student') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`, `user_type`, `created_at`) VALUES
(1, 'reyverako', '09221358', 'reyverako@email.com', 'student', '2023-12-16 12:23:41'),
(4, 'fufu', '09221358', 'haha@gmail.com', 'student', '2023-12-16 14:21:49'),
(5, 'admin', 'admin', 'admin@gmail.com', 'admin', '2023-12-16 14:38:55'),
(6, 'jhonryl123', '09221358', 'jhonryl@gmail.com', 'student', '2023-12-16 15:40:36'),
(7, 'cyrilbayot', '09221358', 'cyril@gmail.com', 'student', '2023-12-17 02:41:29'),
(8, 'bryanbayot', '09221358', 'bryan@gmail.com', 'student', '2023-12-17 02:53:15'),
(9, 'tsobanesthemaster', '123123123', '22104668@usc.edu.ph', 'student', '2023-12-17 06:39:37'),
(10, 'bryanskie', 'bryan', 'bryanskie@gmail.com', 'student', '2023-12-17 06:48:19'),
(11, 'annamaegwapa', 'anna', 'anna@gmail.com', 'student', '2023-12-17 07:26:32'),
(12, 'huhuhuhu', 'huhuhu', 'huhu@gmail.com', 'student', '2023-12-17 07:44:39'),
(13, 'kenjigwapa', 'kenji', 'kenji@gmail.com', 'student', '2023-12-17 08:44:19'),
(14, 'bagongaccount', '09221358', 'aljdslakj@gmail.com', 'student', '2023-12-17 08:57:53'),
(15, 'testuser', 'password', 'testusergmail.com', 'student', '2023-12-17 09:09:29');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
