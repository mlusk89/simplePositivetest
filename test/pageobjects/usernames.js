import Page from './page.js';

class User extends Page {
    constructor(username){
    this.username=username;
    }

}
const usernames= ["standard_user", "locked_out_user", 
"problem_user", "performance_glitch_user", "error_user", "visual_user"];

const userInstances= [];

for(const name of usernames){
    userInstances.push(new User(name));
}

export default new User();