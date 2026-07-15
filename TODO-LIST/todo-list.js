 let todolist = [{
            name: 'make dinner',
            dueDate: '2022-12-22'
        }, {
            name: 'wash dishes',
            dueDate: '2022-12-22'
        }];

        rendertodolist();

        function rendertodolist() {
            let todolistHTML = '';

            for (let i = 0; i < todolist.length; i++) {
                const todoobject = todolist[i];

                const { name, dueDate } = todoobject;

                const html = ` 
                <div>${name}</div>
                <div>${dueDate}</div>
                <button class="delete-button" onclick="
                 todolist.splice(${i}, 1);
                 rendertodolist();
                 "> Delete </button>
                `;
                todolistHTML += html;


            }

            document.querySelector('.js-todo-list')
                .innerHTML = todolistHTML;
        }




        function todoadd() {
            const inputelement = document.querySelector('.js-todo-input');
            const name = inputelement.value;

            const dueDateinput = document.querySelector('.js-due-date-input');
            const dueDate = dueDateinput.value;

            todolist.push({
                name,
                dueDate
            });

            inputelement.value = '';
            dueDateinput.value = '';
            rendertodolist();

        }