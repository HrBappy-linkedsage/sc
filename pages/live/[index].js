import Head from "next/head";
import { agoraToken } from "../../Components/AgoraToken";
import React, { useEffect, useState } from "react";
import tempImage from "../../public/assets/img/team/default-team.png";
var urlencode = require("urlencode");
import axios from "../../authAxios";
import { formData } from "../../FormHelper";
import { toast } from 'react-toast'

export default function App() {
  const [tempRoomId, setTempRoomId] = useState();
  const [fileData, setFileData] = useState();
  const [file, setFile] = useState({ data: tempImage });
  const [uploadFile, setUploadFile] = useState(false);
  const [roomData,setRoomData] = useState()

  const setFileValue = (event) => {
    setFile({ data: URL.createObjectURL(event) });
  };

  useEffect(async () => {
    letsCheck();
  }, []);

  // call 
  const sendNotification = async (value, token) => {
    let values = {
      rtmToken: token,
      channelName: value.chatRoomId.toString(),
      userId: value.userId.toString(),
      body: "Test",
      title: "Testing call...",
      action: "call",
      roomId: value.chatRoomId.toString(),
      doctorId: value.doctorId.toString(),
    };

    return await axios
      .post("doctor/sendNotification", values)
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        return response.data.data;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  };

  function removeVideoContainer(uid) {
    let remDiv = document.getElementById(uid);
    remDiv && remDiv.parentNode.removeChild(remDiv);
  }

  function addVideoContainer(uid, container) {
    let streamDiv = document.createElement("div"); // Create a new div for every stream
    streamDiv.id = uid; // Assigning id to div
    streamDiv.style.transform = "rotateY(180deg)"; // Takes care of lateral inversion (mirror image)
    container.appendChild(streamDiv); // Add new div to container
  }

  function initStopOne(client, localAudioTrack, localVideoTrack) {
    const stopBtn = document.getElementById("stop1");
    stopBtn.disabled = false; // Enable the stop button
    stopBtn.onclick = function () {
      client.unpublish(); // stops sending audio & video to agora
      localVideoTrack.stop(); // stops video track and removes the player from DOM
      localVideoTrack.close(); // Releases the resource
      localAudioTrack.stop(); // stops audio track
      localAudioTrack.close(); // Releases the resource
      client.remoteUsers.forEach((user) => {
        if (user.hasVideo) {
          removeVideoContainer(user.uid); // Clean up DOM
        }
        client.unsubscribe(user); // unsubscribe from the user
      });
      client.removeAllListeners(); // Clean up the client object to avoid memory leaks
      stopBtn.disabled = true;
      document.getElementById("start1").disabled = false;
    };
  }

  async function letsCheck() {
    let roomId = window.location.pathname;
    roomId = roomId.split("/")[2];

    // var bytes  = CryptoJS.AES.decrypt(roomId, 'secret key 123');
    var originalText = urlencode.decode(roomId, "gbk");
    originalText = JSON.parse(originalText);
    setTempRoomId(originalText.chatRoomId);
    const tempdata = originalText;

    const clientOne = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
    // Set role as host: in channel one we'll both receive and transmit feeds
    clientOne.setClientRole("host");
    // Get credentials from the form
    let appId = "8e544444ae8d4793afbc12b400d81fa4";
    let token = await agoraToken(tempdata);
    let channelId = token.channelName;
    token = token.rtmToken;
    sendNotification(tempdata, token);
    // Create local tracks
    const [localAudioTrack, localVideoTrack] =
      await AgoraRTC.createMicrophoneAndCameraTracks();

    // Initialize the stop button
    initStopOne(clientOne, localAudioTrack, localVideoTrack);
    document.getElementById("start1").disabled = true; // Disable the start button
    // Play the local track
    localVideoTrack.play("me");

    // Set up event listeners for remote users publishing or unpublishing tracks
    clientOne.on("user-published", async (user, mediaType) => {
      await clientOne.subscribe(user, mediaType); // subscribe when a user publishes
      if (mediaType === "video") {
        let remoteContainer = document.getElementById("remote-container1");
        addVideoContainer(String(user.uid), remoteContainer); // uses helper method to add a container for the videoTrack
        user.videoTrack.play(String(user.uid));
      }
      if (mediaType === "audio") {
        user.audioTrack.play(); // audio does not need a DOM element
      }
    });
    clientOne.on("user-unpublished", async (user, mediaType) => {
      if (mediaType === "video") {
        removeVideoContainer(user.uid); // removes the injected container
      }
    });
    // Join a channnel and retrieve the uid for local user
    const _uid = await clientOne.join(appId, channelId, token, null);
    await clientOne.publish([localAudioTrack, localVideoTrack]);
  }
  function addFileFun() {
    if (!uploadFile) setUploadFile(true);
    else setUploadFile(false);
  }

  const InsertImage = async (values) => {
    return await axios
      .post("file/upload-public", formData(values))
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        setFile({ data: tempImage });
        return response.data.data;
      })
      .catch((err) => {
        return [];
      });
  };

  const prescription = async (TempValue) => {
    return await axios
      .post("prescription/public-insert",TempValue)
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        return response.data.data;
      })
      .catch((err) => {
        return [];
      });
  };
  const prescriptionFile = async (p_id,f_id) => {
    let values = {
      chatRoomId:f_id.chatRoomId,
      fileId: f_id.fileId,
      prescriptionId : p_id
    }  
    return await axios
      .post("prescriptionFileRelation/public-insert",values)
      .then((response) => {
        let status = "status" in response;
        if (!status) {
          response.status = 401;
          return response;
        }
        return response.data.data;
      })
      .catch((err) => {
        return [];
      });
  };


  function submitFileFun() {
    let tempFile = {
      file: {},
      chatRoomId: tempRoomId,
    };
    let fileId;
    if (!fileData) tempFile.file = file;
    else tempFile.file = fileData;

    setUploadFile(false);
    InsertImage(tempFile)
      .then((res) => {
        fileId = res.id; 
        const tmpID = {
          fileId:fileId,
          chatRoomId:tempRoomId
        }       
        prescription(tmpID)
          .then((response) => {
            prescriptionFile(response.id, tmpID)
              .then((respon) => {
                toast.success("File uploaded successfully..")
              })
              .catch((err) => {
                toast.error("Uploaded failed: "+err)
              });
          })
          .catch((err) => {
            toast.error("Uploaded failed: "+err)
          });

        setFile({ data: tempImage });
      })
      .catch((err) => {
        toast.error("Uploaded failed: "+err)
      });
  }

  return (
    <div id="live-call">
      <Head>
        <title>Video Conference -- Shafa Care</title>
        <meta
          name="keyboard"
          content="Shafa Care,Online Doctor, Medical Help,Online Medical Help, Download, Download App, Download Shafa Care App"
        />
      </Head>
      <div className="top-bar">
        <div>ShafaCare</div>
        <button className="btn">grid</button>
      </div>
      <div className="container-video">
        <div className="row">
          <div id="remote-container-main">
            <div className="full video_section">
              <div className="video_container">
                <div id="me" className="patient-video"></div>

                <div id="remote-container1" className="doctor-video"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="full">
              <div className="btn-container">
                <button id="start1" onClick={letsCheck}>
                  Start
                </button>
                <button id="stop1" disabled>
                  Stop
                </button>
                <button className="btn" type="button" onClick={addFileFun}>
                  Add file
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {uploadFile ? (
        <div className="upload_container">
          <div className="inner-container">
            <button className="container-close" onClick={addFileFun}>
              X
            </button>

            <div className="image-section">
              <img src={file.data} alt="Prescription " />
              <div className="sub_link">
                <input
                  // value={file.filename}
                  onChange={(event) => {
                    setFileValue(event.currentTarget.files[0]);
                    setFileData(event.currentTarget.files[0]);
                  }}
                  type="file"
                  name="prescription"
                  id="prescription"
                  className="form-control"
                  required
                  data-error="Profile Picture"
                  placeholder="Profile Picture"
                />
                <button onClick={submitFileFun}>Upload</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
