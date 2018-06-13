

-- 部门表
CREATE TABLE `mysql`.`department`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '唯一标识',
  `departmentName` varchar(255) NOT NULL COMMENT '部门名称',
  `parentId` int(0) NOT NULL DEFAULT 0 COMMENT '父级部门id',
  PRIMARY KEY (`id`)
);

CREATE TABLE `mysql`.`department`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '唯一标识',
  `departmentName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '部门名称',
  `parentId` int(11) NOT NULL DEFAULT 0 COMMENT '父级部门id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;