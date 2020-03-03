describe("@esm-bundle/oidc-client", () => {
  it("can load the esm bundle without dying", () => {
    return import("../esm/index.js");
  });
});
