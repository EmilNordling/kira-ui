import { Observable } from './observable';
import { activeObservers } from './internals';
import unobserve from './unobserve';

type Disposer = () => void;

export function observe<T>(observer: Observable<T>, listener: any): Disposer {
	const observerReactions = activeObservers.get(observer);

	const key = Symbol('iteration');

	if (observerReactions) {
		observerReactions.set(key, listener);
	}

	const disposer: Disposer = () => unobserve<T>(observer, key);

	return disposer;
}
