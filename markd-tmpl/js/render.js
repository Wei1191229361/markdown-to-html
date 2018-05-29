'use strict';
const marked=require('marked');
const fs=require('fs');
const path=require('path');

/**
 *
 * @param original markdown的绝对路径
 * @param tmplPath html模板的绝对路径
 */
function render(original,tmplPath) {
	//原始文件
	let res=path.join(path.dirname(original),path.basename(original, '.md')+'.html') ;

//读取模板文件
	fs.readFile(tmplPath,'utf-8',(err,temp)=>{
		if (err) return console.error('模板读取错误(Can not read template)!');
		// 读取md文件
		fs.readFile(original,'utf-8',(err,data)=>{
			if (err) return console.error('读取md文件出错(Can not read markdown)!');
			let html=marked(data.toString());
			// 去除marked转换中带有的id (Remove id in <h><h/>)
			html=html.replace(/id=\".*\"/g,'')
			temp=temp.replace('@markdown',html);
			// 写入新的文件(render)
			fs.writeFile(res,temp,(err)=>{
				if (err) return console.error('写入出错(cannot output！)');
				console.log('写入文件成功(success!)');
			})
		})
	});
}

module.exports={
	render,
}



