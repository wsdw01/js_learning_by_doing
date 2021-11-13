console.log("Start")

function loginUser (email, password) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
        
            console.log("we have the data");
            resolve ({email,password});
        
        }, 1000);
    }); 
}

function getUserVideos (email) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve (["video1", "video2", "video3"]);
        }, 1000);
    });
};

function videosDetails (video) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve (video);
        }, 1000);
    });
}

loginUser("ed@gooml.com", 12345)
.then (user => getUserVideos(user.email))
.then (videos => videosDetails(videos[0]))
.then (detail => console.log(detail))
.then (console.log("Finish"))

async function displayUser () {
    try {
    const loggedUser = await loginUser("ed", 1234)
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videosDetails(videos[0])
    console.log(detail)
    }
    catch (err) {
        console.log("ERROR: we could not get the videos")
    }
}
const yt = new Promise (resolve => {
    setTimeout(() => {
        console.log ("getting stuff from youtube");
        resolve ({ videos: [1,2,3,4,5] });
    }, 1000);
})

const fb = new Promise (resolve => {
    setTimeout(() => {
        console.log ("getting stuff from facebook");
        resolve ({ user: "name" });
    }, 1000);
})

Promise.all ([yt, fb])
.then (result => console.log (result));


/* const user = loginUser ("dds@booba.com", 123456, user => {
    console.log(user);
    getUserVideos(user.email, videos => {
        console.log(videos);
        videosDetails (videos[1], (title) => {
            console.log(title)

        })
    });
}) */

