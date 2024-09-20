import { TestModelType, TestIndexType, testModelFunction, testIndexFunction } from "@repo/models";

// This type is resolving to any because it cannot resolve the path alias in `index.ts`
const testModelType: TestModelType = {}
// This type works correctly because it never uses a path alias
const testIndexType: TestIndexType = {}

console.log("Hello World");

// No problem running both functions - ie path alias in `index.ts` is resolved correctly in runtime
testModelFunction();
testIndexFunction();