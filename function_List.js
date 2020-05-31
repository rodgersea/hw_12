var mysql = require('mysql');
var inquirer = require('inquirer');
const connection = require('./db_connection');
const start = require('./server')

const view_All_Emp = () => {
    connection.query('SELECT first_Name, last_Name FROM emps', function (err, res) {
        if (err) throw err;
        let pHold = JSON.parse(JSON.stringify(res));
        let test1 = [];
        for (i = 0; i < pHold.length; i++) {
            test1[i] = `${pHold[i]['first_Name']} ${pHold[i]['last_Name']}`;
        };
        console.log('\n all employees: \n', test1);
        start.start();
    })
}

const view_All_By_Dept = () => {
    inquirer.prompt({
        type: 'input',
        message: 'which department?',
        name: 'which_Dept'
    })
    .then(function (answer) {
        connection.query(
            'SELECT first_Name, last_Name FROM emps WHERE ?',
            {
                department: answer.which_Dept
            },
            function (err, res) {
                if (err) throw err;
                let pHold = JSON.parse(JSON.stringify(res))
                let test1 = [];
                for (i = 0; i < pHold.length; i++) {
                    test1[i] = `${pHold[i]['first_Name']} ${pHold[i]['last_Name']}`
                }
                console.log(`\n all employees in ${answer.which_Dept} department \n`, test1)
                start.start();
            }
        )
    })
}

const view_All_By_Man = () => {
    inquirer.prompt({
        type: 'input',
        message: 'which manager?',
        name: 'whose_Mans'
    })
    .then(function (answer) {
        connection.query(
            'SELECT first_Name, last_Name FROM emps WHERE ?',
            {
                manager: answer.whose_Mans
            },
            function (err, res) {
                if (err) throw err;
                let pHold = JSON.parse(JSON.stringify(res))
                let test1 = [];
                for (i = 0; i < pHold.length; i++) {
                    test1[i] = `${pHold[i]['first_Name']} ${pHold[i]['last_Name']}`
                }
                console.log(`\n all employees with ${answer.whose_Mans} as their manager \n`, test1)
                start.start();
            }
        )
    })
}

const add_Emp = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'first name?',
            name: 'add_First'
        },
        {
            type: 'input',
            message: 'last name?',
            name: 'add_Last'
        },
        {
            type: 'input',
            message: 'title?',
            name: 'add_Title'
        },
        {
            type: 'input',
            message: 'department?',
            name: 'add_Dept'
        },
        {
            type: 'input',
            message: 'salary?',
            name: 'add_Salary'
        },
        {
            type: 'input',
            message: 'manager?',
            name: 'add_Man'
        }
    ])
    .then(function(answer) {
        connection.query(
            'INSERT INTO emps SET ?',
            {
                first_Name: answer.add_First,
                last_Name: answer.add_Last,
                title: answer.add_Title,
                department: answer.add_Dept,
                salary: answer.add_Salary,
                manager: answer.add_Man
            },
            function(err) {
                if (err) throw err;
                console.log(`successfully added ${answer.add_First} ${answer.add_Last} to ${answer.add_Dept} department!`)
                start.start();
            }
        )
    })
}

const rem_Emp = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'first name?',
            name: 'rem_First'
        },
        {
            type: 'input',
            message: 'last name?',
            name: 'rem_Last'
        }
    ])
    .then(function(answer) {
        connection.query(
            'DELETE FROM emps WHERE ? and ?',
            [{
                first_Name: answer.rem_First
            },{
                last_Name: answer.rem_Last
            }],
            function(err, res) {
                if (err) throw err;
                console.log(`successfully removed ${answer.rem_First} ${answer.rem_Last}`)
                start.start();
            }
        )
    })
}

const update_Role = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'first name?',
            name: 'update_First'
        },
        {
            type: 'input',
            message: 'last name?',
            name: 'update_Last'
        },
        {
            type: 'input',
            message: 'to which role?',
            name: 'update_Role'
        }
    ])
    .then(function(answer) {
        connection.query(
            'UPDATE emps SET ? WHERE ? AND ?',
            [
                {
                    title: answer.update_Role
                },
                {
                    first_Name: answer.update_First
                },
                {
                    last_Name: answer.update_Last
                }
            ],
            function(err, res) {
                if (err) throw err;
                console.log('successfully updated role');
                start.start();
            }
        )
    })
}

const update_Man = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'first name?',
            name: 'update_First'
        },
        {
            type: 'input',
            message: 'last name?',
            name: 'update_Last'
        },
        {
            type: 'input',
            message: 'to which manager?',
            name: 'update_Man'
        }
    ])
    .then(function(answer) {
        connection.query(
            'UPDATE emps SET ? WHERE ? AND ?',
            [
                {
                    manager: answer.update_Man
                },
                {
                    first_Name: answer.update_First
                },
                {
                    last_Name: answer.update_Last
                }
            ],
            function(err, res) {
                if (err) throw err;
                console.log('successfully updated role');
                start.start();
            }
        )
    })
}

const view_All_Roles = () => {
    connection.query('SELECT first_Name, last_Name, title FROM emps', function (err, res) {
        if (err) throw err;
        let pHold = JSON.parse(JSON.stringify(res));
        let test1 = [];
        for (i=0; i<pHold.length; i++) {
            test1[i] = `${pHold[i]['first_Name']} ${pHold[i]['last_Name']}: ${pHold[i]['title']}`;
        };
        console.log('\n all employess and roles', test1);
        start.start();
    })
}

const del_Dept = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'delete which department?',
            name: 'del_Dept'
        }
    ])
    .then(function(answer) {
        connection.query(
            'DELETE FROM emps WHERE ?',
            {
                department: answer.del_Dept
            },
            function(err, res) {
                if (err) throw err;
                console.log(`successfully removed ${answer.del_Dept} department`)
                start.start();
            }
        )
    })
}

const view_Tot_Budg = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'view budget for which department?',
            name: 'dept_Budg'
        }
    ])
    .then(function (answer) {
        connection.query(
            'SELECT salary FROM emps WHERE ?',
            {
                department: answer.dept_Budg
            },
            function (err, res) {
                if (err) throw err;
                let pHold = JSON.parse(JSON.stringify(res))
                let test1 = [];
                for (i = 0; i < pHold.length; i++) {
                    test1[i] = `${pHold[i]['salary']}`
                }
                let pHold1 = test1.map(Number)
                let tot_Budg = 0;
                for (i=0; i<pHold1.length; i++) {
                    tot_Budg += pHold1[i];
                }
                console.log(`\n total utilized salary for ${answer.dept_Budg} department: $${tot_Budg}`)
                start.start();
            }
        )
    })
}

exports.view_All_Emp = view_All_Emp;
exports.view_All_By_Dept = view_All_By_Dept;
exports.view_All_By_Man = view_All_By_Man;
exports.add_Emp = add_Emp;
exports.rem_Emp = rem_Emp;
exports.update_Role = update_Role;
exports.update_Man = update_Man;
exports.view_All_Roles = view_All_Roles;
exports.del_Dept = del_Dept;
exports.view_Tot_Budg = view_Tot_Budg;
