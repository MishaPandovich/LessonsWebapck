export default class AppService {
	constructor(text) {
		this.text = text;
		this.log();
	}

	log() {
		console.log('[App service]', this.text);
	}
}