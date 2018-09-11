const employeeList = [{
    name: 'Lily Tomlin',
    officeNum: '#8233',
    phoneNum: '(407)-682-8888'
  },
  {
    name: 'Rhea Butcher',
    officeNum: '#219',
    phoneNum: '(404)-555-5555'
  },
  {
    name: 'Karen Walker',
    officeNum: '#923',
    phoneNum: '(321)555-5555'
  },
  {
    name: 'Cristina Yang',
    officeNum: '#324',
    phoneNum: '(912)555-5555'
  },
];
const hideInput = function () {
  $('input').removeClass('hide');
}
//new code start
// $(function) {
//   $('#print-route').on('click', function() {
//     let buttons = $(this).attr('data-buttons')
//   });
// }

const print = function () {
  const content = $("#content");
  content.empty();
  for (let i = 0; i < employeeList.length; i++) {
    let user = employeeList[i];
    content.append(`<div class="user-info">${user.name}<br/>${user.officeNum}<br/>${user.phoneNum}</div>`);
  }
}
$('#print-route').on('click', print);

const verify = function () {
  const verifyUser = $('#display-verify').val();
  const foundEmployee = employeeList.find(employee => employee.name === verifyUser);
  if (foundEmployee != null) {
    $('#verify-content').html(`<div class="user-info">Employee Found</div>`)
  } else {
    $('#verify-content').html(`<div class="user-info">Employee Not Found</div>`)
  }
}
$('#verify').on('click', verify);

const lookup = function () {
  const lookupUser = $('#display-lookup').val();
  const foundEmployee = employeeList.find(employee => employee.name === lookupUser);
  if (foundEmployee != null) {
    $('#lookup-content').html(`<div class="user=info">${foundEmployee.name}<br/>${foundEmployee.officeNum}<br/>${foundEmployee.phoneNum}</div>`);
  } else {
    $('#verify-content').html(`<div class="user-info">Employee Not Found</div>`)
  }
}
$('#lookup').on('click', lookup);

const contains = function () {
  const nameContains = $('#display-contains').val();
  const foundEmployees = employeeList.filter(employee => employee.name.indexOf(nameContains) != -1);
  $('#contains-content').empty();
  if (foundEmployees.length > 0) {
    foundEmployees.forEach(foundEmployee =>
      $('#contains-content').append(`<div class="user=info">${foundEmployee.name}<br/>${foundEmployee.officeNum}<br/>${foundEmployee.phoneNum}</div>`));
  } else {
    $('#contains-content').html(`<div class="user-info">Employee Not Found</div>`)
  }
}
$('#contains').on('click', contains);

const update = function () {
  const updateUser = $('#update-name').val();
  const updateNumber = $('#update-number').val();
  const updatePhone = $('#update-phone').val();
  const foundEmployee = employeeList.find(employee => employee.name == updateUser);
  if (foundEmployee != null) {
    foundEmployee.name = updateUser;
    foundEmployee.officeNum = updateNumber;
    foundEmployee.phoneNum = updatePhone;
    $('#update-content').html(`<div class="user=info">${foundEmployee.name}<br/>${foundEmployee.officeNum}<br/>${foundEmployee.phoneNum}</div>`);
  } else {
    $('#update-content').html(`<div class="user-info">Employee Not Found</div>`)
  }
}
$('#update').on('click', update);

const add = function () {
  const addUser = $('#display-name').val();
  const addNumber = $('#display-number').val();
  const addPhone = $('#display-phone').val();
  const addEmployee = {};
  addEmployee.name = addUser;
  addEmployee.officeNum = addNumber;
  addEmployee.phoneNum = addPhone;
  employeeList.push(addEmployee);
  $('#add-content').append(`<div class="user=info">${addEmployee.name}<br/>${addEmployee.officeNum}<br/>${addEmployee.phoneNum}</div>`);
}
$('#add').on('click', add);



//       const query = prompt('to delete, enter user name');

//       for (let i = 0; i < employeeList.length; i++) {
//         let user = employeeList[i]
//         if (user.name.indexOf(query) !== -1) {
//           employeeList.splice(i, 1);
//         }
//       }
//       for (let i = 0; i < employeeList.length; i++) {
//         let user = employeeList[i]
//         render(user.name, user.officeNum, user.phoneNum);
//       }

//       break;
//     }
//   case 'office number':
//     {
//       const query = prompt('find user by office number');

//       for (let i = 0; i < employeeList.length; i++) {
//         let user = employeeList[i]
//         if (user.officeNum === Number(query)) {
//           render(user.name, user.officeNum, user.phoneNum);
//         }
//       }
//       break;
//     }
// }