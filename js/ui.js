'use strict';
class UI {
  constructor() {
    this.profile = document.getElementById('user-profile');
  }

  //create the showAlert method
  //   showAlert(msg, className) {
  //     this.clearAlert();
  //     const div = document.createElement('div');

  //     div.classList = className;
  //     div.appendChild(document.createTextNode(msg));
  //     //get the search container inorder to insert before
  //     const container = document.querySelector('.searchcontainer');
  //     const searchBox = document.querySelector('.search');
  //     container.insertBefore(div, searchBox);

  //     setTimeout(() => {
  //       this.clearAlert();
  //     }, 3000);
  //   }
  //   //create the clear alert method for clearing the alerts from the window
  //   clearAlert() {
  //     const divAlert = document.querySelector('.alert');
  //     if (divAlert) {
  //       divAlert.remove();
  //     }
  //   }

  //create the show profile method
  showProfile(user) {
    console.log(user);
    console.log(this.profile);
    this.profile.innerHTML = `<div class="sm-container user-info is-narrow">
        <div class="columns is-1-mobile is-narrow-mobile">
          <div class="column is-narrow">
            <img
              src=${user.avatar_url}
              alt="avatar"
              width="117px"
              height="117px"
              class="is-4by3 user-avatar has-image-radius"
            />
          </div>
          <div class="column has-text-left">
            <h2 id="account-name " class="mb-1">${user.name}</h2>
            <p id="user-name">${user.login}</p>

            <div class="mt-4">
              <p id="bio">${
                user.bio === null ? 'This user has no bio' : user.bio
              }</p>
            </div>
          </div>
          <div class="column has-text-right has-text-justified-mobile">
            <p id="joining">
              Joined <span id="date-joined">${new Date(user.created_at)}</span>
            </p>
          </div>
        </div>
        <div class="content">
          <div class="columns is-mobile">
            <div class="column is-half is-offset-one-quarter column-level">
              <div class="level">
                <div class="level-item has-text-centered">
                  <div>
                    <p id="reposi" class="heading repos">REPOS</p>
                    <p class="title">${user.public_repos}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p id="followers" class="heading followers">FOLLOWERS</p>
                    <p class="title">${user.followers}</p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <p id="following" class="heading following">FOLLOWING</p>
                    <p class="title">${user.following}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-centered is-1-mobile has-text-centered is-narrow-mobile">
            <div class="column">
              <span class="icon-text">
                <span class="icon"
                  ><i class="fas fa-map-marker-alt"></i>
                </span>
                <span id="user-location" class="location">${
                  user.location === null ? 'Location not added' : user.location
                }</span>
              </span>
            </div>
            <div class="column">
              <span class="icon-text">
                <span class="icon"><i class="far fa-building"></i></span>
                <span id="workplace" class="company">${
                  user.company === null ? 'Company not added' : user.company
                }</span>
              </span>
            </div>
          </div>
          <div class="columns is-centered is-1-mobile has-text-centered is-narrow-mobile">
            <div class="column">
              <span class="icon-text">
                <span class="icon">
                  <i class="fas fa-link"></i>
                </span>
                <span class="url-link">
                  <a href="https://${user.blog}" target="_blank" id="urllink">${
      user.blog
    }</a>
                </span>
              </span>
            </div>
            <div class="column">
              <span class="icon-text">
                <span class="icon"> <i class="fab fa-twitter"></i></span>
                <span class="twitter">
                  <a target="_blank" id="twitter">${
                    user.twitter_username === null
                      ? 'Twitter account not added'
                      : 'twitter.com/' + user.twitter_username
                  }</a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>`;
    // console.log(this.profile);
  }
  //create the clear profile method
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
