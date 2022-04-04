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
                this.todos.push(this.todotext)
                this.todotext = ""
            }
        }
    });

})();