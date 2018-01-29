const app = getApp();

Page({
	data: {
		url: null
	},
	onLoad: function (options) {

		const url = decodeURIComponent(options.url) || '';
		console.log('xxxx', url);
		if (!url) {
			throw new Error('url 参数缺失！');
		}
		this.setData({url});
	},
	bm:function (params) {
		console.log('bm', params);
	}
})