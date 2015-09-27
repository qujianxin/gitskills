document.onload=function(){}
那么Dom Load就是在页面响应加载的顺序中的“加载图片等其他信息”之后，就可以操作Dom了。
$(document).ready(function(){})
那么Dom Ready应该在“加载js和css”和“加载图片等其他信息”之间，就可以操作Dom了