-----------
--  用户信息表
-----------
CREATE TABLE users (
 u_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '用户id',
 u_name varchar(64) NOT NULL COMMENT '用户名',
 u_idcard mediumint(20) NOT NULL  COMMENT '用户身份证号',
 u_nickname varchar(64) NOT NULL COMMENT '用户昵称',
 u_pwd varchar(64) NOT NULL COMMENT '用户密码',
 u_tel mediumint(20) NOT NULL COMMENT '用户手机号',
 u_qq  mediumint(20)  NULL COMMENT '用户qq',
 u_wechat varchar(64)  NULL COMMENT '用户微信号',
 PRIMARY KEY (u_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;


-----------
--  购物车表
-----------
CREATE TABLE cart (
 c_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '用户id',
 c_goodsid mediumint(8) NOT NULL COMMENT '商品id',
 PRIMARY KEY (c_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;


-----------
--  商品表
-----------
CREATE TABLE goods (
 g_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '商品id',
 g_class varchar(64) NOT NULL COMMENT '商品分类',
 g_title varchar(64) NOT NULL COMMENT '商品名称',
 g_price mediumint(20) NOT NULL COMMENT '商品价格',
 g_oldprice mediumint(20) NOT NULL COMMENT '商品旧价',
 g_tips varchar(64) NOT NULL COMMENT '商品描述',
 g_img varchar(128) NOT NULL COMMENT '商品图片信息',
 PRIMARY KEY (g_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;
-----------
--  食品表
-----------
CREATE TABLE foods (
 f_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '商品id',
 f_class varchar(64) NOT NULL COMMENT '商品分类',
 f_title varchar(64) NOT NULL COMMENT '商品名称',
 f_price mediumint(20) NOT NULL COMMENT '商品价格',
 f_oldprice mediumint(20) NOT NULL COMMENT '商品旧价',
 f_tips varchar(64) NOT NULL COMMENT '商品描述',
 f_img varchar(128) NOT NULL COMMENT '商品图片信息',
 PRIMARY KEY (f_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;
-----------
--  商品分类表
-----------
CREATE TABLE gclass (
 gclass_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '商品分类id',
 gclass_classname varchar(64) NOT NULL COMMENT '商品分类',
 gclass_fatherid varchar(64) NOT NULL COMMENT '商品父分类id',

 PRIMARY KEY (gclass_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;

-----------
--  商品表
-----------
CREATE TABLE goods (
 goods_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '商品编号',
 goods_name varchar(64) NOT NULL COMMENT '商品名称',
 goods_classid mediumint(64) NOT NULL COMMENT '商品分类id',
 goods_sellerid  mediumint(64) NOT NULL COMMENT '商品卖家id',
 goods_comments  mediumint(64) NOT NULL COMMENT '商品评论数',
 PRIMARY KEY (goods_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;
-----------
--  商品库存表(每种产品均对应有唯一的SKU号,一款商品多色，则是有多个SKU)
-----------

CREATE TABLE sku (
 s_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT 'sku编号',
 s_goodsid mediumint(8) NOT NULL COMMENT '商品编号编号',
 s_attr varchar(64) NOT NULL COMMENT 'sku属性',
 s_goodsprice mediumint(20) NOT NULL COMMENT '商品价格',
 s_oldgoodsprice  mediumint(64) NOT NULL COMMENT '商品旧价',
 s_reppertory  mediumint(64) NOT NULL COMMENT '商品库存',
 s_sales   mediumint(64) NOT NULL COMMENT '商品销售信息',
 s_tips   varchar(64) NOT NULL COMMENT '商品描述信息',
 s_information   varchar(64) NOT NULL COMMENT '商品信息',
 PRIMARY KEY (s_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;
-----------
--  商品库存表
-----------
CREATE TABLE repertory (
 r_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '仓库编号',
 r_goodsid mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '商品编号编号',
 goods_name varchar(64) NOT NULL COMMENT '商品名称',
 goods_classid mediumint(64) NOT NULL COMMENT '商品分类id',
 goods_sellerid  mediumint(64) NOT NULL COMMENT '商品卖家id',
 goods_comments  mediumint(64) NOT NULL COMMENT '商品评论数',
 PRIMARY KEY (goods_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;