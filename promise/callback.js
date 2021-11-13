console.log("Start")

function someFunction (param) {

    param()

}

const b = function () {
    console.log ("B")
}

someFunction(() => {
    console.log ("B")
})




console.log("Finish")