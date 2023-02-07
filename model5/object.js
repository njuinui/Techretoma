//OBJECT 

// object literals
let user = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    // blogs: ['why mac & cheese rules', '10 thins to make with marmite'],
    // arrays of objects
    blogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 thins to make with marmite', likes: 50 },
    ],

    login: function () {
        console.log('the user logged in');
    },

    logout : function () {
        console.log('the user logged out');
    },

    logBlogs: function () {
        console.log(this.blogs);
        console.log('this user has written the followiing blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes)
        })
    }
};

console.log(user);
console.log(user.name);
user.age = 35;
console.log(user.age);
user['name']= 'chun-li';
console.log(user['name']);
console.log(typeof user)

user.logBlogs();

let resulr = user.login();
