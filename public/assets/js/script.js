// const { RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole } = require('agora-access-token')
// async function agoraToken(){
//     console.log("its ok....")
//     let ciphertext = "shafa-web-call"
//     // var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
//     // var originalText = bytes.toString(CryptoJS.enc.Utf8);

//     // Rtc Examples
//     const appID = '8e544444ae8d4793afbc12b400d81fa4';
//     const appCertificate = '7b4298761cec4edd9e86c907bf5e342a';
//     const channelName = ciphertext;
//     const uid = 0;
//     const account = "2882341273";
//     const role = RtcRole.PUBLISHER;

//     const expirationTimeInSeconds = 3600

//     const currentTimestamp = Math.floor(Date.now() / 1000)

//     const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

//     // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

//     // Build token with uid
//     const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
//     console.log("Token With Integer Number Uid: " + tokenA);

//     // Build token with user account
//     const tokenB = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs);
//     console.log("Token With UserAccount: " + tokenB);
//     return {"rtmToken": tokenA, "channelName": channelName}
// }
import './AgoraToken'
// 

// Function to start the call for channel one
document.getElementById("start1").onclick = async function () {
    let agoraTokenData = await agoraToken()
    console.log("okkkk",agoraTokenData)
    // Defines a client for RTC using "live" profile for live-streaming
    const clientOne = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
    // Set role as host: in channel one we'll both receive and transmit feeds
    clientOne.setClientRole("host");
    // Get credentials from the form
    let appId = '8e544444ae8d4793afbc12b400d81fa4'
    if (appId === '') {
        document.getElementById('error').innerHTML = 'Please enter app ID';
        return 1;
    } else document.getElementById('error').innerHTML = '';
    let channelId = 'shafa-web-call'
    let token = '0068e544444ae8d4793afbc12b400d81fa4IAAqtAqCeIBKRh4ww7d7j9yIuloRzeTz5GS8C2sRU6ytkMHe9LsAAAAAIgAx9NTRLveNYQQAAQC+s4xhAgC+s4xhAwC+s4xhBAC+s4xh'
    // Create local tracks
    const [localAudioTrack, localVideoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();

    // Initialize the stop button
    initStopOne(clientOne, localAudioTrack, localVideoTrack);
    document.getElementById("start1").disabled = true; // Disable the start button
    // Play the local track
    localVideoTrack.play('me');

    // Set up event listeners for remote users publishing or unpublishing tracks
    clientOne.on("user-published", async (user, mediaType) => {
        await clientOne.subscribe(user, mediaType); // subscribe when a user publishes
        if (mediaType === "video") {
            let remoteContainer = document.getElementById("remote-container1");
            addVideoContainer(String(user.uid), remoteContainer) // uses helper method to add a container for the videoTrack
            console.log('clientone: uid, container', user.uid, remoteContainer);
            user.videoTrack.play(String(user.uid));
        }
        if (mediaType === "audio") {
            user.audioTrack.play(); // audio does not need a DOM element
        }
    });
    clientOne.on("user-unpublished", async (user, mediaType) => {
        if (mediaType === "video") {
            removeVideoContainer(user.uid) // removes the injected container
        }
    });
    // Join a channnel and retrieve the uid for local user
    const _uid = await clientOne.join(appId, channelId, token, null);
    await clientOne.publish([localAudioTrack, localVideoTrack]);
};


function initStopOne(client, localAudioTrack, localVideoTrack) {
    const stopBtn = document.getElementById('stop1');
    stopBtn.disabled = false; // Enable the stop button
    stopBtn.onclick = function () {
        client.unpublish(); // stops sending audio & video to agora
        localVideoTrack.stop(); // stops video track and removes the player from DOM
        localVideoTrack.close(); // Releases the resource
        localAudioTrack.stop();  // stops audio track
        localAudioTrack.close(); // Releases the resource
        client.remoteUsers.forEach(user => {
            if (user.hasVideo) {
                removeVideoContainer(user.uid) // Clean up DOM
            }
            client.unsubscribe(user); // unsubscribe from the user
        });
        client.removeAllListeners(); // Clean up the client object to avoid memory leaks
        stopBtn.disabled = true;
        document.getElementById("start1").disabled = false;
    }
}

/* Helper functions */

/**
 * @name addVideoContainer
 * @param uid - uid of the user
 * @param container - HTML container for the video
 * @description Helper function to add the video stream to "remote-container"
 */
function addVideoContainer(uid, container) {
    let streamDiv = document.createElement("div"); // Create a new div for every stream
    streamDiv.id = uid;                       // Assigning id to div
    streamDiv.style.transform = "rotateY(180deg)"; // Takes care of lateral inversion (mirror image)
    container.appendChild(streamDiv);      // Add new div to container
}

/**
 * @name removeVideoContainer
 * @param uid - uid of the user
 * @description Helper function to remove the video stream from "remote-container"
 */
function removeVideoContainer(uid) {
    let remDiv = document.getElementById(uid);
    remDiv && remDiv.parentNode.removeChild(remDiv);
}