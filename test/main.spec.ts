import { dayjs } from "../src/dayjs/index";

test("version is 0.0.1?", () => {
  expect(dayjs()).toBe('dayjs');
});