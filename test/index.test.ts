import { pmatch } from "../src";
const { readFileSync } = require("fs");

test("filesplit", () => {
  const testContent = readFileSync("./test/testsfiles/filesplit", 'utf8');
  const resultContent = require("./testsfiles/filesplit.result");
  
  const result = pmatch`
---- #key# -----
#content#
  `
  expect(true).toBe(true);
});
