// Init Github
const github = new Github;

// Init UI
const ui = new UI;
// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== '') {
        // Make http call
        github.getUser(userText)
        .then( data => {
            if(data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // Clear any alerts first: Mo: this is better than the instructor solution
                //as it keeps the error-alert untill a username is typed in the search box and found
                // instructor keeps the alert for 3sec and removes it, if a valid user is found within 
                //the 3sec the alerts would still be there + if the user does not type a valid usewrname
                // the alert would still disapear after 3 sec and UI woud show the last valid user 
                //without the alert
                ui.clearAlert();

                // Show profile
                // console.log(data.profile)
                ui.showProfile(data.profile)
                // Show repos
                console.log(data.repos)
                ui.showRepos(data.repos)
            }
        })
    } else {
        // Clear profile

    }
})