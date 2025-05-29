export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/Infra/CCP/1.JPG","images/Infra/CCP/2.jpg","images/Infra/CCP/3.jpg","images/Infra/CCP/4.jpg","images/Infra/CCP/5.JPG","images/Infra/CCP/IMG_0131.WEBP","images/Infra/CCP/IMG_0132.WEBP","images/Infra/CCP/IMG_0134.WEBP","images/Infra/CCP/IMG_0135.WEBP","images/Infra/CCP/IMG_0138.JPG","images/Infra/CCP/IMG_0140.JPG","images/Infra/CCP/IMG_0144.JPG","images/Infra/CCP/na.JPG","images/Infra/Folk Arts Theater/1.jpg","images/Infra/Folk Arts Theater/2.jpg","images/Infra/Folk Arts Theater/3.jpg","images/Infra/Folk Arts Theater/4.jpg","images/Infra/Folk Arts Theater/5.jpg","images/Infra/Folk Arts Theater/IMG_0111.PNG","images/Infra/Folk Arts Theater/IMG_0112.JPG","images/Infra/Folk Arts Theater/IMG_0114.PNG","images/Infra/Folk Arts Theater/IMG_0115.PNG","images/Infra/Folk Arts Theater/IMG_0116.PNG","images/Infra/Folk Arts Theater/IMG_0119.JPG","images/Infra/Folk Arts Theater/IMG_0120.JPG","images/Infra/Folk Arts Theater/IMG_0121.JPG","images/Infra/Folk Arts Theater/IMG_0122.JPG","images/Infra/Folk Arts Theater/IMG_0123.JPG","images/Infra/Folk Arts Theater/IMG_0124.JPG","images/Infra/Manila Film Center/1.jpg","images/Infra/Manila Film Center/2.jpg","images/Infra/Manila Film Center/3.jpg","images/Infra/Manila Film Center/4.jpg","images/Infra/Manila Film Center/5.jpg","images/Infra/PHILCITE/1.png","images/Infra/PHILCITE/2.png","images/Infra/PHILCITE/3.png","images/Infra/PICC/1.jpg","images/Infra/PICC/2.jpg","images/Infra/PICC/3.jpg","images/Infra/PICC/4.jpg","images/Infra/PICC/5.jpg","images/Infra/Tahanang Filipino (Coconut Palace)/1.jpg","images/Infra/Tahanang Filipino (Coconut Palace)/2.jpg","images/Infra/Tahanang Filipino (Coconut Palace)/3.jpg","images/Infra/Tahanang Filipino (Coconut Palace)/4.png","images/Infra/Tahanang Filipino (Coconut Palace)/5.jpg","images/Logo/black.png","images/Logo/white.png","images/Logo/yellow.png","images/Reviewer/Anonymous.jpg","images/Reviewer/Imelda.jpg","images/Reviewer/Polites.jpg","images/Team/Dequilla.jpg","images/Team/Frongoso.jpg","images/Team/Gelangre.jpeg","images/Team/Reyes.jpg"]),
	mimeTypes: {".png":"image/png",".JPG":"image/jpeg",".jpg":"image/jpeg",".WEBP":"image/webp",".PNG":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.vSb3weO8.js",app:"_app/immutable/entry/app.f25rIvSc.js",imports:["_app/immutable/entry/start.vSb3weO8.js","_app/immutable/chunks/jU95EpkV.js","_app/immutable/chunks/DdlUwn54.js","_app/immutable/entry/app.f25rIvSc.js","_app/immutable/chunks/DdlUwn54.js","_app/immutable/chunks/Yvd6Eufi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/infrastructure",
				pattern: /^\/infrastructure\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/infrastructure/[slug]",
				pattern: /^\/infrastructure\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
