import { observable, action, computed, decorate } from 'mobx';
class ToDoStore {
    todos = observable([]);

    add(task) {
        this.todos.push({
            task: task,
            completed: false,
        });
    }

    get numberOfToDosCount() {
        return this.todos.length;
    }

    get completedToDosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }
}

decorate(ToDoStore, {
    todos: observable,
    add: action,
    numberOfToDosCount: computed,
    completedToDosCount: computed,
})
export default ToDoStore;