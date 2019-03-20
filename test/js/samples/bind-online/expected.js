/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent as SvelteComponent_1,
	add_render_callback,
	init,
	listen,
	noop,
	run_all,
	safe_not_equal
} from "svelte/internal";

function create_fragment(ctx) {
	var dispose;

	add_render_callback(ctx.onlinestatuschanged);

	return {
		c() {
			dispose = [
				listen(window, "online", ctx.onlinestatuschanged),
				listen(window, "offline", ctx.onlinestatuschanged)
			];
		},

		m: noop,
		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let online;

	function onlinestatuschanged() {
		online = navigator.onLine; $$invalidate('online', online);
	}

	return { online, onlinestatuschanged };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default SvelteComponent;