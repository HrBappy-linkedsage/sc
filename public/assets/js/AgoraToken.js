const { RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole } = require('agora-access-token')
// var CryptoJS = require("crypto-js");

/**
 * Module for geting image from s3 cloud server
 */
export const agoraToken = async () => {
    console.log("its ok....")
    let ciphertext = "shafa-web-call"
    // var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    // var originalText = bytes.toString(CryptoJS.enc.Utf8);

    // Rtc Examples
    const appID = '8e544444ae8d4793afbc12b400d81fa4';
    const appCertificate = '7b4298761cec4edd9e86c907bf5e342a';
    const channelName = ciphertext;
    const uid = 0;
    const account = "2882341273";
    const role = RtcRole.PUBLISHER;

    const expirationTimeInSeconds = 3600

    const currentTimestamp = Math.floor(Date.now() / 1000)

    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

    // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

    // Build token with uid
    const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
    console.log("Token With Integer Number Uid: " + tokenA);

    // Build token with user account
    const tokenB = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs);
    console.log("Token With UserAccount: " + tokenB);
    return {"rtmToken": tokenA, "channelName": channelName}
}













