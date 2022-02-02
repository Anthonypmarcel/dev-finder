'use strict';
// user info variables

const github = new Github();
const ui = new UI();
const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.search-input');
//add an event listener to the input that responds to keyup.
// searchInput.addEventListener('keyup', e => {
//   const userInfo = e.target.value;
//   console.log(userInfo);
//   if (userInfo !== '') {
//     github
//       .getUser(userInfo)
//       .then(data => {
//         if (data.profdata.message === 'Not Found') {
//           document.querySelector('.error').classList.remove('hidden');
//           setTimeout(function () {
//             document.querySelector('error').classList.add('hidden');
//           }, 2000);
//         } else {
//           console.log(data.profdata);
//           ui.showProfile(data.profdata);
//           // ui.showRepos(data.repos);
//         }
//       })
//       .catch(err => err);
//   } else {
//     // ui.clearProfile();
//   }
// });

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let userInfo = document.querySelector('.search-input').value;
  console.log(userInfo);
  if (userInfo !== '') {
    github
      .getUser(userInfo)
      .then(data => {
        if (data.profdata.message === 'Not Found') {
          document.querySelector('.error').classList.remove('hidden');
          setTimeout(function () {
            document.querySelector('.error').classList.add('hidden');
          }, 2000);
        } else {
          // console.log(data.profdata);
          ui.showProfile(data.profdata);
          // ui.showRepos(data.repos);
        }
      })
      .catch(err => err);
  } else {
    ui.clearProfile();
  }
});
