function createUniversalLink() {}

async function shareMsg() {}

function logOut() {}

function closed() {}

async function scanCode() {}

function openWindow() {}

async function getFriendship() {}

async function sendMsg() {}

function getContext() {}

async function getUserProfile() {}

function getEnvironment() {
  document.getElementById("os").append(liff.getOS());
  document.getElementById("language").append(liff.getLanguage());
  document.getElementById("version").append(liff.getVersion());
  document.getElementById("accessToken").append(liff.getAccessToken());
  document.getElementById("isInClient").append(liff.getisInClient());

  if (liff.isInClient()) {
    document.getElementById("btnLogOut").style.display = "none";
  } else {
    document.getElementById("btnMsg").style.display = "none";
    document.getElementById("btnScanCode").style.display = "none";
    document.getElementById("btnClose").style.display = "none";
  }
}

async function main() {
  await liff.init({ liffId: "1655727203-kd8PQ0M5" });
  getEnvironment();
  // getUserProfile()
  // getContext()
  // getFriendship()
  // createUniversalLink()
}
main();
