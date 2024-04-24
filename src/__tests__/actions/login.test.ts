import { handleLogin } from "../../actions/login";
import * as services from "../../services/login";
import * as cookies from "../../lib/cookies";
import * as navigation from "next/navigation";

jest.mock("../../services/login", () => ({
  login: jest.fn(),
}));

jest.mock("../../lib/cookies", () => ({
  setToken: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

const emailMock = "example@example.com";
const passwordMock = "12345678";

const loginResponseMock = {
  token: "token",
  token_expires: new Date().toString(),
} as any;

describe("Login Action", () => {
  let data: FormData = new FormData();
  beforeEach(() => {
    data.append("email", emailMock);
    data.append("password", passwordMock);
  });
  it("it should call login service", async () => {
    jest.spyOn(services, "login").mockResolvedValue(loginResponseMock);
    await handleLogin(data);
    expect(services.login).toHaveBeenCalledWith({
      email: emailMock,
      password: passwordMock,
    });
  });

  it("it should set token after login", async () => {
    jest.spyOn(services, "login").mockResolvedValue(loginResponseMock);
    await handleLogin(data);
    expect(cookies.setToken).toHaveBeenCalledWith("token", expect.any(Date));
  });

  it("it should redirect to dashboard after login", async () => {
    jest.spyOn(services, "login").mockResolvedValue(loginResponseMock);
    await handleLogin(data);
    expect(navigation.redirect).toHaveBeenCalledWith("/dashboard");
  });

  it("it should throw error if login fails", async () => {
    jest.spyOn(services, "login").mockRejectedValue(new Error("Login failed"));
    await expect(handleLogin(data)).rejects.toThrow("Login failed");
  });

  it("it should throw error if login schema fails", async () => {
    await expect(handleLogin(new FormData())).rejects.toThrow();
  });
});
