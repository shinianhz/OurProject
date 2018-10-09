-----------
--  商品表
-----------
CREATE TABLE goods (
 g_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '商品id',
 g-class varchar(64) NOT NULL COMMENT '商品分类',
 g_title varchar(64) NOT NULL COMMENT '商品名称',
 g_price mediumint(20) NOT NULL COMMENT '商品价格',
 g_oldprice mediumint(20) NOT NULL COMMENT '商品旧价',
 g_tips varchar(64) NOT NULL COMMENT '商品描述',
 g_img varchar(128) NOT NULL COMMENT '商品图片信息',
 PRIMARY KEY (g_id)
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
 s_sales   mediumint(64) NOT NULL COMMENT '商品库存',
 s_tips   varchar(64) NOT NULL COMMENT '商品描述信息',
 s_information   varchar(64) NOT NULL COMMENT '商品信息',
 PRIMARY KEY (s_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;
-----------
--  商品库存表
-----------
-- CREATE TABLE repertory (
--  r_id mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '仓库编号',
--  r_goodsid mediumint(8) NOT NULL AUTO_INCREMENT COMMENT '商品编号编号',
--  goods_name varchar(64) NOT NULL COMMENT '商品名称',
--  goods_classid mediumint(64) NOT NULL COMMENT '商品分类id',
--  goods_sellerid  mediumint(64) NOT NULL COMMENT '商品卖家id',
--  goods_comments  mediumint(64) NOT NULL COMMENT '商品评论数',
--  PRIMARY KEY (goods_id)
-- ) ENGINE=MyISAM DEFAULT CHARSET=utf8 ;