import { stripHTML, removeUnicode, toSlug, truncateWords, formatMoney } from "@/utils/utils";

describe("Utils", () => {
  const html = '<div class="font-medium">Nguyễn Thị Hoài Thuyên Thuyên</div>';

  it("stripHTML with html", () => {
    const removeHTML = stripHTML(html);
    expect(removeHTML).not.toMatch(/<[^>]+>/g);
  });

  it("removeUnicode with html", () => {
    const result = removeUnicode(html);
    expect(result).toMatch("Nguyen Thi Hoai Thuyen Thuyen");
  });

  it("toSlug with html", () => {
    const result = toSlug(html);
    expect(result).toMatch("nguyen-thi-hoai-thuyen-thuyen");
  });

  it("truncateWords with html", () => {
    const result = truncateWords(html, 3);
    expect(result).toMatch("Nguyễn Thị Hoài...");
  });

  it("formatMoney with html", () => {
    const result = formatMoney(10000, "vi");
    expect(result).toMatch("10.000 ₫");
  });
});
