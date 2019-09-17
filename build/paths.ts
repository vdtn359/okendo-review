import * as path from 'path';

const paths = {
	get root() {
		return path.resolve(__dirname, '..');
	},
	get src() {
		return path.resolve(this.root, 'src');
	},
	get dist() {
		return path.resolve(this.root, 'dist');
	},
};
export default paths;
