export function validateEqual(a, b) {
    if (a !== b) {
        throw new Error(`Validation failed: ${a} !== ${b}`);
    }
}