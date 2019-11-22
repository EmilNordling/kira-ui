export declare type Observable<T> = {
    [key in keyof T]: any;
};
export declare function observable<T>(obj: T): Observable<T>;
