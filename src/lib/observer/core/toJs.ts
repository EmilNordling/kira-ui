import { origin } from './internals';
import { Observable } from './observable';

export function toJs<T>(obj: Observable<T>) {
	return origin.get(obj);
}
