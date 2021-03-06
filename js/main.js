function createUniversalLink() {}

async function shareMsg() {}

function logOut() {}

function closed() {}

async function scanCode() {}

function openWindow() {}

async function getFriendship() {
  const friend = await liff.getFriendship();
  document.getElementById("friendship").append(friend.friendFlag);

  if (!friend.friendFlag) {
    if (confirm("กรุณาเพื่อม Chat bot เป็นเพื่อนก่อนนะครับ")) {
      window.location = "https://line.me/R/ti/p/@429jicxz";
    }
  }
}

async function sendMsg() {
  if (liff.getContext().type !== "none") {
    await liff.sendMessages([
      {
        type: "sticker",
        stickerId: 51626494,
        packageId: 11538,
      },
    ]);
    alert("ส่งข้อความแล้ว");
  }
}

function getContext() {
  document.getElementById("type").append(liff.getContext().type);
  document.getElementById("viewType").append(liff.getContext().viewType);
  document.getElementById("utouId").append(liff.getContext().utouId);
  document.getElementById("roomId").append(liff.getContext().roomId);
  document.getElementById("groupId").append(liff.getContext().groupId);
}

async function getUserProfile() {
  const profile = await liff.getProfile();

  document.getElementById("pictureUrl").src = profile.pictureUrl;
  document.getElementById("userId").append(profile.userId);
  document.getElementById("statusMessage").append(profile.statusMessage);
  document.getElementById("displayName").append(profile.displayName);
  document
    .getElementById("decodedIDToken")
    .append(liff.getDecodedIDToken().email);
}

function getEnvironment() {
  document.getElementById("os").append(liff.getOS());
  document.getElementById("language").append(liff.getLanguage());
  document.getElementById("version").append(liff.getVersion());
  document.getElementById("accessToken").append(liff.getAccessToken());
  document.getElementById("isInClient").append(liff.isInClient());
  if (liff.isInClient()) {
    document.getElementById("btnLogOut").style.display = "none";
  } else {
    document.getElementById("btnMsg").style.display = "none";
    document.getElementById("btnScanCode").style.display = "none";
    document.getElementById("btnClose").style.display = "none";
  }
}

async function main() {
  await liff.init({ liffId: "1655727309-omPOymaV" });
  getEnvironment();
  getUserProfile();
  getContext();
  getFriendship();
  // createUniversalLink()
}
main();
