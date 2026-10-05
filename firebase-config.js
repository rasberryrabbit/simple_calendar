// Firebase 설정 파일 — calendar-firebase.html(index.html)과 같은 폴더에 두세요.
// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에 나오는 값으로 교체하세요.
export const firebaseConfig = {
  apiKey: "AIzaSyB5Djj8sw_P6P07KMHnWefdkJ14DJ7sskg",
  authDomain: "calendar-1-ecf45.firebaseapp.com",
  projectId: "calendar-1-ecf45",
  appId: "1:328951865340:web:5aac388de4d7895aa91c79"
};

// (선택) App Check용 reCAPTCHA v3 "사이트 키"(공개 키). 비워 두면 App Check를 쓰지 않아요.
// 비밀 키(secret)는 여기에 넣지 마세요. Firebase 콘솔 App Check 설정에만 넣어요.
export const APP_CHECK_SITE_KEY = "6LeFDt4tAAAAAEpdsCSETIWuCRrhjfT9gEKmM5wH";

// 키 종류: "enterprise"(기본) 또는 "v3"(예전에 만들어 둔 reCAPTCHA v3 키가 있을 때만)
export const APP_CHECK_PROVIDER = "enterprise";
