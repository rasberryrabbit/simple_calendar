// Firebase 설정 파일 — calendar-firebase.html(index.html)과 같은 폴더에 두세요.
// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹)에 나오는 값으로 교체하세요.
export const firebaseConfig = {
  apiKey: "AIzaSyB5Djj8sw_P6P07KMHnWefdkJ14DJ7sskg",
  authDomain: "calendar-1-ecf45.firebaseapp.com",
  projectId: "calendar-1-ecf45",
  appId: "1:328951865340:web:5aac388de4d7895aa91c79"
};

// (선택) 소유자 외에 관리자 기능을 쓸 계정의 UID 목록.
// 로그인 후 '링크 복사' 주소에서 ?u= 뒤의 값이에요. 보안 규칙의 listedAdmins()에도 같은 값을 넣어야 해요.
// 소유자만 있으면 비워 두세요.
export const ADMIN_UIDS = [];
