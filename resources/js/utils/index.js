export default {
    install: function(Vue) {
        Vue.prototype.$utils = {
			asset(path) {
				var base_path = window._asset || '';
				return base_path + path;
			},
			getDate(date = null) {
                let result;
                if (date)
                    result = new Date(date)
                        .toLocaleString("fr-Fr")
                        .split(" ")[0];
                else result = null;
                if (result && result[result.length - 1] === ",")
                    result = result.slice(0, result.length - 1);
                return result;
            },
        };
    }
};
