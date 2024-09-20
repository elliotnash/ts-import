import { TestModelType, testModelFunction } from "~/models";

export type { TestModelType };
export { testModelFunction };

export type TestIndexType = {
    id: string;
    name: string;
}

export function testIndexFunction() {
    console.log("Called testIndexFunction");
}
