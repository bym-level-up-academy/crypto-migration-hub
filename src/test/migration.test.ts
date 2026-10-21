import { describe, expect, it } from "vitest";
import { content } from "@/content/crypto";

describe("Metaforma migration", () => {
  it("serves every original crypto page image independently of Metaforma", () => {
    const images = [content.heroImage, content.aboutImage, ...content.pillars.map(p => p.img), ...content.testimonials.map(t => t.img)];
    expect(images).toHaveLength(17);
    for (const image of images) {
      expect(image).toMatch(/^\/(.+\/)?images\/[\w.]+$/);
    }
    expect(JSON.stringify(content)).not.toMatch(/metaforma|scw\.cloud/);
  });
});