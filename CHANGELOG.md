ChangeLog的写法
从CVS到SVN，软件开发过程中维护一个ChangeLog文件是个很好的习惯。

ChangLog可以放在程序的根目录，也可以放在文档中。

ChangeLog的文件名多为：
ChangeLog
ChangeLog.txt
CHANGELOG

在内容中，一个版本为一段，段首标明版本信息，每条变更记录占一行，行首为变更类别，后面写变更信息，最后可以用括号标上作者。

变更类别我大概见过两种方式，方式一是：
* 代表修改
+ 代表新增（功能…etc）
– 代表删除

方式二是在TortoiseSVN中见到的，个人觉得更准确：
NEW 代表新增
CHG 代表变动
ENH 代表增强、改进
BUG 代表修复错误
DEV ？？