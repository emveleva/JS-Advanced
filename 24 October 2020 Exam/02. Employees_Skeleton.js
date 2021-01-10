function solveClasses() {
    class Developer{
        
        constructor(firstName, lastName ){
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }
        addTask(id, taskName, priority){
            let task = {
                
                taskName,
                id,
                priority
            }
            if (task.priority === 'high'){
                this.tasks.unshift(task)
            } else {
                this.tasks.push(task)
                
            }
            return `Task id ${id}, with ${priority} priority, has been added.`
        }
        doTask(){
            if (this.tasks.length > 0){
                let completedTask = this.tasks.shift();
                return `${completedTask}`
            } else {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            }
        }

        getSalary(){
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks(){
            let unfinishedTasks = 'Tasks, that need to be completed:';
            this.tasks.forEach(element => {
                unfinishedTasks += '\n';
                unfinishedTasks += `${element.id}: ${element.taskName} - ${element.priority}`
            });
            return unfinishedTasks;
        }

    }
    class Junior extends Developer{
        constructor(firstName, lastName, bonus, experience){
            super(firstName, lastName);
            this.experience = experience;
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
        }
        learn(years){
            this.experience += years;
        }
    }

    class Senior extends Developer{
        constructor(firstName, lastName, bonus, experience){
            super(firstName, lastName, experience );
            this.baseSalary = 1000 + bonus;
            this.tasks = [];
            this.experience = experience + 5;
        }
        changeTaskPriority(taskId) {
            let currentTask = this.tasks.find(x => x.id === taskId);
            if(currentTask.priority === 'high') {
                currentTask['priority'] = 'low';
                this.tasks.splice(this.tasks.length - 1, 1, currentTask);
            } else {
                currentTask['priority'] = 'high';
                this.tasks.splice(0, 1, currentTask);
 
            }
 
            return currentTask;
        }
    }
 
    return {
        Developer,
        Junior,
        Senior
    }
}
 
let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
 
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());
 
const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());
 
const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);
 
console.log(senior.doTask());