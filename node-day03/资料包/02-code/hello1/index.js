var template = require('art-template');
var html = template(__dirname + '/tpl-user.art', {
    user: {
        name: '张三哈哈哈'
    }
});

console.log(html);