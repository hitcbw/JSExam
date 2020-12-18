# 用户管理
+ 批量注册用户  
  
``` sql
/** TODO: 
1. 封装不同数据库连接（暂缓）
2. 批量执行sql语句，mysql连接池优化
*/

-- service
batch{
    insert into user values (...);
}
-- controller
input : filePath
process : readFile and generate json
return json {
    id 
    username
    status
}
```
+ 登录
``` sql
/** TODO: 
1. 异步返回
*/

-- service
select count(*) from user where password = 
-- controller
input : password
process : md5(password)
return : status
```

+ 修改个人信息
``` sql
/** TODO: 
1. 字符串拼接
*/

-- service
update user set {[proteries]} where id = {id}
-- controller
input : proteriesJson 
process : null
return : status
```
+ 修改密码

``` sql
-- service
update user set password = {password} where id = {id}
-- controller
input : password
process : md5(password)
return : status
```

# 试题管理
+ 添加试题
``` sql
/** TODO: 
1. 批量执行sql语句
2. 文件流读写
*/

-- service
batch{
    insert into question values (...);
}
-- controller
input : filePath
process : readFile and generate json
return: write to localFile {
    questionId 
    top 10 character of question
    status
}
```
+ 修改试题

``` sql
-- service

-- controller

```
+ 删除试题
``` sql
-- service

-- controller

```


# 试题记录管理
+ 插入测试记录
``` sql
-- service
insert into exam_record values (...)
-- controller
input : record properties
process : null
return: status
```
+ 更新测试记录
``` sql
-- service
update exam_record set (...) where record_id = {record_id}
-- controller
input : change log
process : generate sql
return: status
```