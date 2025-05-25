import { parallel, watch } from 'gulp';

// Pull in each task
import sass from './gulp-tasks/sass.js';

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
	watch('./src/scss/**/*.scss', { ignoreInitial: true }, sass);
};

// The default (if someone just runs `gulp`) is to run each task in parallel
export default parallel(sass);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
export { watcher as watch };