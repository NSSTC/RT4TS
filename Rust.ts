/*
 * All static members are put on interfaces with underscore-postfix.
 * Implement them with the staticImplements decorator
 */

export interface IDefault_ {
    default(): Object
}

// Helper function to implement static
// watch https://github.com/Microsoft/TypeScript/issues/14600
export function staticImplements<T>() {
    return (constructor: T) => {}
}
