const constranins = {
    'video': true,
    'audoe': true
}

navigator.mediaDevices.getUserMedia(constranins)
    .then(stream => {
        console.log("Got Media Devices", stream)
    })
    .catch(error => {
        console.log("Error accessing media device", error)

    })