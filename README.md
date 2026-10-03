간단한 달력 사이트  

구글로 로그인이 가능하며 본인만의 일정을 기록할 수 있습니다.  
링크 복사로 자신만의 개인 일정을 공유도 가능합니다.  

로그인하면 본인의 별칭을 정해서 누구의 일정인지 알릴 수 있습니다.  
기본 출시 일정은 관리자 UID를 정해주어야 그 관리자가 추가와 편집이 가능합니다.  
  
6년 이후의 일정은 수동으로 백업하고 지우게 되어 있습니다.  
(html 파일에 기간을 바꾸면 변경이 가능합니다.)  
백업은 6년이 지나간 것이 아니라면 일정 내용을 지우지 않으며,  
firestore의 저장용량이 여유가 있다면 6년이 지난 일정도 복구가 가능합니다.  
  
이 일정 달력은 클로드 AI로 만들어졌습니다.  
  
    
[공유 캘린더 바로 가기](https://rasberryrabbit.github.io/simple_calendar)

설정 방법.
1. [console.firebase.google.com](console.firebase.google.com)에서 프로젝트 추가를 누르고 Google 애널리틱스는 꺼도 됩니다.
2. 프로젝트 개요에서 </>(웹) 아이콘을 눌러 앱을 등록합니다. 호스팅 설정은 체크하지 않아도 됩니다. 화면에 나오는 firebaseConfig 값(apiKey, authDomain, projectId, appId)을 firebase-config.js에 붙여넣고 저장합니다.
3. Firestore Database > 데이터베이스 만들기에서 위치는 asia-northeast3(서울)을 추천합니다. 모드는 아무거나 골라도 됩니다.
4. Firestore의 규칙 탭에 Firestore_rules.txt 의 내용을 붙여넣습니다.
5. Authentication > 시작하기 > Google을 사용 설정으로 바꾸고 저장합니다.
6. Authentication > 설정 > 승인된 도메인에 사이트 주소(예: 내아이디.github.io)를 추가합니다. 이 단계를 빼면 로그인 팝업이 오류로 막힙니다.
7. GitHub Pages 등에 calendar-firebase.html을 index.html로 이름을 바꿔서 올립니다. 
8. [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)에서 Firebase가 자동으로 만든 키는 "Browser key (auto created by Firebase)"라는 이름으로 이 목록에 나옵니다. 그 키를 누릅니다.
9. 애플리케이션 제한사항에서 웹사이트(HTTP 리퍼러)를 선택하고, "내GitHub이름.github.io/* " 와 "프로젝트ID.firebaseapp.com/* "를 추가합니다. (로그인 팝업이 이 주소를 쓰기 때문에 빼면 구글 로그인이 막힙니다)
10. 일정관리 페이지에 처음 로그인을 하면 관리자로 설정할 것인지 메시지가 뜨는데 확인을 누릅니다. 1명은 항상 관리자가 있어야 합니다. 기본 최대 사용자 인원은 20명입니다. 관리자가 바꿀 수 있습니다.

  
출시일정만 입력한 스샷  
<img width="1085" height="750" alt="스크린샷 2026-10-03 102345" src="https://github.com/user-attachments/assets/dc473422-ba7f-479b-8d4e-2f53b1d07ac1" />

