(function(){
    'use strict';

    //two way data binding (to UI)

    var vm = new Vue({
        el: '#app',
        data:{
            todotext:'',
            todos:[
                'task 1',
                'task 2',
                'task 3'
            ],
        redClass: 'redCollor'
        },
        methods:{
            addTodo(){
                if(this.todotext == ""){
                    alert("追加するリストが空です")
                    return
                }
                this.todos.push(this.todotext)
                this.todotext = ""
            },
            deleteTodo(){
                if (this.todos.length == 0){
                    alert("削除するリストがありません")
                    return
                }
                this.todos.pop()
            }
        }
    });

})();