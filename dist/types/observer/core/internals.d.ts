import { Observable } from './observable';
export declare type ReactionFn = () => void;
declare const origin: WeakMap<Observable<Object>, Object>;
declare const activeObservers: WeakMap<Observable<Object>, Map<string | number | symbol, any>>;
declare function registerObserver<T>(obj: Observable<T>): void;
export { origin, activeObservers, registerObserver };
