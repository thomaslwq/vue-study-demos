// const fn = aync = function() {
//     const = user = await getUser();
//     const posts = await fetchPosts(user.id);
//     return {user,posts};
// };
// fn().then(res => console.log(res)).catch(err => console.log(err.stack))

// const koa = require("koa")
// const app = koa();
// app.use(function* responseTime(next){\
//     const start = new Date;
//     yield next;
//     const ms = new Date - start;
//     this.set("X-Response-Time",ms + "ms");
// })
// app.use(function* logger(next){
//     const start = new Date;
//     yield next;
//     const used = new Date - start;
//     console.log("%s %s %s %sms",
//         this.method,
//         this.originalUrl,
//         this.status,used
//     )
// });
// app.user(function* contentLength(next){
//     yield next;
//     if(!this.body) return;
//     this.set("Content-Length",this.body.length);
// });
// app.use(function* body(next){
//     yield next;
//     if(this.path !== "/") return;
//     this.body = "Hello World";
// });
// app.listen(3000)