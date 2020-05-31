var mysql = require('mysql');
var inquirer = require('inquirer');
const my_Functions = require('./function_List');
const connection = require('./db_connection');

connection.connect(function(err) {
    if (err) throw err;
    console.log('successfully initialized')
    start();
});

const start = () => {
    inquirer.prompt({
        name: 'decision',
        type: 'list',
        message: 'what do you want to do?',
        choices: [
            'view all employees', 
            'view all employees by department', 
            'view all employees by manager', 
            'add employee',
            'remove employee',
            'update employee role',
            'update employee manager',
            'view all roles',
            'delete department',
            'view total utilized budget by department'
        ]
    })
    .then(function(answer) {
        switch(answer.decision) {
            case 'view all employees':
                my_Functions.view_All_Emp();
                break;
            case 'view all employees by department':
                my_Functions.view_All_By_Dept();
                break;
            case 'view all employees by manager':
                my_Functions.view_All_By_Man();
                break;
            case 'add employee':
                my_Functions.add_Emp();
                break;
            case 'remove employee':
                my_Functions.rem_Emp();
                break;
            case 'update employee role':
                my_Functions.update_Role();
                break;
            case 'update employee manager':
                my_Functions.update_Man();
            case 'view all roles':
                my_Functions.view_All_Roles();
                break;
            case 'delete department':
                my_Functions.del_Dept();
                break;
            case 'view total utilized budget by department':
                my_Functions.view_Tot_Budg();
                break;
        }
    })
}
exports.start = start;
