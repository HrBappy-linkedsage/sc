const { RtcTokenBuilder, RtcRole } = require('agora-access-token')

export const agoraToken = async (tempdata) => {
    const appID = '8e544444ae8d4793afbc12b400d81fa4';
    const appCertificate = '7b4298761cec4edd9e86c907bf5e342a';
    const channelName = String(tempdata.chatRoomId);
    const uid = 0;
    const account = "2882341273";
    const role = RtcRole.PUBLISHER;

    const expirationTimeInSeconds = 3600

    const currentTimestamp = Math.floor(Date.now() / 1000)

    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

    // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

    // Build token with uid
    const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
    // const tokenA = '0068e544444ae8d4793afbc12b400d81fa4IADr5C4CreOYz/4xVvBude1/vyb2XJ8sEEyMzSIh6IYxs8DSDw0AAAAAIgD9mT1zDrinYQQAAQCedKZhAgCedKZhAwCedKZhBACedKZh'

    // Build token with user account
    const tokenB = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs);
    return {"rtmToken": tokenA, "channelName": channelName}
}

