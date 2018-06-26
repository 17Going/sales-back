

-- 部门表
CREATE TABLE `department` (
`id`  int(11) NOT NULL AUTO_INCREMENT COMMENT '部门ID' ,
`depName`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '部门名称' ,
`parentId`  int(11) NOT NULL DEFAULT 0 COMMENT '父级部门ID' ,
`status`  int(11) NOT NULL DEFAULT 0 COMMENT '状态0：正常 1：删除' ,
`createTime`  bigint(20) NOT NULL ,
`updateTime`  bigint(20) NOT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
ROW_FORMAT=DYNAMIC;

-- 职位
CREATE TABLE `jobName` (
`id`  int(11) NOT NULL AUTO_INCREMENT COMMENT '职位ID' ,
`jobName`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '职位名称' ,
`description`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '职位描述' ,
`status`  int(11) NOT NULL DEFAULT 0 COMMENT '状态 0:正常 1：删除' ,
`createTime`  bigint(20) NULL DEFAULT NULL COMMENT '创建时间' ,
`updateTime`  bigint(20) NULL DEFAULT NULL COMMENT '更新时间' ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
ROW_FORMAT=DYNAMIC
;

--权限表
CREATE TABLE `auth` (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`authName`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
`authValue`  text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '权限值' ,
`status`  int(11) NOT NULL DEFAULT 0 ,
`createTime`  bigint(20) NULL DEFAULT NULL ,
`updateTime`  bigint(20) NULL DEFAULT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
ROW_FORMAT=DYNAMIC
;

--用户信息表
CREATE TABLE `user` (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`userName`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
`password`  varchar(255) NOT NULL ,
`phone`  bigint(20) NOT NULL ,
`email`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
`cap`  int(11) NULL DEFAULT 30 COMMENT '客户容量池' ,
`depId`  int(11) NULL DEFAULT NULL ,
`jobId`  int(11) NULL DEFAULT NULL ,
`authId`  int(11) NULL DEFAULT NULL ,
`status`  int(11) NULL DEFAULT 0 COMMENT '状态：0：正常1：删除 2：禁用' ,
`createTime`  bigint(20) NULL DEFAULT NULL ,
`updateTime`  bigint(20) NULL DEFAULT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
ROW_FORMAT=DYNAMIC
;