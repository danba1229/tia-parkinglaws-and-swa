# 블로그 연결용 코드

공개 주소: https://danba1229.github.io/tia-parkinglaws-and-swa/
(2026-11-11 확인: HTTP 200, GitHub Pages `main` / `/` 빌드 완료, iframe 차단 헤더 없음)

## 티스토리 — iframe 임베드

글쓰기 → 우측 상단 `기본모드` → `HTML` 로 바꾼 뒤 붙여넣기.

```html
<div style="max-width:100%;border:1px solid #ddd;border-radius:8px;overflow:hidden;">
  <iframe
    src="https://danba1229.github.io/tia-parkinglaws-and-swa/"
    title="주차장법 정리 · 교평 대상 계산"
    width="100%" height="1400"
    style="border:0;display:block;"
    loading="lazy"></iframe>
</div>
<p style="font-size:13px;color:#666;">
  ※ 실제 인허가 검토 전에는 해당 관할의 최신 조례 원문을 반드시 다시 확인하세요.
  화면이 좁으면 <a href="https://danba1229.github.io/tia-parkinglaws-and-swa/" target="_blank" rel="noopener">새 창에서 열기</a>.
</p>
```

- `height`는 도구 화면 길이에 맞춰 조정(결과가 길어지면 iframe 안에서 스크롤됨).
- 모바일에서는 iframe 안 스크롤이 불편하므로 "새 창에서 열기" 링크를 같이 둔다.

## 네이버 블로그 — 링크 카드

네이버 블로그 에디터는 외부 iframe을 넣을 수 없음. 본문에 주소를 붙여넣으면
`og:title` / `og:description` / `og:image` 기준으로 링크 카드가 만들어진다.

```
▶ 주소 넣고 바로 계산하기: https://danba1229.github.io/tia-parkinglaws-and-swa/
※ 실제 인허가 검토 전에는 해당 관할의 최신 조례 원문을 반드시 다시 확인하세요.
```

- 썸네일: 저장소 루트 `og-image.png`(1200×630) → `og:image`로 연결됨.
  디자인 원본은 HTML로 만들어 headless Chrome으로 캡처했다. 문구를 바꾸면 다시 캡처해서 교체.
- 네이버는 링크 카드를 캐시하므로, OG 태그 반영 후 처음 붙여넣기 전에 배포가 끝났는지 확인한다.
