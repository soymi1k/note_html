class Item {
  constructor(
    납품처명,
    품명,
    수량,
    원산지,
    배송일자,
    상품코드,
    업체명,
    특이사항
  ) {
    this.납품처명 = 납품처명;
    this.품명 = 품명;
    this.수량 = 수량;
    this.원산지 = 원산지;
    this.배송일자 = 배송일자;
    this.상품코드 = 상품코드;
    this.업체명 = 업체명;
    this.특이사항 = 특이사항;
  }
}
const createSB = new Item(
  "설빙(강남역점)",
  "맥심 커피믹스 오리지널 500g",
  "12",
  "국내산",
  Date(),
  100485,
  "(주)웨이브링크",
  1111
);
let txt = "";
for (let x in createSB) {
  txt += createSB[x] + "<br>";
}

document.getElementById("print").innerHTML = txt;
let list2 = "";
const list = [
  "납 품 처 명",
  "품 명",
  "수 량",
  "원 산 지",
  "배 송 일 자",
  "상 품 코 드",
  "업 체 명",
  "특 이 사 항",
];
const arraytotxt = list.toString();

for (let x in list) {
  list2 += list[x] + ":" + "<br>";
}
document.getElementById("print2").innerHTML = list2;
