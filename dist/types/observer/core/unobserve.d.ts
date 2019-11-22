import { Observable } from './observable';
declare function unobserve<T>(observer: Observable<T>, key: symbol): void;
export default unobserve;
