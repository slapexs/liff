function createUniversalLink() {
  const link1 = liff.permanentLink.createUrl();
  document.getElementById("universalLink1").append(link1);

  liff.permanentLink.setExtraQueryParam("?param=9");
  const link2 = liff.permanentLink.createUrl();
  document.getElementById("universalLink2").append(link2);
}

async function shareMsg() {
  await liff
    .shareTargetPicker([
      {
        type: "text",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, assumenda!",
      },
      {
        type: "sticker",
        stickerId: 52114115,
        packageId: 11539,
      },
    ])
    .then(() => {
      liff.closeWindow();
    });
}

function logOut() {
  liff.logout();
  window.location.reload();
}

function closed() {
  liff.closeWindow();
}

async function scanCode() {
  const result = await liff.scanCode();

  document.getElementById("scanCode").append(result.value);
  alert(result.value);
}

function openWindow() {
  liff.openWindow({
    url: "https://www.facebook.com/tinngrits77",
    external: true,
  });
}

async function getFriendship() {
  const friend = await liff.getFriendship();
  document.getElementById("friendship").append(friend.friendFlag);

  if (!friend.friendFlag) {
    if (confirm("กรุณาเพิ่ม Chat bot เป็นเพื่อนก่อนนะครับ")) {
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

  document.getElementById("isLoggedIn").append(liff.isLoggedIn());

  if (liff.isLoggedIn()) {
    getEnvironment();
    getUserProfile();
    getContext();
    getFriendship();
    createUniversalLink();
  } else {
    liff.login();
  }
}
main();
