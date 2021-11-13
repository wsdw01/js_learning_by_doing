console.log("Start")

function loginUser (email, password, callback) {

    setTimeout (() => {
        
        console.log("we have the data");
        callback ({email,password});
    
    }, 1000);
    
}

function getUserVideos (email, callback) {
    setTimeout(() => {
        callback (["video1", "video2", "video3"]);
    }, 1000);

}

function videosDetails (video, callback) {
    setTimeout(() => {
        callback (video);
    }, 1000);
}

const user = loginUser ("dds@booba.com", 123456, user => {
    console.log(user);
    getUserVideos(user.email, videos => {
        console.log(videos);
        videosDetails (videos[1], (title) => {
            console.log(title)

        })
    });
})




console.log("Finish");