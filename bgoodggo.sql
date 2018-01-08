/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : bgoodggo

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-01-08 21:15:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bgoodggo
-- ----------------------------
DROP TABLE IF EXISTS `bgoodggo`;
CREATE TABLE `bgoodggo` (
  `id` int(255) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `imgulr` varchar(255) DEFAULT NULL,
  `imgsrc` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `orprice` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `off` varchar(255) DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `qty` varchar(255) DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of bgoodggo
-- ----------------------------
INSERT INTO `bgoodggo` VALUES ('1', null, null, 'img/man1.jpg\r\nimg/man1.jpg\r\nimg/man1.jpg', 'img/a1.jpg\r\nimg/a1.jpg\r\nimg/a1.jpg', null, null, null, null, null, null, 'man', '2018-01-08 16:06:23');
INSERT INTO `bgoodggo` VALUES ('2', null, null, 'img/man2.jpg', 'img/a2.jpg', null, null, null, null, null, null, 'man', '2018-01-08 16:07:00');
INSERT INTO `bgoodggo` VALUES ('3', null, null, 'img/man3.jpg', 'img/a3.jpg', null, null, null, null, null, null, 'man', '2018-01-08 16:09:07');
INSERT INTO `bgoodggo` VALUES ('4', null, null, 'img/man4.jpg', 'img/a4.jpg', null, null, null, null, null, null, 'man', '2018-01-08 16:09:18');
INSERT INTO `bgoodggo` VALUES ('5', null, null, 'img/man5.jpg', 'img/a5.jpg', null, null, null, null, null, null, 'man', '2018-01-08 16:09:25');
INSERT INTO `bgoodggo` VALUES ('6', null, null, 'img/man6.jpg', 'img/a6.jpg', null, null, null, null, null, null, 'man', '2018-01-08 16:09:38');
INSERT INTO `bgoodggo` VALUES ('7', null, null, 'img/man7.jpg', 'img/a7.jpg', null, null, null, null, null, null, 'man', '2018-01-08 16:10:22');
INSERT INTO `bgoodggo` VALUES ('8', null, null, 'img/gril1.jpg', 'img/a1.jpg', null, null, null, null, null, null, 'gril', '2018-01-08 16:11:41');

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '品牌',
  `name` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '商品信息',
  `imgulr` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT '大图',
  `imgsrc` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '小图',
  `price` decimal(10,2) NOT NULL,
  `orprice` decimal(10,2) NOT NULL,
  `off` tinyint(255) NOT NULL,
  `color` varchar(255) CHARACTER SET utf8 NOT NULL,
  `size` double NOT NULL,
  `qty` int(11) NOT NULL,
  `add_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '商品添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '分曼妮', '冬季新品男士轻薄款羽绒服立领大码外套', '../img/g1.jpg', '../img/s1.jpg', '1532.00', '3000.00', '10', '黑', '35', '1', '2018-01-07 15:01:54');
INSERT INTO `goodlist` VALUES ('2', '森马', '妮芬尔休闲裤男士九分裤原创哈伦宽松', '../img/g2.jpg', '../img/s2.jpg', '234.00', '4000.00', '10', '白色', '38', '11', '2018-01-07 15:01:57');
INSERT INTO `goodlist` VALUES ('3', '美特使邦威', '冬季新品羽绒服男连帽印花白鸭绒保暖休闲外套', '../img/g3.jpg', '../img/s3.jpg', '123.00', '234.00', '6', '绿色', '40', '34', '2018-01-07 15:02:02');
INSERT INTO `goodlist` VALUES ('4', '七格格', '冬季新品羽绒服男连帽印花白鸭绒保暖休闲外套', '../img/g4.jpg', '../img/s4.jpg', '476.00', '765.00', '5', '黄色', '45', '40', '2018-01-07 15:02:05');
INSERT INTO `goodlist` VALUES ('5', '七格格', '秋冬新品毛衣男圆领套头宽松拼色男式针织毛衫（精选专区）', '../img/g5.jpg', '../img/s5.jpg', '132.00', '234.00', '4', '白色', '40', '32', '2018-01-07 15:02:08');
INSERT INTO `goodlist` VALUES ('6', '安陌', '【冬季新品】女优雅翻领大衣', '../img/g6.jpg', '../img/s6.jpg', '432.00', '500.00', '7', '红色', '34', '78', '2018-01-07 15:02:11');
INSERT INTO `goodlist` VALUES ('7', '雪中飞', '冬季新品男士宽松棉衣连帽保暖棉服棉袄休闲外套', '../img/g7.jpg', '../img/s1.jpg', '122.00', '321.00', '8', '白色', '42', '33', '2018-01-07 15:02:18');
INSERT INTO `goodlist` VALUES ('8', 'COOSCOSE', '【冬季新品】女士肌理侧开衩大衣', '../img/g8.jpg', '../img/s1.jpg', '126.00', '213.00', '10', '粉色', '45', '100', '2018-01-07 15:02:21');
INSERT INTO `goodlist` VALUES ('9', 'ME&CYTI', ' 【冬季新品】chic女卫衣短款宽松加绒连帽套头打底衫', '../img/g9.jpg', '../img/s1.jpg', '345.00', '333.00', '9', '灰色', '33', '333', '2018-01-07 15:02:23');
INSERT INTO `goodlist` VALUES ('10', 'IEOEFJO', '【冬季新品】女门襟绣字棉服', '../img/g10.jpg', '../img/s1.jpg', '132.00', '998.00', '5', '白色', '27', '3', '2018-01-07 15:02:26');
INSERT INTO `goodlist` VALUES ('11', 'UEUOE', '【冬季新品】女休闲背心羽绒服', '../img/g11.jpg', '../img/s1.jpg', '432.00', '3222.00', '6', '黑色', '26', '88', '2018-01-07 15:02:28');
INSERT INTO `goodlist` VALUES ('12', '都市丽人', '【冬季新品】女休闲背心羽绒服', '../img/g12.jpg', '../img/s1.jpg', '234.00', '331.00', '4', '粉色', '36', '32', '2018-01-07 15:02:32');
INSERT INTO `goodlist` VALUES ('13', '孟波蒂娜', '【冬季新品】女休闲背心羽绒服', '../img/g13.jpg', '../img/s6.jpg', '324.00', '888.00', '8', '白色', '38', '222', '2018-01-07 15:02:34');
INSERT INTO `goodlist` VALUES ('14', '分曼妮', '【冬季新品】女休闲背心羽绒服', '../img/g14.jpg', '../img/s6.jpg', '341.00', '990.00', '7', '红色', '34', '13', '2018-01-07 15:02:39');
INSERT INTO `goodlist` VALUES ('15', '安陌', '【冬季新品】女休闲背心羽绒服', '../img/g15.jpg', '../img/s6.jpg', '934.00', '111.00', '8', '黄色', '48', '33', '2018-01-07 15:02:41');
INSERT INTO `goodlist` VALUES ('16', '雪中飞', '【冬季新品】女优雅翻领大衣', '../img/g16.jpg', '../img/s6.jpg', '1112.00', '2232.00', '6', '黑色', '40', '34', '2018-01-07 15:02:43');
INSERT INTO `goodlist` VALUES ('17', '美特使邦威', '冬季新品羽绒服男连帽印花白鸭绒保暖休闲外套', '../img/g17.jpg', '../img/s6.jpg', '465.00', '766.00', '5', '白色', '43', '22', '2018-01-07 15:02:46');
INSERT INTO `goodlist` VALUES ('18', '分曼妮', '秋冬新品毛衣男圆领套头宽松拼色男式针织毛衫（精选专区）', '../img/g18.jpg', '../img/s6.jpg', '343.00', '442.00', '6', '红色', '32', '99', '2018-01-07 15:02:48');
INSERT INTO `goodlist` VALUES ('19', '安陌', '【冬季新品】女休闲背心羽绒服', '../img/g19.jpg', '../img/s6.jpg', '532.00', '3234.00', '7', '白色', '34', '2', '2018-01-07 15:02:50');
INSERT INTO `goodlist` VALUES ('20', 'EOURWE', 'chic女卫衣短款宽松加绒连帽套头打底衫', '../img/g5.jpg', '../img/s6.jpg', '899.00', '3219.00', '6', '灰色', '44', '54', '2018-01-07 15:02:52');
INSERT INTO `goodlist` VALUES ('21', 'FEOFROIa', 'JFLFJLDSJF', '../img/g1.jpg', '../img/s1.jpg', '4794.00', '444440.00', '5', '白色', '45', '23', '2018-01-08 16:21:38');
INSERT INTO `goodlist` VALUES ('22', 'JFJITOG', 'DFFLGGIG', '../img/g2.jpg', '../img/s4.jpg', '37974.00', '7474.00', '8', '红色', '33', '78', '2018-01-08 16:56:09');
INSERT INTO `goodlist` VALUES ('23', '罗丽丝', '美少女装', '../img/g4.jpg', '../img/s6.jpg', '89489.00', '999999.00', '5', '黄色', '77', '32', '2018-01-08 16:57:42');

-- ----------------------------
-- Table structure for sheet1
-- ----------------------------
DROP TABLE IF EXISTS `sheet1`;
CREATE TABLE `sheet1` (
  `id` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `imgulr` varchar(255) DEFAULT NULL,
  `imgsrc` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `orprice` varchar(255) DEFAULT NULL,
  `off` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `qty` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sheet1
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `iphone` varchar(255) DEFAULT NULL,
  `CardNo` int(11) unsigned DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `reg_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '老谢', '12345', '12345673421', '1212222222', '123@qq.com', '2018-01-06 18:04:50');
INSERT INTO `user` VALUES ('2', '韦小丽', '321', '12334433232', '1111111111', '122@qq.com', '2018-01-06 18:04:50');
INSERT INTO `user` VALUES ('3', 'lemon', '423232', '234453422432', '324342342', '111@efj.com', '2018-01-06 18:04:50');
INSERT INTO `user` VALUES ('4', '宝贝', '12345', '12345', '12345', '123@qq.com', '2018-01-06 18:04:50');
INSERT INTO `user` VALUES ('5', 'qqqqqqqqqqqqqqqq', '1233a5207fc5b0a6ef97deca8bba95fa', null, null, null, '2018-01-06 19:30:16');
INSERT INTO `user` VALUES ('6', 'fjldskjfs', '8db9542d714457d8f8b95fe62839bcf0', null, null, null, '2018-01-06 19:39:56');
INSERT INTO `user` VALUES ('7', '连着', '8db9542d714457d8f8b95fe62839bcf0', null, null, null, '2018-01-06 19:40:06');
INSERT INTO `user` VALUES ('8', '', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:27:29');
INSERT INTO `user` VALUES ('9', '为我', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:40:15');
INSERT INTO `user` VALUES ('10', '为为', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:40:28');
INSERT INTO `user` VALUES ('11', '我们', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:40:38');
INSERT INTO `user` VALUES ('12', '呜呜呜', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:42:05');
INSERT INTO `user` VALUES ('13', '乌鸦', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:44:15');
INSERT INTO `user` VALUES ('14', '分级分类', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:47:05');
INSERT INTO `user` VALUES ('15', '问问', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:49:56');
INSERT INTO `user` VALUES ('16', '密码', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:50:28');
INSERT INTO `user` VALUES ('17', '速度发就是了', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:52:34');
INSERT INTO `user` VALUES ('18', '违反决定', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:53:32');
INSERT INTO `user` VALUES ('19', '我发的', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:55:06');
INSERT INTO `user` VALUES ('20', '机房里的', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2018-01-08 20:58:19');
SET FOREIGN_KEY_CHECKS=1;
