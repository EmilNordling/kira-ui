import { Observable } from './observable';
declare type Disposer = () => void;
export declare function observe<T>(observer: Observable<T>, listener: any): Disposer;
export {};
