# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static academic paper/event introduction website for "Spritz" — HCI research on AI-mediated cross-disciplinary collaboration. Pure HTML, CSS, JavaScript with no build tools.

## Commands

```bash
# Local dev server
python3 -m http.server 8000
# open http://localhost:8000
```

## File Structure

- `index.html` — single page; all sections live here
- `style.css` — all styles; CSS custom properties in `:root`
- `script.js` — IntersectionObserver for scroll-reveal, mobile nav toggle, navbar scroll effect
- `figures/` — PDF assets embedded inline via `<embed>` tags

## Design System

CSS custom properties (defined in `:root`):

| Token | Value | Use |
|-------|-------|-----|
| `--c-bg` | `#111844` | Page background |
| `--c-mid` | `#4B5694` | Buttons, accents |
| `--c-muted` | `#7288AE` | Secondary text, badges |
| `--c-cream` | `#EAE0CF` | Primary text |

Font: **IBM Plex Sans** (body) + **IBM Plex Mono** (labels, citations) via Google Fonts.

## Conventions

- All sections: `<section id="...">` with matching `nav a[href="#..."]` anchors
- Scroll animations: add class `reveal` to any element; `script.js` adds `visible` on intersection
- Section ordering: Hero → Background (01) → Questions (02) → Probe (03) → Workshop (04) → Footer

## 網頁內容

## 網頁內容
- 標題: 探索 AI 在跨領域專案協作中的機會與挑戰
- 成員: 資管碩一 邱秉辰、人類四 鄭靜蓉、圖資四 鍾雨栴、創新三 林祐萱、資工四 廖家緯 (網頁連結: https://jwliao1209.github.io/)
- 程式碼連結: https://github.com/imbensonchiu/spritz

### 研究背景
- 目標情境: 18 ~ 25 歲的大專院校學生、組成團隊並一同協作、來自不同領域背景
- 目標使用者遇到的挑戰: 不同領域的人在各自的社群中有不同的價值觀、角色認同、做事習慣，合作於同一個目標時，這樣的差異劃分了溝通的邊界 (boundary)，導致團隊的行動和互動受阻 (Akkerman & Bakker, 2011)
- 研究缺口:
  - AI 作為邊界物件 (boundary object) (Akkerman & Bakker, 2011) 的潛力：讓原本未被察覺的差異浮出檯面，進而擴展人們的觀點
  - 現今 HCI 研究已指出 AI 能在同步溝通 (e.g. 遠距會議、電子白板）跨領域團隊中協調邊界跨越；然而，AI 在非同步跨領域協作（e.g. 群組訊息）中可能扮演的角色與介入方式仍有待探索

### 研究問題
- RQ1. 在非同步溝通情境中，跨領域團隊成員如何感知 AI 作為差異協調者 (mediator) 的角色？
  - 科技探針法 (Technology probe)：透過簡易的 AI 對話代理人設計，讓參與者親身體會 AI 在溝通流程中的介入，激發對 AI 角色的反思 
- RQ2. 在非同步溝通情境中，AI 協調跨領域團隊成員差異的過程，存在哪些設計機會與挑戰？
  - 共創工作坊 (Co-design workshop)：讓參與者與研究者共同參與詮釋，並將探針引發的反思轉化為未來的設計可能

### 科技探針設計
- 形式：在 Discord 群組裡的 AI chatbot，非權威性、有點轉不過來但很努力的夥伴
| 邊界類型 | 實時偵測團隊張力 | 協助個別成員外顯觀點 | 促進團隊成員換位思考 |
|---|---|---|---|
| 語意邊界 | 相同詞彙因專業背景不同有不同解讀（Carlile, 2004） | 私訊個別成員，引導講出對某個有歧義主題的解讀 | 匿名摘要同一主題的不同解讀，引導對齊最終解讀 |
| 語用邊界 | 不同角色之間的利益衝突（Carlile, 2004） | 私訊個別成員，引導講出堅持的原因與不能妥協的底線 | 摘要不同視角對僵持主題的解讀，並試探性提供中間方案 |
|
- 共同情境：三位不同領域成員（設計／商業／技術）正在進行一場商業競賽，討論下一階段的資源分配，但目前討論有點卡住。
- 任務: 將 10 點分配到以下三個方向 (A) 修復核心功能缺陷；(B) 打磨簡報故事線；(C) 進行使用者訪談與流程設計
- 目標: 在 AI 的協助下，透過 Discord 討論達成共識，完成點數分配。
- 角色:
  - 技術人: 重視系統功能開發、主張優先投入任務 A
  - 商業人: 重視商業價值與敘事、主張優先投入任務 B
  - 設計人: 重視使用者研究、主張優先投入任務 C

流程圖位置: figures/科技探針.svg

### 共創工作坊
基於 AI prototype 的實際介入經驗，探討 AI 協調隱性期待時的角色感知，以及可接受的介入方式
- 設計原則:
  - 不以單一共識為目標
  - 先外顯差異，再討論解法
  - 建立在 AI prototype 的實際經驗上
  - 先個人，後團體
  - 聚焦 AI 角色感知與介入邊界
- 流程:
  1. 回顧剛剛的 AI 介入與團隊互動
  2. 復盤隱性期待如何出現
  3. 討論 AI 在你眼中的角色
  4. 提出 AI prototype 的改進方向
  5. 透過同儕回饋整理機會與顧慮
  -> 喜歡的地方/想 add on 的點/有疑惑的地方

流程圖位置: figures/共創工作坊.svg




 











 

























