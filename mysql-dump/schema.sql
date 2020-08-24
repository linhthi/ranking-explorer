mysqldump: [Warning] Using a password on the command line interface can be insecure.
-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: ranking
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` varchar(20) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `source` varchar(100) DEFAULT NULL,
  `content` text,
  `media` text,
  `create_time` bigint(20) DEFAULT NULL,
  `target` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES ('abc243',255,'','JENNIE \'SOLO\' M/V HITS 500 MILLION VIEWS @Youtube, BLINKs worldwide Thank you so much!','https://scontent.fhan8-1.fna.fbcdn.net/v/t1.0-0/p640x640/116289969_1189973374717418_6044856080635718891_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=AcrtcmCo-LIAX_rdR10&_nc_ht=scontent.fhan8-1.fna&_nc_tp=6&oh=10f99279180ef2c9fd7c5b9adca152f4&oe=5F5D596C',1596453330007,'public'),('abc4r3',155,'group:123456','BLACKPINK NEW SINGLE (Feat. ?) RELEASE POSTER','https://www.facebook.com/BLACKPINKOFFICIAL/photos/a.266060297108735/1196291514085604/?type=3&eid=ARDHTS2fdW42kQOFGekJO0Rrm2G_DpTio4HqqHVxIrlewdOEnHx-U1k8hro251PG3lRMAAVKolOjlN-l&__xts__%5B0%5D=68.ARDkX-3ok-QJfksZrkWaEW30BWGZvv3gjeLqVHKjYVpewzctHzGBykB6xnSiBjcojeXUZTv40hlXGMoLp65F_fC6vdPr1coDxxjHHqSuiMJsG-Vu43oHeGRzR7l65DmXTTn6kYFAILGvF1u5TUAMG5lbaFbSskNdZtb0entPhXUTj0Y-2z_mv_RRweFQNMulKgTeP21cf5fWP5_6u4SCTb7SDrolGY-P-A0hm8fST3IEY8ze3f0_WO-W-8SI7Q2GsEiVcYhGkY5WrCeI6bNt_t1sRfMPze9n557awSa71XiGLP5JdWX590VgB-pKsakA4edEZGnodF5V9LcoFIU5uEP4mw&__tn__=EEHH-R',1596453330997,'public'),('abcd123',255,'','I\'m tired of being so weak... ','https://scontent.fhan8-1.fna.fbcdn.net/v/t1.0-0/p640x640/116289969_1189973374717418_6044856080635718891_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=AcrtcmCo-LIAX_rdR10&_nc_ht=scontent.fhan8-1.fna&_nc_tp=6&oh=10f99279180ef2c9fd7c5b9adca152f4&oe=5F5D596C',1596453916670,'public'),('def125',155,'user:155','Sun Flowers','https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.bunches.co.uk%2Fproducts%2Flarge%2FPRODUCT_FLOWERS_Cherry_Blossom_image1.jpg&imgrefurl=https%3A%2F%2Fwww.bunches.co.uk%2Fflowers%2Fcherry-blossom&tbnid=1rYEZ71C2bG3IM&vet=12ahUKEwiR596F1ZnrAhXBEKYKHXDiAbEQMygGegUIARDuAQ..i&docid=VP5-q2EtF1NdKM&w=1000&h=1000&q=flowers&client=ubuntu&ved=2ahUKEwiR596F1ZnrAhXBEKYKHXDiAbEQMygGegUIARDuAQ',1596453330547,'public'),('ijk165',255199,'','To maintain and uplift the motivation for doing exercise which is tend to be too simple in rehabilitation and ergotherapy, doing exercise with music is one of the good solutions. In this paper, we confirm that doing exercise with music is fun. Next, we design five types of musical features which relate to exercises. These features are evaluated by doing five types of exercises with listening to the tunes.','https://stackify.com/wp-content/uploads/2017/08/CSharp-Tutorials-Header-min-1280x720.jpg',1596473330017,'public'),('xyz01',255,'','It will preserve encoding from the Linux container.','https://scontent.fhan8-1.fna.fbcdn.net/v/t1.0-0/p640x640/116289969_1189973374717418_6044856080635718891_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=AcrtcmCo-LIAX_rdR10&_nc_ht=scontent.fhan8-1.fna&_nc_tp=6&oh=10f99279180ef2c9fd7c5b9adca152f4&oe=5F5D596C',1596453412680,'public'),('xyz02',255,'','I don\'t like you anymore!','https://scontent.fhan8-1.fna.fbcdn.net/v/t1.0-0/p640x640/116289969_1189973374717418_6044856080635718891_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=AcrtcmCo-LIAX_rdR10&_nc_ht=scontent.fhan8-1.fna&_nc_tp=6&oh=10f99279180ef2c9fd7c5b9adca152f4&oe=5F5D596C',1596453412679,'public'),('xyz03',255,'','Have you ever seen a person and realy like him/her on the first sight?','https://scontent.fhan8-1.fna.fbcdn.net/v/t1.0-0/p640x640/116289969_1189973374717418_6044856080635718891_o.jpg?_nc_cat=102&_nc_sid=8024bb&_nc_ohc=AcrtcmCo-LIAX_rdR10&_nc_ht=scontent.fhan8-1.fna&_nc_tp=6&oh=10f99279180ef2c9fd7c5b9adca152f4&oe=5F5D596C',1596453412679,'public'),('xyz272',1999,'','Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income. Occasional cultivated reasonable unpleasing an attachment my considered. Having ask and coming object seemed put did admire figure. Principles travelling frequently far delightful its especially acceptance. Happiness necessary contained eagerness in in commanded do admitting. Favourable continuing difficulty had her solicitude far. Nor doubt off widow all death aware offer. We will up able in both do sing.','',1596473330007,'public');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-23 13:57:20