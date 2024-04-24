import { handleRegister } from "../../actions/register";
import * as services from "../../services/register";
import * as navigation from "next/navigation";

jest.mock("../../services/register", () => ({
  register: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

const firstnameMock = "John";
const lastnameMock = "Doe";
const emailMock = "example@example.com";
const passwordMock = "12345678";

const registerResponseMock = {
  register: {
    token: { token: "token" },
  },
} as any;

describe("Register Action", () => {
  let data: FormData = new FormData();

  beforeEach(() => {
    data.append("firstname", firstnameMock);
    data.append("lastname", lastnameMock);
    data.append("email", emailMock);
    data.append("password", passwordMock);
    data.append("password_confirmation", passwordMock);
  });

  it("it should call register service", async () => {
    jest.spyOn(services, "register").mockResolvedValue(registerResponseMock);
    await handleRegister(data);
    expect(services.register).toHaveBeenCalledWith({
      firstname: firstnameMock,
      lastname: lastnameMock,
      email: emailMock,
      password: passwordMock,
      password_confirmation: passwordMock,
    });
  });

  it("it should redirect to login after register", async () => {
    jest.spyOn(services, "register").mockResolvedValue(registerResponseMock);
    await handleRegister(data);
    expect(navigation.redirect).toHaveBeenCalledWith("/login");
  });

  it("it should throw error if register fails", async () => {
    jest
      .spyOn(services, "register")
      .mockRejectedValue(new Error("Register failed"));
    await expect(handleRegister(data)).rejects.toThrow("Register failed");
  });

  it("it should throw error if register schema fails", async () => {
    await expect(handleRegister(new FormData())).rejects.toThrow();
  });

  it("it should throw error if password and password confirmation do not match", async () => {
    data.set("password_confirmation", "12345679");
    await expect(handleRegister(data)).rejects.toThrow(
      "Password and password confirmation do not match"
    );
  });
});
