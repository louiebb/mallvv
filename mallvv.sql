/*
Navicat MySQL Data Transfer

Source Server         : louiebb
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mallvv

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 19:31:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_bubmat
-- ----------------------------
DROP TABLE IF EXISTS `t_bubmat`;
CREATE TABLE `t_bubmat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `t_url` varchar(255) DEFAULT '#',
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_bubmat
-- ----------------------------
INSERT INTO `t_bubmat` VALUES ('1', '基础建材', '#', '其他辅料,开关插座,油漆涂料,电线');
INSERT INTO `t_bubmat` VALUES ('2', '瓷砖/大理石/陶瓷', '#', '釉面砖,玻化砖,仿古砖,木纹砖,微晶石,抛光砖,大理石,瓷砖辅料,人造石,花岗石,陶瓷,金刚石,墙面砖');
INSERT INTO `t_bubmat` VALUES ('3', '卫浴', '#', '坐便器,坐便器盖板,龙头,卫浴套装');
INSERT INTO `t_bubmat` VALUES ('4', '集成吊顶', '#', '多功能组合电器,照明模块,扣板模块,换气模块,灯暖模块,暖风模块');
INSERT INTO `t_bubmat` VALUES ('5', '\r\n橱柜', '#', '整体橱柜,柜体,门板,台面,橱柜配件');
INSERT INTO `t_bubmat` VALUES ('6', '淋浴房', '#', '定制淋浴房');
INSERT INTO `t_bubmat` VALUES ('7', '地板/榻榻米', '#', '实木地板,强化复合地板,木地板,实木复合地板');
INSERT INTO `t_bubmat` VALUES ('8', '移门衣柜', '#', '衣柜移门,整体衣柜,隔断衣柜,折叠门,定制柜类');
INSERT INTO `t_bubmat` VALUES ('9', '墙纸', '#', '无纺布墙纸,纯纸墙纸');
INSERT INTO `t_bubmat` VALUES ('10', '门窗', '#', '防盗门,木门,阳台窗,定制门,定制窗,推拉铝门,福斯玛门');
INSERT INTO `t_bubmat` VALUES ('11', '净水器/水处理', '#', '净水器/水处理');
INSERT INTO `t_bubmat` VALUES ('12', '定制楼梯', '#', '定制柜,木质楼梯');
INSERT INTO `t_bubmat` VALUES ('13', '保险箱', '#', '保险箱');

-- ----------------------------
-- Table structure for t_jjjf
-- ----------------------------
DROP TABLE IF EXISTS `t_jjjf`;
CREATE TABLE `t_jjjf` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `t_url` varchar(255) DEFAULT '#',
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_jjjf
-- ----------------------------
INSERT INTO `t_jjjf` VALUES ('1', '卧室', '#', '床垫,床头柜,衣柜,斗柜,妆台镜/妆凳,穿衣镜/衣帽架,床尾凳,卧室套装');
INSERT INTO `t_jjjf` VALUES ('2', '客厅', '#', '沙发,茶几/边几,电视柜,鞋柜,酒柜/装饰柜,休闲椅/凳,间厅/玄关柜,客厅套装');
INSERT INTO `t_jjjf` VALUES ('3', '餐厅', '#', '餐桌,餐椅,餐边柜/餐车,餐厅套装');
INSERT INTO `t_jjjf` VALUES ('4', '书房', '#', '书桌/工作台,书柜/书架,书椅/转椅');
INSERT INTO `t_jjjf` VALUES ('5', '书房套装', '#', '儿童房,儿童床,儿童床垫,儿童床头柜,儿童衣柜,儿童书桌/电脑台,儿童柜类,儿童房套装');
INSERT INTO `t_jjjf` VALUES ('6', '办公家具', '#', '办公桌,文件柜/置物柜,办公椅,办公沙发,会议桌,服务台,接待桌');
INSERT INTO `t_jjjf` VALUES ('7', '家饰', '#', '布艺织物,香薰制品,家居摆件,餐具/茶具,挂钟');
INSERT INTO `t_jjjf` VALUES ('8', '软装', '#', '窗帘,壁纸,软包');
INSERT INTO `t_jjjf` VALUES ('9', '家纺', '#', '被子/毯子,凉席,床上用品,床上四件套,布艺制品');

-- ----------------------------
-- Table structure for t_mrpxp
-- ----------------------------
DROP TABLE IF EXISTS `t_mrpxp`;
CREATE TABLE `t_mrpxp` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `artno` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `remak` varchar(255) DEFAULT NULL,
  `agio` varchar(255) DEFAULT NULL,
  `stock` int(255) DEFAULT NULL,
  `dec` varchar(255) DEFAULT NULL,
  `CDT` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_mrpxp
-- ----------------------------
INSERT INTO `t_mrpxp` VALUES ('16', '12715838', '青岛一木', '001.jpg', 'rm', '瑞肯橱柜 榻榻米 白色 平方', '198.00', '上海部分地区包邮，详情请咨询客服', '0.9', '10', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('17', '12715839', '青岛一木', '002.png', 'rm', '大将军陶瓷 客厅 全抛釉地砖 MQ8806P 800*800', '199.00', '', '0.9', '11', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:56:29');
INSERT INTO `t_mrpxp` VALUES ('18', '12715840', '青岛一木', '003.jpg', 'rm', '瑞肯橱柜 榻榻米 白色 平方', '200.00', '', '0.9', '12', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('19', '12715841', '青岛一木', '004.jpg', 'rm', '瑞肯橱柜 榻榻米 白色 平方', '201.00', '', '0.9', '13', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('20', '12715842', '青岛一木', '005.jpg', 'rm', '瑞肯橱柜 榻榻米 白色 平方', '202.00', '', '0.9', '14', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('21', '12716214', '索菲亚', '006.jpg', 'rp', '索菲亚整体衣柜马赛大百叶 定制衣柜 大衣柜推拉门移门定做', '1599.00', '', '0.3', '15', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('22', '12716215', '索菲亚', '007.jpg', 'rp', '索菲亚整体衣柜马赛大百叶 定制衣柜 大衣柜推拉门移门定做', '1599.00', '', '1.3', '16', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('23', '12716216', '索菲亚', '008.jpg', 'rp', '索菲亚整体衣柜马赛大百叶 定制衣柜 大衣柜推拉门移门定做', '1599.00', '', '2.3', '17', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('24', '12716217', '索菲亚', '009.jpg', 'rp', '索菲亚整体衣柜马赛大百叶 定制衣柜 大衣柜推拉门移门定做', '1599.00', '', '3.3', '18', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('25', '12716218', '索菲亚', '010.jpg', 'rp', '索菲亚整体衣柜马赛大百叶 定制衣柜 大衣柜推拉门移门定做', '1599.00', '', '4.3', '19', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('26', '12716219', '鼎豪淋浴房', '011.jpg', 'xp', '鼎豪淋浴房 不锈钢两移门 T-W728 平方米', '1250.00', '免费测量免费送货免费安装 限上海地区（三岛需另付费）', '5.3', '20', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('27', '12716220', '鼎豪淋浴房', '012.jpg', 'xp', '鼎豪淋浴房 不锈钢两移门 T-W728 平方米', '2000.00', '免费测量免费送货免费安装 限上海地区（三岛需另付费）', '6.3', '21', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('28', '12716221', '鼎豪淋浴房', '013.jpg', 'xp', '鼎豪淋浴房 不锈钢两移门 T-W728 平方米', '3124.00', '免费测量免费送货免费安装 限上海地区（三岛需另付费）', '7.3', '22', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('29', '12716222', '鼎豪淋浴房', '014.jpg', 'xp', '鼎豪淋浴房 不锈钢两移门 T-W728 平方米', '2002.00', '免费测量免费送货免费安装 限上海地区（三岛需另付费）', '8.3', '23', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');
INSERT INTO `t_mrpxp` VALUES ('30', '12716223', '鼎豪淋浴房', '015.jpg', 'xp', '鼎豪淋浴房 不锈钢两移门 T-W728 平方米', '12323.00', '免费测量免费送货免费安装 限上海地区（三岛需另付费）', '9.3', '24', '01,02,03,04,05,06,07,08,09,10,11,12,13,14', '2018-08-21 20:39:02');

-- ----------------------------
-- Table structure for t_nav
-- ----------------------------
DROP TABLE IF EXISTS `t_nav`;
CREATE TABLE `t_nav` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `value` varchar(50) DEFAULT NULL,
  `enable` tinyint(1) DEFAULT '0' COMMENT '启用：1，不启用：0',
  `more` varchar(20) DEFAULT NULL,
  `pubclass` varchar(10) DEFAULT NULL,
  `CDT` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_nav
-- ----------------------------
INSERT INTO `t_nav` VALUES ('1', '我的订单', '1', 'more', 'order', '2018-08-19 16:24:40');
INSERT INTO `t_nav` VALUES ('2', '商家中心', '1', 'more', 'buscen', '2018-08-19 16:27:48');
INSERT INTO `t_nav` VALUES ('3', '手机为为', '1', 'pub-mallvvph', 'mallvv', '2018-08-19 17:37:20');
INSERT INTO `t_nav` VALUES ('4', '客服服务', '1', 'more', 'server', '2018-08-19 16:28:03');
INSERT INTO `t_nav` VALUES ('5', '关注我们', '1', 'more', 'followus', '2018-08-19 16:28:11');

-- ----------------------------
-- Table structure for t_nav_value
-- ----------------------------
DROP TABLE IF EXISTS `t_nav_value`;
CREATE TABLE `t_nav_value` (
  `id` int(20) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `navid` int(20) NOT NULL COMMENT '导航栏id',
  `type` varchar(40) NOT NULL COMMENT '类型',
  `value` varchar(50) DEFAULT NULL,
  `enable` tinyint(1) DEFAULT '0' COMMENT '启用：1，不启用：0',
  `CDT` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`navid`,`type`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_nav_value
-- ----------------------------
INSERT INTO `t_nav_value` VALUES ('00000000000000000001', '1', 'payment', '待付款订单', '1', '2018-08-19 17:14:46', '#');
INSERT INTO `t_nav_value` VALUES ('00000000000000000002', '1', 'confirm', '待确认收货', '1', '2018-08-19 17:14:49', '#');
INSERT INTO `t_nav_value` VALUES ('00000000000000000003', '1', 'evaluate', '待评价交易', '1', '2018-08-19 17:14:50', '#');
INSERT INTO `t_nav_value` VALUES ('00000000000000000004', '2', 'admission', '申请入入驻', '1', '2018-08-19 17:14:52', '#');
INSERT INTO `t_nav_value` VALUES ('00000000000000000005', '2', 'myshop', '我的店铺', '1', '2018-08-19 17:14:54', '#');
INSERT INTO `t_nav_value` VALUES ('00000000000000000006', '4', 'centerhelp', '帮助中心', '1', '2018-08-19 17:14:57', '#');
INSERT INTO `t_nav_value` VALUES ('00000000000000000007', '4', 'serversell', '售后服务', '1', '2018-08-19 17:14:57', '#');
INSERT INTO `t_nav_value` VALUES ('00000000000000000008', '5', 'codetip', '扫描二维码', '1', '2018-08-19 17:14:58', '#');
INSERT INTO `t_nav_value` VALUES ('00000000000000000009', '5', 'codetip', '关注商城微信号', '1', '2018-08-19 17:14:58', '#');
INSERT INTO `t_nav_value` VALUES ('00000000000000000010', '5', 'code', 'mallvvCode.gif', '1', '2018-08-19 17:14:59', '#');

-- ----------------------------
-- Table structure for t_province
-- ----------------------------
DROP TABLE IF EXISTS `t_province`;
CREATE TABLE `t_province` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `code` varchar(100) DEFAULT NULL,
  `CDT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'creatdate',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_province
-- ----------------------------
INSERT INTO `t_province` VALUES ('0000000001', '北京', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000002', '天津', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000003', '河北省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000004', '山西省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000005', '内蒙古自治区', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000006', '辽宁省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000007', '吉林省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000008', '黑龙江省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000009', '\r\n上海', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000010', '江苏省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000011', '浙江省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000012', '安徽省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000013', '福建省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000014', '江西省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000015', '山东省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000016', '河南省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000017', '湖北省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000018', '\r\n湖南省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000019', '广东省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000020', '广西壮族自治区', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000021', '海南省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000022', '\r\n重庆', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000023', '四川省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000024', '贵州省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000025', '云南省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000026', '西藏自治区', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000027', '陕西省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000028', '甘肃省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000029', '青海省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000030', '宁夏回族自治区', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000031', '新疆维吾尔自治区', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000032', '台湾省', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000033', '香港特别行政区', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000034', '澳门特别行政区', null, '2018-08-19 13:45:10');
INSERT INTO `t_province` VALUES ('0000000035', '海外', null, '2018-08-19 13:45:10');

-- ----------------------------
-- Table structure for t_shop
-- ----------------------------
DROP TABLE IF EXISTS `t_shop`;
CREATE TABLE `t_shop` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `imglist` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `sale` varchar(255) DEFAULT NULL,
  `popularity` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `stock` varchar(255) DEFAULT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `describe` varchar(255) DEFAULT NULL,
  `score` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `freeshipping` varchar(255) DEFAULT NULL,
  `storeid` varchar(255) DEFAULT NULL,
  `ArtNo` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_shop
-- ----------------------------
INSERT INTO `t_shop` VALUES ('60', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8000', '102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg,100.jpg,101.jpg,100.jpg', '100.jpg', '93', '100', '1000', '50', '0.4', 'longbig01.png', '1', '同城配送+步梯≤6楼免费搬楼（电梯入户免费搬楼）+安装（拆包/拼接等），具体运费请询问客服', '0', '100', '12716528', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('61', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8001', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '101.jpg', '94', '101', '1001', '51', '0.5', 'longbig02.png', '2', '安装（拆包/拼接等），具体运费请询问客服', '0', '100', '12716528', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('62', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8002', '100.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg', '102.jpg', '95', '102', '1002', '52', '0.6', 'longbig03.png', '3', '同城配送+步梯≤6楼免费搬楼（电梯入户免费搬楼），具体运费请询问客服', '0', '100', '12716528', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('63', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8010', '102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg,100.jpg,101.jpg,100.jpg', '103.jpg', '103', '110', '1010', '60', '1.4', 'longbig01.png', '5', '同城配送+步梯≤6楼免费搬楼，具体运费请询问客服', '9999', '101', '12716529', '英伦高尔夫软床旗舰店');
INSERT INTO `t_shop` VALUES ('64', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8012', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '104.jpg', '105', '112', '1012', '62', '3.4', 'longbig01.png', '5', '同城配送+步梯≤6楼免费搬楼（电梯入户免费搬楼）+安装（拆包/拼接等），具体运费请询问客服', '0', '103', '12716531', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('65', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8005', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '105.jpg', '98', '105', '1005', '55', '0.5', 'longbig06.png', '3', '具体运费请询问客服', '4', '100', '12716528', '英伦高尔夫软床旗舰店');
INSERT INTO `t_shop` VALUES ('66', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8011', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '106.jpg', '104', '111', '1011', '61', '2.4', 'longbig01.png', '5', '，具体运费请询问客服', '99', '102', '12716530', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('67', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8007', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '107.jpg', '100', '107', '1007', '57', '0.1', 'longbig08.png', '1', '同城配送+步梯≤6楼免费搬楼（电梯入户免费搬楼）+安装（拆包/拼接等），具体运费请询问客服', '22', '100', '12716528', '英伦高尔夫软床旗舰店');
INSERT INTO `t_shop` VALUES ('68', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8008', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '108.jpg', '101', '108', '1008', '58', '0.8', 'longbig09.png', '5', '同城配送+步梯≤6楼免费搬楼，具体运费请询问客服', '111', '100', '12716528', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('69', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8009', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '109.jpg', '102', '109', '1009', '59', '0.4', 'longbig01.png', '4', '同城配送+步梯≤6楼免费搬楼（电梯', '22', '100', '12716528', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('70', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8009', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '110.jpg', '102', '110', '1009', '30', '0.4', 'longbig01.png', '4', '同城配送+步梯≤6楼免费搬楼（电', '22', '100', '12716528', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('71', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8009', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '111.jpg', '102', '110', '1011', '59', '0.4', 'longbig01.png', '4', '同城配送+步梯≤6楼免费搬搬楼）+安装（拆包/拼接等），具体运费请询问客服', '22', '100', '12716528', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('72', '200101', '新中源 釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8009', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '112.jpg', '102', '110', '1011', '70', '0.4', 'longbig01.png', '4', '+步梯≤6楼免费搬楼（电梯运费请询问客服', '22', '100', '12716528', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('73', '200102', '龙凤床垫 3E椰棕硬床垫 正反二用 富豪家族系列 乐轩 1800', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '113.jpg', '103', '110', '1010', '59', '0.4', 'longbig01.png', '1', '同城配送+步梯≤6楼免费搬楼（问客服', '0', '101', '12716529', '英伦高尔夫软床旗舰店');
INSERT INTO `t_shop` VALUES ('74', '200102', '龙凤床垫 3E椰棕硬床垫 正反二用 富豪家族系列 乐轩 1801', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '114.jpg', '104', '111', '1011', '59', '0.5', 'longbig02.png', '2', '步梯≤6楼免费搬楼', '0', '102', '12716530', '英伦高尔夫软床旗舰店');
INSERT INTO `t_shop` VALUES ('75', '200102', '龙凤床垫 3E椰棕硬床垫 正反二用 富豪家族系列 乐轩 1802', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '115.jpg', '105', '112', '1012', '59', '0.6', 'longbig03.png', '3', '同城配送+步梯≤6楼免费搬楼（电客服', '0', '103', '12716531', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('76', '200102', '龙凤床垫 3E椰棕硬床垫 正反二用 富豪家族系列 乐轩 1803', '104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg,105.jpg,106.jpg,107.jpg,108.jpg', '116.jpg', '106', '113', '1013', '60', '1.4', 'longbig01.png', '5', '同城配送+步梯≤6楼免费搬楼（电梯入', '9999', '104', '12716532', '英伦高尔夫软床旗舰店');
INSERT INTO `t_shop` VALUES ('77', '200102', '龙凤床垫 3E椰棕硬床垫 正反二用 富豪家族系列 乐轩 1804', '103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg,100.jpg,101.jpg,100.jpg,102.jpg', '117.jpg', '107', '114', '1014', '61', '3.4', 'longbig01.png', '5', '同城配送+步梯≤6楼免费搬楼（电梯入户问客服', '0', '105', '12716533', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('78', '200102', '龙凤床垫 3E椰棕硬床垫 正反二用 富豪家族系列 乐轩 1805', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '118.jpg', '108', '115', '1015', '62', '0.5', 'longbig06.png', '3', '同城配送+步梯≤6楼免费搬楼（电梯入体运费请询问客服', '4', '106', '12716534', '英伦高尔夫软床旗舰店');
INSERT INTO `t_shop` VALUES ('79', '200102', '龙凤床垫 3E椰棕硬床垫 正反二用 富豪家族系列 乐轩 1806', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '119.jpg', '109', '116', '1016', '59', '2.4', 'longbig01.png', '4', '楼', '99', '107', '12716535', '英伦高尔夫软床旗舰店');
INSERT INTO `t_shop` VALUES ('80', '200201', '美诚美诺 客厅 油楠木 长茶几 D136', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '120.jpg', '110', '117', '1017', '59', '0.1', 'longbig08.png', '1', '免费搬楼）+安装（拆包/拼接等），具体运费请询问客服', '22', '108', '12716536', '英伦高尔夫软床旗舰店');
INSERT INTO `t_shop` VALUES ('81', '200201', '美诚美诺 客厅 油楠木 长茶几 D137', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '121.jpg', '111', '118', '1018', '60', '0.8', 'longbig09.png', '5', '等），具体运费请询问客服', '111', '109', '12716537', '英伦高尔夫软床旗舰店');
INSERT INTO `t_shop` VALUES ('82', '200201', '美诚美诺 客厅 油楠木 长茶几 D138', '101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '122.jpg', '112', '119', '1019', '61', '0.4', 'longbig01.png', '4', '同城配送包/拼接等），具体运费请询问客服', '22', '110', '12716538', '瑞肯橱柜为为旗舰店');
INSERT INTO `t_shop` VALUES ('83', '200201', '美诚美诺 客厅 油楠木 长茶几 D139', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '123.jpg', '113', '120', '1020', '62', '0.4', 'longbig01.png', '5', '同城配送+步梯≤6楼免费搬楼（电梯入户免费搬楼）+安装（拆包/拼接等），具体运费请询问客服', '0', '111', '12716539', '瑞肯橱柜为为旗舰店');
INSERT INTO `t_shop` VALUES ('84', '200201', '美诚美诺 客厅 油楠木 长茶几 D140', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '124.jpg', '90', '10', '1021', '63', '0.5', 'longbig02.png', '2', '同城配送+步梯≤6楼免费搬楼（电梯入户免费搬楼）+安装（拆包/拼接等），具体运费请询问客服', '0', '112', '12716540', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('85', '200302', '釉面砖客厅全抛釉瓷砖地砖地板砖墙砖金刚釉8008 800*803', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '125.jpg', '115', '122', '1022', '64', '0.6', 'longbig03.png', '5', '同城配送+步梯≤6楼免费搬楼（电梯入户免费搬楼）+安装（拆包/拼接等），具体运费请询问客服', '0', '113', '12716541', '英伦高尔夫软床旗舰店');
INSERT INTO `t_shop` VALUES ('86', '200302', '英伦高尔夫 头层牛皮凳 床尾凳 保罗床前凳', '100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '126.jpg', '116', '123', '1023', '65', '1.4', 'longbig01.png', '5', '同城配送+步梯≤6楼免费搬楼（电梯入户免费搬楼）+安装（拆包/拼接等），具体运费请询问客服', '9999', '114', '12716542', '瑞肯橱柜为为旗舰店');
INSERT INTO `t_shop` VALUES ('87', '200302', '英伦高尔夫 头层牛皮凳 床尾凳 保罗床前凳', '100.jpg,101.jpg,100.jpg,102.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '127.jpg', '117', '124', '1024', '66', '3.4', 'longbig01.png', '5', '同城配送+步梯≤6楼免费搬楼（电梯入户免费搬楼）+安装（拆包/拼接等），具体运费请询问客服', '0', '115', '12716543', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('88', '200302', '英伦高尔夫 头层牛皮凳 床尾凳 保罗床前凳', '1100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '128.jpg', '118', '125', '1025', '67', '0.5', 'longbig06.png', '3', '同城配送+步梯≤6楼免费搬楼（电梯入户免费搬楼）+安装（拆包/拼接等），具体运费请询问客服', '4', '116', '12716544', '瑞肯橱柜为为旗舰店');
INSERT INTO `t_shop` VALUES ('89', '200302', '英伦高尔夫 头层牛皮凳 床尾凳 保罗床前凳', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '129.jpg', '119', '126', '1026', '68', '2.4', 'longbig01.png', '5', '同城配送+步梯≤6', '99', '117', '12716545', '顺展和风榻榻米');
INSERT INTO `t_shop` VALUES ('90', '200302', '英伦高尔夫 头层牛皮凳 床尾凳 保罗床前凳', '100.jpg,101.jpg,100.jpg,102.jpg,103.jpg,104.jpg,105.jpg,106.jpg,107.jpg,108.jpg,109.jpg,110.jpg', '130.jpg', '120', '127', '1027', '68', '0.1', 'longbig08.png', '1', '同城配送+步梯≤6楼免费搬', '22', '118', '12716546', '瑞肯橱柜为为旗舰店');

-- ----------------------------
-- Table structure for t_test
-- ----------------------------
DROP TABLE IF EXISTS `t_test`;
CREATE TABLE `t_test` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_test
-- ----------------------------
INSERT INTO `t_test` VALUES ('1');

-- ----------------------------
-- Table structure for t_type_one
-- ----------------------------
DROP TABLE IF EXISTS `t_type_one`;
CREATE TABLE `t_type_one` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `type` int(255) DEFAULT NULL,
  `isnav` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_type_one
-- ----------------------------
INSERT INTO `t_type_one` VALUES ('2', '建材', '#', '200', '');
INSERT INTO `t_type_one` VALUES ('1', '装修服务', '#', '300', '\0');
INSERT INTO `t_type_one` VALUES ('3', '家具家纺', '#', '100', '');

-- ----------------------------
-- Table structure for t_type_three
-- ----------------------------
DROP TABLE IF EXISTS `t_type_three`;
CREATE TABLE `t_type_three` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `parent` int(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT '#',
  `type` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`parent`)
) ENGINE=MyISAM AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_type_three
-- ----------------------------
INSERT INTO `t_type_three` VALUES ('1', '2001', '其他辅料', '#', '200101');
INSERT INTO `t_type_three` VALUES ('2', '2001', '开关插座', '#', '200102');
INSERT INTO `t_type_three` VALUES ('3', '2001', '油漆涂料', '#', '200103');
INSERT INTO `t_type_three` VALUES ('4', '2001', '电线', '#', '200104');
INSERT INTO `t_type_three` VALUES ('5', '2002', '釉面砖', '#', '200201');
INSERT INTO `t_type_three` VALUES ('6', '2002', '玻化砖', '#', '200202');
INSERT INTO `t_type_three` VALUES ('7', '2002', '仿古砖', '#', '200203');
INSERT INTO `t_type_three` VALUES ('8', '2002', '木纹砖', '#', '200204');
INSERT INTO `t_type_three` VALUES ('9', '2002', '微晶石', '#', '200205');
INSERT INTO `t_type_three` VALUES ('10', '2002', '抛光砖', '#', '200206');
INSERT INTO `t_type_three` VALUES ('11', '2002', '大理石', '#', '200207');
INSERT INTO `t_type_three` VALUES ('12', '2002', '瓷砖辅料', '#', '200208');
INSERT INTO `t_type_three` VALUES ('13', '2002', '人造石', '#', '200209');
INSERT INTO `t_type_three` VALUES ('14', '2002', '花岗石', '#', '200210');
INSERT INTO `t_type_three` VALUES ('15', '2002', '陶瓷', '#', '200211');
INSERT INTO `t_type_three` VALUES ('16', '2002', '金刚石', '#', '200301');
INSERT INTO `t_type_three` VALUES ('17', '2003', '坐便器', '#', '200302');
INSERT INTO `t_type_three` VALUES ('18', '2003', '坐便器盖板', '#', '200303');
INSERT INTO `t_type_three` VALUES ('19', '2003', '龙头', '#', '200304');
INSERT INTO `t_type_three` VALUES ('20', '2003', '卫浴套装', '#', '200305');
INSERT INTO `t_type_three` VALUES ('21', '2004', '多功能组合电器', '#', '200401');
INSERT INTO `t_type_three` VALUES ('22', '2004', '照明模块', '#', '200402');
INSERT INTO `t_type_three` VALUES ('23', '2004', '扣板模块', '#', '200403');
INSERT INTO `t_type_three` VALUES ('24', '2004', '换气模块', '#', '200404');
INSERT INTO `t_type_three` VALUES ('25', '2004', '灯暖模块', '#', '200405');
INSERT INTO `t_type_three` VALUES ('26', '2004', '暖风模块', '#', '200406');
INSERT INTO `t_type_three` VALUES ('27', '2005', '整体橱柜', '#', '200501');
INSERT INTO `t_type_three` VALUES ('28', '2005', '柜体', '#', '200502');
INSERT INTO `t_type_three` VALUES ('29', '2005', '门板', '#', '200503');
INSERT INTO `t_type_three` VALUES ('30', '2005', '台面', '#', '200504');
INSERT INTO `t_type_three` VALUES ('31', '2005', '橱柜配件', '#', '200505');
INSERT INTO `t_type_three` VALUES ('32', '2006', '定制淋浴房', '#', '200601');
INSERT INTO `t_type_three` VALUES ('33', '2007', '实木地板', '#', '200701');
INSERT INTO `t_type_three` VALUES ('34', '2007', '强化复合地板', '#', '200702');
INSERT INTO `t_type_three` VALUES ('35', '2007', '木地板', '#', '200703');
INSERT INTO `t_type_three` VALUES ('36', '2007', '实木复合地板', '#', '200704');
INSERT INTO `t_type_three` VALUES ('37', '2008', '衣柜移门', '#', '200801');
INSERT INTO `t_type_three` VALUES ('38', '2008', '整体衣柜', '#', '200802');
INSERT INTO `t_type_three` VALUES ('39', '2008', '隔断衣柜', '#', '200803');
INSERT INTO `t_type_three` VALUES ('40', '2008', '折叠门', '#', '200804');
INSERT INTO `t_type_three` VALUES ('41', '2008', '定制柜类', '#', '200805');
INSERT INTO `t_type_three` VALUES ('42', '2009', '无纺布墙纸', '#', '200901');
INSERT INTO `t_type_three` VALUES ('43', '2009', '纯纸墙纸', '#', '200902');
INSERT INTO `t_type_three` VALUES ('44', '2010', '防盗门', '#', '201001');
INSERT INTO `t_type_three` VALUES ('45', '2010', '木门', '#', '201002');
INSERT INTO `t_type_three` VALUES ('46', '2010', '阳台窗', '#', '201003');
INSERT INTO `t_type_three` VALUES ('47', '2010', '定制门', '#', '201004');
INSERT INTO `t_type_three` VALUES ('48', '2010', '定制窗', '#', '201005');
INSERT INTO `t_type_three` VALUES ('49', '2010', '推拉铝门', '#', '201006');
INSERT INTO `t_type_three` VALUES ('50', '2010', '福斯玛门', '#', '201007');
INSERT INTO `t_type_three` VALUES ('51', '2011', '净水器/水处理', '#', '201101');
INSERT INTO `t_type_three` VALUES ('52', '2012', '定制柜', '#', '201201');
INSERT INTO `t_type_three` VALUES ('53', '2012', '木质楼梯', '#', '201202');
INSERT INTO `t_type_three` VALUES ('54', '2013', '保险箱', '#', '201301');

-- ----------------------------
-- Table structure for t_type_two
-- ----------------------------
DROP TABLE IF EXISTS `t_type_two`;
CREATE TABLE `t_type_two` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `parent` int(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT '#',
  `type` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`parent`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_type_two
-- ----------------------------
INSERT INTO `t_type_two` VALUES ('1', '300', '免费设计', '#', '3001');
INSERT INTO `t_type_two` VALUES ('2', '300', '装修设计', '#', '3002');
INSERT INTO `t_type_two` VALUES ('3', '300', '装修大全', '#', '3003');
INSERT INTO `t_type_two` VALUES ('4', '300', '装修效果图', '#', '3004');
INSERT INTO `t_type_two` VALUES ('5', '300', '家居图册', '#', '3005');
INSERT INTO `t_type_two` VALUES ('6', '300', '精品专题·', '#', '3006');
INSERT INTO `t_type_two` VALUES ('7', '300', '装修攻略', '#', '3007');
INSERT INTO `t_type_two` VALUES ('8', '300', '装修前', '#', '3008');
INSERT INTO `t_type_two` VALUES ('9', '300', '装修中', '#', '3009');
INSERT INTO `t_type_two` VALUES ('10', '300', '装修后', '#', '3010');
INSERT INTO `t_type_two` VALUES ('11', '300', '装修风水', '#', '3011');
INSERT INTO `t_type_two` VALUES ('12', '300', '家装学堂', '#', '3012');
INSERT INTO `t_type_two` VALUES ('13', '300', '家居生活', '#', '3013');
INSERT INTO `t_type_two` VALUES ('14', '300', '植物花卉', '#', '3014');
INSERT INTO `t_type_two` VALUES ('15', '300', '宠物', '#', '3015');
INSERT INTO `t_type_two` VALUES ('16', '300', '手工DIY', '#', '3016');
INSERT INTO `t_type_two` VALUES ('17', '200', '基础建材', '#', '2001');
INSERT INTO `t_type_two` VALUES ('18', '200', '瓷砖/大理石/陶瓷', '#', '2002');
INSERT INTO `t_type_two` VALUES ('19', '200', '卫浴', '#', '2003');
INSERT INTO `t_type_two` VALUES ('20', '200', '集成吊顶', '#', '2004');
INSERT INTO `t_type_two` VALUES ('21', '200', '橱柜', '#', '2005');
INSERT INTO `t_type_two` VALUES ('22', '200', '淋浴房', '#', '2006');
INSERT INTO `t_type_two` VALUES ('23', '200', '地板/榻榻米', '#', '2007');
INSERT INTO `t_type_two` VALUES ('24', '200', '移门衣柜', '#', '2008');
INSERT INTO `t_type_two` VALUES ('25', '200', '墙纸', '#', '2009');
INSERT INTO `t_type_two` VALUES ('26', '200', '门窗', '#', '2010');
INSERT INTO `t_type_two` VALUES ('27', '200', '净水器', '#', '2011');
INSERT INTO `t_type_two` VALUES ('28', '200', '水处理', '#', '2012');
INSERT INTO `t_type_two` VALUES ('29', '200', '定制楼梯', '#', '2013');
INSERT INTO `t_type_two` VALUES ('30', '200', '保险箱', '#', '2014');
INSERT INTO `t_type_two` VALUES ('31', '100', '卧室', '#', '1001');
INSERT INTO `t_type_two` VALUES ('32', '100', '客厅', '#', '1002');
INSERT INTO `t_type_two` VALUES ('33', '100', '餐厅', '#', '1003');
INSERT INTO `t_type_two` VALUES ('34', '100', '书房', '#', '1004');
INSERT INTO `t_type_two` VALUES ('35', '100', '儿童房', '#', '1005');
INSERT INTO `t_type_two` VALUES ('36', '100', '办公家具', '#', '1006');
INSERT INTO `t_type_two` VALUES ('37', '100', '家饰', '#', '1007');
INSERT INTO `t_type_two` VALUES ('38', '100', '软装', '#', '1008');
INSERT INTO `t_type_two` VALUES ('39', '100', '家纺', '#', '1009');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` int(100) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '系统id',
  `account` varchar(20) NOT NULL,
  `password` varchar(30) NOT NULL,
  `regtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '用户注册时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001', '244429290@qq.com', '123', '2018-08-12 15:10:17');
INSERT INTO `t_user` VALUES ('0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025', 'louiebb', '1', '2018-08-17 21:38:22');
INSERT INTO `t_user` VALUES ('0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030', '18898601334', '0184', '2018-08-24 17:20:25');
INSERT INTO `t_user` VALUES ('0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031', '18898601335', '0592', '2018-08-24 17:22:25');
SET FOREIGN_KEY_CHECKS=1;
