/*! 과금없이 즐기는 연희의 RPG 대모험 © 2026 HC. All rights reserved. 무단 복제·배포 금지 */
// 시험판(beta): 인터넷 없이 실행 끔. 본 게임의 캐시를 지우지 않고, 파일을 가로채지 않는다
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
