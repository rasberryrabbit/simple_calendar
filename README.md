간단한 달력 사이트  

구글로 로그인이 가능하며 본인만의 일정을 기록할 수 있습니다.  
링크 복사로 자신만의 개인 일정을 공유도 가능합니다.  

로그인하면 본인의 별칭을 정해서 누구의 일정인지 알릴 수 있습니다.  
페이지에 처음 접속을 하면 관리자로 설정하는 메시지가 뜹니다.  
관리자는 출시 일정을 편집할 수 있으며 사용자 관리를 할 수 있습니다.  
  
6년 이후의 일정은 수동으로 백업하고 지우게 되어 있습니다.  
(html 파일 안에 기간을 바꾸면 변경이 가능합니다.)  
백업은 6년이 지나간 것이 아니라면 일정 내용을 지우지 않으며,  
firestore의 저장용량이 여유가 있다면 6년이 지난 일정도 복구가 가능합니다.  

항상 공개되는 일정표이기 때문에 민감한 내용은 절대로 기록하면 안됩니다.  
  
이 일정 달력은 클로드 AI로 만들어졌습니다.  
  
    
[공유 캘린더 바로 가기](https://rasberryrabbit.github.io/simple_calendar)

설정 방법.
1. [console.firebase.google.com](https://console.firebase.google.com)에서 프로젝트 추가를 누르고 Google 애널리틱스는 꺼도 됩니다.
2. 프로젝트 개요에서 </>(웹) 아이콘을 눌러 앱을 등록합니다. 호스팅 설정은 체크하지 않아도 됩니다. 화면에 나오는 firebaseConfig 값(apiKey, authDomain, projectId, appId)을 firebase-config.js에 붙여넣고 저장합니다.
3. Firestore Database > 데이터베이스 만들기에서 위치는 asia-northeast3(서울)을 추천합니다. 모드는 아무거나 골라도 됩니다.
4. Firestore의 규칙 탭에 Firestore_rules.txt 의 내용을 붙여넣습니다.
5. Authentication > 시작하기 > Google을 사용 설정으로 바꾸고 저장합니다.
6. Authentication > 설정 > 승인된 도메인에 사이트 주소(예: 내아이디.github.io)를 추가합니다. 이 단계를 빼면 로그인 팝업이 오류로 막힙니다.
7. GitHub Pages 등에 calendar-firebase.html을 index.html로 이름을 바꿔서 올립니다. 
8. [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)에서 Firebase가 자동으로 만든 키는 "Browser key (auto created by Firebase)"라는 이름으로 이 목록에 나옵니다. 그 키를 누릅니다.
9. 애플리케이션 제한사항에서 웹사이트(HTTP 리퍼러)를 선택하고, "내GitHub이름.github.io/* " 와 "프로젝트ID.firebaseapp.com/* "를 추가합니다. (로그인 팝업이 이 주소를 쓰기 때문에 빼면 구글 로그인이 막힙니다)
10. 일정관리 페이지에 처음 로그인을 하면 관리자로 설정할 것인지 메시지가 뜨는데 확인을 누릅니다. 소유자는 1명이 반드시 있어야 합니다. 기본 최대 사용자 인원은 20명입니다. 관리자가 바꿀 수 있습니다. 처음 관리자 이외에 더 관리자를 UID로 넣을 수 있습니다.
  
(선택) App Check 설정 방법.
1. reCAPTCHA v3 키 만들기 : [google.com/recaptcha/admin](https://google.com/recaptcha/admin) 에서 새 사이트를 생성. 유형은 V3이고, 도메인 주소는 "내아이디.github.io"와 같은 방법으로 값을 입력합니다. 그렇게 하면 사이트 키와 비밀 키가 나옵니다.
2. Firebase에 등록 : Firebase 콘솔 App Check > 앱 탭에서 웹 앱을 골라 reCAPTCHA 공급자를 선택하고, 위에서 받은 비밀 키를 붙여 넣습니다.
3. 사이트 키 넣기: firebase-config.js의 APP_CHECK_SITE_KEY에 사이트 키를 넣습니다. 비밀 키는 이 파일에 넣으면 안됩니다.
  
  
출시일정만 입력한 스샷  
<img width="1085" height="754" alt="스크린샷 2026-10-04 204527" src="https://github.com/user-attachments/assets/4e453378-a9e5-44dc-814f-bd9d9deb0f2a" />



