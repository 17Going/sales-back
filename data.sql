

-- 部门表
CREATE TABLE `department` (
`id`  int(11) NOT NULL AUTO_INCREMENT COMMENT '唯一标识' ,
`name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '部门名称' ,
`parentId`  int(11) NOT NULL DEFAULT 0 COMMENT '父级部门id' ,
`createTime`  bigint(20) NULL DEFAULT 0 COMMENT '创建时间' ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
ROW_FORMAT=DYNAMIC
;

