## Markd-Tmpl
>使用说明:
* 新建一个NodeJs文件,引入此包,
* 然后使用render方法,接受两个参数,分别是markdown文件的绝对路径和html模板文件的绝对路径

* html模板文件中的 @markdown 会被替换为 markdown转换成的html代码 ,去除了marked的h标题带有的id;新生成的html文件在markdown文件同目录下;
>Instructions:
* Create a new file(*.js),require('markd-tmpl'),
* Use render(original,tmplPath);<br/>
@param original markdown's absolute path<br/>
@param tmplPath html-template's absolute path

* "@markdown" in template will be replaced by the html code(parsed from markdown);The new file is in the same directory (original markdown);

例(example):
```html
       html :

       <!DOCTYPE html>
       <html lang="en">
       <head>
       	<meta charset="UTF-8">
       	<title>Title</title>
       </head>
       <body>
       @markdown
       </body>
       </html>
```

```javascript
        javascript:

        const markd=require('markd-tmpl');
        markd.render('E:\WEB\test.md','E:\WEB\tmpl.html');
```

```markdown
    markdown:

    ## 测试文件
    ```
    test!
    ```
```
最终结果(result)为
```html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
<h2 >测试文件</h2>
<pre><code>    test!
</code></pre>
</body>
</html>
```