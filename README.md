간단한 달력 사이트  

구글로 로그인이 가능하면 본인만의 일정을 기록할 수 있음.  
링크 복사로 자신만의 개인 일정을 공유도 가능함.  

로그인하면 본인의 별칭을 정해서 누구의 일정인지 알 수 있음.  
기본 출시 일정은 관리자 UID를 정해주어야 그 관리자가 추가와 편집이 가능함.  
  
6년 이후의 일정은 수동으로 백업하고 지우도록 변경함.  
그냥 백업은 지우지 않음. 다만 아직 백업을 다시 복구하는 기능을 넣지 않았음.  
  
    
[공유 캘린더 바로 가기](https://rasberryrabbit.github.io/simple_calendar)

설정 방법.
1. [console.firebase.google.com](console.firebase.google.com)에서 프로젝트 추가를 누르고 Google 애널리틱스는 꺼도 돼요.
2. 프로젝트 개요에서 </>(웹) 아이콘을 눌러 앱을 등록해요. 호스팅 설정은 체크하지 않아도 돼요. 화면에 나오는 firebaseConfig 값(apiKey, authDomain, projectId, appId)을 HTML 파일 위쪽의 같은 자리에 붙여 넣어요. 관리자가 될 사용자의 UID도 바꿔서 넣어야 해요.
3. Firestore Database > 데이터베이스 만들기에서 위치는 asia-northeast3(서울)을 추천해요. 모드는 아무거나 골라도 되고, 아래 규칙으로 바꿀 거예요.
4. Authentication > 시작하기 > Google을 사용 설정으로 바꾸고 저장해요.
5. Firestore의 규칙 탭에 Firestore_rules.txt 의 내용을 붙여넣어요. 거기에 관리자 ID를 관리자가 될 사용자의 UID를 넣어요.
6. Authentication > 설정 > 승인된 도메인에 사이트 주소(예: 내아이디.github.io)를 추가해요. 이 단계를 빼면 로그인 팝업이 오류로 막혀요.
7. GitHub Pages 등에 calendar-firebase.html을 index.html로 이름을 바꿔서 올려요. 
8. [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)에서 Firebase가 자동으로 만든 키는 "Browser key (auto created by Firebase)"라는 이름으로 이 목록에 나와요. 그 키를 눌러요.
9. 애플리케이션 제한사항에서 웹사이트(HTTP 리퍼러)를 선택하고, "내GitHub이름.github.io/* " 와 "프로젝트ID.firebaseapp.com/* "를 추가해요. (로그인 팝업이 이 주소를 쓰기 때문에 빼면 구글 로그인이 막혀요)

