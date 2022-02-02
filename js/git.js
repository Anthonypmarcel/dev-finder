'use strict';
//create the github constructor
class Github {
  constructor() {
    this.client_id = '0eff578ee35211b48869';
    this.client_secret = '7a87e8bce86a3e4950e04520d81848b7cbc4725b';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  //create the get user function, and fetch the data using the async await fetch function
  async getUser(user) {
    const profResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secrets}`
    );

    // const repoResponse = await fetch(
    //   `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    // );

    const profdata = await profResponse.json();
    // const repos = await repoResponse.json();
    console.log(profdata);

    return {
      profdata,
      // repos,
    };
  }
}
