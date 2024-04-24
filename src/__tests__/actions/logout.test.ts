import { handleLogout } from "../../actions/logout";
import * as cookies from "../../lib/cookies";
import * as navigation from "next/navigation";

jest.mock("../../lib/cookies", () => ({
  deleteToken: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("Logout Action", () => {
  it("it should delete token from cookies and redirect to login", async () => {
    await handleLogout();
    expect(cookies.deleteToken).toHaveBeenCalled();
    expect(navigation.redirect).toHaveBeenCalledWith("/login");
  });
});
