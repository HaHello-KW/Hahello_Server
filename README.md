# HAHELLO_SERVER

: 여성 건강관리 Application을 위한 Server Repository입니다.

## Version Check

(22.12.04)

- KEET_Server로부터의 Migration 완료
- TypeScript 관련 Syntax 오류 디버깅
- User, Status_Hormone, Status_Body DB 코드 추가

(22.12.22)

- DB 1차 설계 완료

(22.12.23)

- Pregnant, Menstruation, Freezing, Treatment, User_Default_Info, Married DB 코드 작성
- 기존 코드 Refactoring
- 기존 필요없는 소스코드 삭제 / 수정

(22.12.24)

- Entity 코드 리팩토링 (Number<interface>를 number<primitive>로 수정)
- 필요없는 import 삭제
- datetime 형식을 char로 YYYY/MM/DD 형식으로 받기로 결정

(22.12.25)

- DB Connection 코드 작성 및 디버깅
- mysql 모듈 추가
- 기존 KEET 빌드코드(.js) 삭제

(22.12.26)

- DB Connection 코드 localhost에서 테스트 완료
- .env 파일 생성 및 데이터 추가. 기존 파일과 연동
- mysql 비밀번호 정책 변경 (chaching_sha2_password -> mysql_native_password)
