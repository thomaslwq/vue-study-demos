new Vue({
    el:"#editor",
    data:{
        input:"# hello"
    },
    computed:{
        compileMarkdown:function(){
            return marked(this.input,{ sanitize: true})
        }
    },
    methods:{
        click:( e ) => { console.log( e.target.value )},
        update:_.debounce(function(e){
            this.input = e.target.value;
        },300)
    }
})