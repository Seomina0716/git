# Toss 스타일 체크리스트 앱

프론트엔드와 백엔드를 별도 폴더로 분리한 체크리스트 앱입니다.
- `backend`: Express + 메모리 저장 방식
- `frontend`: React + Vite

## 실행 방법

1. 백엔드 설치 및 실행
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. 프론트엔드 설치 및 실행
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

## 특징

- 메모리 저장 방식으로 간단히 구현되어 `db` 교체가 쉽습니다.
- 프론트/백엔드 폴더 분리로 독립적인 관리가 가능합니다.
- ESLint 설정으로 코드 품질을 유지합니다.
- `src/components` 기반의 유지보수 가능한 컴포넌트 구조를 사용합니다.
