const app = getApp();

Page({
	data: {
		url: null
	},
	onLoad: function (options) {
		const random = Math.floor(Math.random() * 10000);
		console.log('小程序页面通过code获取最新token', random);
		let url = decodeURIComponent(options.url) || '';
		url = url.replace('?', `?token=${random}&`);
		if (!url) {
			throw new Error('url 参数缺失！');
		}
		this.setData({url});
	},
	bm:function (params) {
		console.log('bm', params);
	}
});